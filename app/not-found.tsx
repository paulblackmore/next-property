import { StyledButton } from '@/components/Button';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='flex h-[calc(100vh-8rem)] flex-col items-center justify-center gap-4'>
      <h1 className='text-3xl font-semibold'>Page Not Found</h1>
      <p>Did you get lost?</p>
      <Link href='/'>
        <StyledButton>Go Back</StyledButton>
      </Link>
    </div>
  );
};

export default NotFoundPage;
