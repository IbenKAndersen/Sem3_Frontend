import React, { useState, useEffect } from "react";
import Select from "react-select";
import Calendar from "react-calendar";
import facade from "../apiFacade";

export default function Order() {
  const initialValue = { id: null,  pickupPoint: "", dropoffPoint: "", car: "", equipment: "", date: null };
  const [selectedOption, setSelectedOption] = useState();
  const [selectedDropoff, setSelectedDropoff] = useState();
  const [selectedCar, setSeletectedCar] = useState("");
  const [options, setOptions] = useState();
  const [cars, setCars] = useState();
  const [equipment, setEquipment] = useState();
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [date, setDate] = useState(new Date());
  const [order, setOrder] = useState(initialValue);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    setOrder({ ...order, pickupPoint: selectedOption.value });
  };
  const handleChangedropoff = selectedDropoff => {
    setSelectedDropoff(selectedDropoff);
    setOrder({ ...order, dropoffPoint: selectedDropoff.value });
  };
  const handleCarChange = selectedCar => {
    setSeletectedCar(selectedCar);
    setOrder({ ...order, car: selectedCar.value });
  }
  const handleEquipmentChange = selectedEquipment => {
    setSelectedEquipment(selectedEquipment);
    setOrder({ ...order, equipment: selectedEquipment.value });
  }

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
    fecthLocationData();
    fecthLocationCarsData();
    fetchEquipmentData();
  }, []);

  const onChange = date => {
    setDate(date);
    setOrder({ ...order, date: date })
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(order);
    facade.sendOrder(order);
  };

  return (
    <div>
      <h2>
        <b>Kodebanditternes car rental </b>
      </h2>
      <p>
        {" "}
        Our site searches cheap car rental prices in over 5000 locations
        worldwide. Find your ideal car and book online today.{" "}
      </p>
      <br />
      <br />
      <h3>Choose the days that you want to rent a car</h3>
      <form onSubmit={handleSubmit}>
        <Calendar
          name="date"
          onChange={onChange}
          Startvalue={date}
          selectRange={true}
          minDate={new Date()}
        />
        <br />
        <h3>Choose pick-up location</h3>
        <Select
          name="pickupPoint"
          value={selectedOption}
          onChange={handleChange}
          options={options}
        />
        <h3>Choose drop-off location</h3>
        <Select
          name="dropoffPoint"
          value={selectedDropoff}
          onChange={handleChangedropoff}
          options={options}
        />
        <h3>Choose Brand</h3>
        <Select
          name="car"
          value={selectedCar}
          onChange={handleCarChange}
          options={cars}
        />
        <h3>Choose Equipment</h3>
        <Select 
          name="equipment"
          value={selectedEquipment}
          onChange={handleEquipmentChange}
          options={equipment}
        />
        <input type="submit" value="Order" />
      </form>
    </div>
  );
}
