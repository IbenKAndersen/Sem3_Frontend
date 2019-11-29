import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import cancel_icon from "../img/delete.png";
import "bootstrap/dist/css/bootstrap.min.css";
import apiFacade from "../apiFacade";

const URL = "http://localhost:3000/orders";

const MyPage = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [Error, setError] = useState("");
  const [orderId, setOrderId] = useState({ id: "" });

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
    setOrderId({ id: evt.target.value });
  };

  const handleSubmit = id => {
    //evt.preventDefault();
    apiFacade.deleteOrder(id);
    setOrderId({ id: "" });
  };

  return (
    <div>
      <h2>Welcome to your page</h2>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Pickup Date</th>
              <th>Pickup Point</th>
              <th>Dropoff Date</th>
              <th>Dropoff Point</th>
              <th>Car</th>
              <th>Equipment</th>
              <th>Insurance</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.id}</td>
                  <td>{value.date[0]}</td>
                  <td>{value.pickupPoint.Details}</td>
                  <td>{value.date[1]}</td>
                  <td>{value.dropoffPoint.Details}</td>
                  <td>{value.car.make}</td>
                  <td>
                    {value.equipment.map((value, i) => {
                      return <div key={i}>{value.name}</div>;
                    })}
                  </td>
                  <td>{value.insurance.name}</td>
                  <td>
                    <Button
                      variant="light"
                      type="Submit"
                      onClick={() => handleSubmit(value.id)}
                    >
                      <img src={cancel_icon} alt="cancel icon" />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
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

/**<p>
<b>Delete my Order</b>
</p>
<form onSubmit={handleSubmit}>
<input
type="number"
name="orderId"
value={orderId.id}
onChange={handleChange}
required
min="1"
max="999"
/>
<input type="submit" value="Delete" />
</form>*/
