import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import { clearCart, getCart, getTotalCartPrice, getTotalCartQuantity } from "./CartSlice";
import EmptyCart from "./EmptyCart";
import { formatCurrency } from "../../utils/helpers";
import { ArrowLeft, ArrowRight, Clock, Trash } from "../../ui/Icons";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="container-page flex flex-col gap-6 pb-20 pt-6 md:gap-9 md:pt-10">
      <div>
        <LinkButton to="/menu">
          <ArrowLeft size={16} />
          Back to menu
        </LinkButton>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-ink pb-5">
        <h1 className="font-serif text-4xl font-medium leading-none tracking-[-0.025em] md:text-[64px]">
          Your cart{username && ", "}
          {username && <span className="italic text-tomato">{username}</span>}
        </h1>
        <span className="font-mono text-xs text-ash md:text-[13px]">
          {totalCartQuantity} {totalCartQuantity === 1 ? "pizza" : "pizzas"} · {cart.length}{" "}
          {cart.length === 1 ? "kind" : "kinds"}
        </span>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
        <section aria-label="Cart items" className="min-w-0 flex-1">
          <ul className="divide-y divide-flour border-b border-flour">
            {cart.map((item) => (
              <CartItem item={item} key={item.pizzaId} />
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <Link
              to="/menu"
              className="inline-flex min-h-[44px] items-center text-[15px] font-medium underline underline-offset-4 transition-colors hover:text-tomato"
            >
              Add another pizza
            </Link>
            <button
              type="button"
              onClick={handleClearCart}
              className="inline-flex min-h-[44px] items-center gap-2 text-sm text-ash transition-colors hover:text-tomato"
            >
              <Trash size={16} />
              Clear cart
            </button>
          </div>
        </section>

        <aside
          aria-label="Order summary"
          className="flex flex-col gap-5 rounded border border-flour bg-paper p-6 md:p-8 lg:sticky lg:top-6 lg:w-[380px]"
        >
          <h2 className="font-serif text-[28px] font-medium">Summary</h2>
          <dl className="flex flex-col gap-3 text-[15px]">
            {cart.map((item) => (
              <div key={item.pizzaId} className="flex justify-between gap-4">
                <dt className="text-ink-soft">
                  {item.quantity} × {item.name}
                </dt>
                <dd className="font-mono">{formatCurrency(item.totalPrice)}</dd>
              </div>
            ))}
          </dl>
          <div className="flex items-baseline justify-between border-t border-flour pt-4">
            <span className="font-semibold">Total</span>
            <span className="font-mono text-[28px] font-medium">
              {formatCurrency(totalCartPrice)}
            </span>
          </div>
          <p className="flex gap-2.5 text-sm text-ash">
            <Clock className="mt-0.5 flex-none text-tomato" />
            You pay on delivery. Priority delivery (+20%) can be added at checkout.
          </p>
          <div className="grid">
            <Button to="/order/new" type="primary">
              Order pizzas
              <ArrowRight />
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Cart;
