import React from 'react';
import { InfoDetails } from './InfoDetails';

export const InfoLayout = () => {
  return (
    <section className='mx-auto grid max-w-7xl grid-cols-2 gap-12 p-16'>
      <InfoDetails heading='For Renters' btnText='Browse Properties'>
        <p>
          Find your dream rental property. Bookmark properties and contact
          owners.
        </p>
      </InfoDetails>
      <InfoDetails heading='For Owners' btnText='List Property'>
        <p>
          List your properties and reach potential tenants. Rent as an Airbnb or
          long term.
        </p>
      </InfoDetails>
    </section>
  );
};
