import React, { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import { Smile } from "lucide-react";
import ColourPicker from "./ColourPicker";
import { UpgradeStorageValueContext } from "@/context/UpgradeStorageValueContext";

export default function BackgroundController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [rounded, setRounded] = useState(storageValue?.bgRounded || 0);
  const [padding, setPadding] = useState(storageValue?.bgPading || 40);
  const [color, setColor] = useState(storageValue?.bgColor || "#000");

  const { updateStorage, setUpdateStorage } = useContext(
    UpgradeStorageValueContext
  );

  useEffect(() => {
    const upgratedValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPading: padding,
      bgColor: color,
    };

    localStorage.setItem("value", JSON.stringify(upgratedValue));
    setUpdateStorage(upgratedValue);
  }, [rounded, color, padding]);
  return (
    <div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Rounded <span>{rounded}px</span>
        </label>
        <Slider
          className=""
          defaultValue={[rounded]}
          max={512}
          step={1}
          onValueChange={(event) => setRounded(event[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Padding <span>{padding}px</span>
        </label>
        <Slider
          className=""
          defaultValue={[padding]}
          max={512}
          step={1}
          onValueChange={(event) => setPadding(event[0])}
        />
      </div>

      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          <span></span>
        </label>
        <ColourPicker selectedColor={(color) => setColor(color)} />
      </div>
    </div>
  );
}
