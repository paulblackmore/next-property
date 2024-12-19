import GoogleProvider from 'next-auth/providers/google';
import { connectDB } from '@/config/database';
import User from '@/models/User';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }: any): Promise<any> {
      await connectDB();
      const user = await User.findOne({ email: profile.email });

      if (!user) {
        await User.create({
          username: profile.name.slice(0, 20),
          email: profile.email,
          image: profile.picture,
        });
      }
      return true;
    },
    async session({ session }: any): Promise<any> {
      const user = await User.findOne({ email: session.user.email });
      session.user.id = user._id.toString();

      return session;
    },
  },
};
