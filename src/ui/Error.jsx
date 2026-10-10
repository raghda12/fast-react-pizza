import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
import { ArrowLeft } from "./Icons";

function Error() {
  const error = useRouteError();
  return (
    <div className="flex min-h-[70vh] items-center">
      <div className="container-page flex max-w-2xl flex-col gap-5 py-16">
        <span className="eyebrow text-tomato">Something went wrong</span>
        <h1 className="font-serif text-5xl font-medium tracking-tight sm:text-6xl">
          That one got <span className="italic text-tomato">burnt.</span>
        </h1>
        <p className="border-l-2 border-tomato pl-4 font-mono text-sm text-ink-soft">
          {error.message || error.data}
        </p>
        <div>
          <LinkButton to="-1">
            <ArrowLeft size={16} />
            Go back
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

export default Error;
