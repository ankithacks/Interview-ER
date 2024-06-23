"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

function Header() {
    const path=usePathname()
    useEffect(() => {
        console.log(path)
    }, [])
    
    return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Image src={'/logo.svg'} className='cursor-pointer' width={50} alt='logo header' height={50}/>
       <ul className='flex gap-6 cursor-pointer'>
            <li className={`hover:text-green-500 hover:font-bold transition ${path=='/dashboard' && 'text-primary font-bold'}`}>Dashboard</li>
            <li className={`hover:text-violet-700 hover:font-bold transition ${path=='/dashboard/questions' && 'text-primary font-bold'}`}>Questions</li>
            <li className={`hover:text-orange-600 hover:font-bold transition ${path=='/dashboard/upgrade' && 'text-primary font-bold'}`}>Upgrade</li>
            <li className={`hover:text-gray-500 hover:font-bold transition ${path=='/dashboard/how' && 'text-primary font-bold'}`}>How it works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header