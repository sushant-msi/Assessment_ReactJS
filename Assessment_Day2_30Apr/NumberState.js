import {useState} from "react";

function NumberState()
{
    let [number, setCount] = useState(0);
	
	
    function incrementNumber()
    {
        setCount(number+1); //increases the current value by 1 and re-renders
        console.log(number);
    }

    function decrementNumber()
    {
        setCount(number-1);  //decreases current value by 1 and re-renders
        console.log(number);
    }

    function resetNumber()
    {
        setCount(0);		//set current value to 0 and re-renders
        console.log(number);
    }


    return (
        <div>
            <h1>{number}</h1>
            <button onClick={incrementNumber}>Increment</button>
            <button onClick={decrementNumber}>Decrement</button>
            <button onClick={resetNumber}>Reset</button>
        </div>    
    );
}

export default NumberState;