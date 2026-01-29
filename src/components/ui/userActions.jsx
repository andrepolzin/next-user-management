"use client"
import { Trash2, SquarePen } from "lucide-react"


export default function UserActions({ handleDeleteUser, id }) {


    return (
        <div className="flex mt-4 gap-2">
            <SquarePen size={20} />
            <Trash2 size={20} onClick={() => handleDeleteUser(id)} className='cursor-pointer' />
        </div>

    )
}
