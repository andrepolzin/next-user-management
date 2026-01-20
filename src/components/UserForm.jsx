import { createUser } from "@/actions/userActions"

export const UserForm = () => {
    return (
        <form
            action={createUser}
            className="flex flex-col items-center bg-indigo-300 p-10 rounded-md h-[30%] gap-4"
        >
            <h1>Add a new user</h1>
            <input type="text" name="name" placeholder="Type your name" className="border-2 rounded-md p-2" />
            <input type="email" name="email" placeholder="Type your e-mail" className="border-2 rounded-md p-2" />
            <input type="text" name="occupation" placeholder="Type your occupation" className="border-2 rounded-md p-2" />
            <input type="text" name="age" placeholder="Type your age" className="border-2 rounded-md p-2" />

            <button className="p-1 border-2 rounded-md cursor-pointer w-16 ">Create</button>
        </form>
    )
}