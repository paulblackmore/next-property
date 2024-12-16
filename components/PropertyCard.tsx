import { numberWithCommas } from '@/helpers';
import { Property } from '@/types';
import Image from 'next/image';
import { FaBath, FaBed } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

type Props = {
  property: Property;
};

export const PropertyCard = ({ property }: Props) => {
  return (
    <div className='relative cursor-pointer rounded bg-slate-300 hover:bg-slate-200'>
      <div className='relative h-72'>
        <Image
          fill
          className='relative h-60 object-cover'
          src={`/properties/${property.images[0]}`}
          alt={property.name}
        />
        {property.rates.monthly && (
          <div className='absolute right-2 top-2 flex justify-center rounded bg-white p-2'>
            <span className='font-bold text-orange-400'>
              {`$${numberWithCommas(property.rates.monthly)}`}
            </span>
          </div>
        )}
      </div>
      <div className='relative flex h-36 flex-col justify-center gap-1 p-4'>
        <span>{property.type}</span>
        <h2 className='text-xl font-bold'>{property.name}</h2>
        <p>{property.description}</p>
      </div>
      <div className='h-30 p-4'>
        <span>Ammedities</span>
        <div className='mb-4 mt-4 flex items-center justify-between'>
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
      </div>
      <div className='mb-3 ml-3 flex items-center justify-start gap-1'>
        <FaLocationDot size={20} />
        <span className='font-bold'>{`${property.location.city}, ${property.location.state}`}</span>
      </div>
    </div>
  );
};
