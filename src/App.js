import React, {useState} from "react";
import GroceryList from "./GroceryList.js";
import GroceryListParameter from "./GroceryListParaneter.js";
import SubscriberForm from "./SubscriberForm.js";
import CoinTossCounter  from "./CoinTossCounter.js";
import UserList from "./UserList.js";

function App() {

  const [clickCount, setClickCount] = useState(0);
  const [subcribedFlag, setSubscribedFlag] = useState(false);

  const handleClick = (event) => {
    console.log("Button Clicked");
    event.preventDefault();

    setClickCount((currentCount) => currentCount + 1);
    setSubscribedFlag(!subcribedFlag);
  }


  //const GroceryList = ["Potato", "Onion", "Zuchinni", "Cauliflower", "Brocolli"];
  const GroceryList = [
    {name:"Potato", quantity: 4}, 
    {name:"Onion", quantity: 5}, 
    {name:"Zuchinni", quantity: 6}, 
    {name: "Cauliflower", quanitty: 7}, 
    {name: "Brocolli", quantity: 10},
    {name: "Potol", quantity: 20},
    {name: "Alooo", quantity: 30}


  
  ];

    const [listForItems, setListForItems] = useState(GroceryList);


  return (
  <div>


   <UserList/>
  </div>);

  
}

export default App;