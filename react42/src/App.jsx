
import { Suspense } from 'react'
import './App.css'
// import DaisyNav from './assets/components/daisynav/DaisyNav'
// import NavBar from './assets/components/navbar/NavBar'
import PricingOptions from './assets/components/pricingoptions/PricingOptions'
import ResultsChart from './assets/components/resultschart/ResultsChart';


const pricingPromise = fetch('pricingdata.json').then((res) => res.json());


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
			</main>
		</>
	);
}

export default App
