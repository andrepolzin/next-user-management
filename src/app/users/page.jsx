

import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import { UserForm } from '@/components/UserForm'
import { deleteUser } from "@/actions/userActions"
import UserActions from "@/components/ui/userActions"

export default async function Users() {
    const users = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' }
    })

    // console.log("users at page.jsx: ", users)

    const handleDeleteUser = async (userId) => {
        "use server"
        try {
            const deletedUser = await deleteUser(userId)
        } catch (error) {
            throw error
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 px-4 py-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row">
                {/* Form card */}
                <div className="w-full lg:w-2/5">
                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-900/30 backdrop-blur">
                        <h2 className="mb-4 text-lg font-semibold text-slate-50">
                            Create User
                        </h2>
                        <p className="mb-6 text-sm text-slate-400">
                            Manage users quickly with a simple form and instant feedback. All data is persisted in PostgreSQL
                            through Prisma.
                        </p>
                        <UserForm />
                    </div>
                </div>

                {/* Users list */}
                <div className="w-full lg:w-3/5">
                    <div className="mb-4 flex items-center justify-between gap-2">
                        <div>
                            <h2 className="text-lg font-semibold text-slate-50">Registered users</h2>
                            <p className="text-xs text-slate-400">
                                {users.length === 0
                                    ? "No users created yet. Start by adding one on the left."
                                    : `Showing ${users.length} user${users.length > 1 ? "s" : ""}.`}
                            </p>
                        </div>
                    </div>

                    <ul className="grid gap-4 sm:grid-cols-2">
                        {users.map((user) => (
                            <li
                                key={user.id}
                                className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg shadow-slate-950/60 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-500/70 hover:shadow-cyan-900/60"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="relative">
                                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-cyan-500/40 via-sky-400/10 to-blue-500/40 opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-100" />
                                        <Image
                                            src={"https://i.pravatar.cc/150?img=60"}
                                            alt={user.name}
                                            width={64}
                                            height={64}
                                            className="relative rounded-xl border border-slate-700/80 object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-slate-50">{user.name}</p>
                                        <p className="mt-0.5 text-xs text-slate-400">
                                            {user.occupation || "No occupation defined"}
                                        </p>
                                        <p className="mt-2 text-xs text-slate-400">
                                            Age:{" "}
                                            <span className="font-medium text-slate-100">
                                                {user.age ?? "—"}
                                            </span>
                                        </p>
                                        <p className="mt-1 break-all text-xs text-slate-300">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-between">
                                    <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-300">
                                        User card
                                    </span>
                                    <UserActions handleDeleteUser={handleDeleteUser} id={user.id} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}