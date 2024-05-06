import {useEffect, useState} from 'react';

//1. **State Initialization:**
//2. **Implementing `useEffect` with Different Dependencies:**
function Counter()
{
    let [counter,setCounter] = useState(0);
    let [name, setName] = useState();

    //useeffect for Empty dependency array, this will be called only during first load
    useEffect (() =>{
        console.log("Empty Dependency array");
        }, []
    );

    //useeffect with no dependency, this will be called everytime when state changes
    useEffect (() =>{
        console.log("No Dependency");
        }
    );

    //useeffect with name as dependency array, this will be called everytime name changes
    useEffect (() =>{
        console.log("Name as dependency");
        },[{name}]
    );

    //useeffect with counter as dependency array, this will be called everytime counter changes
    useEffect (() =>{
        console.log("Counter as dependency");
        },[{counter}]
    );

    //useeffect with both name and counter as dependency array, this will be called everytime counter or name changes
    useEffect (() =>{
        console.log("Counter and name both as dependency");
        },[{counter},{name}]
    );

    function incrementCounter()
    {
        setCounter(counter+1);
    }

    //function to append 'a' to the name provided in input field when clicked on submit button
    function updateName()
    {
        let newName;
        
        //if name is empty or undefined get it from the textbox
        if (name === '' || name === undefined)
        {
            newName  = document.getElementById("username").value;
        }
        //get the previous rendered value
        else
            newName = name;

        //append the last name with 'a'
        setName(newName+'a'); 
    }

    return (
        <div>
            <h1>{counter}</h1>
            <br></br>
            <h1>{name}</h1>
            <input type="text" id="username" name="username"></input>
            <br></br>
            <button onClick={function(event){ incrementCounter(); updateName()}}>Modify Data</button>
        </div>    
    );
}

export default Counter;