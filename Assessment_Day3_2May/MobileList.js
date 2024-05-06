//define booklist component

import {useState} from "react";
import './css/MobileStyle.css';

function MobileList()
{
    let[mobileArray, setMobileArray] = useState([
        {name: "Samsung Galaxy S23", description: "Entry level S series phone", price: 60000, rating: 3.9, inStock: true},
        {name: "Samsung Galaxy S23 Plus", description: "Mid level S series phone", price: 75000, rating: 4.0, inStock: true},
        {name: "Samsung Galaxy S23 Ultra", description: "The most powerful S series mobile", price: 100000, rating: 4.5, inStock: true},
        {name: "Samsung Galaxy S23 FE", description: "Fan edition of S23 series", price: 35000, rating: 3.5, inStock: false},
        {name: "Samsung Galaxy S24", description: "Entry level S series phone", price: 70000, rating: 4.2, inStock: true},
        {name: "Samsung Galaxy S24 Plus", description: "Mid level S series phone", price: 85000, rating: 4.1, inStock: true},
        {name: "Samsung Galaxy S24 Ultra", description: "The most powerful S series mobile", price: 115000, rating: 4.8, inStock: true},
        {name: "Samsung Galaxy S24 FE", description: "Fan edition of S24 series", price: 40000, rating: 3.9, inStock: false}
    ]);

    return(
        <div>
            <h1>Mobile List</h1>
            <table className="table"> 
                <tr>
                    <th className="header">Name</th>
                    <th className="header">Description</th>
                    <th className="header">Price</th>
                    <th className="header">Rating</th>
                    <th className="header">Stock Status</th>
                </tr>
                {mobileArray.map( (mobile) => (                                                         
                <tr className="tr">
                            <td className="dataDesc">{mobile.name}</td>
                            <td className="dataDesc">{mobile.description}</td>
                            <td className="data">{mobile.price}</td>
                            <td className="data">{mobile.rating}</td>
                            <td className={mobile.inStock ? "dataInStock":"dataOutofStock"}>{mobile.inStock ? "In Stock":"Out of Stock"} </td>
                 </tr>                       
                 ))}
            </table>      
        </div>
    );
}

export default MobileList;