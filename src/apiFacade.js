const URL = "https://kodebanditterne.dk/Sem3_Backend";
const ORDER_URL = "http://localhost:3000/orders";
function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

class ApiFacade {
  //Insert utility-methods from a latter step (d) here
  makeOptions(method, addToken, body) {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    if (addToken && this.loggedIn()) {
      opts.headers["x-access-token"] = this.getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }

  makeOptionsWithoutToken(method, body) {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json'
      }
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }

  setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
  getToken = () => {
    return localStorage.getItem('jwtToken')
  }
  loggedIn = () => {
    const loggedIn = this.getToken() != null;
    return loggedIn;
  }
  logout = () => {
    localStorage.removeItem("jwtToken");
  }

  login = (user, pass) => {
    const options = this.makeOptions("POST", true, { username: user, password: pass });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then(res => { this.setToken(res.token) })
  }

  fetchData = () => {
    const options = this.makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/info/user", options)
      .then(handleHttpErrors);
  }

  fetchDatabase = (location) => {
    const options = this.makeOptions("GET", true); //True add's the token
    return fetch(URL + location, options)
      .then(handleHttpErrors);
  }

  sendOrder = (order) => {
    const options = this.makeOptionsWithoutToken("POST", order);
    return fetch(ORDER_URL, options)
      .then(handleHttpErrors);
  }

  deleteOrder = (orderId) => {
    const options = this.makeOptionsWithoutToken("DELETE");
    return fetch([ORDER_URL + "/" + orderId], options)
      .then(handleHttpErrors);
  }
}
const facade = new ApiFacade();



export default facade;
