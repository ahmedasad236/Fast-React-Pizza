import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartItems, getTotalCartPrice } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const numOfPizzas = useSelector(getTotalCartPrice);
  const totalPrice = useSelector(getTotalCartItems);

  if (!numOfPizzas) return null;
  return (
    <div className="flex items-center justify-between p-4 bg-stone-800 text-stone-200 uppercase text-sm sm:px-6 md:text-base">
      <p className="text-stone-300 font-semibold space-x-4 sm:spac-x-6">
        <span>{numOfPizzas} pizzas</span>
        <span>${formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart"> Open Cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
