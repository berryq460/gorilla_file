//Step 1 import everything you need + incl UseState
import "./App.css"; //css for the app index.css is css for an individual component
import info from "./components/Records.js"; //import data u need
import { useState } from "react";// standard protocol when utilizing use state
import Receipt from "components/Receipt";

//Step 2
//Add the receipt to the state of the app 
function App() {
const [receipts, setReceipts] = useState(receipts)// use state returns current state and  function it updates = useState(0) 


//Step 3 
//Make a receipt component that renders the first reciepts
return (
  <div className="App-container">
    {receipts.map((personalDish, index) => {
      return <Receipt {...personalDish} key={index} />;
    })}
  </div>
);
}
export default App;