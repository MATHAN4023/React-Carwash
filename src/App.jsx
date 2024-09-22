import './App.css';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import Nav from "./Components/Nav";
import Videoplayer from "./Components/Videoplayer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Nav />
      <div className="hero hw100 bgr"></div>
      <Videoplayer />
      <Aboutus/>
      <Services />
      
      <div className="Counters-page w100"></div>
      <div className="Franchise hw100"></div>
      <div className="Gallery hw100"></div>
      <div className="Contactus hw100"></div>
      <div className="Map hw100"></div>
      <div className="FQA hw100"></div>
      <div className="Footer hw100"></div>

    </>
  );
}

export default App;
