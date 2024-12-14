import React, { PropsWithChildren } from 'react';
import { StyledButton } from './Button';
import Link from 'next/link';

type Props = { heading: string; btnText: string; btnLink: string };

export const InfoDetails = ({
  children,
  heading,
  btnText,
  btnLink,
}: PropsWithChildren<Props>) => {
  return (
    <div className='flex flex-col gap-6 rounded bg-slate-200 p-12'>
      <h1 className='text-2xl font-semibold'>{heading}</h1>
      {children}
      <Link href={btnLink}>
        <StyledButton>{btnText}</StyledButton>
      </Link>
    </div>
  );
};
