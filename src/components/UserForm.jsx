'use client'

import { createUser, editUser } from "@/actions/userActions"
import { useState } from "react"
import { toast } from "sonner"
import { isRedirectError } from "next/dist/client/components/redirect-error"
import ImageUI from "./ui/ImageUI"

export const UserForm = ({ isEditing, user }) => {
    const [data, setData] = useState({ name: user?.name || "", email: user?.email || "", occupation: user?.occupation || "", age: user?.age || "", avatar: user?.avatar || "" })
    const [error, setError] = useState("")

    const handleChange = (event) => {
        const { name, value } = event.target
        setData(prev => ({ ...prev, [name]: value }))
    }

    const handleValidationData = () => {
        let isValid = true;

        if (Number(data.age) > 150) {
            isValid = false
            toast.warning("Age must be less than 150")
        } else if (data.name.length > 30) {
            isValid = false;
            toast.warning("The name is too long")
        }

        return isValid;

    }

    const handleEditUser = async (formData) => {
        try {

            if (!handleValidationData()) return

            if (user.name === data.name && user.email === data.email && user.occupation === data.occupation && user.age === data.age) {
                setError("No changes to update")
                setTimeout(() => setError(""), 5000)
                return
            }

            const updatedUser = await editUser(formData)
            console.log(updatedUser)
            // if (updatedUser.success) 

        } catch (error) {
            if (isRedirectError) {
                toast.success("User has been updated")
                return
            }
            console.log(error)
            toast.warning("Failed to update user, try again!")
            throw error
        }
    }

    const handleCreateUser = async (formData) => {

        if (!handleValidationData()) return

        const createdUser = await createUser(formData)
        console.log(createdUser)
        if (!createdUser.success) {
            toast.warning(createdUser.message)
        } else {
            toast.success(createdUser.message)
            setData({ name: "", email: "", occupation: "", age: "" })
        }
    }

    return (
        <form
            action={isEditing ? handleEditUser : handleCreateUser}
            className="flex flex-col gap-4"
        >
            <div className="flex items-center justify-between gap-3">
                <h1 className="text-lg font-semibold text-slate-50">
                    {isEditing ? 'Edit user' : ''}
                </h1>
                {error && (
                    <p className="text-xs font-medium text-red-400">
                        {error}
                    </p>
                )}
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                <ImageUI alt={data.name} url={data.avatar} />
                <div className="flex flex-col gap-1">
                    <p className="text-xs font-medium text-slate-100">
                        Auto-generated avatar
                    </p>
                    <p className="text-[11px] text-slate-400">
                        Avatar is generated from the user name. You can later add a custom gallery.
                    </p>
                    <input type="url" name="avatar" value={data.avatar} onChange={handleChange} className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" />
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

        </form>
    )
}