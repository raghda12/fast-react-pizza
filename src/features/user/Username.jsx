import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);
  if (!username) return null;
  return (
    <div className="hidden items-center gap-2.5 text-sm font-medium md:flex">
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-serif text-[15px] uppercase text-cream"
      >
        {username.at(0)}
      </span>
      {username}
    </div>
  );
}

export default Username;
