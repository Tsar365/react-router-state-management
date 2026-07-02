import Link from "./Link";

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
	return (
		<nav>
			<ul>
				{navigationData.map((route) => (
					<Link
						key={route.id}
						route={route}></Link>
				))}
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
		</nav>
	);
};

export default NavBar;
