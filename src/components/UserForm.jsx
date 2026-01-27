'use client'

import { createUser } from "@/actions/userActions"
import Image from "next/image"
import AvatarModal from "@/components/AvatarModal"
import { useState } from "react"

export const UserForm = () => {
    const [show, setShow] = useState(false)

    return (
        <form
            action={createUser}
            className="flex flex-col items-center bg-cyan-800 p-10 rounded-md h-[30%] gap-4"
        >
            <h1>Add User</h1>
            <div className="flex flex-col gap-2">
                <Image src="https://i.pravatar.cc/300?image=60" alt='default avatar' width={100} height={200} className="rounded-md" />
                <button onClick={() => setShow(true)} className="text-sm cursor-pointer hover:bg-blue-400 p-1 rounded-md">Pick your avatar</button>
            </div>
            <input type="text" name="name" placeholder="Type your name" className="border-2 rounded-md p-2" />
            <input type="email" name="email" placeholder="Type your e-mail" className="border-2 rounded-md p-2" />
            <input type="text" name="occupation" placeholder="Type your occupation" className="border-2 rounded-md p-2" />
            <input type="text" name="age" placeholder="Type your age" className="border-2 rounded-md p-2" />

            <button className="p-1 border-2 rounded-md cursor-pointer w-16 hover:bg-blue-400 ">Create</button>
            {show && <AvatarModal />}
        </form>
    )
}