import React from "react";
import Calendar from 'react-calendar'

export default class Order extends React.Component {
  state = {
    date: new Date(),
  }
  onChange = date => this.setState({ date })
  render() {
  return (
    <div>
      <h2><b>Kodebanditternes car rental </b></h2>
      <p>
        {" "}
        Our site searches cheap car rental prices in over 5000 locations
        worldwide. Find your ideal car and book online today.{" "}
      </p>
      <br/><br/><h3>Choose a start date for your trip</h3>
      <p><Calendar 
      onChange={this.onChange}
      Cvalue={this.state.date}/></p>
      {console.log(this.state.date)}
      <form>
      <p>
        <i><b>Make</b></i>
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
        <i><b>Model</b></i>
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
        <i><b>Equipment</b></i>
        <br />
        <input type="checkbox" name="aircon" value="aircon" /><i>Aircondition</i>
        <input type="checkbox" name="babyseat" value="babyseat" /><i>Baby seat</i>
        <input type="checkbox" name="trailer" value="trailer" /><i>Trailer</i>
      </p>

      <p>
        <i><b>Insurance</b></i>
        <br />
        <input type="checkbox" name="insurance" value="yes" />{" "}
        <i>I want to buy insurance for the car</i>
        <br />
        <input type="checkbox" name="noinsurance" value="no" />{" "}
        <i>I already have insurance</i>
      </p>
      <p id="details">
          some text
      </p>

      <input type="submit" value="Search for cars"/>

      </form>
    </div>
  );}
}
