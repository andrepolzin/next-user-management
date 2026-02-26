"use client"
import { Trash2, SquarePen } from "lucide-react"
import Link from "next/link"
import { deleteUser } from "@/actions/userActions"
import { toast } from "sonner"

export default function UserActions({ id }) {

    const handleDeleteUser = async (userId) => {

        try {
            const deletedUser = await deleteUser(userId)
            if (!deletedUser.success) throw new Error(deletedUser.message)

            toast.success("User has been deleted")
        } catch (error) {
            console.log(toast)
            toast.warning("Failed to delete user, try again!")
            throw error
        }
    }

    return (
        <div className="flex mt-4 gap-2">
            <Link href={`/users/${id}`} className="cursor-pointer">
                <SquarePen size={20} className="cursor-pointer hover:scale-110 duration-400" />
            </Link>
            <Trash2 size={20} onClick={() => handleDeleteUser(id)} className='cursor-pointer hover:scale-110 duration-400' />
        </div>

    )
}
