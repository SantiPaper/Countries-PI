import Homee from "./components/Home/home";
import DetailCountries from "./components/CountryDetail/countryDetail"
import { BrowserRouter, Route } from "react-router-dom";
import CreateActivity from "./components/CreateActivity/createActivity";
import LaningPage from "./components/LandingP/landingP";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LaningPage} />
        <Route exact path="/home" component={Homee} />
        <Route exact path='/home/:idApi' component={DetailCountries} />
        <Route exact path="/createActivity" component={CreateActivity} />
      </div>
    </BrowserRouter>
  );
}

export default App;
