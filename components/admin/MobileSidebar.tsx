"use client";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded-md p-2 hover:bg-muted">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="p-0 w-72">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}