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

        // console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& before findining unique email')
        const existingUser = await prisma.user.findUnique({
            where: { email: email }
        })

        if (existingUser) {
            console.log("Email is being used")
            return {
                success: false,
                message: "This e-mail is already being used"
            }
        }


        let user = {
            name,
            email,
            occupation,
            avatar,
            age
        }

        console.log("user info: ", user)
        console.log('---------------------------------------------------------------')

        await prisma.user.create({ data: user })

        revalidatePath('/users')
        return {
            success: true,
            message: "User has been successfully created!"
        }
    } catch (error) {
        console.error(error)

        return {
            success: false,
            message: 'Failed to create user!'
        }
    }

}

export async function editUser(formData) {
    try {
        const name = formData.get("name")
        const email = formData.get("email")
        const occupation = formData.get("occupation")
        const avatar = formData.get("avatar")
        const age = Number(formData.get("age"))

        if (!name || !email || !occupation || !age) return;

        const user = await prisma.user.findUnique({
            where: { email }
        })

        let updatedUserInfo = {
            name,
            email,
            occupation,
            avatar,
            age
        }

        const updatedUser = await prisma.user.update({
            where: { id: user.id },
            data: updatedUserInfo
        })

        revalidatePath("/users")

    } catch (error) {
        console.error("*****", error)
        return {
            success: false,
            message: "Failed to edit user"
        }
    }

    redirect("/users")

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
        revalidatePath('/users')
        return {
            success: true,
            message: 'User has been deleted'
        }
    } catch (error) {
        console.error(error)

        return {
            success: false,
            message: 'Failed to delete user'
        }
    }

}




