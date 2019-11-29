import React, { useState, useEffect } from "react";
import Select from "react-select";
import Calendar from "react-calendar";
import facade from "../apiFacade";

export default function Order() {
  const initialValue = { id: null, date: null,  pickupPoint: "", dropoffPoint: "", car: "", equipment: [], insurance: "" };
  const [options, setOptions] = useState();
  const [cars, setCars] = useState();
  const [equipments, setEquipment] = useState();
  const [insurance, setInsurance] = useState();
  const [order, setOrder] = useState(initialValue);

  const newHandleChange = ( value, action ) => {
    if (action.name !== "equipment") {
      setOrder({...order, [action.name]: value.value})
    } else {
      setOrder({...order, equipment: [...order.equipment, value[order.equipment.length].value]})
    }
  };

  const changeDate = date => {
    setOrder({ ...order, date: date });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(order);
    facade.sendOrder(order);
  };

  useEffect(() => {
    async function fecthLocationData() {
      let response = await fetch("http://localhost:3000/locations");
      let data = await response.json();
      const list = [];

      data.forEach(element => {
        let dropDownEle = { label: element["address"], value: element };
        list.push(dropDownEle);
      });
      setOptions(list);
    }
    async function fecthLocationCarsData() {
      let response = await fetch("http://localhost:3000/cars");
      let data = await response.json();
      const list = [];

      data.forEach(element => {
        let dropDownEle = { label: element["make"], value: element };
        list.push(dropDownEle);
      });
      setCars(list);
    }
    async function fetchEquipmentData() {
      let response = await fetch("http://localhost:3000/equipment");
      let data = await response.json();
      const list = [];

      data.forEach(element => {
        let dropDownEle = { label: element["name"], value: element };
        list.push(dropDownEle);
      });
      setEquipment(list);
    }
    async function fetchInsuranceData() {
      let response = await fetch("http://localhost:3000/insurance");
      let data = await response.json();
      const list = [];

      data.forEach(element => {
        let dropDownEle = { label: element["name"], value: element };
        list.push(dropDownEle);
      });
      setInsurance(list);
    }
    fecthLocationData();
    fecthLocationCarsData();
    fetchEquipmentData();
    fetchInsuranceData();
  }, []);

  return (
    <div>
      <h2>
        <b>Kodebanditternes car rental </b>
      </h2>
      <p>
        Our site searches cheap car rental prices in over 5000 locations
        worldwide. Find your ideal car and book online today.
      </p>
      <br />
      <br />
      <h3>Choose the days that you want to rent a car</h3>
      <form onSubmit={handleSubmit}>
        <Calendar
          onChange={changeDate}
          //Startvalue={date}
          selectRange={true}
          minDate={new Date()}
        />
        <br />
        <h3>Choose pick-up location</h3>
        <Select
          name="pickupPoint"
          //value={selectedOption}
          onChange={newHandleChange}
          options={options}
        />
        <h3>Choose drop-off location</h3>
        <Select
          name="dropoffPoint"
          //value={selectedDropoff}
          onChange={newHandleChange}
          options={options}
        />
        <h3>Choose Brand</h3>
        <Select
          name="car"
          //value={selectedCar}
          onChange={newHandleChange}
          options={cars}
        />
        <h3>Choose Equipment</h3>
        <Select 
          name="equipment"
          //value={selectedEquipment}
          isMulti
          closeMenuOnSelect={false}
          onChange={newHandleChange}
          options={equipments}
        />
        <h3>Choose Insurance</h3>
        <Select 
          name="insurance"
          //value={selectedInsurance}
          onChange={newHandleChange}
          options={insurance}
        />
        <input type="submit" value="Order" />
      </form>
    </div>
  );
}
