import React, { PropsWithChildren } from 'react';
import { Button } from '@headlessui/react';

export const StyledButton = ({ children }: PropsWithChildren) => {
  return (
    <Button className='rounded bg-sky-600 px-4 py-2 text-sm text-white data-[active]:bg-sky-700 data-[hover]:bg-sky-500'>
      {children}
    </Button>
  );
};
