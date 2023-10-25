import { Box, Divider, List, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../stylecss/safeAndEasyPaymentStyle.css'
import Footer from "../Components/Footer";


const SafeAndEasyPayment = () => {
    return (
        <>
            <Box sx={{ p: '0 0 6px 0' }}>
                <div style={{ display: 'flex', boxShadow: '1px 1px 5px 1px lightgrey' }}>
                    <div className='p-2 ps-4 d-flex'>
                        <div className="source-div">
                            <p style={{ margin: '0 0 0 10px', padding: '6px 8px', fontSize: '14px' }}>Sourcing solutions </p>
                            <Box className='hiddenSource'>
                                <div className=" d-flex">
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Search For</h6>
                                        <p>Suppliers by region</p>
                                    </div>
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Source </h6>
                                        <p>Submit RFQ</p>
                                        <p>Instant Quotes</p>
                                        <p>RFQ Sourcing Tool</p>
                                        <p>Refer & Earn</p>
                                    </div>
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Sourcing Tool</h6>
                                        <p>Source Now Chrome Extension</p>
                                    </div>
                                </div>
                            </Box>
                        </div>
                        <div className="service-div">
                            <p style={{ margin: '0 0 0 5px', padding: '6px 8px', borderLeft: '1px solid lightgrey', fontSize: '14px' }}>Services & Membership  </p>
                            <Box className='hiddenService'>
                                <div className=" d-flex">
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Trade Services</h6>
                                        <p>Trade Assurance</p>
                                        <p>Inspection Services</p>
                                        <p>Logistics Service</p>
                                    </div>
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Membership Services </h6>
                                        <p>Buyer Business Identity</p>
                                        <p>Supplier Membership</p>
                                    </div>
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Value-Added Services </h6>
                                        <p>Urgent Request</p>
                                        <p>Extra Quotes</p>
                                    </div>

                                </div>
                            </Box>
                        </div>
                        <div className="service-div">
                            <p style={{ margin: '0 0 0 5px', padding: '6px 8px', borderLeft: '1px solid lightgrey', fontSize: '14px' }}>Help Center </p>
                            <Box className='hiddenHelp'>
                                <div className=" d-flex">
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Help Center </h6>
                                        <p>For buyers</p>
                                        <p>For suppliers</p>
                                        <p>Open a case</p>
                                        <p>Report IPR infringement</p>
                                        <p>Report abuse</p>
                                    </div>
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Community </h6>
                                        <p>Discussion Forum</p>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </div>

                    <Box sx={{ position: 'absolute', right: 60 }}>
                        <List sx={{ display: 'flex', textAlign: 'center' }}>
                            <li className='nav-list'>
                                <NavLink to='/' style={{ fontSize: '14px' }}>On Abaris</NavLink>
                            </li>

                            <li className='nav-list'>
                                <NavLink to='/' style={{ fontSize: '14px' }}><VscAccount style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />Sign In </NavLink>
                            </li>
                            <li className='nav-list'>
                                <NavLink to='/' style={{ fontSize: '14px' }}><ShoppingCartOutlinedIcon style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />order</NavLink>
                            </li>

                            <li className='nav-list'>
                                <NavLink to='/' style={{ fontSize: '14px' }} className='signInHover'><MdOutlineFavoriteBorder style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />Favorites</NavLink>
                            </li>

                        </List>
                    </Box>
                </div>

                <div className='ps-4 d-flex ms-3 me-1 pt-3'>
                    <div className=" d-flex mt-1">
                        <a href="/">
                            <img className='logo-img img-fluid' style={{ width: '100%', height: '25px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                        </a>
                        <NavLink to={'/trade-assurance'} style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '18px', fontWeight: 'bold', color: 'grey',textDecoration:'none' }}>Trade Assurance</NavLink>
                    </div>
                    <div className=" d-flex">
                        <List sx={{ display: 'flex', textAlign: 'center' }}>
                            <li style={{ margin: '0 0 0 10px' }}>
                                <NavLink to='/safe-and-easy-payment' style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Safe & easy payments</NavLink>
                            </li>

                            <li style={{ margin: '0 0 0 20px' }}>
                                <NavLink to='/money-back-policy' style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Money-back policy </NavLink>
                            </li>
                            <li style={{ margin: '0 0 0 20px' }}>
                                <NavLink to='/shipping-logistic-service' style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Shipping & logistics services</NavLink>
                            </li>

                            <li style={{ margin: '0 0 0 20px' }}>
                                <NavLink to='/after-sales' style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>After-sales protections</NavLink>
                            </li>
                            <li style={{ margin: '0 0 0 20px' }}>
                                <NavLink to='/video-tutorials' style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Video tutorials </NavLink>
                            </li>

                        </List>
                    </div>
                </div>
            </Box>

            <Box className='bgimg-div'>
                <div>
                    <img src="https://s.alicdn.com/@img/imgextra/i4/O1CN01L5FcWy1iazQCc6aqn_!!6000000004430-55-tps-305-46.svg" alt="img" />
                    <h1  style={{fontWeight:'bold' }}>Safe & easy payments</h1>
                    <h6>Pay using your preferred payment method and currency</h6>
                </div>
            </Box>

            <Box sx={{ margin: '40px 50px' }}>
                <h1 className=" fw-bold">How Abaris.com keeps your payments secure and simple</h1>
                <p style={{ fontSize: '18px', letterSpacing: 1, margin: '20px 0' }}>Every payment made through Abaris.com is SSL-encrypted, PCI DSS compliant, and processed in as quickly as 2 hours. To protect your payment, never pay outside of the platform.</p>
                <div className=" d-flex">
                    <div style={{ width: '550px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                        <img style={{ margin: '20px 0' }} src="https://s.alicdn.com/@img/imgextra/i2/O1CN01A3UW501seKT5H76QR_!!6000000005791-55-tps-64-64.svg" alt="img" />
                        <h5 className=" fw-bold mb-3">Diverse ways to pay</h5>
                        <p>Pay with credit/debit cards, PayPal, Apple Pay, Google Pay, Afterpay/ Clearpay and more through our online checkout.</p>
                        <p>You can also make bank-to-bank wire transfers with escrow protection using the official bank information provided by Abaris.com.</p>
                        <p>To save you conversion fees on purchases and refunds, we support over 20 currencies you can pay in.</p>
                    </div>
                    <div style={{ width: '550px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                        <img style={{ margin: '20px 0' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN013zEQ1N1tecKXgRu38_!!6000000005927-55-tps-64-64.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">Flexible financing</h5>
                        <p>Use any of the payment methods and currencies available to make an initial payment and settle the remaining balance with our deferred payment service: Payment Terms: 30/60 Days* or contact the supplier directly to settle the terms.</p>
                    </div>
                </div>
                <p style={{ fontSize: '15px', margin: '20px 0', color: 'grey' }}>*Payment Terms: 30/60 Days is only available for select buyers. First-time users must apply and get credit amount approval. Refer to the Payment Terms page for full details.</p>
            </Box>

            <Box sx={{ m: 5 }}>
                <h1 className=" fw-bold mt-5 mb-5 ms-2">How to order and pay with Trade Assurance</h1>
                <div className=" d-flex">
                    <p className="numbbers">01</p>
                    <h3 className=" ms-3">Find a supplier that supports Trade Assurance</h3>
                </div>
                <div>
                    <Divider sx={{ height: '60px', width: '2px', border: '2px solid black', ml: 3.5, mt: '-4px' }} />
                </div>
                <div className=" d-flex">
                    <div>
                        <p className="numbbers">02</p>
                    </div>
                    <div className=" ms-3">
                        <h3 className=" fw-bold">Check out or settle details with supplier</h3>
                        <h5 className=" fw-bold mt-4">For ready-to-ship products</h5>
                        <p>Select "Start order" on the product you wish to buy and proceed to check out.</p>
                        <h5 className=" fw-bold">For customized products</h5>
                        <p>Settle the order details by contacting the supplier directly through Messenger, sending a Request for Quotation, or an order request. The supplier should then draft an order for you to confirm.</p>
                    </div>
                </div>
                <div>
                    <Divider sx={{ height: '200px', width: '2px', border: '2px solid black', ml: 3.5, mt: '-187px', zIndex: -1 }} />
                </div>
                <div className=" d-flex">
                    <p className="numbbers">03</p>
                    <h3 className=" fw-bold ms-3">Pay using your preferred payment method and currency</h3>
                </div>
                <div>
                    <video
                        autoPlay
                        loop
                        muted
                        style={{ width: '1000px', height: '500px', margin: '10px 60px' }}
                        poster="https://tbexpand.alicdn.com/1687861492233/copy/b7106c36b300108d.mp4?auth_key=1698151526-0-0-f36a40f4385f0accfe00893a8486d5e9&biz=publish-cc5e61611a2556b6&t=213e29c616981488261166040e0e44&b=publish&p=cloudvideo_http_video_extranet_notrans&i=417158826241"
                    >
                        <source
                            src="https://tbexpand.alicdn.com/1687861492233/copy/b7106c36b300108d.mp4?auth_key=1698151526-0-0-f36a40f4385f0accfe00893a8486d5e9&biz=publish-cc5e61611a2556b6&t=213e29c616981488261166040e0e44&b=publish&p=cloudvideo_http_video_extranet_notrans&i=417158826241"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </Box>

            <Box sx={{ display: 'flex', bgcolor: '#212121', padding: '60px 30px' }}>
                <div className="cardd-div" style={{backgroundColor:'#424242'}}>
                    <img style={{ width: '60px',height:'60px', borderRadius: '50%' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN01EUVKJw1yQwa6WjmMN_!!6000000006574-55-tps-48-48.svg" alt="img" />
                    <Typography sx={{ fontSize: '20px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Terms & Conditions</Typography>
                    <NavLink style={{ color: 'white' }}>Read</NavLink>
                </div>
                <div className="cardd-div" style={{backgroundColor:'#424242'}}>
                    <img style={{ width: '60px',height:'60px', borderRadius: '50%' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01M9qwNo20VdsaCa1lJ_!!6000000006855-55-tps-48-48.svg" alt="img" />
                    <Typography sx={{ fontSize: '20px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Trade Assurance guide</Typography>
                    <NavLink style={{ color: 'white' }}>Download</NavLink>
                </div>
                <div className="cardd-div" style={{backgroundColor:'#424242'}}>
                    <img style={{ width: '60px',height:'60px', borderRadius: '50%' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01wpCLva1mj0ovMOnfP_!!6000000004989-55-tps-49-48.svg" alt="img" />
                    <Typography sx={{ fontSize: '20px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Customer Service</Typography>
                    <NavLink style={{ color: 'white' }}>Get help</NavLink>
                </div>
                <div className="cardd-div" style={{backgroundColor:'#424242'}}>
                    <img style={{ width: '60px',height:'60px', borderRadius: '50%' }} src='https://s.alicdn.com/@img/imgextra/i3/O1CN01309cZX1sWXjSjRYS5_!!6000000005774-55-tps-48-48.svg' alt="img" />
                    <Typography sx={{ fontSize: '20px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Video tutorials</Typography>
                    <NavLink style={{ color: 'white' }}>Watch</NavLink>
                </div>
            </Box>

            <Footer />
        </>
    )
}

export default SafeAndEasyPayment
