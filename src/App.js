import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConsumerElectronics from './pages/ConsumerElectronics';
import ConsumerElectronicsHeadPhones from './pages/ConsumerElectronicsHeadPhones';
import SendOrderReq from './Components/SendOrderReq';


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />  
          <Route path='/consumer-electronics' element={<ConsumerElectronics />} />  
          <Route path='/consumer-electronics/headphone-pge' element={<ConsumerElectronicsHeadPhones />} /> 
          <Route path='/order-request' element={<SendOrderReq />} /> 
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
