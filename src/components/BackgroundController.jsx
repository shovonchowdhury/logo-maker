import React, { useEffect, useState } from 'react'
import { Slider } from './ui/slider';
import { Smile } from 'lucide-react';
import ColourPicker from './ColourPicker';

export default function BackgroundController() {

  const [rounded, setRounded] = useState(0);
  const [padding, setPadding] = useState(40);
  const [color, setColor] = useState('#000');

  const storageValue = JSON.parse(localStorage.getItem('value'));

  useEffect(()=>{
    const upgratedValue= {
      ...storageValue,
      bgRounded: rounded,
      bgPading: padding,
      bgColor: color
    }

    localStorage.setItem('value',JSON.stringify(upgratedValue));
  })
  return (
    <div>
      
        <div className='py-2'>
                  <label className='p-2 flex justify-between items-center'>Rounded <span>{rounded}px</span></label>
                  <Slider className='' defaultValue={[0]} max={512} step={1} 
                      onValueChange={(event)=>setRounded(event[0])}
                  />
        </div>
        <div className='py-2'>
                  <label className='p-2 flex justify-between items-center'>Padding <span>{padding}px</span></label>
                  <Slider className='' defaultValue={[40]} max={512} step={1} 
                      onValueChange={(event)=>setPadding(event[0])}
                  />
        </div>

      <div className='py-2'>
                      <label className='p-2 flex justify-between items-center'><span></span></label>
                      <ColourPicker selectedColor={(color)=>setColor(color)}/>
      </div>

    </div>
  )
}
