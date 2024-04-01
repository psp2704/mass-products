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
        <Route  path="/courses" element={<Services />} />
        <Route  path="/courses/excel" element={<Excel/>} />
        <Route  path="/courses/power-bi" element={<PowerBI/>} />
        <Route  path="/courses/primavera" element={<Primavera/>} />
        <Route  path="/courses/evm" element={<EVM/>} />
        <Route  path="/courses/ms-project" element={<MsProject/>} />
        <Route  path="/contact" element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
