import './App.css';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import Nav from "./Components/Nav";
import Videoplayer from "./Components/Videoplayer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Contactus from './Components/Contactus';
import Counter from './Components/Counter';
import Gallery from './Components/Gallery';


function App() {
  return (
    <>
    <Nav />
      <div className="hero hw100 bgr"></div>
      <Videoplayer />
      <Aboutus/>
      {/* <Services /> */}
      Service Page
      <Counter />
      <div className="Franchise hw100"></div>
      <div className="Gallery hw100"></div>
      <Gallery />
      <Contactus/>
      <div className="Map hw100"></div>
      <div className="FQA hw100"></div>
      {/* <div className="Footer hw100"></div> */}
      <Footer />

    </>
  );
}

export default App;
