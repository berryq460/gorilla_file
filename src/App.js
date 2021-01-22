//App.js imports or keeps track of all files in your App
//step 1 is to import all the files/packages needed including usestate
import "./App.css";
import info from "./components/Records";
import { useState } from "react";
import Receipt from "./components/Receipt";
//next create a function with use state that creates t
function App() {
	const [receipts, setReceipts] = useState(info); //set use state and specific argument = to array & 
	return (
		<div className="App-container"> 
			{receipts.map((personalBill, index) => { //.map popularly used in react to preform a function over an array and save results to a new array
				return <Receipt {...personalBill} key={index} />;
			})}
		</div>
	);
}

export default App;