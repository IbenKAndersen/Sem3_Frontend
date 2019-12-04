import React, { Component } from "react"
import facade from "./apiFacade";
import Order from "./components/Order";
import Location from "./components/Location";
import { BrowserRouter as Router, Route, NavLink, Switch, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import CarSelection from "./components/CarSelection";
import MyPage from "./components/MyPage";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
      <div style={{width : window.outerWidth/4, padding : "25px", margin : "auto" }}>
        <Form onSubmit={this.login} onChange={this.onChange} >
          <Form.Group controlId="username">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter User Name" required />
            <Form.Text className="text-muted">
              We'll never share your info with anyone else.
            </Form.Text>
          </Form.Group>
            <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
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
        <Header logout={this.props.logout} />
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
        {/* {this.state.loggedIn ? (<LogIn login={this.login} />) : */}
        {!this.state.loggedIn ? (<LogIn login={this.login} />) :
          (
            <Router>
              <div>
                <LoggedIn logout={this.logout} />
                
              </div>
            </Router>
          )}
      </div>
    )
  }
}
export default App;

const Header = (props) => {
  
  return (
    <div className="header">
      <div className="container">
        <ul className="header_list">
          <li><NavLink exact className="button" activeClassName="active" to="/">Order</NavLink></li>
          <li><NavLink className="button" activeClassName="active" to="/carSelection">Orders</NavLink></li>
          <li><NavLink className="button" activeClassName="active" to="/location">Location</NavLink></li>
          <li><NavLink className="button" activeClassName="active" to="/myPage">My Page</NavLink></li>
        </ul>
        <Link className="logout" to="/" onClick={props.logout}>Logout</Link>
      </div>
    </div>
  );
};

const Content = () => {
  return (

    <Switch>
      <Route exact path="/"><Order /></Route>
      <Route path="/carSelection"><CarSelection /></Route>
      <Route path="/location"><Location /></Route>
      <Route path="/myPage"><MyPage /></Route>
    </Switch>

  )
}