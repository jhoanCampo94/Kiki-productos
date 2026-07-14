import { LucideIcon } from "lucide-react";

type StatsProps = {
  title: string;
  value: number;
  Icon: LucideIcon
}

export default function StatCard({ title, value, Icon }: StatsProps) {
  return (
    <div className="rounded-xl 
      border
      bg-card
      p-6
      shadow-sm
      hover:shadow-md
      transition"
    >
      {<Icon className="h-5 w-5" />}
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  )
}