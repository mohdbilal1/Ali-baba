import { Box, Divider, List, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../stylecss/afterSalesStyle.css'
import Footer from "../Components/Footer.js";


const AfterSales = () => {
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

            <Box className='aftersales-bgimg-div'>
                <div>
                    <img src="https://s.alicdn.com/@img/imgextra/i4/O1CN01L5FcWy1iazQCc6aqn_!!6000000004430-55-tps-305-46.svg" alt="img" />
                    <h1 style={{fontWeight:'bold' }}>After-sales protections</h1>
                    <h6 style={{ width: '500px' }}>Additional services and support for eligible products</h6>
                </div>
            </Box>

           
            <Box sx={{ m: 5 }}>
                <h1 className=" fw-bold mt-5 mb-2 ms-2">On-site service & free replacement parts</h1>
                <p className="mt-4 mb-4 ms-2 fs-5">Receive additional support with our on-site installation, maintenance, repair, and free replacement parts services for 1 year after the purchase. Service is provided in your local area or an engineer will come to you. Claim compensation if the service received differs from the agreed terms.</p>
                <h1 className=" fw-bold mt-5 mb-5 ms-2">How to apply for after-sales service and support</h1>
               
                <div className=" d-flex">
                    <div>
                        <p className="number-point">01</p>
                    </div>
                    <div className=" ms-3">
                        <h3 className=" fw-bold">Find products that support after-sales services</h3>
                        <p>Find product that support "On-site service and free replacement parts" or "Free replacement parts".</p>
                    </div>
                </div>
                <div>
                    <Divider sx={{ height: '70px', width: '2px', border: '2px solid black', ml: 3.5, mt: '-43px', zIndex: -1 }} />
                </div>
                <div className=" d-flex">
                    <p className="number-point">02</p>
                    <h3 className=" fw-bold ms-3">Apply for service</h3>
                </div>
                <div>
                    <p style={{ color: 'grey', margin: '10px 70px' }}>Go to My orders &gt; Order details to fill in your request. </p>
                    <video
                        autoPlay
                        loop
                        muted
                        style={{ width: '1000px', height: '500px', margin: '10px 60px' }}
                        poster="https://tbexpand.alicdn.com/1689237514385/4e4413dda1cf8bcf.mp4?auth_key=1698166222-0-0-08eb4031f9b3fe52614fc02806f8e11d&biz=publish-870398c891777261&t=2150431316981635228396916e0e0e&b=publish&p=cloudvideo_http_video_extranet_notrans&i=418781721799"
                    >
                        <source
                            src="https://tbexpand.alicdn.com/1689237514385/4e4413dda1cf8bcf.mp4?auth_key=1698166222-0-0-08eb4031f9b3fe52614fc02806f8e11d&biz=publish-870398c891777261&t=2150431316981635228396916e0e0e&b=publish&p=cloudvideo_http_video_extranet_notrans&i=418781721799"
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
                        <h3 className=" fw-bold">Receive service</h3>
                        <p className="mt-1">Seller provides a solution, or you are eligible for compensation. To view your after-sales requests, go to My Alibaba &gt; Orders &gt; Refund Requests &gt; After-sales services.</p>
                    </div>
                </div>
            </Box>


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

export default AfterSales
