"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarItemProps = {
  label: string;
  href: string;
  Icon: LucideIcon;
}

export default function SidebarItem({ label, href, Icon }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 transition-colors",
          isActive
            ? "bg-pink-100 text-pink-600"
            : "text-muted-foreground hover:bg-pink-50 hover:text-pink-600"
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </Link>
    </li>
  )
}
