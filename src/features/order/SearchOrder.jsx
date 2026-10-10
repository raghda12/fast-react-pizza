import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "../../ui/Icons";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handelSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handelSubmit} role="search" className="relative flex items-center">
      <Search size={16} className="pointer-events-none absolute left-3.5 text-ash" />
      <input
        aria-label="Search order number"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-11 w-36 rounded-md border border-flour bg-paper pl-10 pr-3 text-sm text-ink transition-all duration-300 placeholder:text-ash focus:border-tomato focus:outline-none focus:ring-2 focus:ring-tomato/30 sm:w-60 sm:focus:w-72"
      />
    </form>
  );
}
