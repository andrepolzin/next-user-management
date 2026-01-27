"use client"
import { Trash2, SquarePen } from "lucide-react"


export default function UserActions({ id }) {
    return (
        <div>
            <SquarePen size={20} />
            <Trash2 size={20} onClick={() => handleDeleteUser(id)} className='cursor-pointer' />
        </div>

    )
}
