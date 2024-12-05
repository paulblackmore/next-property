import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl'>Hello World!</h1>
        <Link href='/properties'>Properties</Link>
      </div>
    </div>
  );
}
