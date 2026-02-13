import { UserForm } from "@/components/UserForm"
import { prisma } from "@/lib/prisma"
import Link from "next/link"

export default async function EditUser({ params }) {
    const { id } = await params

    // console.log("id dentro da rota dinamica *****************************************", id)
    const user = await prisma.user.findUnique({
        where: { id }
    })
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 px-4 py-10">
            <div className="mx-auto flex max-w-3xl flex-col gap-6">
                <div>
                    <Link
                        href="/users"
                        className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-cyan-500/60 hover:bg-cyan-500/10 hover:text-cyan-200 transition-colors"
                    >
                        ← Back to users
                    </Link>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
                        Editing user
                    </p>
                    <h1 className="text-2xl md:text-3xl font-semibold">
                        Update user information
                    </h1>
                    <p className="text-sm text-slate-400">
                        Adjust any field you want and save the changes. All updates are automatically
                        synced with the database.
                    </p>
                </div>

                <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-900/30 backdrop-blur">
                    <UserForm isEditing={true} user={user} />
                </div>
            </div>
        </div>
    )
}