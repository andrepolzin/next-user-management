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

    if (loading) return <p>Loading...</p>
    if (error) return <p className='text-red-500'>{error}</p>

    return (
        <div className='fixed inset-0 w-screen h-full bg-black/80 flex justify-center items-center'>
            <div className='bg-white w-1/2 h-[70%] rounded-lg'>

                {/* <ul>
                    {data.map(avatar => (
                        <li key={avatar.id}>

                        </li>
                    )) }
                </ul> */}
            </div>
        </div>
    )
}
