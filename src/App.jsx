import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import LogoPreview from "./components/LogoPreview";
import { UpgradeStorageValueContext } from "./context/UpgradeStorageValueContext";
import Upgrade from "./components/Upgrade";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const storageData = {
  //   iconSize: 280,
  //   iconRotate: 0,
  //   iconColor: "#fff",
  // }
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadLogo, setDownloadLogo] = useState();
  return (
    <UpgradeStorageValueContext.Provider
      value={{ updateStorage, setUpdateStorage }}
    >
      <div>
        <Header setDownloadLogo={setDownloadLogo}></Header>

        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="md:col-span-1">
            <SideNav setSelectedIndex={setSelectedIndex}></SideNav>
          </div>

          <div className="grid grid-cols-5 md:col-span-5">
            <div className="md:h-screen md:col-span-2 shadow-sm p-5 overflow-auto">
              {selectedIndex === 0 ? (
                <IconController />
              ) : selectedIndex === 1 ? (
                <BackgroundController />
              ) : (
                <Upgrade />
              )}
            </div>

            <div className="md:h-screen md:col-span-3">
              <LogoPreview downloadLogo={downloadLogo} />
            </div>
          </div>
        </div>
      </div>
    </UpgradeStorageValueContext.Provider>
  );
}

export default App;
