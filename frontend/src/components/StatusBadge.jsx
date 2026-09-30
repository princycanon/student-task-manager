import { CheckCircle2, CircleDashed } from 'lucide-react';

export default function StatusBadge({ status }) {
  const variants = {
    Pending: 'bg-orange-100 text-orange-700 border-orange-200',
    'In Progress': 'bg-blue-100 text-blue-700 border-blue-200',
    Completed: 'bg-green-100 text-green-700 border-green-200',
  };

  const statusIcon =
    status === 'Completed' ? <CheckCircle2 size={14} /> : <CircleDashed size={14} />;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold ${
        variants[status] || 'bg-slate-100 text-slate-700 border-slate-200'
      }`}
    >
      {statusIcon}
      {status}
    </span>
  );
}
