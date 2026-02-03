

import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import { UserForm } from '@/components/UserForm'
import { deleteUser } from "@/actions/userActions"
import UserActions from "@/components/ui/userActions"

export default async function Users() {
    const users = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' }
    })

    console.log("users at page.jsx: ", users)

    const handleDeleteUser = async (userId) => {
        "use server"
        try {
            const deletedUser = await deleteUser(userId)
        } catch (error) {
            throw error
        }
    }

    return (
        <div className="flex min-h-screen bg-zinc-50 p-7 gap-7">
            <UserForm />

            <ul className='flex text-black gap-5 w-full'>
                {users.map(user => (

                    <li key={user.id} className='bg-blue-300 p-5 h-fit rounded-lg w-[300px] '>
                        <div>
                            <Image src={"https://i.pravatar.cc/300?image=60"} alt={user.name} width={100} height={200} className='rounded-md mb-2' />
                            <p>Name: {user.name}</p>
                            <p>Age: {user.age}</p>
                            <p>Occupation: {user.occupation}</p>
                            <p>Email: {user.email}</p>
                        </div>
                        <UserActions handleDeleteUser={handleDeleteUser} id={user.id} />
                    </li>
                ))}
            </ul>

        </div>
    )
}