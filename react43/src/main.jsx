import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/home/home.jsx'
import Laptops from './components/laptops/Laptops.jsx'
import Mobiles from './components/mobiles/Mobiles.jsx'
// import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './components/root/Root';

let router = createBrowserRouter([
	{
		path: '/',
		Component: Root,
		children:[
			{index:true, Component: Home},
			{path:'laptops', Component: Laptops},
			{path:'mobiles', Component: Mobiles},
		]
	},
	{
		path: 'about',
		element: <div> about</div>,
	},
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
