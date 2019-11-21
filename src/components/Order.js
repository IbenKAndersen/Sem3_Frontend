import React, { useState, useEffect } from "react";
import Select from "react-select";

export default function Order() {
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState();

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  useEffect(() => {
    async function fecthData() {
      let response = await fetch("http://localhost:3000/locations");
      let data = await response.json();
      const list = [];

      data.forEach(element => {
        let dropDownEle = { label: element["address"], value: element };
        list.push(dropDownEle);
      });
      setOptions(list);
    }
    fecthData();
  }, []);

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

      <form>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
        />

        <p>
          <i>
            <b>Make</b>
          </i>
          <form id="make">
            <select name="dropdown">
              <option value="Audi" selected>
                Audi
              </option>
              <option value="Bentley">Bentley</option>
              <option value="....">....</option>
            </select>
          </form>
        </p>

        <p>
          <i>
            <b>Model</b>
          </i>
          <form id="model">
            <select name="dropdown2">
              <option value="A4" selected>
                A4
              </option>
              <option value="....">....</option>
            </select>
          </form>
        </p>

        <p>
          <i>
            <b>Equipment</b>
          </i>
          <br />
          <input type="checkbox" name="aircon" value="aircon" />
          <i>Aircondition</i>
          <input type="checkbox" name="babyseat" value="babyseat" />
          <i>Baby seat</i>
          <input type="checkbox" name="trailer" value="trailer" />
          <i>Trailer</i>
        </p>

        <p>
          <i>
            <b>Insurance</b>
          </i>
          <br />
          <input type="checkbox" name="insurance" value="yes" />{" "}
          <i>I want to buy insurance for the car</i>
          <br />
          <input type="checkbox" name="noinsurance" value="no" />{" "}
          <i>I already have insurance</i>
        </p>
        <p id="details">some text</p>

        <input type="submit" value="Search for cars" />
      </form>
    </div>
  );
}
