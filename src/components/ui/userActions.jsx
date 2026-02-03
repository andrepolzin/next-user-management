"use client"
import { Trash2, SquarePen } from "lucide-react"
import Link from "next/link"

export default function UserActions({ handleDeleteUser, id }) {


    return (
        <div className="flex mt-4 gap-2">
            <Link href={`/users/${id}`}><SquarePen size={20} /></Link>
            <Trash2 size={20} onClick={() => handleDeleteUser(id)} className='cursor-pointer' />
        </div>

    )
}
