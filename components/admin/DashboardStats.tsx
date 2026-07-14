import { stats } from "./stats"
import StatCard from "./StatCard";

export default function DashboardStats() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {
        stats.map((stat) => (
          <StatCard
            key={stat.title}
            Icon={stat.icon}
            title={stat.title}
            value={stat.value}
          />
        ))
      }
    </div>
  )
}