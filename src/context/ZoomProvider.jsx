"use client"
import { ZoomContext } from "./ZoomContext";
import { useState } from "react";

export default function ZoomProvider({ children }) {
    const [show, setShow] = useState(false)
    const [imageUrl, setImageUrl] = useState(null)
    const [imageAlt, setImageAlt] = useState(null)
    
    const toggleShow = () => setShow(!show)
    const updateImageData = (url, alt) => {
        setImageUrl(url)
        setImageAlt(alt)
    }

    return (
        <ZoomContext.Provider value={{ show, toggleShow, imageUrl, imageAlt, updateImageData }}>{children}</ZoomContext.Provider>
    )
}