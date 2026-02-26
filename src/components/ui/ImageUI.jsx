"use client"

import Image from "next/image"
import { useState } from "react"

export default function ImageUI({ url, alt }) {
    const [show, setShow] = useState(false)



    return (

        <div className={show ? "absolute top-0 left-0 h-screen w-full bg-white" : ""}>

            <Image
                src={url || "https://i.pravatar.cc/150?img=60"}
                alt={alt}
                width={90}
                height={64}
                className={show ? "w-full h-200 cursor-pointer" : "relative rounded-xl border border-slate-700/80 object-cover h-26 cursor-pointer"}
                onClick={() => setShow(!show)}
            />
        </div>
    )
}