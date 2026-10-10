import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCurrentQuantityById } from "../cart/CartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateitemQuantity from "../cart/UpdateitemQuantity";
import { Plus } from "../../ui/Icons";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuntity = useSelector(getCurrentQuantityById(pizza.id));
  const isInCart = currentQuntity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
      // Display-only fields for the cart & checkout; stripped before the order is sent
      imageUrl,
      ingredients,
    };
    dispatch(addToCart(newItem));
  }

  return (
    <li className="group flex gap-4 border-b border-flour py-4 sm:flex-col sm:gap-3.5 sm:border-0 sm:py-0">
      <div className="relative h-24 w-24 flex-none overflow-hidden rounded bg-crust sm:aspect-square sm:h-auto sm:w-full">
        <img
          src={imageUrl}
          alt={`${name} pizza`}
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
            soldOut ? "opacity-60 grayscale" : ""
          }`}
        />
        {soldOut && (
          <span className="absolute left-3 top-3 hidden rounded-sm bg-ink px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-cream sm:block">
            Sold out
          </span>
        )}
        {isInCart && (
          <span className="absolute left-3 top-3 hidden rounded-sm bg-tomato px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-white sm:block">
            In cart · {currentQuntity}
          </span>
        )}
      </div>

      <div className="flex min-w-0 grow flex-col gap-0.5 sm:gap-3">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-serif text-[19px] font-medium leading-tight tracking-[-0.01em] sm:text-2xl">
            {name}
          </h2>
          <span
            className={`font-mono text-sm sm:text-[15px] ${
              soldOut ? "text-ash line-through" : ""
            }`}
          >
            {formatCurrency(unitPrice)}
          </span>
        </div>

        <p className="text-[13px] capitalize leading-snug text-ash sm:min-h-[2.75rem] sm:text-sm">
          {ingredients.join(", ")}
        </p>

        <div className="mt-auto flex items-center justify-end pt-2 sm:justify-between sm:pt-0">
          {isInCart && (
            <div className="flex w-full items-center justify-end gap-3 sm:justify-between">
              <UpdateitemQuantity pizzaId={id} currentQuantity={currentQuntity} />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <div className="sm:grid sm:w-full">
              <Button type="small" onClick={handleAddToCart}>
                <Plus size={16} />
                Add to cart
              </Button>
            </div>
          )}

          {soldOut && (
            <span className="flex h-11 items-center justify-center font-mono text-[11px] uppercase tracking-[0.14em] text-ash sm:w-full sm:rounded-md sm:border sm:border-dashed sm:border-wheat sm:font-sans sm:text-sm sm:normal-case sm:tracking-normal">
              <span className="sm:hidden">Sold out</span>
              <span className="hidden sm:inline">Back tomorrow</span>
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
