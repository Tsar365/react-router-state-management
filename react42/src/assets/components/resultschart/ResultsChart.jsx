// import React from 'react';

import { LineChart, Line } from "recharts";

const resultData = [
	{
		id: 1,
		name: 'Alice Johnson',
		physics: 85,
		chemistry: 88,
		math: 92,
	},
	{
		id: 2,
		name: 'Brian Smith',
		physics: 78,
		chemistry: 81,
		math: 75,
	},
	{
		id: 3,
		name: 'Catherine Lee',
		physics: 91,
		chemistry: 94,
		math: 96,
	},
	{
		id: 4,
		name: 'David Brown',
		physics: 67,
		chemistry: 72,
		math: 70,
	},
	{
		id: 5,
		name: 'Emma Wilson',
		physics: 88,
		chemistry: 90,
		math: 87,
	},
	{
		id: 6,
		name: 'Frank Miller',
		physics: 73,
		chemistry: 69,
		math: 77,
	},
	{
		id: 7,
		name: 'Grace Taylor',
		physics: 95,
		chemistry: 93,
		math: 98,
	},
	{
		id: 8,
		name: 'Henry Davis',
		physics: 82,
		chemistry: 79,
		math: 84,
	},
	{
		id: 9,
		name: 'Isabella Moore',
		physics: 89,
		chemistry: 91,
		math: 90,
	},
	{
		id: 10,
		name: 'Jack Anderson',
		physics: 76,
		chemistry: 74,
		math: 80,
	},
];

const ResultsChart = () => {
	return (
		<div>
			<LineChart
				width={600}
				height={400}
				data={resultData}>
				<Line
					type="monotone"
					dataKey="physics"
					stroke="#8884d8"
				></Line>
		
				<Line
					type="monotone"
					dataKey={'math'}
					stroke="#8884d8"
				></Line>
			</LineChart>
		</div>
	);
};


export default ResultsChart;