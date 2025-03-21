import "./App.css";
import Navbar from "./components/global/Navbar";

function App() {
	return (
		<div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
			<Navbar />
			<Login />
		</div>
	);
}

export default App;
