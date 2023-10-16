import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConsumerElectronics from './pages/ConsumerElectronics';
import ConsumerElectronicsHeadPhones from './pages/ConsumerElectronicsHeadPhones';
import SendOrderReq from './Components/SendOrderReq';
import SendEnquiry from './Components/SendEnquiry';
import CompanyPage from './pages/CompanyPage';
import GlobalBuyerIndex from './pages/GlobalBuyerIndex';
import GlobalBuyerOrder from './pages/GlobalBuyerOrder';
import GlobalBuyerTransaction from './pages/GlobalBuyerTransaction';
import GlobalBuyerContact from './pages/GlobalBuyerContact';
import GlobalBuyerMylist from './pages/GlobalBuyerMylist';
import GlobalBuyerTradeService from './pages/GlobalBuyerTradeService';
import GlobalBuyerDropshipping from './pages/GlobalBuyerDropshipping';
import GlobalBuyerLogistic from './pages/globalBuyerLogistics';
import DropShippingImport from './pages/DropShippingImport';
import DropShippingProduct from './pages/DropShippingProduct';
import DropShippingOrder from './pages/DropShippingOrder';
import DropshippingSupplier from './pages/DropshippingSupplier';
import DropShippingBuyerAcademy from './pages/DropShippingBuyerAcademy';
import DropshippingStore from './pages/DropShippingStore';
import DropshippingSetting from './pages/DropShippingSettings';
import SellerPage from './pages/SellerPage';


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
          <Route path='/globalBuyerIndex' element={<GlobalBuyerIndex />} />
          <Route path='/order' element={<GlobalBuyerOrder />} />
          <Route path='/transaction' element={<GlobalBuyerTransaction />} />
          <Route path='/contact' element={<GlobalBuyerContact />} />
          <Route path='/mylist' element={<GlobalBuyerMylist />} />
          <Route path='/trade-service' element={<GlobalBuyerTradeService />} />
          <Route path='/dropshipping' element={<GlobalBuyerDropshipping />} />
          <Route path='/logistic' element={<GlobalBuyerLogistic />} />
          <Route path='/import' element={<DropShippingImport />} />
          <Route path='/product' element={<DropShippingProduct />} />
          <Route path='/my-order' element={<DropShippingOrder />} />
          <Route path='/supplier' element={<DropshippingSupplier />} />
          <Route path='/buyer-academy' element={<DropShippingBuyerAcademy />} />
          <Route path='/my-store' element={<DropshippingStore />} />
          <Route path='/settings' element={<DropshippingSetting />} />
          <Route path='/seller-pg' element={<SellerPage />} />


        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
