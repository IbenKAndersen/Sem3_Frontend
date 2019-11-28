import React, { useState, useEffect } from "react";

import facade from "../apiFacade";

const CarDetails = () => {
  const carURL = "http://localhost:3000/cars";
  const [cars, setCars] = useState();
  const [Error, setError] = useState("");

  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(carURL);
      res
        .json()
        .then(res => setCars(res))
        .catch(err => setError(err));
    }
    fetchData();
  }, []);

  console.log(cars);
  return (
    <div>
      <h1>Hey</h1>
    </div>
  );
}
export default CarDetails;
