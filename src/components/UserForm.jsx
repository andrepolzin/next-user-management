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
        setData({ ...data, name: value })
    }

    const handleEditUser = async () => {
        try {

            if (user.name === data.name && user.email === data.email && user.occupation === data.occupation && user.age === data.age) {
                setError("No changes to update")
                return
            }

            const updatedUser = await editUser()

        } catch (error) {
            console.error(error)
            throw error
        }


    }

    return (
        <form
            action={isEditing ? handleEditUser : createUser}
            className="flex flex-col items-center bg-cyan-800 p-10 h-fit gap-4 rounded-md"
        >
            <h1>{isEditing ? 'Edit User' : 'Add User'}</h1>
            <div className="flex flex-col gap-2">
                <Image src="https://i.pravatar.cc/300?image=60" alt='default avatar' width={100} height={200} className="rounded-md" />
                <button onClick={() => setShow(true)} className="text-sm cursor-pointer hover:bg-blue-400 p-1 rounded-md">Pick your avatar</button>
            </div>
            <input type="text" name="name" placeholder="Type your name" value={data.name} onChange={handleChange} className="border-2 rounded-md p-2" />
            <input type="email" name="email" placeholder="Type your e-mail" value={data.email} onChange={handleChange} className="border-2 rounded-md p-2" />
            <input type="text" name="occupation" placeholder="Type your occupation" value={data.occupation} onChange={handleChange} className="border-2 rounded-md p-2" />
            <input type="text" name="age" placeholder="Type your age" value={data.age} onChange={handleChange} className="border-2 rounded-md p-2" />

            <button className="p-1 border-2 rounded-md cursor-pointer w-16 hover:bg-blue-400 ">{isEditing ? "Edit" : "Create"}</button>
            {error && <p className="text-red-500">{error}</p>}
            {show && <AvatarModal />}
        </form>
    )
}