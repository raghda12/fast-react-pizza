import { formatCurrency } from '../../utils/helpers';
import { getCurrentQuantityById } from './CartSlice';
import { useSelector } from 'react-redux';
import DeleteItem from './DeleteItem';
import UpdateitemQuantity from './UpdateitemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, unitPrice, totalPrice, imageUrl, ingredients } = item;
  const currentQuntity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="flex gap-4 py-5 md:items-center md:gap-6 md:py-6">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${name} pizza`}
          className="h-[88px] w-[88px] flex-none rounded object-cover md:h-28 md:w-28"
        />
      )}

      <div className="flex min-w-0 flex-1 flex-col gap-1 md:flex-row md:items-center md:gap-6">
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-serif text-[19px] font-medium leading-tight tracking-[-0.01em] md:text-[26px]">
              {name}
            </h2>
            <span className="font-mono text-[15px] md:hidden">{formatCurrency(totalPrice)}</span>
          </div>
          {ingredients && (
            <p className="hidden text-sm capitalize text-ash md:block">{ingredients.join(', ')}</p>
          )}
          <span className="font-mono text-xs text-ink-soft md:mt-1 md:text-[13px]">
            {formatCurrency(unitPrice)} each
          </span>
        </div>

        <div className="flex items-center justify-between gap-6 pt-2 md:pt-0">
          <UpdateitemQuantity pizzaId={pizzaId} currentQuantity={currentQuntity} />
          <span className="hidden w-24 text-right font-mono text-lg font-medium md:block">
            {formatCurrency(totalPrice)}
          </span>
          <DeleteItem pizzaId={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
