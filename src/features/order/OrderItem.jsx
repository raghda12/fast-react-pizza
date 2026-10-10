import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients, imageUrl }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="flex items-center gap-3.5 py-3.5 md:gap-5 md:py-5">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt=""
          className="h-14 w-14 flex-none rounded object-cover md:h-[72px] md:w-[72px]"
        />
      ) : (
        <span className="h-14 w-14 flex-none animate-pulse rounded bg-crust md:h-[72px] md:w-[72px]"></span>
      )}
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-semibold md:text-[17px]">
          <span className="font-mono font-medium text-tomato">{quantity}&times;</span> {name}
        </p>
        <p className="text-[13px] capitalize text-ash md:text-sm">
          {isLoadingIngredients ? "Loading ingredients…" : ingredients?.join(", ")}
        </p>
      </div>
      <p className="font-mono text-sm md:text-base">{formatCurrency(totalPrice)}</p>
    </li>
  );
}

export default OrderItem;
