import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className='p-4 bg-stone-800 text-stone-200 uppercase text-sm sm:px-6 md:text-base'>
      <p className='text-stone-300 font-semibold space-x-4 sm:spac-x-6'>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart"> Open Cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
