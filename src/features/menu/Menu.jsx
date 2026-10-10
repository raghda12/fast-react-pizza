import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  const username = useSelector((state) => state.user.username);
  const availableCount = menu.filter((pizza) => !pizza.soldOut).length;

  return (
    <section className="min-h-full border-t border-flour bg-paper">
      <div className="container-page flex flex-col gap-10 pb-24 pt-10 md:gap-12 md:pt-16">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-5 md:border-flour md:pb-6">
          <div className="flex flex-col gap-2">
            {username && (
              <span className="eyebrow text-ash">Good to see you, {username}</span>
            )}
            <h1 className="font-serif text-4xl font-medium leading-none tracking-[-0.02em] md:text-[56px]">
              The menu
            </h1>
          </div>
          <span className="font-mono text-xs text-ash md:text-sm">
            {menu.length} pizzas · {availableCount} available
          </span>
        </div>

        <ul className="grid gap-x-8 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-3 xl:grid-cols-4">
          {menu.map((pizza) => (
            <MenuItem key={pizza.id} pizza={pizza} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
