'use client'

import { createUser, editUser } from "@/actions/userActions"
import Image from "next/image"
import AvatarModal from "@/components/AvatarModal"
import { useState } from "react"

export const UserForm = ({ isEditing, user }) => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState({ name: user?.name || "", email: user?.email || "", occupation: user?.occupation || "", age: user?.age || "" })
    const [error, setError] = useState("")

    const handleChange = (event) => {
        const { name, value } = event.target
        setData(prev => ({ ...prev, [name]: value }))
    }

    const handleEditUser = async (formData) => {
        try {

            if (user.name === data.name && user.email === data.email && user.occupation === data.occupation && user.age === data.age) {
                setError("No changes to update")
                setTimeout(() => setError(""), 5000)
                return
            }

            const updatedUser = await editUser(formData)

            console.log(updatedUser)
            // if (updatedUser.success) 

        } catch (error) {
            console.error(error)
            throw error
        }


    }

    return (
        <form
            action={isEditing ? handleEditUser : createUser}
            className="flex flex-col gap-4"
        >
            <div className="flex items-center justify-between gap-3">
                <h1 className="text-lg font-semibold text-slate-50">
                    {isEditing ? 'Edit user' : 'Add user'}
                </h1>
                {error && (
                    <p className="text-xs font-medium text-red-400">
                        {error}
                    </p>
                )}
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                <Image
                    src={`https://api.dicebear.com/9.x/notionists/png?seed=${data.name || "Andre"}`}
                    alt='default avatar'
                    width={64}
                    height={64}
                    className="rounded-xl border border-slate-700/80 object-cover"
                />
                <div className="flex flex-col gap-1">
                    <p className="text-xs font-medium text-slate-100">
                        Auto-generated avatar
                    </p>
                    <p className="text-[11px] text-slate-400">
                        Avatar is generated from the user name. You can later add a custom gallery.
                    </p>
                    <button
                        type="button"
                        onClick={() => setShow(true)}
                        className="mt-1 inline-flex w-fit cursor-pointer items-center rounded-lg border border-cyan-500/50 bg-slate-900 px-3 py-1 text-[11px] font-medium text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 transition-colors"
                    >
                        Open avatar modal
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <input
                    type="text"
                    name="name"
                    placeholder="Type your name"
                    value={data.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Type your e-mail"
                    value={data.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
                <input
                    type="text"
                    name="occupation"
                    placeholder="Type your occupation"
                    value={data.occupation}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Type your age"
                    value={data.age}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
            </div>

            <button
                className="mt-2 inline-flex cursor-pointer items-center justify-center rounded-xl border border-cyan-500/60 bg-cyan-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-900/40 hover:bg-cyan-400 hover:border-cyan-300 hover:-translate-y-0.5 hover:shadow-cyan-800/60 active:translate-y-0 transition-all duration-150"
            >
                {isEditing ? "Save changes" : "Create user"}
            </button>

            {show && <AvatarModal />}
        </form>
    )
}