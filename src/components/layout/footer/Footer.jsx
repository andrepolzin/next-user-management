import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="flex h-20 items-center justify-center border-t border-slate-800 bg-slate-950/95 px-4 text-xs text-slate-500">
            <Link href={"/"} className="hover:text-cyan-300 transition-colors">
                <p>
                    User Management &copy; {new Date().getFullYear()}
                </p>
            </Link>
        </footer>
    )
}

