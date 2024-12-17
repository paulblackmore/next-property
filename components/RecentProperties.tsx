import { Properties } from './Properties';
import { connectDB } from '@/config/database';
import Property from '@/models/Property';

export const RecentProperties = async () => {
  await connectDB();
  const recentProperties = await Property.find()
    .sort({ createdAt: -1 })
    .limit(3);
  return (
    <section className='flex flex-col items-center gap-6'>
      <h1 className='text-3xl font-bold'>Recent Properties</h1>
      <Properties properties={recentProperties} />
    </section>
  );
};
