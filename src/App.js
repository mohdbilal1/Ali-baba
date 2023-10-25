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
import SellerManageStorefront from './pages/SellerManageStorefront';
import SellerVisitorDetail from './pages/SellerVisitorDetail';
import SellerCampaigns from './pages/SellerCampaigns';
import SellerProductList from './pages/SellerProductList';
import SellerContact from './pages/SellerContact';
import SellerHelpCenter from './pages/SellerHelpCenter';
import SellerGetApp from './pages/SellerGetApp';
import SellerOrders from './pages/SellerOrders';
import SellerPricing from './pages/SellerPricing';
import LoginPage from './Components/LoginPage';
import HelpCenterFAQ from './Components/HelpCenterFAQ';
import SignUpPage from './Components/SignUpPage';
import SafeAndEasyPayment from './pages/SafeAndEasyPayment';
import MoneyBackPolicy from './pages/MoneyBackPolicy';
import ShippingAndLogisticService from './pages/ShippingAndLogisticsServices';
import AfterSales from './pages/AfterSales';
import TradeAssurance from './pages/TradeAssurance';
import VideoTutorials from './pages/VideoTutorials';


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
          <Route path='/manage-storefront' element={<SellerManageStorefront />} />
          <Route path='/visitor' element={<SellerVisitorDetail />} />
          <Route path='/campaigns' element={<SellerCampaigns />} />
          <Route path='/product-list' element={<SellerProductList />} />
          <Route path='/contact-page' element={<SellerContact />} />
          <Route path='/help-center' element={<SellerHelpCenter />} />
          <Route path='/get-app' element={<SellerGetApp />} />
          <Route path='/seller-order' element={<SellerOrders />} />
          <Route path='/supplier-pricing' element={<SellerPricing />} />
          <Route path='/login_area' element={<LoginPage />} />
          <Route path='/FAQ' element={<HelpCenterFAQ />} />
          <Route path='/signup-page' element={<SignUpPage />} />
          <Route path='/safe-and-easy-payment' element={<SafeAndEasyPayment />} />
          <Route path='/money-back-policy' element={<MoneyBackPolicy />} />
          <Route path='/shipping-logistic-service' element={<ShippingAndLogisticService />} />
          <Route path='/after-sales' element={<AfterSales />} />
          <Route path='/trade-assurance' element={<TradeAssurance />} />
          <Route path='/video-tutorials' element={<VideoTutorials />} />



        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
