import { Box, List, Modal, Typography } from "@mui/material"
import { NavLink, useNavigate } from "react-router-dom"
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../stylecss/videotutorialsStyle.css'
import Footer from "../Components/Footer.js";
import { GoPlay } from "react-icons/go";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { MdOutlinePlayCircleFilled } from "react-icons/md";






const VideoTutorials = () => {

    const [openV, setOpenV] = useState(false);
    const navigate = useNavigate();

    const openVideo = () => {
        setOpenV(true);
    }
    const videoClose = () => {
        setOpenV(false)
        navigate('/video-tutorials')
    }

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
                        <NavLink to={'/trade-assurance'} style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '18px', fontWeight: 'bold', color: 'grey', textDecoration: 'none' }}>Trade Assurance</NavLink>
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

            <Box className='videotutorials-bgimg-div'>
                <div>
                    <img src="https://s.alicdn.com/@img/imgextra/i4/O1CN01L5FcWy1iazQCc6aqn_!!6000000004430-55-tps-305-46.svg" alt="img" />
                    <h1 style={{ width: '500px', fontWeight: 'bold' }}>How-to tutorials & guides to our services</h1>
                    <h6 style={{ width: '500px' }}>Watch and find out how Trade Assurance can make your sourcing journey on Abaris.com easier and safer</h6>
                </div>
            </Box>


            <Box sx={{ m: 5 }}>
                <h1 className=" fw-bold mt-5 mb-2 ms-2">What is Trade Assurance</h1>
                <p className="mt-4 mb-4 ms-2 fs-5">A comprehensive purchase protection program that covers your orders made on Abaris.com.</p>
            </Box>

            <Box className='bgimg-video' onClick={openVideo}>
                <div className=" d-flex justify-content-center pt-5">
                    <GoPlay style={{ fontSize: '100px', marginTop: '90px', color: 'grey' }} />
                </div>
            </Box>

            <Modal
                open={openV}
                onClose={videoClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box sx={{ width: '900px', height: '500px', mb: 5, bgcolor: 'white', borderRadius: '10px', position: 'relative' }}>
                    <CloseIcon onClick={videoClose} sx={{ position: 'absolute', right: 10, top: 12, bgcolor: 'white', fontSize: '40px', cursor: 'pointer' }} />
                    <iframe width="900" height="500"
                        src="https://www.youtube.com/embed/2N6fCja22g4?si=7-UC-8Ah2FhsPGxY"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        autoPlay
                    >

                    </iframe>
                </Box>
            </Modal>

            <Box sx={{ margin: '40px 30px' }}>
                <h1 className=" fw-bold mb-4 ms-1">Safe & easy payments</h1>
                <div className=" d-flex">
                    <div style={{ width: '400px',height:'480px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px' }}>
                        <div className="bgb-img-div-1" onClick={openVideo}>
                            <div className=" d-flex justify-content-center pt-5">
                                <MdOutlinePlayCircleFilled style={{ fontSize: '50px', marginTop: '10px', color: 'grey' }} />
                            </div>
                        </div>
                        <p className="mb-4 mt-3" style={{fontSize:'16px',color:'red',backgroundColor:'#ffcdd2',padding:'5px 10px',borderRadius:'3px',width:'150px'}}>Flexible financing</p>
                        <h5 className=" fw-bold">What is Payment Terms: 30/60 Days</h5>
                        <p style={{marginTop:'20px'}}>A deferred payments service that helps you buy on credit of up to US $50,000 with an extra 30 or 60 days after dispatch to pay your order balance.</p>
                    </div>
                    <div style={{ width: '400px',height:'480px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px' }}>
                        <div className="bgb-img-div-2" onClick={openVideo}>
                            <div className=" d-flex justify-content-center pt-5">
                                <MdOutlinePlayCircleFilled style={{ fontSize: '50px', marginTop: '10px', color: 'grey' }} />
                            </div>
                        </div>
                        <p className="mb-4 mt-3" style={{fontSize:'16px',color:'red',backgroundColor:'#ffcdd2',padding:'5px 10px',borderRadius:'3px',width:'150px'}}>Flexible financing</p>
                        <h5 className=" fw-bold">How to apply for Payment Terms</h5>
                        <p style={{marginTop:'20px'}}>Step-by-step guide to applying for Payment Terms and enjoying flexible B2B payments.</p>
                    </div>
                    <div style={{ width: '400px',height:'480px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px' }}>
                        <div className="bgb-img-div-3" onClick={openVideo}>
                            <div className=" d-flex justify-content-center pt-5">
                                <MdOutlinePlayCircleFilled style={{ fontSize: '50px', marginTop: '10px', color: 'grey' }} />
                            </div>
                        </div>
                        <p className="mb-4 mt-3" style={{fontSize:'16px',color:'red',backgroundColor:'#ffcdd2',padding:'5px 10px',borderRadius:'3px',width:'150px'}}>Flexible financing</p>
                        <h5 className=" fw-bold">How to find & order eligible products for Payment Terms</h5>
                        <p style={{marginTop:'20px'}}>Step-by-step guide to identifying eligible products that support Payment Terms.</p>
                    </div>
                </div>
            </Box>

            <Box sx={{ margin: '40px 30px' }}>
                <h1 className=" fw-bold mb-4 ms-1">Money-back policy</h1>
                <div className=" d-flex">
                    <div style={{ width: '400px',height:'430px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px' }}>
                        <div className="moneybg-img-div-1" onClick={openVideo}>
                            <div className=" d-flex justify-content-center pt-5">
                                <MdOutlinePlayCircleFilled style={{ fontSize: '50px', marginTop: '10px', color: 'grey' }} />
                            </div>
                        </div>
                        <p className="mb-4 mt-3" style={{fontSize:'16px',color:'red',backgroundColor:'#ffcdd2',padding:'5px 10px',borderRadius:'3px',width:'150px'}}>Refund policy</p>
                        <h5 className=" fw-bold">Refund policy explained</h5>
                        <p style={{marginTop:'20px'}}>Learn how to get your money back when you encounter order issues.</p>
                    </div>
                    <div style={{ width: '400px',height:'430px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px' }}>
                        <div className="moneybg-img-div-2" onClick={openVideo}>
                            <div className=" d-flex justify-content-center pt-5">
                                <MdOutlinePlayCircleFilled style={{ fontSize: '50px', marginTop: '10px', color: 'grey' }} />
                            </div>
                        </div>
                        <p className="mb-4 mt-3" style={{fontSize:'16px',color:'red',backgroundColor:'#ffcdd2',padding:'5px 10px',borderRadius:'3px',width:'150px'}}>Easy Return</p>
                        <h5 className=" fw-bold">What is Easy Return</h5>
                        <p style={{marginTop:'20px'}}>Easy Return helps you return eligible orders locally for free and claim a full refund.</p>
                    </div>
                    <div style={{ width: '400px',height:'430px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px' }}>
                        <div className="moneybg-img-div-3" onClick={openVideo}>
                            <div className=" d-flex justify-content-center pt-5">
                                <MdOutlinePlayCircleFilled style={{ fontSize: '50px', marginTop: '10px', color: 'grey' }} />
                            </div>
                        </div>
                        <p className="mb-4 mt-3" style={{fontSize:'16px',color:'red',backgroundColor:'#ffcdd2',padding:'5px 10px',borderRadius:'3px',width:'150px'}}>Easy Return</p>
                        <h5 className=" fw-bold">How Easy Return works</h5>
                        <p style={{marginTop:'20px'}}>Learn how to return products and request a refund using the Easy Return service.</p>
                    </div>
                </div>
            </Box>


            <Box sx={{ display: 'flex', bgcolor: '#212121', padding: '60px 30px', mt: 3 }}>
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

export default VideoTutorials
