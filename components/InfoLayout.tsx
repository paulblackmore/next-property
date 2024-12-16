import React from 'react';
import { InfoDetails } from './InfoDetails';

export const InfoLayout = () => {
  return (
    <section className='mx-auto grid max-w-7xl grid-cols-1 gap-12 p-16 md:grid-cols-2'>
      <InfoDetails
        heading='For Renters'
        btnText='Browse Properties'
        btnLink='/properties'
      >
        <p>
          Find your dream rental property. Bookmark properties and contact
          owners.
        </p>
      </InfoDetails>
      <InfoDetails
        heading='For Property Owners'
        btnText='List Property'
        btnLink='/add-property'
      >
        <p>
          List your properties and reach potential tenants. Rent as an Airbnb or
          long term.
        </p>
      </InfoDetails>
    </section>
  );
};
