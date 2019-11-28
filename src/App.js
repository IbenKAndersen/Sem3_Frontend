import React, { Component } from "react"
import facade from "./apiFacade";
import Order from "./components/Order";
import Location from "./components/Location";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import CarSelection from "./components/CarSelection";
import CarDetails from "./components/CarDetails";
import MyPage from "./components/MyPage";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }
  }
  login = (evt) => {
    evt.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }
  onChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value })
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.login} onChange={this.onChange} >
          <input type="text" placeholder="User Name" id="username" required />
          <input type="password" placeholder="Password" id="password" required />
          <button>Login</button>
        </form>
      </div>
    )
  }
}
class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { dataFromServer: "Fetching!!" };
  }
  componentDidMount() { facade.fetchData().then(res => this.setState({ dataFromServer: res.msg })); }
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false }
  }
  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
  }
  login = (user, pass) => {
    facade.login(user, pass)
      .then(res => this.setState({ loggedIn: true }));
  }
  render() {
    return (
      <div>
        {!this.state.loggedIn ? (<LogIn login={this.login} />) :
          (
            <Router>
              <div>
                <LoggedIn />
                <button onClick={this.logout}>Logout</button>
              </div>
            </Router>
          )}
      </div>
    )
  }
}
export default App;

const Header = () => {
  return (
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Order</NavLink></li>
      <li><NavLink activeClassName="active" to="/carSelection">Orders</NavLink></li>
      <li><NavLink activeClassName="active" to="/location">Location</NavLink></li>
      <li><NavLink activeClassName="active" to="/carDetails">Cars</NavLink></li>
      <li><NavLink activeClassName="active" to="/myPage">My Page</NavLink></li>
    </ul>
  );
};

const Content = () => {
  return (

    <Switch>
      <Route exact path="/"><Order /></Route>
      <Route path="/carSelection"><CarSelection /></Route>
      <Route path="/location"><Location /></Route>
      <Route path="/carDetails"><CarDetails /></Route>
      <Route path="/myPage"><MyPage /></Route>
    </Switch>

  )
}