import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  icon = null,
  onClick,
}) {
  const classes = {
    primary: 'primary-btn',
    secondary: 'secondary-btn',
    danger: 'danger-btn',
  };

  return (
    <button
      type={type}
      className={`${classes[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="inline-flex items-center gap-2">
        {children}
        {icon && <ArrowRight size={16} />}
      </span>
    </button>
  );
}
