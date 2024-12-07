import { joinClassNames } from '@/helpers';
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
import Image from 'next/image';

const navigation = [
  { name: 'Dashboard', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

const Navbar = () => {
  return (
    <Disclosure as='nav' className='bg-slate-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
              <span className='absolute -inset-0.5' />
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

          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={joinClassNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <button
              type='button'
              className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
            >
              <BellIcon aria-hidden='true' className='size-6' />
            </button>
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
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none'
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none'
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none'
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className='sm:hidden'>
        <div className='absolute w-full space-y-1 bg-slate-800 px-2 pb-3 pt-2'>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as='a'
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={joinClassNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;