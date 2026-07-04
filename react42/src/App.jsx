
import { Suspense } from 'react'
import './App.css'
// import DaisyNav from './assets/components/daisynav/DaisyNav'
// import NavBar from './assets/components/navbar/NavBar'
import PricingOptions from './assets/components/pricingoptions/PricingOptions'
import ResultsChart from './assets/components/resultschart/ResultsChart';
import axios from 'axios';
import MarksChart from './assets/components/markschart/MarksChart';


const pricingPromise = fetch('pricingdata.json').then((res) => res.json());
const marksPromise =  axios.get('marksData.json');


function App() {


  return (
		<>
			<header>
				{/* <NavBar></NavBar> */}
				{/* <DaisyNav></DaisyNav> */}
			</header>

			<main>
				<Suspense
					fallback={
						<span className="loading loading-spinner loading-xl"></span>
					}>
					<PricingOptions pricingPromise={pricingPromise}></PricingOptions>
				</Suspense>
				<ResultsChart></ResultsChart>
				<Suspense
					fallback={
						<span className="loading loading-spinner loading-xl"></span>
					}>
						<MarksChart marksPromise={marksPromise}></MarksChart>
					</Suspense>
			</main>
		</>
	);
}

export default App
