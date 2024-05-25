import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import Navbar from './components/Navbar/Navbar';
import ReactGA from "react-ga";







const TRACKING_ID = "UA-230847879-1"

ReactGA.initialize(TRACKING_ID);





function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={OurServices} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
