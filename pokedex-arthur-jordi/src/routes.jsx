import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Pokedex from './pages/Pokedex/Pokedex'
import Details from './pages/Details/Details'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokedex',
    element: <Pokedex />,
  },
  {
    path: '/details/:id',
    element: <Details />
  }

])

export default router
