import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import cancel_icon from "../img/delete.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Facade from "../apiFacade";

const URL = "http://localhost:3000/orders";

const MyPage = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(URL);
      res
        .json()
        .then(res => setMyOrders(res))
        .catch(err => {
          alert("Error: " + err)
        });
    }
    fetchData();
  }, []);

  const handleSubmit = id => {
    Facade.deleteOrder(id);
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
                  <td>{value.date.from}</td>
                  <td>{value.pickupPoint.address}</td>
                  <td>{value.date.to}</td>
                  <td>{value.dropoffPoint.address}</td>
                  <td>{value.car.make.name + " " + value.car.model.name}</td>
                  <td>
                    {value.equipment.map((value, i) => {
                      return <div key={i}>{value.label}</div>;
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
