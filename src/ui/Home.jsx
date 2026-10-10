import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
import { ArrowRight } from './Icons';

const steps = [
  {
    title: 'Pick your pizzas',
    text: 'Add as many as you like and adjust quantities right from the menu.',
  },
  {
    title: 'Tell us where',
    text: 'Type your address or let us find it from your location.',
  },
  {
    title: 'Track it to your door',
    text: 'Follow the countdown with your order ID, and pay on delivery.',
  },
];

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <>
      <section className="container-page grid items-center gap-10 py-10 md:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="order-2 flex flex-col gap-6 lg:order-1 lg:gap-7">
          <span className="eyebrow text-tomato">Fresh from the oven</span>
          <h1 className="font-serif text-5xl font-medium leading-[0.98] tracking-[-0.03em] sm:text-6xl xl:text-[80px]">
            The best pizza.{' '}
            <span className="font-normal italic text-tomato">
              Straight out of the oven,
            </span>{' '}
            straight to you.
          </h1>
          <p className="max-w-md text-base text-ink-soft sm:text-lg">
            Choose from eighteen hand-stretched pizzas, follow your order to the
            door, and pay when it arrives.
          </p>

          <div className="mt-2">
            {username === '' ? (
              <CreateUser />
            ) : (
              <Button to="/menu" type="primary">
                Continue ordering, {username}
                <ArrowRight />
              </Button>
            )}
          </div>
        </div>

        <figure className="relative order-1 -mx-4 sm:mx-0 lg:order-2">
          <img
            src="/hero-pizza.jpg"
            alt="A wood-fired Margherita pizza with fresh basil"
            className="h-72 w-full object-cover sm:h-96 sm:rounded lg:h-[560px]"
          />
          <figcaption className="absolute bottom-4 left-4 flex items-baseline gap-4 rounded bg-paper px-4 py-2.5 sm:bottom-5 sm:left-5">
            <span className="font-serif text-lg italic">Margherita</span>
            <span className="font-mono text-sm text-ink-soft">€12.00</span>
          </figcaption>
        </figure>
      </section>

      <section
        aria-label="How it works"
        className="container-page grid gap-8 pb-16 sm:grid-cols-3 md:pb-24"
      >
        {steps.map((step, i) => (
          <div key={step.title} className="flex flex-col gap-1.5 border-t border-ink pt-4">
            <span className="font-mono text-xs text-tomato">0{i + 1}</span>
            <span className="font-serif text-[22px]">{step.title}</span>
            <span className="text-[15px] text-ink-soft">{step.text}</span>
          </div>
        ))}
      </section>
    </>
  );
}

export default Home;
