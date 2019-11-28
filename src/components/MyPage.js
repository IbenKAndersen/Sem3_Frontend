import React, { useEffect, useState } from "react";
import ReactTable from 'react-table';

import apiFacade from "../apiFacade";

const URL = "http://localhost:3000/orders";

const MyPage = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [Error, setError] = useState("");
  const [orderId, setOrderId] = useState({id: ""});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(URL);
      res
        .json()
        .then(res => setMyOrders(res))
        .catch(err => setError(err));
    }
    fetchData();
  }, []);

  const handleChange = evt => {
    setOrderId({ id: evt.target.value});
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    apiFacade.deleteOrder(orderId.id)
    setOrderId({id: ""});
  }

  const columns = [{
    Header: 'Car',
    accessor: 'car.make' // String-based value accessors!
  }, {
    Header: 'Equipment',
    accessor: 'equipment.name',
  }, {
    Header: 'Insurance',
    accessor: 'insurance.name',
  }, {
    Header: 'PickupPoint',
    accessor: 'pickupPoint.address'
  }]

  return (
    <div>
      <h2>Welcome to your page</h2>
      <ReactTable
        data={myOrders}
        columns={columns}
      />
      <p><b>Delete my Order</b></p>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          name="orderId"
          value={orderId.id}
          onChange={handleChange}
          required
          min="1" max="999"
        />
        <input 
          type="submit" 
          value="Delete" 
        />
      </form>
      
    </div>
  );
};
export default MyPage;

/**const MyOrderTable = () => {
    const [myOrders, setMyOrders] = useState([]);
    const table = [<tr>, <th>, Test, </th>, </tr>];

    myOrders.map(order => {
      return (
        table.push(<tr>),
        table.push(<td> + order.car.label + </td>),
        table.push(</tr>)
      );
    });

    console.log(table)
    return (
        table.join(" ")
    );
};*/
