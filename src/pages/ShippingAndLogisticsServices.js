import { Box, Button, Divider, List, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../stylecss/shippingAndLogisticService.css'
import Footer from "../Components/Footer.js";


const ShippingAndLogisticService = () => {
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

            <Box className='Shipping-bgimg-div'>
                <div>
                    <img src="https://s.alicdn.com/@img/imgextra/i4/O1CN01L5FcWy1iazQCc6aqn_!!6000000004430-55-tps-305-46.svg" alt="img" />
                    <h1  style={{fontWeight:'bold' }}>Shipping & logistics services</h1>
                    <h6 style={{ width: '500px' }}>Reduce inventory uncertainty with On-time Delivery Guarantee and track your shipment with Abaris.com Logistics</h6>
                </div>
            </Box>

            <Box sx={{ margin: '40px 50px' }}>
                <h1 className=" fw-bold">On-time Delivery Guarantee</h1>
                <p style={{ fontSize: '18px', letterSpacing: 1, margin: '20px 0' }}>Claim and automatically receive compensation for delays in deliveries, without having to negotiate with the supplier.</p>
                <div className=" d-flex">
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                        <img style={{ margin: '20px 0', width: '64px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN011eJ32V1xkoA248OZD_!!6000000006482-55-tps-30-30.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">Inventory management</h5>
                        <p>Better plan out and manage inventory knowing orders will be delivered on time.</p>
                    </div>
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                        <img style={{ margin: '20px 0', width: '64px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN017dmspv1o3S7wxiZZn_!!6000000005169-55-tps-30-30.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">Compensation for delays</h5>
                        <p>If late delivery occurs, receive a coupon which can be used for future purchases.</p>
                    </div>
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                        <img style={{ margin: '20px 0', width: '64px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01XNeA3B1peq4bHKqXL_!!6000000005386-55-tps-30-30.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">Simplified process</h5>
                        <p>Abaris.com reviews your claim directly, saving you time spent negotiating with suppliers*.</p>
                    </div>
                </div>
                <p style={{ fontSize: '15px', margin: '20px 0', color: 'grey' }}>*Seed buyers need to make a claim for compensation</p>
            </Box>

            <Box sx={{ m: 5 }}>
                <h1 className=" fw-bold mt-5 mb-5 ms-2">How it works</h1>

                <div className=" d-flex">
                    <div>
                        <p className="number-point">01</p>
                    </div>
                    <div className=" ms-3">
                        <h3 className=" fw-bold">Find products that support On-time Delivery Guarantee</h3>
                    </div>
                </div>
                <div>
                    <Divider sx={{ height: '70px', width: '2px', border: '2px solid black', ml: 3.5, mt: '-5px', zIndex: -1 }} />
                </div>
                <div className=" d-flex">
                    <div>
                        <p className="number-point">02</p>
                    </div>
                    <div className=" ms-3">
                        <h3 className=" fw-bold">Pay on Abaris.com</h3>
                        <p>Pay using your preferred payment method through the Abaris.com platform.</p>
                    </div>
                </div>
                <div>
                    <Divider sx={{ height: '70px', width: '2px', border: '2px solid black', ml: 3.5, mt: '-43px', zIndex: -1 }} />
                </div>
                <div className=" d-flex">
                    <p className="number-point">03</p>
                    <h3 className=" fw-bold ms-3">Make a claim if delays occur</h3>
                </div>
                <div>
                    <p style={{ color: 'grey', margin: '10px 70px' }}>If products are not delivered by the agreed date, go to My orders
                        &gt; Order details to make a claim. For Scaleup, Enterprise, and Enterprise Pro buyers, compensation is automatically issued to their accounts.
                    </p>
                    <video
                        autoPlay
                        loop
                        muted
                        style={{ width: '1000px', height: '500px', margin: '10px 60px' }}
                        poster="https://tbexpand.alicdn.com/1687946001724/7ea2f8a2fac28a9d.mp4?auth_key=1698164101-0-0-687e16315f3aa2abf1266d46e696a8eb&biz=publish-7fbebf241f878f63&t=213e29eb16981614015125468e124b&b=publish&p=cloudvideo_http_video_extranet_notrans&i=416915909093"
                    >
                        <source
                            src="https://tbexpand.alicdn.com/1687946001724/7ea2f8a2fac28a9d.mp4?auth_key=1698164101-0-0-687e16315f3aa2abf1266d46e696a8eb&biz=publish-7fbebf241f878f63&t=213e29eb16981614015125468e124b&b=publish&p=cloudvideo_http_video_extranet_notrans&i=416915909093"
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div>
                    <Divider sx={{ height: '630px', width: '2px', border: '2px solid black', ml: 3.5, mt: '-604px' }} />
                </div>
                <div className=" d-flex">
                    <div>
                        <p className="number-point">04</p>
                    </div>
                    <div className=" ms-3">
                        <h3 className=" fw-bold">Get compensation</h3>
                        <p className="mt-1">Collect platform coupons that can be used on future Abaris.com purchases.</p>
                    </div>
                </div>
            </Box>

            <Box sx={{ margin: '40px 50px' }}>
                <h1 className=" fw-bold">Abaris.com Logistics</h1>
                <p style={{ fontSize: '18px', letterSpacing: 1, margin: '20px 0' }}>Abaris.com Logistics is our official marketplace to help you find reputable logistics providers and track shipments in real-time.</p>
                <div className=" d-flex">
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                        <img style={{ margin: '20px 0', width: '64px' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN01jRJIIG1KXjqVSoSmS_!!6000000001174-55-tps-30-30.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">Tailored solutions</h5>
                        <p>Choose from door-to-door and port-to-port services according to your needs and budget.</p>
                    </div>
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                        <img style={{ margin: '20px 0', width: '64px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN018xL3Z21oDzEnFhVRS_!!6000000005192-55-tps-30-30.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">Worldwide coverage</h5>
                        <p>Enjoy tracked delivery to most countries and regions around the world.</p>
                    </div>
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                        <img style={{ margin: '20px 0', width: '64px' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01ywKxqf1XOCbVek736_!!6000000002913-55-tps-30-30.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">Transparent rates</h5>
                        <p>Get competitive pricing and check rates in real-time.</p>
                    </div>
                </div>
            </Box>
            <div>
                <Button variant="outlined" sx={{ borderRadius: '30px', m: '20px 50px', p: '10px 30px', fontWeight: 'bold' }}>Explore Solutions</Button>
            </div>

            <Box sx={{ display: 'flex', bgcolor: '#212121', padding: '60px 30px',mt:3 }}>
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

export default ShippingAndLogisticService
