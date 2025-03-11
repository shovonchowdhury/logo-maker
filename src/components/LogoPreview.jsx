import { UpgradeStorageValueContext } from "@/context/UpgradeStorageValueContext";
import { icons } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

export default function LogoPreview() {
  const [storageValue, setStorageValue] = useState({});
  const { updateStorage, setUpdateStorage } = useContext(
    UpgradeStorageValueContext
  );

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  const Icon = ({name,color,size})=>{
    const LucideIcon = icons[name];
    console.log(name,color,size);
    
    if(LucideIcon)
    {
        console.log("Ache")
        
        return <LucideIcon color={color} size={size}/>
    }
    return;
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="h-[430px] w-[430px] bg-gray-200 outline-dotted outline-gray-300">
        <div
          className="h-full w-full"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
            <Icon name={storageValue?.icon}
            color = {storageValue?.iconColor}
            size = {storageValue?.iconSize}
            />
        </div>
      </div>
    </div>
  );
}
