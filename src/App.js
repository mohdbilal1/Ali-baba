import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConsumerElectronics from './pages/ConsumerElectronics';
import ConsumerElectronicsHeadPhones from './pages/ConsumerElectronicsHeadPhones';
import SendOrderReq from './Components/SendOrderReq';
import SendEnquiry from './Components/SendEnquiry';
import CompanyPage from './pages/CompanyPage';


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />  
          <Route path='/consumer-electronics' element={<ConsumerElectronics />} />  
          <Route path='/consumer-electronics/headphone-pge' element={<ConsumerElectronicsHeadPhones />} /> 
          <Route path='/order-request' element={<SendOrderReq />} /> 
          <Route path='/send-enquiry' element={<SendEnquiry />} /> 
          <Route path='/company-page' element={<CompanyPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
