import React from 'react';
import properties from '../../dummy_data/properties.json';
import { PropertyCard } from '@/components/PropertyCard';
import { Property } from '@/types';

const PropertiesPage = () => {
  return (
    <section>
      {properties.length ? (
        <div className='grid-col-1 container m-auto grid gap-6 px-4 py-4 md:grid-cols-2 lg:grid-cols-3'>
          {properties.map((property: Property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      ) : (
        <div className='flex h-[calc(100vh-7rem)] items-center justify-center'>
          <h3 className='text-xl font-semibold'>No properties found</h3>
        </div>
      )}
    </section>
  );
};

export default PropertiesPage;
