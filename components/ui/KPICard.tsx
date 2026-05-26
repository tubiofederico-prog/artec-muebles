import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  change: number;
  changeType: "increase" | "decrease" | "neutral";
  color: "violet" | "blue" | "green" | "orange" | "red" | "teal";
  description?: string;
}

const COLOR_MAP = {
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-200",
    icon: "text-violet-600",
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
    icon: "text-blue-600",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
    icon: "text-green-600",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
    icon: "text-orange-600",
  },
  red: {
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
    icon: "text-red-600",
  },
  teal: {
    bg: "bg-teal-50",
    text: "text-teal-700",
    border: "border-teal-200",
    icon: "text-teal-600",
  },
};

export function KPICard({
  icon: Icon,
  title,
  value,
  change,
  changeType,
  color,
  description,
}: KPICardProps) {
  const colors = COLOR_MAP[color];

  return (
    <div className={`${colors.bg} border ${colors.border} rounded-lg p-6 shadow-sm`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className={`p-3 ${colors.bg} rounded-lg ${colors.icon}`}>
          <Icon size={24} />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {changeType === "increase" && (
          <>
            <TrendingUp size={16} className="text-green-600" />
            <span className="text-sm font-medium text-green-600">
              +{change}%
            </span>
          </>
        )}
        {changeType === "decrease" && (
          <>
            <TrendingDown size={16} className="text-red-600" />
            <span className="text-sm font-medium text-red-600">
              {change}%
            </span>
          </>
        )}
        <span className="text-xs text-gray-500">
          {description || "vs mes anterior"}
        </span>
      </div>
    </div>
  );
}
