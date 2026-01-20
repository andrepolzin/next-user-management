import Link from 'next/link'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-5 h-24 bg-slate-700'>
            <Link href={"/"}><h1 className='text-2xl font-bold hover:bg-slate-500 p-2 rounded-md'>User Management</h1></Link>
            <nav className='flex gap-2.5'>
                <Link href={"/"} className='hover:bg-slate-500 p-2 rounded-md'>Home</Link>
                <Link href={"/users"} className='hover:bg-slate-500 p-2 rounded-md'>Users</Link>
            </nav>

        </header>
    )
}

export default Header