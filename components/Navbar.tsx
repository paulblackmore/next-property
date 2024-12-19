'use client';
import { PropsWithChildren, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { joinClassNames } from '@/helpers';
import { signIn, useSession, getProviders } from 'next-auth/react';
import { Session } from 'next-auth';

type LinkProps = { href: string };
type NavLinkProps = { isLoggedIn: Session | null };

export const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setAuthProvider = async () => {
      const res = await getProviders();
      setProviders(res as any);
    };
    setAuthProvider();
  }, []);

  return (
    <Disclosure as='nav' className='bg-slate-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Burger menu controls */}
            <DisclosureButton className='group relative items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
              <span className='absolute' />
              <Bars3Icon
                aria-hidden='true'
                className='block size-6 group-data-[open]:hidden'
              />
              <XMarkIcon
                aria-hidden='true'
                className='hidden size-6 group-data-[open]:block'
              />
            </DisclosureButton>
          </div>
          {/* Desktop links */}
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4 text-white'>
                <NavLinks isLoggedIn={session} />
              </div>
            </div>
          </div>
          <div className='tems-center flex justify-end'>
            {!session ? (
              providers &&
              Object.values(providers).map((provider: any) => (
                <button
                  type='button'
                  key={provider.id}
                  className='rounded border border-slate-200 bg-transparent px-4 py-2 text-xs font-semibold text-slate-200 hover:border-slate-300 hover:text-slate-300'
                  onClick={() => signIn(provider.id)}
                >
                  Login
                </button>
              ))
            ) : (
              <>
                <button
                  type='button'
                  className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  <BellIcon aria-hidden='true' className='size-6' />
                </button>
                {/* Dropdown menu */}
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <MenuButton className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                      <Image
                        alt='profile-image'
                        width={0}
                        height={0}
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        className='size-8 rounded-full'
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
                  >
                    <MenuItem>
                      <MenuLink href='#'>Your Profile</MenuLink>
                    </MenuItem>
                    <MenuItem>
                      <MenuLink href='#'>Settings</MenuLink>
                    </MenuItem>
                    <MenuItem>
                      <MenuLink href='#'>Sign out</MenuLink>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Mobile links */}
      <DisclosurePanel className='sm:hidden'>
        <div className='no-doc-scroll absolute z-30 flex h-[calc(100vh-4rem)] w-full flex-col items-center gap-10 bg-slate-800 px-2 pt-10 text-white'>
          <NavLinks isLoggedIn={session} />
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

const NavLinks = ({ isLoggedIn }: NavLinkProps) => {
  const pathname = usePathname();
  const isLinkActive = (path: string) =>
    joinClassNames(
      pathname === path
        ? 'bg-orange-400 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
      'rounded-md px-3 py-2 text-sm font-medium'
    );

  return (
    <>
      <Link href='/' className={isLinkActive('/')}>
        Home
      </Link>
      <Link href='/properties' className={isLinkActive('/properties')}>
        Properties
      </Link>
      {isLoggedIn && (
        <Link href='/add-property' className={isLinkActive('/add-property')}>
          Add Property
        </Link>
      )}
    </>
  );
};

const MenuLink = ({ children, href }: PropsWithChildren<LinkProps>) => (
  <Link
    href={href}
    className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none'
  >
    {children}
  </Link>
);
