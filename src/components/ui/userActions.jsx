"use client"
import { Trash2, SquarePen } from "lucide-react"
import Link from "next/link"

export default function UserActions({ handleDeleteUser, id }) {


    return (
        <div className="flex mt-4 gap-2">
            <Link href={`/users/${id}`} className="cursor-pointer">
                <SquarePen size={20} className="cursor-pointer hover:scale-110 duration-400" />
            </Link>
            <Trash2 size={20} onClick={() => handleDeleteUser(id)} className='cursor-pointer hover:scale-110 duration-400' />
        </div>

    )
}
