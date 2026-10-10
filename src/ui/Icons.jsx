// Small stroke icons used across the app. They inherit `currentColor`.
function Icon({ children, size = 18, strokeWidth = 1.8, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (props) => (
  <Icon strokeWidth={2} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const ArrowLeft = (props) => (
  <Icon strokeWidth={2} {...props}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </Icon>
);

export const Bag = (props) => (
  <Icon {...props}>
    <path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </Icon>
);

export const Search = (props) => (
  <Icon strokeWidth={2} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Icon>
);

export const Plus = (props) => (
  <Icon strokeWidth={2} {...props}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);

export const Check = (props) => (
  <Icon strokeWidth={3} {...props}>
    <path d="m5 12 5 5 9-10" />
  </Icon>
);

export const Pin = (props) => (
  <Icon {...props}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Icon>
);

export const Clock = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);

export const Alert = (props) => (
  <Icon strokeWidth={2} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v5M12 16.5v.01" />
  </Icon>
);

export const Trash = (props) => (
  <Icon {...props}>
    <path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3" />
  </Icon>
);

export const Bolt = (props) => (
  <Icon strokeWidth={2} {...props}>
    <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" />
  </Icon>
);

export const Copy = (props) => (
  <Icon {...props}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V6a2 2 0 0 1 2-2h8" />
  </Icon>
);
