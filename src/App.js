import DetailsCounter from "./components/DetailsCounter";
import ExpertAnalysis from "./components/ExpertAnalysis";
import Footer from "./components/Footer";
import GrowthJourney from "./components/GrowthJourney";

function App() {
	return (
		<div className="dark:bg-black dark:text-white overflow-hidden">
			<GrowthJourney />
			<ExpertAnalysis />
			<DetailsCounter />
			<Footer />
		</div>
	);
}

export default App;
