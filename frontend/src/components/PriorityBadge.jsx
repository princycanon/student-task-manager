export default function PriorityBadge({ priority }) {
  const variants = {
    Low: 'bg-green-100 text-green-700 border-green-200',
    Medium: 'bg-orange-100 text-orange-700 border-orange-200',
    High: 'bg-red-100 text-red-700 border-red-200',
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${
        variants[priority] || 'bg-slate-100 text-slate-700 border-slate-200'
      }`}
    >
      {priority} Priority
    </span>
  );
}
