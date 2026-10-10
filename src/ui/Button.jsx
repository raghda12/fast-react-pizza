import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-tomato focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-60';

  const styles = {
    primary:
      base +
      ' h-12 bg-tomato px-6 text-base text-white hover:bg-tomato-dark md:h-14 md:px-7',
    secondary:
      base +
      ' h-12 border border-ink bg-transparent px-5 text-base text-ink hover:bg-ink hover:text-paper md:h-14 md:px-6',
    small:
      base +
      ' h-11 border border-ink bg-transparent px-4 text-sm text-ink hover:bg-ink hover:text-paper',
    round:
      base +
      ' h-11 w-11 text-lg text-ink hover:bg-crust',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button type="button" onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
