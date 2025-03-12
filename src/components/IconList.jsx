import React, { useEffect, useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";

const BASE_URL = "https://logoexpress.tubeguruji.com";
export default function IconList({ selectedIcon }) {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [icon, setIcon] = useState(storageValue?.icon || "Smile");
  const [openDialog, setOpenDialog] = useState(false);
  const [pngIconList, setPngIconList] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/getIcons.php`)
    .then((res) => {
      console.log(res.data);

      setPngIconList(res.data)
    });
  }, []);

  const Icon = ({ name, color, size }) => {
    const LucideIcon = icons[name];

    if (LucideIcon) {
      return <LucideIcon color={color} size={size} />;
    }
    return;
  };
  return (
    <div>
      <div>
        <label>Icon</label>
        <div
          onClick={() => {
            setOpenDialog(true);
          }}
          className="bg-gray-200 w-[50px] h-[50px] flex justify-center items-center p-3 my-2 rounded-md cursor-pointer"
        >
          {
            icon?.includes('.png') ? 
            <img src={`${BASE_URL}/png/${icon}`}  /> :
            <Icon name={icon} color={"#000"} size={20} />
          }
          
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Pick Your Favourite Icon</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="icon" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="icon">Icons</TabsTrigger>
                  <TabsTrigger value="color-icon">Color Icons</TabsTrigger>
                </TabsList>
                <TabsContent value="icon">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 overflow-auto h-[400px] gap-3 p-6">
                    {iconList.map((icon, index) => (
                      <div
                        className="border p-3 flex justify-center items-center cursor-pointer"
                        onClick={() => {
                          selectedIcon(icon);
                          setOpenDialog(false);
                          setIcon(icon);
                        }}
                      >
                        <Icon name={icon} color={"#000"} size={20} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="color-icon">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 overflow-auto h-[400px] gap-3 p-6">
                    {pngIconList?.map((colorIcon, index) => (
                      <div
                        className="border p-3 flex justify-center items-center cursor-pointer"
                        onClick={() => {
                          selectedIcon(colorIcon);
                          setOpenDialog(false);
                          setIcon(colorIcon);
                        }}
                      >
                         <img src={`${BASE_URL}/png/${colorIcon}`}/>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
