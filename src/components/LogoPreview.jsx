import { UpgradeStorageValueContext } from "@/context/UpgradeStorageValueContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

const BASE_URL = "https://logoexpress.tubeguruji.com";
export default function LogoPreview({ downloadLogo }) {
  const [storageValue, setStorageValue] = useState({});
  const { updateStorage, setUpdateStorage } = useContext(
    UpgradeStorageValueContext
  );

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadLogo) {
      downloadPngLogo();
    }
  }, [downloadLogo]);

  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");

    html2canvas(downloadLogoDiv, {
      backgroundColor: null
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "Logo_Maker.png";
      downloadLink.click();
    });
  };

  const Icon = ({ name, color, size, rotate }) => {
    const LucideIcon = icons[name];
    console.log(name, color, size);

    if (LucideIcon) {
      console.log("Ache");

      return (
        <LucideIcon
          color={color}
          size={size}
          style={{
            transform: `rotate(${rotate}deg)`,
          }}
        />
      );
    }
    return;
  };

  return (
    <div className="flex h-screen justify-center items-center ">
      <div
        className="h-[460px] w-[460px] bg-gray-200 outline-dotted outline-gray-300"
        style={{
          padding: storageValue?.bgPading,
        }}
      >
        <div
          id="downloadLogoDiv"
          className="h-full w-full flex justify-center items-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          {storageValue?.icon?.includes(".png") ? (
            <img
              src={`/png/${storageValue.icon}`}
              style={{
                height: storageValue.iconSize,
                width: storageValue.iconSize,
              }}
            />
          ) : (
            <Icon
              name={storageValue?.icon}
              color={storageValue?.iconColor}
              size={storageValue?.iconSize}
              rotate={storageValue?.iconRotate}
            />
          )}
        </div>
      </div>
    </div>
  );
}
