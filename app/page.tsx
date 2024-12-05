import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl">Hello World!</h1>
        <Link href="/properties">Properties</Link>
      </div>
    </div>
  )
}
