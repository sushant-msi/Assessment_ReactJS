import React,{ useState } from "react";

function OrderStatus(){
    const [order, setOrder] = useState({
        id: 'ORD123',
        status: 'Processing',
        customer: 'John Doe',
        items: 3
        });

        function updatestatus()
        {
            setOrder({...order,status:document.getElementById("statuslist").value}); //set the status by reading dropdown value and re-renders
        }

        return (
            <div>
                <h1>{order.id}</h1>
                <h1>{order.status}</h1>
                <h1>{order.customer}</h1>
                <h1>{order.items}</h1>
                <select name="statuslist" id="statuslist">
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                </select>
                <button onClick={updatestatus}>Update Status</button>
            </div>    
        );
}

export default OrderStatus;