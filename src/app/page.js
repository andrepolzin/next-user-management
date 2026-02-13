import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-cyan-900/30 p-8 md:p-10">
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-500/30 via-sky-400/10 to-blue-500/30 blur-xl" />
            <Image
              src={"https://i.pravatar.cc/300?image=60"}
              alt="user image"
              width={260}
              height={260}
              className="relative rounded-2xl border border-slate-700 shadow-lg shadow-cyan-900/40"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-6 text-justify md:text-left">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-400 mb-2">
              Full-stack practice project
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
              User Management Dashboard
            </h1>
          </div>

          <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
            This project is a User Management application built with Next.js as a way to practice real-world
            full-stack development. It covers common features like creating, listing, updating, and deleting users,
            helping demonstrate how frontend and backend work together in a modern stack.
          </p>

          <p className="text-sm md:text-base text-slate-300/90 leading-relaxed">
            The backend is handled with Prisma and PostgreSQL, enabling structured and type-safe data handling.
            It explores database modeling, migrations and server-side API routes in Next.js, instead of exposing
            database logic directly to the client.
          </p>

          <p className="text-sm md:text-base text-slate-300/90 leading-relaxed">
            On the frontend, Tailwind CSS is used to build a clean and responsive interface. This project is a solid
            example of full-stack development, combining UI components, client-side data fetching and application
            structure in a single place.
          </p>

          <div className="flex justify-center md:justify-start pt-2">
            <Link
              href={"/users"}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/60 bg-cyan-500 text-slate-950 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-cyan-900/40 hover:bg-cyan-400 hover:border-cyan-300 hover:-translate-y-0.5 hover:shadow-cyan-800/60 active:translate-y-0 transition-all duration-200"
            >
              Add a user
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
