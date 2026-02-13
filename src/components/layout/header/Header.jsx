'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()

    const baseLinkClasses =
        'cursor-pointer rounded-lg px-3 py-1.5 text-sm transition-colors border'

    const homeActive = pathname === '/'
    const usersActive = pathname.startsWith('/users')

    return (
        <header className='flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950/95 px-5'>
            <Link href={"/"} className="cursor-pointer">
                <h1 className='text-lg md:text-2xl font-semibold tracking-tight text-slate-50'>
                    <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                        User Management
                    </span>
                </h1>
            </Link>
            <nav className='flex gap-2.5 text-sm'>
                <Link
                    href={"/"}
                    className={`${baseLinkClasses} ${homeActive
                        ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400'
                        : 'border-transparent text-slate-300 hover:border-slate-700 hover:bg-slate-900/80 hover:text-slate-50'
                        }`}
                >
                    Home
                </Link>
                <Link
                    href={"/users"}
                    className={`${baseLinkClasses} ${usersActive
                        ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400'
                        : 'border-transparent text-slate-300 hover:border-slate-700 hover:bg-slate-900/80 hover:text-slate-50'
                        }`}
                >
                    Users
                </Link>
            </nav>

        </header>
    )
}

export default Header