import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import EmptyCart from '../cart/EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '../cart/CartSlice';
import store from '../../store';
import { formatCurrency } from '../../utils/helpers';
import { fetchAddress } from '../user/userSlice';
import { Alert, Check, Pin } from '../../ui/Icons';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function FieldError({ id, children }) {
  return (
    <p id={id} className="flex gap-2 text-[13px] text-danger">
      <Alert size={16} className="mt-px flex-none" />
      {children}
    </p>
  );
}

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === 'loading';
  const hasPosition = Boolean(position.latitude && position.longitude);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData();
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="container-page flex flex-col gap-10 pb-20 pt-8 md:pt-14 lg:flex-row lg:items-start lg:gap-[72px]">
      <Form method="POST" className="flex min-w-0 flex-1 flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-2.5">
          <span className="eyebrow text-tomato">Step 2 of 3 · Details</span>
          <h1 className="font-serif text-4xl font-medium leading-none tracking-[-0.025em] md:text-6xl">
            Ready to order? <span className="italic">Let’s go.</span>
          </h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="customer" className="text-sm font-semibold">
              First name
            </label>
            <input
              id="customer"
              className="input w-full"
              type="text"
              name="customer"
              defaultValue={username}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-semibold">
              Phone number
            </label>
            <input
              id="phone"
              className={`input w-full ${
                formErrors?.phone ? 'border-[1.5px] border-danger focus:border-danger' : ''
              }`}
              type="tel"
              name="phone"
              required
              aria-invalid={Boolean(formErrors?.phone)}
              aria-describedby={formErrors?.phone ? 'phone-error' : undefined}
            />
            {formErrors?.phone && <FieldError id="phone-error">{formErrors.phone}</FieldError>}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="address" className="text-sm font-semibold">
            Delivery address
          </label>
          <div className="relative flex items-center">
            <input
              id="address"
              className={`input w-full ${hasPosition ? '' : 'pr-14 sm:pr-48'}`}
              type="text"
              name="address"
              placeholder="Street, number, city"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
            {!hasPosition && (
              <button
                type="button"
                disabled={isLoadingAddress}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
                aria-label="Use my location"
                className="absolute right-1.5 flex h-9 items-center gap-2 rounded border border-ink bg-cream px-2.5 text-sm font-semibold transition-colors hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-60 md:h-11 md:px-4"
              >
                <Pin size={16} />
                <span className="hidden sm:inline">
                  {isLoadingAddress ? 'Locating…' : 'Use my location'}
                </span>
              </button>
            )}
          </div>
          {addressStatus === 'error' && <FieldError>{errorAddress}</FieldError>}
          {hasPosition && addressStatus !== 'error' && (
            <span className="flex items-center gap-1.5 text-[13px] text-basil">
              <Check size={14} />
              Filled in from your location — you can still edit it.
            </span>
          )}
        </div>

        <label
          htmlFor="priority"
          className={`flex cursor-pointer items-start gap-4 rounded-md border-[1.5px] bg-paper p-5 transition-colors sm:items-center sm:px-6 ${
            withPriority ? 'border-tomato' : 'border-flour hover:border-wheat'
          }`}
        >
          <input
            className="mt-0.5 h-[22px] w-[22px] flex-none accent-tomato sm:mt-0"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <span className="flex flex-1 flex-col gap-0.5">
            <span className="font-semibold">Give your order priority</span>
            <span className="text-sm text-ash">
              Your pizzas go to the front of the oven queue for 20% extra.
            </span>
          </span>
          <span className="font-mono text-[15px] text-tomato">
            +{formatCurrency(totalCartPrice * 0.2)}
          </span>
        </label>

        <div className="flex flex-wrap items-center gap-5 border-t border-flour pt-7">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={hasPosition ? `${position.latitude},${position.longitude}` : ''}
          />

          <Button disabled={isSubmitting || isLoadingAddress} type="primary">
            {isSubmitting ? (
              'Placing order…'
            ) : (
              <>
                Order now
                <span className="border-l border-white/40 pl-3.5 font-mono font-medium">
                  {formatCurrency(totalPrice)}
                </span>
              </>
            )}
          </Button>
          <span className="text-sm text-ash">Pay in cash or card when it arrives.</span>
        </div>
      </Form>

      <aside
        aria-label="Your order"
        className="overflow-hidden rounded border border-flour bg-paper lg:sticky lg:top-6 lg:w-[400px]"
      >
        <img
          src="/checkout-pizza.jpg"
          alt="Pizza with spinach and burrata on a dark wooden board"
          className="hidden h-48 w-full object-cover lg:block"
        />
        <div className="flex flex-col gap-4 p-6 md:px-8 md:pb-8 md:pt-7">
          <h2 className="font-serif text-[26px] font-medium">Your order</h2>
          <ul className="flex flex-col gap-3.5">
            {cart.map((item) => (
              <li key={item.pizzaId} className="flex items-center gap-3.5">
                {item.imageUrl && (
                  <img src={item.imageUrl} alt="" className="h-12 w-12 rounded object-cover" />
                )}
                <span className="flex-1 text-[15px]">
                  <span className="font-mono text-tomato">{item.quantity}×</span> {item.name}
                </span>
                <span className="font-mono text-sm">{formatCurrency(item.totalPrice)}</span>
              </li>
            ))}
          </ul>
          <dl className="flex flex-col gap-2 border-t border-flour pt-4 text-[15px]">
            <div className="flex justify-between">
              <dt className="text-ink-soft">Pizzas</dt>
              <dd className="font-mono">{formatCurrency(totalCartPrice)}</dd>
            </div>
            {withPriority && (
              <div className="flex justify-between">
                <dt className="text-ink-soft">Priority</dt>
                <dd className="font-mono">{formatCurrency(priorityPrice)}</dd>
              </div>
            )}
          </dl>
          <div className="flex items-baseline justify-between border-t border-ink pt-4">
            <span className="font-semibold">To pay on delivery</span>
            <span className="font-mono text-[26px] font-medium">{formatCurrency(totalPrice)}</span>
          </div>
        </div>
      </aside>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    // Only send the fields the API expects (imageUrl/ingredients are display-only)
    cart: JSON.parse(data.cart).map(
      ({ pizzaId, name, quantity, unitPrice, totalPrice }) => ({
        pizzaId,
        name,
        quantity,
        unitPrice,
        totalPrice,
      })
    ),
    priority: data.priority === 'true',
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);

  // Do NOT overuse
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
