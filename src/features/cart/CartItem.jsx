import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { getCurrentQuantityById } from './cartSlice';
import { useSelector } from 'react-redux';
import DeleteItem from './DeleteItem';
import UpdateitemQuantity from './UpdateitemQuantity';
function CartItem({ item }) {
 
  const { pizzaId, name, quantity, totalPrice } = item;
      const currentQuntity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateitemQuantity pizzaId={pizzaId} currentQuantity={currentQuntity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
