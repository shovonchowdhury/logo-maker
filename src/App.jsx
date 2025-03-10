import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";

function App() {
  
  const [selectedIndex,setSelectedIndex] = useState(0);

  return (
    <>
      <Header></Header>
  
      <div className="w-64 fixed">
        <SideNav setSelectedIndex={setSelectedIndex}></SideNav>
      </div>
      <div  className="ml-64 grid grid-cols-1 md:grid-cols-5 fixed">
        <div className="md:col-span-2 border md:h-screen shadow-sm p-5 overflow-auto">
          {
            selectedIndex===0 ? <IconController/> : <BackgroundController/>
          }
        </div>
          
        <div className="md:col-span-3 bg-red-400">
          Icon preview
        </div>

      </div>
      
    </>
  );
}

export default App;
