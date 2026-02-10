import { UserForm } from "@/components/UserForm"
import { prisma } from "@/lib/prisma"

export default async function EditUser({ params }) {
    const { id } = await params

    // console.log("id dentro da rota dinamica *****************************************", id)
    const user = await prisma.user.findUnique({
        where: { id }
    })
    return (
        <div className="min-h-screen bg-cyan-800">
            <UserForm isEditing={true} user={user} />
        </div>
    )
}