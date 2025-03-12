import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export default function Header() {
  return (
    <div className="p-4 shadow-sm border flex justify-between items-center">
      <img src="/logo.svg" alt="" className="w-1/3 md:w-1/5" />
      <Button className="flex gap-2">
        <Download className="h-5 w-5" /> Download
      </Button>
    </div>
  );
}
