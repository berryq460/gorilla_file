//import css file to overlay over xthml react file
import "./Receipt.css"

const Receipt = ({person, ...data}) => { //spread operator ES6 employed to pass in all data arguments and return the html you want to see using .notation, but can use destructuring too 
    return ( //manipulate classes of reciept containter, cost in the Reciept.css specific file
        <div className="receipt-container">  
            <h1>Gorilla Receipt Tracker</h1> 
            <h3>Bill for: {(person).toUpperCase()}</h3>
            <ul> 
                <li><span class="receipt-titles">Main:</span> {data.order.main}</li>
                <li><span class="receipt-titles">Protein:</span> {data.order.protein}</li>
                <li><span class="receipt-titles">Rice:</span> {data.order.rice}</li>
                <li><span class="receipt-titles">Sauce:</span> {data.order.sauce}</li>
                <li><span class="receipt-titles">Drink:</span> {data.order.drink}</li>

                
                <li class="cost">
                    <span class="receipt-titles cost">Total Cost:</span>$ 
                    <span class="cost-amount"> {data.order.cost}</span>
                </li>
            </ul>
        </div>
    )
}


export default Receipt;