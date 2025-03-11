import { Smile } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"
import ColourPicker from './ColourPicker';


export default function IconController() {

    const [size, setSize]= useState(280);
    const [rotate, setRotate] = useState(0);
    const [color, setColor] = useState('#fff')

    const storageValue = JSON.parse(localStorage.getItem('value'));
    useEffect(()=>{
        const upgratedValue = {
            ...storageValue,
            iconSize:size,
            iconRotate:rotate,
            iconColor:color,
            icon:'Smile'
        }

        localStorage.setItem('value',JSON.stringify(upgratedValue));
    },[size, rotate, color])
  return (
    <div>
        <div>
            <label>Icon</label>
                <div className='bg-gray-200 w-[50px] h-[50px] flex justify-center items-center p-3 my-2 rounded-md cursor-pointer'>
                    <Smile/>
                </div>
            <div className='py-2'>
                <label className='p-2 flex justify-between items-center'>Size <span>{size}px</span></label>
                <Slider defaultValue={[280]} max={512} step={1} 
                    onValueChange={(event)=>setSize(event[0])}
                />
            </div>
            <div className='py-2'>
                <label className='p-2 flex justify-between items-center'>Rotate<span>{rotate}°</span></label>
                <Slider defaultValue={[0]} max={512} step={1} 
                    onValueChange={(event)=>setRotate(event[0])}
                />
            </div>
            <div className='py-2'>
                <label className='p-2 flex justify-between items-center'><span></span></label>
                <ColourPicker selectedColor={(color)=>setColor(color)}/>
            </div>

        </div>
    </div>
  )
}
