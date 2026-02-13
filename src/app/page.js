import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center gap-10 items-center bg-zinc-50 text-black">


      <div className="flex">
        <Image src={"https://i.pravatar.cc/300?image=60"} alt="user image" width={300} height={300} className='rounded-md mb-2' />

      </div>
      <div className="flex flex-col gap-5 lg:w-130 text-justify">
        <h1 className="text-center">User Management</h1>
        <p>
          This project is a User Management application built with Next.js as a way to practice real-world
          full-stack development. It covers common features like creating, listing, updating, and deleting users,
          helping demonstrate a solid understanding of how frontend and backend work together.
        </p>
        <p>
          The backend is handled with Prisma and a PostgreSQL database, allowing structured and type-safe data handling.
          Using Prisma helped me understand database modeling, migrations, and how to interact with the database through
          server-side API routes in Next.js, instead of exposing database logic directly to the client.
        </p>
        <p>
          On the frontend, I used Tailwind CSS to build a clean and responsive interface. This project helped me improve skills with
          component-based UI, client-side data fetching, and basic application structure, making it a great example of a full-stack project.
        </p>
        <p className="flex justify-center ">
          <Link href={"/users"} className="border w-fit p-1 rounded-md bg-cyan-800 text-white hover:bg-blue-400 hover:scale-110 duration-400">Add a user</Link>
        </p>
      </div>

    </div>
  );
}
