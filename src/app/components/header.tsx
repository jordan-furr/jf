import Link from 'next/link'

export function Header() {
  return (
    <div>
      <header className='header'>
        <Link href="/"><p>jordan furr</p></Link>
        <Link href="/about"><p>about</p></Link>
      </header>
    </div>
  )
}