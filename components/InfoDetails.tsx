import React, { PropsWithChildren } from 'react';
import { StyledButton } from './Button';

type Props = { heading: string; btnText: string };

export const InfoDetails = ({
  children,
  heading,
  btnText,
}: PropsWithChildren<Props>) => {
  return (
    <div className='flex flex-col gap-6 rounded bg-slate-200 p-14'>
      <h1 className='text-2xl font-semibold'>{heading}</h1>
      {children}
      <StyledButton>{btnText}</StyledButton>
    </div>
  );
};
