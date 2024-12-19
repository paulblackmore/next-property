import React, { PropsWithChildren } from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
  image: StaticImageData | string;
};

export const Hero = ({ children, image }: PropsWithChildren<Props>) => {
  return (
    <section className='relative h-96'>
      <Image
        fill
        src={image}
        alt='hero image'
        className='object-cover'
        sizes='100vw'
      />
      <div className='absolute flex h-96 w-full flex-col items-center justify-center p-12 text-white'>
        {children}
      </div>
    </section>
  );
};
