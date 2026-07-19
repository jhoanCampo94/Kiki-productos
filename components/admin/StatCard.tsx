import { LucideIcon } from "lucide-react";

type StatsProps = {
  title: string;
  value: number;
  Icon: LucideIcon
}

export default function StatCard({ title, value, Icon }: StatsProps) {
  return (
    <div className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-6"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-pink-600">
        <Icon className="h-6 w-6" />
      </div>
      <h2 className="text-sm text-muted-foreground">{title}</h2>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  )
}