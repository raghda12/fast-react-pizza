import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { getTotalCartQuantity } from "../features/cart/CartSlice";
import Logo from "./Logo";
import { Bag } from "./Icons";

export default function Header() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <header className="border-b border-flour bg-cream">
      <div className="container-page flex items-center gap-3 py-3 sm:gap-8 sm:py-4">
        <Logo />

        <nav aria-label="Main" className="hidden text-[15px] font-medium md:block">
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `border-b-[1.5px] pb-0.5 transition-colors hover:text-tomato ${
                isActive ? "border-tomato text-tomato" : "border-transparent"
              }`
            }
          >
            Menu
          </NavLink>
        </nav>

        <div className="ml-auto">
          <SearchOrder />
        </div>

        <Username />

        <Link
          to="/cart"
          aria-label={`Cart, ${totalCartQuantity} pizzas`}
          className="flex h-11 items-center gap-2.5 rounded-md border border-ink px-3 text-sm font-semibold transition-colors hover:bg-ink hover:text-paper sm:px-4"
        >
          <Bag />
          <span className="hidden sm:inline">Cart</span>
          {totalCartQuantity > 0 && (
            <span className="rounded bg-tomato px-1.5 font-mono text-xs text-white">
              {totalCartQuantity}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
