import { Properties } from './Properties';
import properties from '../dummy_data/properties.json';

export const RecentProperties = () => (
  <section className='flex flex-col items-center gap-6'>
    <h1 className='text-3xl font-bold'>Recent Properties</h1>
    <Properties properties={properties.slice(0, 3)} />
  </section>
);
