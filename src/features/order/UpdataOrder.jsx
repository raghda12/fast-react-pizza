import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';
import { formatCurrency } from '../../utils/helpers';
import { Bolt } from '../../ui/Icons';

export default function UpdataOrder({ order }) {
  const fetcher = useFetcher();
  const isUpdating = fetcher.state !== 'idle';

  return (
    <fetcher.Form
      method="PATCH"
      className="flex flex-col gap-3.5 rounded border-[1.5px] border-dashed border-tomato p-6 md:px-8"
    >
      <div className="flex flex-col gap-1">
        <span className="font-serif text-[22px]">Hungry already?</span>
        <span className="text-sm text-ink-soft">
          Make this order a priority and we’ll move it to the front of the queue for{' '}
          <span className="font-mono">{formatCurrency(order.orderPrice * 0.2)}</span>.
        </span>
      </div>
      <div className="grid">
        <Button type="primary" disabled={isUpdating}>
          <Bolt size={16} />
          {isUpdating ? 'Updating…' : 'Make priority'}
        </Button>
      </div>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
