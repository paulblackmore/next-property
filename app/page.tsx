import { Hero } from '@/components/Hero';
import { InfoLayout } from '@/components/InfoLayout';
import { RecentProperties } from '@/components/RecentProperties';

export default function Home() {
  return (
    <div>
      <Hero />
      <InfoLayout />
      <RecentProperties />
    </div>
  );
}
