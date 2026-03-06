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
            <Image src={imageUrl} alt={imageAlt} width={1000} height={1000} onClick={toggleShow} className="cursor-pointer max-w-full max-h-full object-contain" />
        </div>
    )
}