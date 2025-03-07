import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Items from '../pages/Items';
import ItemDetail from '../pages/ItemDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/items',
    element: <Items />,
  },
  {
    path: '/items/:id',
    element: <ItemDetail />,
  },
]); 