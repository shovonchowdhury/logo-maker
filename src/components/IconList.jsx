import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { icons, Smile } from "lucide-react";
import { iconList } from "@/constants/icons";

export default function IconList({selectedIcon}) {

    const storageValue = JSON.parse(localStorage.getItem("value"));
    const [icon, setIcon]= useState(storageValue?.icon || 'Smile');
    const [openDialog , setOpenDialog] = useState(false);

    const Icon = ({name,color,size})=>{
        const LucideIcon = icons[name];
        console.log(name,color,size);
        
        if(LucideIcon)
        {
            //console.log("Ache")
            
            return <LucideIcon color={color} size={size}
            />
        }
        return;
      }
  return (
    <div>
      <div>
        <label>Icon</label>
        <div
        onClick={()=>{setOpenDialog(true)}}
        className="bg-gray-200 w-[50px] h-[50px] flex justify-center items-center p-3 my-2 rounded-md cursor-pointer">
          <Icon name={icon} color={'#000'} size={20}/>
        </div>
      </div>
      <Dialog open={openDialog}>
        
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pick Your Favourite Icon</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 overflow-auto h-[400px] gap-3 p-6">
                {iconList.map((icon,index)=>(
                    <div className="border p-3 flex justify-center items-center cursor-pointer"
                    onClick={()=>{selectedIcon(icon); setOpenDialog(false);setIcon(icon)}}>
                        <Icon name={icon} color={'#000'} size={20}/>
                    </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
