import GoogleProvider from 'next-auth/providers/google';

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
    // Invoked on successful sign in
    async signIn(): Promise<any> {
      // connect to db
      // check user exists
      // if not, create user
      // return true to allow sign in
      //
    },
    // Modifies the session object
    async session(): Promise<any> {
      // get user from db
      // assign user id from session
      // return session
    },
  },
};
