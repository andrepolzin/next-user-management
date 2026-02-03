import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 text-black">


      <div className="flex flex-2">
        <p>image</p>
      </div>
      <div className="flex flex-2 flex-col gap-5">
        <h1>User Management</h1>
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
        <Link href={"/users"} className="border-1 w-fit p-1 rounded-md bg-cyan-800 text-white hover:bg-blue-400">Add a user</Link>
      </div>

    </div>
  );
}
