import Homee from "./components/Home/home";
import DetailCountries from "./components/CountryDetail/countryDetail"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CreateActivity from "./components/CreateActivity/createActivity";
import LaningPage from "./components/LandingP/landingP";
import Error from "./components/404Error/error";
import "./App.css";
import AboutMe from "./components/AboutMe/aboutMe";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Homee} />
          <Route exact path="/home/about" component={AboutMe} />
          <Route exact path='/home/:idApi' component={DetailCountries} />
          <Route exact path="/createActivity" component={CreateActivity} />
          <Route path="*" component={Error} />
          {/* <Redirect to="/home/error" /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
