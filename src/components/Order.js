import React, { useState, useEffect } from "react";
import Select from "react-select";
import DatePicker from "./DatePicker";
import facade from "../apiFacade";

const colourStyles = {
  control: styles => ({
    ...styles,
    borderRadius: 0,
    widht: "50%",
    height: "40px",
    border: "1px solid #dbdbdb"
  }),
  indicatorSeparator: styles => ({
    ...styles,
    display: "none"
  }),
  indicatorsContainer: styles => ({
    ...styles,
    cursor: "pointer"
  }),
  placeholder: styles => ({
    ...styles,
    letterSpacing: ".4px",
    fontSize: "15px",
    color: "#0000007a",
    fontWeight: "200"
  }),
  container: styles => ({
    ...styles,
    height: "40px"
  })
};

export default function Order() {
  const initialValue = {
    id: null,
    date: {
      from: null,
      to: null
    },
    pickupPoint: "",
    dropoffPoint: "",
    car: "",
    equipment: [],
    insurance: ""
  };
  const [options, setOptions] = useState();
  const [cars, setCars] = useState();
  const [equipments, setEquipment] = useState();
  const [insurance, setInsurance] = useState();
  const [order, setOrder] = useState(initialValue);
  const [date, setDate] = useState({
    from: null,
    to: null
  });

  const newHandleChange = (value, action) => {
    if (action.name !== "equipment") {
      setOrder({ ...order, [action.name]: value.value });
    } else if (value !== null) {
      setOrder({ ...order, equipment: [...value] });
    }
  };

  // const changeDate = (from, to) => {
  //   setOrder({ ...order, date: { from, to } });
  // };

  const handleSubmit = evt => {
    evt.preventDefault();
    facade.sendOrder(order);
    setOrder(initialValue);
  };

  useEffect(() => {
    async function fecthLocationData() {
      const data = await facade.fetchDatabase("/api/all/locations");
      const list = data.map(element => {
        return {label: element["address"], value: element}
      })
      setOptions(list);
    }
    async function fecthLocationCarsData() {
      const data = await facade.fetchDatabase("/api/all/cars");
      const list = data.map(element => {
        return {label: element.make["name"] + " " + element.model["name"], value: element}
      })
      setCars(list);
    }
    async function fetchEquipmentData() {
      const data = await facade.fetchDatabase("/api/all/equipment")
      const list = data.map(element => {
        return { label: element["name"], value: element }
      })
      setEquipment(list);
    }
    async function fetchInsuranceData() {
      const data = await facade.fetchDatabase("/api/all/insurance")
      const list = data.map(element => {
        return { label: element["name"], value: element };
      })
      setInsurance(list);
    }
    fecthLocationData();
    fecthLocationCarsData();
    fetchEquipmentData();
    fetchInsuranceData();
  }, []);
  return (
    <div className="container" style={{top : "50px"}}>
      <div className="row" >
        <div className="col-md-12" >
          <h1 className="mainTitle">Kodebanditternes car rental</h1>
        </div>
        <div className="col-md-6 flexCenter">
          <div className="wrapTitle">
            <h3>
              Our site searches cheap car rental prices in over <b>5000 </b>
              locations worldwide.
            </h3>
            <h3>Find your ideal car and book online today.</h3>
          </div>
          <img src="/images/bg.png" alt="cars" />
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="orderForm">
            {/* <Calendar
            onChange={changeDate}
            //Startvalue={date}
            selectRange={true}
            minDate={new Date()}
          /> */}
            <div className="col-md-12">
              <div className="label">
                <img width="15px" src="/images/calendar.svg" alt="calandar" />
                Choose the days that you want to rent a car
              </div>
              <DatePicker
                from={date.from}
                to={date.to}
                setDate={(from, to) => setDate({ from, to })}
              />
            </div>
            <div className="col-md-6">
              <div className="label">
                <img
                  width="15px"
                  src="/images/magnifying-glass.svg"
                  alt="magnifying-glass"
                />
                Choose pick-up location
              </div>
              <Select
                name="pickupPoint"
                //value={selectedOption}
                onChange={newHandleChange}
                options={options}
                styles={colourStyles}
              />
            </div>
            <div className="col-md-6">
              <div className="label">
                <img
                  width="15px"
                  src="/images/magnifying-glass.svg"
                  alt="magnifying-glass"
                />
                Choose drop-off location
              </div>
              <Select
                name="dropoffPoint"
                //value={selectedDropoff}
                onChange={newHandleChange}
                options={options}
                styles={colourStyles}
              />
            </div>
            <div className="col-md-6">
              <div className="label">Choose Car</div>
              <Select
                name="car"
                //value={selectedCar}
                onChange={newHandleChange}
                options={cars}
                styles={colourStyles}
              />
            </div>
            <div className="col-md-6">
              <div className="label">Choose Equipment</div>
              <Select
                name="equipment"
                //value={selectedEquipment}
                isMulti
                closeMenuOnSelect={false}
                onChange={newHandleChange}
                options={equipments}
                styles={colourStyles}
              />
            </div>
            <div className="col-md-8">
              <div className="label">Choose Insurance</div>
              <Select
                name="insurance"
                //value={selectedInsurance}
                onChange={newHandleChange}
                options={insurance}
                styles={colourStyles}
              />
            </div>
            <div className="col-md-4">
              <button className="button" type="submit" value="Order">
                Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
