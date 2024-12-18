import { Hero } from '@/components/Hero';
import { connectDB } from '@/config/database';
import Property from '@/models/Property';
import React from 'react';
import { PropertyDetails } from '@/components/PropertyDetails';

const PropertyPage = async ({ params }: any) => {
  const { id } = await params;
  await connectDB();
  const property = await Property.findById(id);

  return (
    <>
      <Hero image={`/properties/${property.images[0]}`}>
        <h1 className='text-4xl font-semibold'>{property.name}</h1>
      </Hero>
      <section className='container m-auto mb-10 mt-10 grid grid-flow-row-dense grid-cols-3 gap-4'>
        <PropertyDetails property={property} />
        <div className='bg-green-300 p-4'>Small</div>
      </section>
    </>
  );
};

export default PropertyPage;
