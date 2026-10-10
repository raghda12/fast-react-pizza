import { useDispatch } from "react-redux";
import { deleteItem } from "./CartSlice";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(deleteItem(pizzaId))}
      className="min-h-[44px] px-1 text-sm text-ash underline underline-offset-[3px] transition-colors hover:text-tomato"
    >
      Remove
    </button>
  );
}
