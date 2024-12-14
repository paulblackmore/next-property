'use client';
import React from 'react';
import { Input, Select } from '@headlessui/react';
import { StyledButton } from './Button';

export const Hero = () => {
  return (
    <section className='flex h-96 w-full flex-col items-center justify-center bg-slate-700 p-12 text-white'>
      <h1 className='text-4xl font-semibold'>Find The Perfect Rental</h1>
      <h3>Discover the perfect property tht suits your needs.</h3>
      <form className='flex w-full items-center justify-center gap-4 p-8 text-black'>
        <Input
          type='text'
          name='search-location'
          className='w-40 rounded px-4 py-2 text-sm'
          placeholder='Enter location'
        />
        <Select
          name='status'
          aria-label='Property type'
          className='w-40 rounded px-4 py-2 text-sm'
        >
          {/* TODO confirm property types and fix icons position */}
          <option value='active'>Active</option>
          <option value='paused'>Paused</option>
          <option value='delayed'>Delayed</option>
          <option value='canceled'>Canceled</option>
        </Select>
        <StyledButton>Search</StyledButton>
      </form>
    </section>
  );
};
