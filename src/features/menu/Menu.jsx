import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenutItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((item) => (
        <MenutItem
          pizza={item}
          key={item.id}
        />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
