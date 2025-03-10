import { Image, PencilRuler, Shield } from 'lucide-react'
import React, { useState } from 'react'

export default function SideNav({setSelectedIndex}) {

    const menuList = [
        {
            id:1,
            name: 'Icon',
            icon: PencilRuler
        },
        {
            id:2,
            name: 'Background',
            icon: Image
        },
        {
            id:3,
            name: 'Upgrade',
            icon: Shield
        }
    ]

    const [activeIndex, setActiveIndex]=useState(0);
  return (
    <div className='border shadow-sm h-screen'>
        <div className=''>
            {menuList.map((menu,index)=>(
                <h2
                onClick={()=>{ setActiveIndex(index)
                    setSelectedIndex(index);
                }}
                 key={index} 
                 className={`p-3 mt-1 text-lg text-gray-500 cursor-pointer hover:bg-[#a233ff] hover:text-white flex gap-2 items-center ${activeIndex===index && 'bg-[#a233ff] text-white'}`}>
                    <menu.icon/>
                    {menu.name}</h2>
            )
            )}
        </div>
    </div>
  )
}
