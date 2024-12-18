import { Hero } from '@/components/Hero';
import { InfoLayout } from '@/components/InfoLayout';
import { RecentProperties } from '@/components/RecentProperties';
import HERO_IMAGE from '../assets/hero-image.jpg';
import { PropertySearch } from '@/components/PropertySearch';

export default function Home() {
  return (
    <div>
      <Hero image={HERO_IMAGE}>
        <PropertySearch />
      </Hero>
      <InfoLayout />
      <RecentProperties />
    </div>
  );
}
