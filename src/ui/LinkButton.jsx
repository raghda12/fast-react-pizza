import { Link, useNavigate } from 'react-router-dom';

export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    'inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-tomato';

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
