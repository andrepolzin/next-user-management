import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import { UserForm } from '@/components/UserForm'

export default async function Users() {
    const users = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' }
    })

    const usersTest = [
        {
            id: 1,
            avatar: 'https://i.pravatar.cc/300',
            name: 'John',
            age: 18,
            email: 'johndoe@gmail.com',
            occupation: 'Developer'
        },
        {
            id: 2,
            avatar: 'https://i.pravatar.cc/300',
            name: 'Carl',
            age: 17,
            email: 'carl@gmail.com',
            occupation: 'Developer'
        }
    ]

    return (
        <div className="flex min-h-screen bg-zinc-50 p-7 gap-7">
            <UserForm />

            <ul className='flex text-black gap-5'>
                {usersTest.map(user => (
                    <li key={user.id} className='bg-blue-300 p-5 h-fit rounded-lg '>
                        {/* <Image alt=''>{user.avatar}</Image> */}
                        <p>Name: {user.name}</p>
                        <p>Age: {user.age}</p>
                        <p>Occupation: {user.occupation}</p>
                        <p>Email: {user.email}</p>

                    </li>
                ))}
            </ul>

        </div>
    )
}