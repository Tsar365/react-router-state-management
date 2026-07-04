// import React from 'react';
import { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
	const marksDataRes = use(marksPromise);
	const marksData = marksDataRes.data;
	// console.log(marksData);

	// data processing for chart:
	const marks = marksData.map((item) => {
		const student = {
			id: item.id,
			name: item.name,
			age: item.age,
			marks: item.marks,
			physics: item.marks.physics,
			chemistry: item.marks.chemistry,
			math: item.marks.math,
		};
		const avg = (student.physics + student.chemistry + student.math) / 3;
		student.average = avg;
		return student;
	});
	console.log(marks);
	return (<div>
    <BarChart width={600} height={300} data={marks}>
      <XAxis dataKey="name" />
      <YAxis />
<Bar dataKey="physics" fill="#8884d8" />
      <Bar dataKey="chemistry" fill="#82ca9d" />
      <Bar dataKey="math" fill="#ffc658" />
    </BarChart>
  </div>);
};

export default MarksChart;
