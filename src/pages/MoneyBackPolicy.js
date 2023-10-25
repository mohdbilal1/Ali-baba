import { Box, Button, Divider, List, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../stylecss/moneyBackPolicyStyle.css'
import Footer from "../Components/Footer";


const MoneyBackPolicy = () => {
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
                        <NavLink to={'/trade-assurance'}  style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '18px', fontWeight: 'bold', color: 'grey',textDecoration:'none' }}>Trade Assurance</NavLink>
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

            <Box className='moneybg-img-div'>
                <div>
                    <img src="https://s.alicdn.com/@img/imgextra/i4/O1CN01L5FcWy1iazQCc6aqn_!!6000000004430-55-tps-305-46.svg" alt="img" />
                    <h1  style={{fontWeight:'bold' }}>Money-back policy</h1>
                    <h6>We will assist you in reaching a satisfactory resolution, including refunds or compensation, for product quality issues or other breaches of our terms and conditions</h6>
                </div>
            </Box>

            <Box sx={{ margin: '40px 50px' }}>
                <h1 className=" fw-bold">Refund policy</h1>
                <p style={{ fontSize: '18px', letterSpacing: 1, margin: '20px 0' }}>Claim refunds if orders haven't been shipped, are missing, or arrive with product issues (e.g., defective, incorrect, damaged, etc.).</p>
                <div className=" d-flex">
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                        <img style={{ margin: '20px 0', width: '64px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01MSCajz1LM7PSfP8fE_!!6000000001284-55-tps-30-30.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">30 or 60-day refunds*</h5>
                        <p>You are entitled to refunds within 30 or 60 days from the delivery date.</p>
                    </div>
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                        <img style={{ margin: '20px 0', width: '64px' }} src="https://s.alicdn.com/@img/imgextra/i2/O1CN01hEikdV1CHh2jp0Nuh_!!6000000000056-55-tps-30-30.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">Quick refunds</h5>
                        <p>If you cancel within 2 hours of payment and the order has not yet shipped, you can claim a full and immediate refund.</p>
                    </div>
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                        <img style={{ margin: '20px 0', width: '64px' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN011RGP4H1LCxUYJlIwx_!!6000000001264-55-tps-30-30.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">Resolution support</h5>
                        <p>If there's a problem with your refund, we will help mediate to get your money back.</p>
                    </div>
                </div>
                <p style={{ fontSize: '15px', margin: '20px 0', color: 'grey' }}>*Enterprise and Enterprise Pro buyers can claim within 60 days.</p>
            </Box>

            <Box sx={{ m: 5 }}>
                <h1 className=" fw-bold mt-5 mb-5 ms-2">How to apply for a refund</h1>
                <div className=" d-flex">
                    <p className="number-point">01</p>
                    <h3 className=" fw-bold ms-3">Apply for refund if order doesn't meet the agreed terms</h3>
                </div>
                <div>
                    <p style={{ color: 'grey', margin: '10px 70px' }}>Go to My orders &gt; Order details to apply.</p>
                    <video
                        autoPlay
                        loop
                        muted
                        style={{ width: '1000px', height: '500px', margin: '10px 60px' }}
                        poster="https://tbexpand.alicdn.com/1687861625677/809dce0e525bcbab.mp4?auth_key=1698157392-0-0-5725b5079ca229f4824a97d73d8c8361&biz=publish-9a24f12db875f996&t=2150460916981546927841328e1402&b=publish&p=cloudvideo_http_video_extranet_notrans&i=416425272162"
                    >
                        <source
                            src="https://tbexpand.alicdn.com/1687861625677/809dce0e525bcbab.mp4?auth_key=1698157392-0-0-5725b5079ca229f4824a97d73d8c8361&biz=publish-9a24f12db875f996&t=2150460916981546927841328e1402&b=publish&p=cloudvideo_http_video_extranet_notrans&i=416425272162"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div>
                    <Divider sx={{ height: '630px', width: '2px', border: '2px solid black', ml: 3.5, mt: '-604px' }} />
                </div>
                <div className=" d-flex">
                    <div>
                        <p className="number-point">02</p>
                    </div>
                    <div className=" ms-3">
                        <h3 className=" fw-bold">Negotiate with supplier</h3>
                        <p className="mt-1">If the supplier does not respond or you are unable to reach a consensus, escalate the case for Abaris.com to help resolve.</p>
                    </div>
                </div>
                <div>
                    <Divider sx={{ height: '70px', width: '2px', border: '2px solid black', ml: 3.5, mt: '-43px', zIndex: -1 }} />
                </div>
                <div className=" d-flex">
                    <div>
                        <p className="number-point">03</p>
                    </div>
                    <div className=" ms-3">
                        <h3 className=" fw-bold">Get your money back</h3>
                        <p>Receive your refund after the case is processed.</p>
                    </div>
                </div>

                <div>
                    <Button variant="outlined" sx={{ borderRadius: '30px', m: '40px 20px', p: '10px 30px', fontWeight: 'bold' }}>Watch step-by-step tutorials</Button>
                </div>
            </Box>

            <Box sx={{ margin: '40px 50px' }}>
                <h1 className=" fw-bold">Easy Return</h1>
                <p style={{ fontSize: '18px', letterSpacing: 1, margin: '20px 0' }}>Return defective products locally for free and claim full refunds*.</p>
                <div className=" d-flex">
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                        <img style={{ margin: '20px 0', width: '64px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01rS4VDv1vjm1RxTB3J_!!6000000006209-55-tps-64-64.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">Easy & free returns</h5>
                        <p>Enjoy hassle-free returns at no cost within 30 days from the delivery date.</p>
                    </div>
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                        <img style={{ margin: '20px 0', width: '64px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01QafFak208HhVtpWRL_!!6000000006804-55-tps-30-30.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">Save time spent on delivery</h5>
                        <p>Reduce waiting times with quick delivery to your local warehouse.</p>
                    </div>
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                        <img style={{ margin: '20px 0', width: '64px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01QcCuxO1QI3z1ilyZB_!!6000000001952-55-tps-30-30.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">Get your money back</h5>
                        <p>Receive a full refund once the return has been processed.</p>
                    </div>
                </div>
                <p style={{ fontSize: '15px', margin: '20px 0', color: 'grey' }}>*Available for orders under US $3,000 and to buyers in Australia, Belgium, Canada, Chile, Czech Republic, France, Germany, Israel, Italy, Japan, Korea, Mexico, Netherlands, Pakistan, Poland, Portugal, Russia, Saudi Arabia, Spain, Switzerland, Ukraine, United Arab Emirates, the United Kingdom, the United States and more to come. Read our terms and conditions for full eligibility requirements.</p>
            </Box>

            <Box sx={{ m: 5 }}>
                <h1 className=" fw-bold mt-5 mb-5 ms-2">How to apply for Easy Return</h1>
                <div className=" d-flex">
                    <div>
                        <p className="number-point">01</p>
                    </div>
                    <div className=" ms-3">
                        <h3 className=" fw-bold">Find products that support Easy Return</h3>
                    </div>
                </div>
                <div>
                    <Divider sx={{ height: '70px', width: '2px', border: '2px solid black', ml: 3.5, mt: '-3px', zIndex: -1 }} />
                </div>
                <div className=" d-flex">
                    <p className="number-point">02</p>
                    <h3 className=" fw-bold ms-3">Apply for refund if product doesn't meet the agreed quality</h3>
                </div>
                <div>
                    <p style={{ color: 'grey', margin: '10px 70px' }}>Go to My orders &gt; Order details to apply.</p>
                    <video
                        autoPlay
                        loop
                        muted
                        style={{ width: '1000px', height: '500px', margin: '10px 60px' }}
                        poster="https://tbexpand.alicdn.com/1689237456897/copy/9fbc8e5085f722cc.mp4?auth_key=1698160087-0-0-d818e675032466f144f9725d06481f2f&biz=publish-c91cf4370ea62799&t=2150443f16981573877691712e13f9&b=publish&p=cloudvideo_http_video_extranet_notrans&i=418778249303"
                    >
                        <source
                            src="https://tbexpand.alicdn.com/1689237456897/copy/9fbc8e5085f722cc.mp4?auth_key=1698160087-0-0-d818e675032466f144f9725d06481f2f&biz=publish-c91cf4370ea62799&t=2150443f16981573877691712e13f9&b=publish&p=cloudvideo_http_video_extranet_notrans&i=418778249303"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div>
                    <Divider sx={{ height: '630px', width: '2px', border: '2px solid black', ml: 3.5, mt: '-604px' }} />
                </div>
                <div className=" d-flex">
                    <div>
                        <p className="number-point">03</p>
                    </div>
                    <div className=" ms-3">
                        <h3 className=" fw-bold">Return to local warehouses for free</h3>
                        <p className="mt-1">Send the product to a local warehouse according to the return instructions provided.</p>
                    </div>
                </div>
                <div>
                    <Divider sx={{ height: '70px', width: '2px', border: '2px solid black', ml: 3.5, mt: '-43px', zIndex: -1 }} />
                </div>
                <div className=" d-flex">
                    <div>
                        <p className="number-point">04</p>
                    </div>
                    <div className=" ms-3">
                        <h3 className=" fw-bold">Get your money back</h3>
                        <p>Receive a full refund once the return has been processed.</p>
                    </div>
                </div>

                <div>
                    <Button variant="outlined" sx={{ borderRadius: '30px', m: '40px 20px', p: '10px 30px', fontWeight: 'bold' }}>Watch step-by-step tutorials</Button>
                </div>
            </Box>


            <Box sx={{ display: 'flex', bgcolor: '#212121', padding: '60px 30px' }}>
                <div className="cardd-div" style={{ backgroundColor: '#424242' }}>
                    <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN01EUVKJw1yQwa6WjmMN_!!6000000006574-55-tps-48-48.svg" alt="img" />
                    <Typography sx={{ fontSize: '20px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Terms & Conditions</Typography>
                    <NavLink style={{ color: 'white' }}>Read</NavLink>
                </div>
                <div className="cardd-div" style={{ backgroundColor: '#424242' }}>
                    <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01M9qwNo20VdsaCa1lJ_!!6000000006855-55-tps-48-48.svg" alt="img" />
                    <Typography sx={{ fontSize: '20px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Trade Assurance guide</Typography>
                    <NavLink style={{ color: 'white' }}>Download</NavLink>
                </div>
                <div className="cardd-div" style={{ backgroundColor: '#424242' }}>
                    <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01wpCLva1mj0ovMOnfP_!!6000000004989-55-tps-49-48.svg" alt="img" />
                    <Typography sx={{ fontSize: '20px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Customer Service</Typography>
                    <NavLink style={{ color: 'white' }}>Get help</NavLink>
                </div>
                <div className="cardd-div" style={{ backgroundColor: '#424242' }}>
                    <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src='https://s.alicdn.com/@img/imgextra/i3/O1CN01309cZX1sWXjSjRYS5_!!6000000005774-55-tps-48-48.svg' alt="img" />
                    <Typography sx={{ fontSize: '20px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Video tutorials</Typography>
                    <NavLink style={{ color: 'white' }}>Watch</NavLink>
                </div>
            </Box>

            <Footer />
        </>
    )
}

export default MoneyBackPolicy
