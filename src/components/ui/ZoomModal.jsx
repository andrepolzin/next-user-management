"use client"
import Image from "next/image";
import { useContext } from "react";
import { ZoomContext } from "@/context/ZoomContext";

export default function ZoomModal() {
    const { show, imageUrl, imageAlt, toggleShow } = useContext(ZoomContext)
    
    if (!show) return null
    if (!imageUrl || !imageAlt) return null
    
    return (

        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
            <Image src={imageUrl} alt={imageAlt} width={500} height={500} onClick={toggleShow} className="cursor-pointer w-[50%] h-[50%] object-contain" />
        </div>
    )
}