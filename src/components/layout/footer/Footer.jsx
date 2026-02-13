import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="flex items-center justify-center h-24 bg-slate-700 ">
            <Link href={"/"}><p>User Management @ {new Date().getFullYear()}</p></Link>
        </footer>
    )
}

