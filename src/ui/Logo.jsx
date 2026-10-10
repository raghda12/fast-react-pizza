import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-80"
      aria-label="Fast Pizza Co. home"
    >
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <circle cx="17" cy="17" r="15.5" fill="none" stroke="#1F1A17" strokeWidth="1.5" />
        <path d="M17 17 L17 1.5 A15.5 15.5 0 0 1 30.4 9.3 Z" fill="#C23A1E" />
        <circle cx="10" cy="20" r="2" fill="#1F1A17" />
        <circle cx="19" cy="25" r="2" fill="#1F1A17" />
        <circle cx="23" cy="17" r="1.6" fill="#1F1A17" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl font-semibold tracking-tight sm:text-[22px]">
          Fast Pizza
        </span>
        <span className="mt-1 hidden font-mono text-[10px] uppercase tracking-[0.22em] text-ash sm:block">
          Pizza Co.
        </span>
      </span>
    </Link>
  );
}
