import { Smile } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColourPicker from "./ColourPicker";
import { UpgradeStorageValueContext } from "@/context/UpgradeStorageValueContext";
import IconList from "./IconList";


export default function IconController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [size, setSize] = useState(storageValue?.iconSize || 280);
  const [rotate, setRotate] = useState(storageValue?.iconRotate || 0);
  const [color, setColor] = useState(storageValue?.iconColor || "#000");
  const { updateStorage, setUpdateStorage } = useContext(
    UpgradeStorageValueContext
  );
  const [icon, setIcon]= useState(storageValue?.icon || 'Smile');

  
  useEffect(() => {
    const upgratedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: icon,
    };

    localStorage.setItem("value", JSON.stringify(upgratedValue));
    setUpdateStorage(upgratedValue);
  }, [size, rotate, color, icon]);
  return (
    <div>
      <div>
        <IconList selectedIcon={(icon)=> setIcon(icon)}/>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Size <span>{size}px</span>
          </label>
          <Slider
            defaultValue={[size]}
            max={460}
            step={1}
            onValueChange={(event) => setSize(event[0])}
          />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Rotate<span>{rotate}°</span>
          </label>
          <Slider
            defaultValue={[rotate]}
            max={512}
            step={1}
            onValueChange={(event) => setRotate(event[0])}
          />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            <span></span>
          </label>
          <ColourPicker selectedColor={(color) => setColor(color)} />
        </div>
      </div>
    </div>
  );
}
