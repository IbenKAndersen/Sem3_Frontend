import React, { useState, useEffect } from "react";
import JSONPretty from 'react-json-pretty';

const CarSelection = () => {
    const carURL = "http://localhost:3000/cars"
  const [hasError, setErrors] = useState(false);
  const [cars, setCars] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(carURL);
      res
        .json()
        .then(res => setCars(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  },[]);

  console.log(hasError);

  return (
    <section >
  <div ><pre>
    <div >
      <p> </p>
      <h1> </h1>
    </div>
    <span className="planets"><JSONPretty id="json-pretty" data={cars}></JSONPretty></span>
      <hr />

      </pre></div>
</section>
  );
};
export default CarSelection;