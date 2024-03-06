import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import EVM from './components/Services/EVM';
import Excel from './components/Services/Excel';
import Footer from './components/Footer';
import Primavera from './components/Services/Primavera';
import PowerBI from './components/Services/PowerBI';
import MsProject from './components/Services/MsProject';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/services" element={<Services />} />
        <Route  path="/services/excel" element={<Excel/>} />
        <Route  path="/services/power-bi" element={<PowerBI/>} />
        <Route  path="/services/primavera" element={<Primavera/>} />
        <Route  path="/services/evm" element={<EVM/>} />
        <Route  path="/services/ms-project" element={<MsProject/>} />
        <Route  path="/contact" element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
