'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export async function createUser(formData) {
    try {
        const name = formData.get("name")
        const email = formData.get("email")
        const occupation = formData.get("occupation")
        const avatar = formData.get("avatar")
        const age = Number(formData.get("age"))

        if (!name || !email || !occupation || !age) return;


        let user = {
            name,
            email,
            occupation,
            avatar,
            age
        }

        console.log("user info: ", user)

        await prisma.user.create({ data: user })

        revalidatePath('/users')
    } catch (error) {
        console.error(error)

        return {
            success: false,
            message: 'Failed to create user'
        }
    }

}

export async function editUser() {

}

export async function deleteUser(userId) {
    try {
        if (!userId) {
            return {
                success: false,
                message: "User id has not been provided"
            };
        }

        const deletedUser = await prisma.user.delete({
            where: { id: userId }
        })

        console.log('Deleted user:', deletedUser)
    } catch (error) {
        console.error(error)

        return {
            success: false,
            message: 'Failed to delete user'
        }
    }
}




