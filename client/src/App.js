import Homee from "./components/Home/home";
import DetailCountries from "./components/CountryDetail/countryDetail"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CreateActivity from "./components/CreateActivity/createActivity";
import LaningPage from "./components/LandingP/landingP";
import Error from "./components/404Error/404Error.jsx";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={LaningPage} />
          <Route exact path="/home" component={Homee} />
          <Route exact path='/home/:idApi' component={DetailCountries} />
          <Route exact path="/createActivity" component={CreateActivity} />
          <Route exact path="/error" component={Error} />
          <Redirect to="/error" />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
