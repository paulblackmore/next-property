import { Hero } from '@/components/Hero';
import { InfoLayout } from '@/components/InfoLayout';

export default function Home() {
  return (
    <div className='h-[calc(100vh-4rem)]'>
      <Hero />
      <InfoLayout />
    </div>
  );
}
