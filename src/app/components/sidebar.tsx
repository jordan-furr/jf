import Link from 'next/link'

export function SideBar() {
    return (
        <div className='sidebar'>
            <Link href="/latest"><p className="wordLink">latest</p></Link>
            <Link href="/design"><p className="wordLink">design</p></Link>
            <Link href="/projects"><p className="wordLink">projects</p></Link>
            <Link href="/timeline"><p className="wordLink">timeline</p></Link>
            <Link href="/database"><p className="wordLink">database</p></Link>
        </div>
    )
}