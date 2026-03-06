"use client"

import Image from "next/image"
import { useContext } from "react";
import { ZoomContext } from "@/context/ZoomContext";

export default function ImageUI({ url, alt }) {
    const { updateImageData, toggleShow } = useContext(ZoomContext)

    const handleZoomImage = () => {
        updateImageData(url || "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt || "Default avatar")
        toggleShow()
    }

    return (
        <Image
            src={url || "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt={alt}
            width={90}
            height={64}
            className="relative rounded-xl border border-slate-700/80 object-cover h-26 cursor-pointer"
            onClick={handleZoomImage}
        />
    )
}