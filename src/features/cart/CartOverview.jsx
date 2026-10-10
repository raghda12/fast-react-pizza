import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './CartSlice';
import { formatCurrency } from '../../utils/helpers';
import { ArrowRight } from '../../ui/Icons';
import { useLocation } from 'react-router-dom';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const {pathname} = useLocation();
  if (!totalCartPrice || pathname === '/cart' || pathname === '/order/new') return null;

  return (
    <div className="bg-ink text-cream">
      <div className="container-page flex items-center justify-between gap-4 py-2.5 sm:py-3.5">
        <p className="flex flex-col leading-tight sm:flex-row sm:items-baseline sm:gap-6">
          <span className="text-[13px] text-wheat sm:text-[15px] sm:text-cream">
            {totalCartQuantity} {totalCartQuantity === 1 ? 'pizza' : 'pizzas'}
            <span className="hidden sm:inline"> in your cart</span>
          </span>
          <span className="font-mono text-[17px] sm:text-lg">
            {formatCurrency(totalCartPrice)}
          </span>
        </p>
        <Link
          to="/cart"
          className="inline-flex h-[46px] items-center gap-2 rounded-md bg-tomato px-5 text-[15px] font-semibold text-white transition-colors hover:bg-tomato-dark"
        >
          Open cart
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
