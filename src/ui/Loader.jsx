export default function Loader() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-cream/60 backdrop-blur-sm">
      <div className="loader" role="status" aria-label="Loading"></div>
    </div>
  );
}
