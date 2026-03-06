"use client"

import Image from "next/image"
import { useContext } from "react";
import { ZoomContext } from "@/context/ZoomContext";

export default function ImageUI({ url, alt }) {
    const { updateImageData, toggleShow } = useContext(ZoomContext)

    const handleZoomImage = () => {
        updateImageData(url, alt)
        toggleShow()
    }

    return (
        <Image
            src={url || "https://i.pravatar.cc/150?img=60"}
            alt={alt}
            width={90}
            height={64}
            className="relative rounded-xl border border-slate-700/80 object-cover h-26 cursor-pointer"
            onClick={handleZoomImage}
        />
    )
}