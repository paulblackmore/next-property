import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaBath, FaBed } from 'react-icons/fa';
import { numberWithCommas } from '@/helpers';
import { HiCheck } from 'react-icons/hi';
import { Property } from '@/types';
import { GiCancel } from 'react-icons/gi';

type Props = {
  property: Property;
};

export const PropertyDetails = ({ property }: Props) => {
  return (
    <div className='col-span-2 grid gap-8 p-4'>
      <div className='flex items-end justify-between gap-1'>
        <div>
          <span className='text-sm uppercase'>{property.type}</span>
          <h1 className='text-2xl font-bold'>{property.name}</h1>
        </div>
        <div className='flex gap-2'>
          <FaLocationDot size={20} />
          <span>{`${property.location.street}, ${property.location.city}, ${property.location.state}, ${property.location.zipcode}`}</span>
        </div>
      </div>
      <h3 className='text-lg font-semibold'>Property Details</h3>
      <p>{property.description}</p>
      <div className='flex items-center justify-between'>
        <div className='flex gap-1'>
          <FaBed size={25} />
          <span>{`${property.beds} bed(s)`}</span>
        </div>
        <div className='flex gap-1'>
          <FaBath size={20} />
          <span>{`${property.baths} bath(s)`}</span>
        </div>
        <span>{`${numberWithCommas(property.square_feet)} sqft`}</span>
      </div>
      <h3 className='text-lg font-semibold'>Rates</h3>
      <div className='flex items-center justify-between'>
        {Object.entries(property.rates).map(([key, value]) =>
          value ? (
            <span key={key} className='capitalize'>
              {`${key} $${numberWithCommas(value)}`}
            </span>
          ) : (
            <div key={key} className='flex items-center gap-2'>
              <span className='capitalize'>{key}</span>
              <GiCancel color='red' />
            </div>
          )
        )}
      </div>
      <h3 className='text-lg font-semibold'>Amenities</h3>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        {property.amenities.map((amenity: string) => (
          <div key={amenity} className='flex items-center gap-2'>
            <HiCheck color='green' />
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
