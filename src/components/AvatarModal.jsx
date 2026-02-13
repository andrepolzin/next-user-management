'use client'
import React, { useEffect, useState } from 'react'

export default function AvatarModal() {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://i.pravatar.cc/images', {
                    mode: "no-cors"
                })

                if (!res.ok) {
                    throw new Error('Error when fetching data')
                }

                const data = await res.json()
                setData(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()

    }, [])

    console.log("Dentro de AvatarModal", data)

    if (loading) return <p className="text-sm text-slate-300">Loading...</p>
    if (error) return <p className='text-sm text-red-400'>{error}</p>

    return (
        <div className='fixed inset-0 z-50 flex h-full w-screen items-center justify-center bg-slate-950/90 backdrop-blur'>
            <div className='w-11/12 max-w-3xl h-[70%] rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl shadow-cyan-900/40'>
                <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
                    <h2 className="text-sm font-semibold text-slate-100">Choose an avatar</h2>
                    <p className="text-xs text-slate-400">
                        (placeholder modal – hook to avatar selection here)
                    </p>
                </div>
                <div className="flex h-full items-center justify-center text-sm text-slate-400">
                    Avatar gallery coming soon.
                </div>
                {/* <ul>
                    {data.map(avatar => (
                        <li key={avatar.id}>

                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    )
}
