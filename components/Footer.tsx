import Link from 'next/link';

export const Footer = () => (
  <footer className='hidden bg-slate-800 md:block'>
    <div className='mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2025
        <Link href='https://flowbite.com/' className='hover:underline'>
          Property App
        </Link>
        . All Rights Reserved.
      </span>
      <ul className='mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400'>
        <li>
          <Link href='/' className='me-4 hover:underline md:me-6'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/properties' className='me-4 hover:underline md:me-6'>
            Properties
          </Link>
        </li>
        <li>
          <Link href='#' className='me-4 hover:underline md:me-6'>
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href='#' className='me-4 hover:underline md:me-6'>
            Licensing
          </Link>
        </li>
        <li>
          <Link href='#' className='hover:underline'>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </footer>
);
