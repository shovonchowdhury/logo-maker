import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-3xl text-red-300">Logo Maker</p>
      <Button >Click Me</Button>
    </>
  );
}

export default App;
