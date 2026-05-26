interface StatusBadgeProps {
  status: string;
  size?: "sm" | "md";
}

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  new: { bg: "bg-blue-100", text: "text-blue-700" },
  pending: { bg: "bg-yellow-100", text: "text-yellow-700" },
  payment_confirmed: { bg: "bg-blue-100", text: "text-blue-700" },
  in_production: { bg: "bg-orange-100", text: "text-orange-700" },
  in_progress: { bg: "bg-orange-100", text: "text-orange-700" },
  fabrication: { bg: "bg-orange-100", text: "text-orange-700" },
  assembly: { bg: "bg-orange-100", text: "text-orange-700" },
  assembled: { bg: "bg-amber-100", text: "text-amber-700" },
  quality_control: { bg: "bg-purple-100", text: "text-purple-700" },
  ready_to_ship: { bg: "bg-green-100", text: "text-green-700" },
  shipped: { bg: "bg-cyan-100", text: "text-cyan-700" },
  delivered: { bg: "bg-green-100", text: "text-green-700" },
  cancelled: { bg: "bg-red-100", text: "text-red-700" },
  escalated_to_human: { bg: "bg-purple-100", text: "text-purple-700" },
  ai_responded: { bg: "bg-indigo-100", text: "text-indigo-700" },
  closed: { bg: "bg-gray-100", text: "text-gray-700" },
  active: { bg: "bg-green-100", text: "text-green-700" },
  inactive: { bg: "bg-gray-100", text: "text-gray-700" },
  pending_status: { bg: "bg-yellow-100", text: "text-yellow-700" },
  available: { bg: "bg-green-100", text: "text-green-700" },
  low: { bg: "bg-yellow-100", text: "text-yellow-700" },
  critical: { bg: "bg-red-100", text: "text-red-700" },
  materials_reserved: { bg: "bg-indigo-100", text: "text-indigo-700" },
};

const LABEL_MAP: Record<string, string> = {
  new: "Nuevo",
  pending: "Pendiente",
  payment_confirmed: "Pago Confirmado",
  in_production: "En Producción",
  in_progress: "En Progreso",
  fabrication: "Fabricación",
  assembly: "Ensamblaje",
  assembled: "Ensamblado",
  quality_control: "Control de Calidad",
  ready_to_ship: "Listo para Envío",
  shipped: "Enviado",
  delivered: "Entregado",
  cancelled: "Cancelado",
  escalated_to_human: "Escalado",
  ai_responded: "IA Respondió",
  closed: "Cerrado",
  active: "Activo",
  inactive: "Inactivo",
  pending_status: "Pendiente",
  available: "Disponible",
  low: "Stock Bajo",
  critical: "Stock Crítico",
  materials_reserved: "Materiales Reservados",
};

export function StatusBadge({ status, size = "md" }: StatusBadgeProps) {
  const colors = STATUS_COLORS[status] || { bg: "bg-gray-100", text: "text-gray-700" };
  const label = LABEL_MAP[status] || status;

  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
  };

  return (
    <span
      className={`${colors.bg} ${colors.text} font-medium rounded-full inline-block ${sizeClasses[size]}`}
    >
      {label}
    </span>
  );
}
