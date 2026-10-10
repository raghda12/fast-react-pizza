import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import { ArrowLeft, Bag } from '../../ui/Icons';

function EmptyCart() {
  return (
    <div className="container-page flex flex-col gap-6 pb-20 pt-6 md:pt-10">
      <div>
        <LinkButton to="/menu">
          <ArrowLeft size={16} />
          Back to menu
        </LinkButton>
      </div>

      <div className="flex flex-col items-start gap-5 border-t border-ink pt-10 md:pt-14">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-crust text-tomato">
          <Bag size={26} />
        </span>
        <h1 className="font-serif text-4xl font-medium tracking-[-0.02em] md:text-5xl">
          Your cart is <span className="italic text-tomato">still empty.</span>
        </h1>
        <p className="max-w-md text-ink-soft">
          Start adding some pizzas — they’ll be waiting for you here.
        </p>
        <Button to="/menu" type="primary">
          Browse the menu
        </Button>
      </div>
    </div>
  );
}

export default EmptyCart;
