import Link from './Link';
import { SquareMenu } from 'lucide-react';
import { useState } from 'react';
import { CircleX } from 'lucide-react';

// import React from 'react';
const navigationData = [
	{
		id: 1,
		name: 'Home',
		path: '/',
	},
	{
		id: 2,
		name: 'About',
		path: '/about',
	},
	{
		id: 3,
		name: 'Services',
		path: '/services',
	},
	{
		id: 4,
		name: 'Blog',
		path: '/blog',
	},
	{
		id: 5,
		name: 'Contact',
		path: '/contact',
	},
];

const NavBar = () => {
	const [open, setOpen] = useState(false);

	const links = navigationData.map((route) => (
		<Link
			key={route.id}
			route={route}></Link>
	));

	return (
		<nav className="bg-green-800 p-4 text-white flex justify-between mx-10">
			<span
				className="flex items-center space-x-2"
				onClick={() => setOpen(!open)}>
				{open ? (
					<CircleX className="md:hidden"></CircleX>
				) : (
					<SquareMenu className="md:hidden"></SquareMenu>
				)}

				<h3>My navbar</h3>
			</span>
			<ul>
				{/* {navigationData.map((route) => (
					 <Link
						key={route.id}
						 route={route}></Link>
				 ))} */}

				{links}
			</ul>
			<ul className="flex space-x-4 bg-red-800 p-4 text-white">
				{navigationData.map((item) => (
					<li key={item.id}>
						<a href={item.path}>{item.name}</a>
					</li>
				))}
			</ul>
			<ul className="flex space-x-4 bg-gray-800 p-4 text-white">
				<li className="mr-10">
					<a href="#">Home</a>
				</li>
				<li className="mr-10">
					<a href="/about">About</a>
				</li>
				<li className="mr-10">
					<a href="/contact">Contact</a>
				</li>
			</ul>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">click me</button>
			
      <ul classname='md:flex hidden'>
        {links}
      </ul>
		</nav>
	);
};

export default NavBar;
