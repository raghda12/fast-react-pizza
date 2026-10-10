import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from './CartSlice';

export default function UpdateitemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  const buttonClass =
    'flex h-11 w-11 items-center justify-center text-xl text-ink transition-colors hover:bg-crust focus:outline-none focus-visible:bg-crust';

  return (
    <div className="flex h-[46px] items-center overflow-hidden rounded-md border border-ink">
      <button
        type="button"
        aria-label="Decrease quantity"
        className={buttonClass}
        onClick={() => dispatch(decreaseQuantity(pizzaId))}
      >
        −
      </button>
      <span className="min-w-[1.75rem] text-center font-mono text-[15px]" aria-live="polite">
        {currentQuantity}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        className={buttonClass}
        onClick={() => dispatch(increaseQuantity(pizzaId))}
      >
        +
      </button>
    </div>
  );
}
