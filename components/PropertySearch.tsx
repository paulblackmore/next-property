'use client';
import React from 'react';
import { Input, Select } from '@headlessui/react';
import { StyledButton } from './Button';

export const PropertySearch = () => {
  return (
    <>
      <h1 className='text-4xl font-semibold'>Find The Perfect Rental</h1>
      <h3>Discover the perfect property tht suits your needs.</h3>
      <form className='grid w-full grid-cols-1 gap-4 p-8 md:w-1/2 lg:grid-cols-3'>
        <Input
          type='text'
          name='search-location'
          className='rounded px-4 py-2 text-sm text-black'
          placeholder='Enter location'
        />
        <Select
          name='status'
          aria-label='Property type'
          className='rounded px-4 py-2 text-sm text-black'
        >
          {/* TODO confirm property types and fix icons position */}
          <option value='active'>Active</option>
          <option value='paused'>Paused</option>
          <option value='delayed'>Delayed</option>
          <option value='canceled'>Canceled</option>
        </Select>
        <StyledButton>Search</StyledButton>
      </form>
    </>
  );
};
