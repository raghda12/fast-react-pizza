// Test ID: IIDSAT

import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import { useEffect, useState } from "react";
import UpdataOrder from "./UpdataOrder";
import { Bolt, Check, Copy } from "../../ui/Icons";

const STEPS = ["Order placed", "In the oven", "On its way", "Delivered"];

// The API only exposes `status` and `estimatedDelivery`, so the progress
// step is derived: the last 10 minutes before the ETA count as "on its way".
function getCurrentStep(status, minutesLeft) {
  if (status === "delivered" || minutesLeft < 0) return 3;
  if (minutesLeft <= 10) return 2;
  return 1;
}

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();
  const [copied, setCopied] = useState(false);

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load(`/menu`);
    },
    [fetcher]
  );

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  const currentStep = getCurrentStep(status, deliveryIn);

  function handleCopy() {
    navigator.clipboard?.writeText(id).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="container-page flex flex-col gap-8 pb-20 pt-6 md:gap-10 md:pt-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
          <h1 className="font-serif text-2xl font-medium tracking-tight md:text-4xl">
            Order <span className="font-mono text-xl font-medium md:text-[30px]">#{id}</span>
          </h1>
          <div className="flex flex-wrap gap-2">
            {priority && (
              <span className="inline-flex items-center gap-1.5 rounded bg-tomato px-2.5 py-1 text-xs font-semibold text-white md:text-[13px]">
                <Bolt size={12} />
                Priority
              </span>
            )}
            <span className="inline-flex items-center gap-2 rounded bg-crust px-2.5 py-1 text-xs font-semibold capitalize md:text-[13px]">
              <span
                className={`h-2 w-2 rounded-full ${
                  currentStep === 3 ? "bg-basil" : "bg-tomato"
                }`}
              ></span>
              {status}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="hidden h-11 items-center gap-2 rounded-md border border-wheat px-4 text-sm font-medium transition-colors hover:bg-ink hover:text-paper sm:inline-flex"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied" : "Copy order ID"}
        </button>
      </div>

      <section
        aria-label="Delivery status"
        className="flex flex-col gap-8 rounded bg-ink p-6 text-cream md:p-12 lg:flex-row lg:items-center lg:gap-14"
      >
        <div className="flex flex-col gap-1.5 lg:w-[340px] lg:flex-none">
          {deliveryIn >= 0 ? (
            <>
              <span className="eyebrow text-tomato-light">Arriving in</span>
              <div className="flex items-baseline gap-3.5">
                <span className="font-serif text-8xl leading-[0.9] tracking-[-0.04em] md:text-[140px]">
                  {deliveryIn}
                </span>
                <span className="font-serif text-2xl italic md:text-[32px]">
                  {deliveryIn === 1 ? "minute" : "minutes"}
                </span>
              </div>
            </>
          ) : (
            <>
              <span className="eyebrow text-tomato-light">Enjoy your meal</span>
              <span className="font-serif text-5xl leading-none tracking-tight md:text-6xl">
                Order should <span className="italic">have arrived</span>
              </span>
            </>
          )}
          <span className="mt-1 text-sm text-wheat md:text-[15px]">
            Estimated delivery · {formatDate(estimatedDelivery)}
          </span>
        </div>

        <ol
          aria-label="Order progress"
          className="flex flex-1 flex-col md:grid md:grid-cols-4"
        >
          {STEPS.map((label, i) => {
            const isDone = i < currentStep || (i === 3 && currentStep === 3);
            const isCurrent = i === currentStep && !isDone;
            const isLast = i === STEPS.length - 1;
            return (
              <li
                key={label}
                aria-current={isCurrent ? "step" : undefined}
                className="flex gap-3.5 md:flex-col md:gap-3.5"
              >
                <div className="flex flex-col items-center md:flex-row">
                  {isDone ? (
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-tomato text-white md:h-7 md:w-7">
                      <Check size={12} />
                    </span>
                  ) : isCurrent ? (
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 border-tomato md:h-7 md:w-7">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-tomato md:h-2.5 md:w-2.5"></span>
                    </span>
                  ) : (
                    <span className="h-6 w-6 flex-none rounded-full border-2 border-ash md:h-7 md:w-7"></span>
                  )}
                  {!isLast && (
                    <span
                      className={`h-7 w-0.5 md:h-0.5 md:w-auto md:flex-1 ${
                        i < currentStep ? "bg-tomato" : "bg-ink-soft"
                      }`}
                    ></span>
                  )}
                </div>
                <span
                  className={`pt-px text-[15px] md:pt-0 ${
                    isDone || isCurrent ? "font-semibold" : "text-wheat"
                  }`}
                >
                  {label}
                  {isCurrent && (
                    <span className="block font-mono text-xs font-normal text-tomato-light">
                      Now
                    </span>
                  )}
                </span>
              </li>
            );
          })}
        </ol>
      </section>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
        <section aria-label="Items" className="min-w-0 flex-1">
          <h2 className="mb-2 font-serif text-2xl font-medium md:text-[30px]">
            What’s in the box
          </h2>
          <ul className="divide-y divide-flour border-b border-t border-b-flour border-t-ink">
            {cart.map((item) => {
              const pizza = fetcher.data?.find((el) => el.id === item.pizzaId);
              return (
                <OrderItem
                  item={item}
                  key={item.pizzaId}
                  isLoadingIngredients={fetcher.state === "loading"}
                  ingredients={pizza?.ingredients ?? []}
                  imageUrl={pizza?.imageUrl}
                />
              );
            })}
          </ul>
          <p className="mt-4 text-[13px] text-ash">
            For privacy, your name and address are only visible to our kitchen staff.
          </p>
        </section>

        <aside className="flex flex-col gap-5 lg:w-[380px]">
          <div className="flex flex-col gap-3 rounded border border-flour bg-paper p-6 md:px-8">
            <div className="flex justify-between text-[15px]">
              <span className="text-ink-soft">Pizzas</span>
              <span className="font-mono">{formatCurrency(orderPrice)}</span>
            </div>
            {priority && (
              <div className="flex justify-between text-[15px]">
                <span className="text-ink-soft">Priority</span>
                <span className="font-mono">{formatCurrency(priorityPrice)}</span>
              </div>
            )}
            <div className="flex items-baseline justify-between border-t border-flour pt-3.5">
              <span className="font-semibold">To pay on delivery</span>
              <span className="font-mono text-[26px] font-medium">
                {formatCurrency(orderPrice + priorityPrice)}
              </span>
            </div>
          </div>
          {!priority && currentStep < 3 && <UpdataOrder order={order} />}
        </aside>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
