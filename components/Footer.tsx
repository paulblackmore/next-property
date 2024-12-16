import Link from 'next/link';

export const Footer = () => (
  <footer className='mt-5 hidden bg-slate-800 md:block'>
    <div className='mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2025 Property App. All Rights Reserved.
      </span>
      <div className='mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400'>
        <Link href='/' className='hover:underline md:me-6'>
          Home
        </Link>
        <Link href='/properties' className='hover:underline md:me-6'>
          Properties
        </Link>
        <Link href='#' className='hover:underline md:me-6'>
          Privacy Policy
        </Link>
        <Link href='#' className='hover:underline md:me-6'>
          Licensing
        </Link>
        <Link href='#' className='hover:underline'>
          Contact
        </Link>
      </div>
    </div>
  </footer>
);
