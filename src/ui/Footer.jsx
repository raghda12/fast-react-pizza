export default function Footer() {
  return (
    <footer className="border-t border-flour">
      <div className="container-page flex flex-wrap justify-between gap-3 py-8 text-sm text-ash">
        <span>
          <span className="font-serif text-base text-ink">Fast Pizza Co.</span>{' '}
          — pay on delivery, always.
        </span>
        <span className="font-mono text-xs">
          Built with React, Redux Toolkit &amp; React Router
        </span>
      </div>
    </footer>
  );
}
