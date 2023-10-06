import { Box, Button, Card, CardMedia, Checkbox, FormControlLabel, List, ListItemText, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material"
import ConsumerElectronicsNavbar from "../Components/ConsumerElectronicsNavbar"
import { NavLink, useNavigate } from "react-router-dom"
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import indflag from '../assets/indiaflag.png'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../stylecss/consumerStyle.css'
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AiFillInstagram } from 'react-icons/ai';
import ImageSlider from "../Components/ImagePagingSlider";
import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const ConsumerElectronicsHeadPhones = () => {
    const [incremState,setIncremState]=useState(0);
    const navigate = useNavigate();
   
    const incrmnt=()=>{
      setIncremState(incremState+1);
    };
    const decrmnt=()=>{
      if(incremState===0){
        setIncremState(0);
      }else{
        setIncremState(incremState-1);
      }
    };
    const sendOrderReq = () => {
        navigate('/order-request')
    }
    const onContactSupplier = () => {
        navigate('/send-enquiry')
    }



    return (
        <>
            <ConsumerElectronicsNavbar />

            <Box className='head-phone-main-div'>
                <Box sx={{ display: 'flex' }}>
                    <div className='logo-img-div pt-2 pb-2 d-flex'>
                        <p style={{ borderRight: '2px solid lightgrey', padding: '0 10px 0 0' }}><ListOutlinedIcon sx={{ mr: 0.2, mb: 0.4 }} />Categories</p>
                        <p style={{ borderRight: '2px solid lightgrey', padding: '0 10px' }}>Ready to ship</p>
                        <p style={{ borderRight: '2px solid lightgrey', padding: '0 10px' }}>Trade show</p>
                        <p style={{ borderRight: '2px solid lightgrey', padding: '0 10px' }}>Buyer central</p>

                    </div>
                    <Box sx={{ position: 'absolute', right: 30 }}>
                        <List sx={{ display: 'flex', textAlign: 'center' }}>

                            <li className='nav-list-electronic'>
                                <NavLink to='/'>
                                    <p style={{ borderRight: '2px solid lightgrey', paddingRight: '10px' }}><PhoneIphoneOutlinedIcon />Get the app</p>
                                </NavLink>
                            </li>
                            <li className='nav-list-electronic'>
                                <NavLink to='/'>
                                    <p style={{ borderRight: '2px solid lightgrey', paddingRight: '10px' }}>English-USD</p>
                                </NavLink>
                            </li>
                            <li className='nav-list-electronic'>
                                <NavLink to='/' style={{ fontSize: '14px' }}>
                                    Ship to: <img style={{ width: '25px' }} src={indflag} alt="indflag" /> IN
                                </NavLink>
                            </li>
                        </List>
                    </Box>

                </Box>

                <Box sx={{ display: 'flex', bgcolor: 'white', m: '10px 30px', p: 2, border: '1px solid lightgrey', borderRadius: '10px' }}>
                    <div className="col-sm-4">
                        <ImageSlider />
                        <div style={{ margin: '20px 0 0 30px', display: 'flex' }}>
                            <p><FormControlLabel control={<Checkbox />} label="Add to Compare" /></p>
                            <p style={{ borderRadius: '10px', margin: '10px 0 20px 20px' }}><ShareOutlinedIcon sx={{ mr: 1, mb: 0.3, fontSize: '20px' }} />Share</p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <p style={{ margin: 0 }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ margin: '5px 0', color: 'grey', fontSize: '14px' }}>5 Buyers</p>
                        <p style={{ margin: '5px 0', fontSize: '16px' }}><WorkspacePremiumIcon sx={{ mr: 0.4 }} />#12 Most popular in<NavLink style={{ color: 'black', marginLeft: '4px' }}> Over-Ear Headphones</NavLink></p>
                        <div style={{ padding: '20px 0', borderTop: '1px solid lightgrey', borderBottom: '1px solid lightgrey', marginTop: '15px' }}>
                            <p style={{ margin: 0, fontSize: '14px', color: 'grey' }}>≥ 1 pieces</p>
                            <span style={{ fontWeight: 'bold', fontSize: '26px', color: '#0d47a1' }}>$2.18</span>
                        </div>
                        <div className=" d-flex mt-2">
                            <p style={{ fontSize: '14px' }}>Benefits:</p>
                            <p style={{ fontSize: '14px', margin: '0 50px' }}>Quick refunds on orders under US $1,000</p>
                            <NavLink style={{ fontSize: '14px' }}>Claim now</NavLink>
                        </div>
                        <div className=" d-flex ">
                            <p>Color</p>
                            <img style={{ margin: '0 20px 0 62px', height: '30px', border: '1px solid lightgrey' }} src="https://s.alicdn.com/@sc04/kf/H33b6e62be3314d8db7d0775534873dc3V.jpeg_100x100xz.jpeg" alt="img" />
                            <p style={{ margin: '0 5px' }}>Blue</p>
                            <p style={{ margin: '0 47px' }}>$2.18</p>
                            <div className="d-flex">               
                                <button  onClick={decrmnt} className='btn'> <RemoveIcon /> </button>
                                <TextField size="small" value={incremState} sx={{width:'40px'}} />
                                <button onClick={incrmnt} className="btn"> <AddIcon /> </button>
                            </div>
                        </div>
                        <div className=" d-flex mt-2">
                            <img style={{ margin: '0 20px 0 100px', height: '30px', border: '1px solid lightgrey' }} src="https://s.alicdn.com/@sc04/kf/H18cb3f45de8a40b689bf7b8ba45b5bb8p.jpeg_100x100xz.jpeg" alt="img" />
                            <p style={{ margin: '0 5px' }}>White</p>
                            <p style={{ margin: '0 40px' }}>$2.18</p>
                            <div className="d-flex ms-1">               
                                <button  onClick={decrmnt} className='btn'> <RemoveIcon /> </button>
                                <TextField size="small" value={incremState} sx={{width:'40px'}} />
                                <button onClick={incrmnt} className="btn"> <AddIcon /> </button>
                            </div>
                        </div>
                        <div className=" d-flex mt-3">
                            <img style={{ margin: '0 20px 0 100px', height: '30px', border: '1px solid lightgrey' }} src="https://s.alicdn.com/@sc04/kf/Hc77265e3acf748b484e5ab98447e9e3dq.jpeg_100x100xz.jpeg" alt="img" />
                            <p style={{ margin: '0 5px' }}>Black</p>
                            <p style={{ margin: '0 45px' }}>$2.18</p>
                            <div className="d-flex">               
                                <button  onClick={decrmnt} className='btn'> <RemoveIcon /> </button>
                                <TextField size="small" value={incremState} sx={{width:'40px'}} />
                                <button onClick={incrmnt} className="btn"> <AddIcon /> </button>
                            </div>
                        </div>

                        <div className=" d-flex mt-5 pb-4 pt-4" style={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey' }}>
                            <div>
                                <p style={{ fontSize: '16px', color: 'grey' }}>Lead time: <TimerOutlinedIcon sx={{ fontSize: '20px' }} />  </p>
                            </div>
                            <div className=" ms-2">
                                <div className=" d-flex">
                                    <div style={{ fontSize: '14px', border: '1px solid lightgrey', padding: '5px 10px', textAlign: 'center', width: '150px' }}>Quantity (pieces)</div>
                                    <div style={{ fontSize: '14px', border: '1px solid lightgrey', padding: '5px 10px', textAlign: 'center', width: '80px' }}>1 - 1000</div>
                                    <div style={{ fontSize: '14px', border: '1px solid lightgrey', padding: '5px 10px', textAlign: 'center', width: '150px' }}>≥1000</div>

                                </div>
                                <div className=" d-flex">
                                    <div style={{ fontSize: '14px', border: '1px solid lightgrey', padding: '5px 10px', textAlign: 'center', width: '150px' }}>Lead time (days)</div>
                                    <div style={{ fontSize: '14px', border: '1px solid lightgrey', padding: '5px 10px', textAlign: 'center', width: '80px' }}>15</div>
                                    <div style={{ fontSize: '14px', border: '1px solid lightgrey', padding: '5px 10px', textAlign: 'center', width: '150px' }}>To be negotiated</div>
                                </div>
                            </div>
                        </div>

                        <div className=" d-flex mt-4 pb-4" style={{ borderBottom: '1px solid lightgrey' }}>
                            <div className=" me-3" style={{ color: 'grey' }}>Customization:</div>
                            <div>
                                <p style={{ margin: 0, fontSize: '14px' }}>Customized logo <span style={{ color: 'grey', fontSize: '14px' }}>(Min. order 500 pieces)</span></p>
                                <p style={{ margin: 0, fontSize: '14px' }}> Customized packaging <span style={{ color: 'grey', fontSize: '14px' }}>(Min. order 3000 pieces)</span></p>
                                <p style={{ margin: 0, fontSize: '14px' }}> Graphic customization<span style={{ color: 'grey', fontSize: '14px' }}>(Min. order 3000 pieces)</span></p>
                            </div>
                        </div>

                        <div className=" d-flex mt-4 pb-4" style={{ borderBottom: '1px solid lightgrey' }}>
                            <div className=" me-3" style={{ color: 'grey' }}>Shipping:</div>
                            <div>
                                <p style={{ margin: 0, fontSize: '14px' }}><NavLink style={{ color: 'black' }}>Contact supplier</NavLink> <span style={{ color: 'grey', fontSize: '14px' }}>to negotiate shipping details</span></p>
                                <p style={{ margin: 0, fontSize: '14px' }}>Enjoy <span style={{ color: 'red', fontSize: '14px' }}>On-time Dispatch Guarantee <TimerOutlinedIcon sx={{ fontSize: '20px' }} /></span></p>
                            </div>
                        </div>

                        <div className=" d-flex mt-4 pb-4" style={{ borderBottom: '1px solid lightgrey' }}>
                            <div className=" me-3" style={{ color: 'grey' }}>Payments:</div>
                            <div>
                                <div>
                                    <img style={{ height: '20px', marginLeft: '20px' }} src="https://img.alicdn.com/imgextra/i3/O1CN01ngzoEK1uLfVr2OAxm_!!6000000006021-2-tps-154-96.png" alt="img" />
                                    <img style={{ height: '20px', marginLeft: '20px' }} src="https://tse3.mm.bing.net/th?id=OIP.Vs62kDq0ibOSf4SeMr9nIwHaC0&pid=Api&P=0&h=180" alt="img" />
                                    <img style={{ height: '50px', marginLeft: '20px' }} src="https://tse3.mm.bing.net/th?id=OIP.F387clXSIAjQrTo1cExmKgHaE8&pid=Api&P=0&h=180" alt="img" />
                                    <img style={{ height: '50px' }} src="https://tse2.mm.bing.net/th?id=OIP.xFgqyR3Rzz3BWNzEp5ZSJgHaD4&pid=Api&P=0&h=180" alt="img" />

                                </div>
                                <p style={{ margin: 0, fontSize: '14px' }}>Enjoy encrypted and secure payments <NavLink style={{ textDecoration: 'none', fontSize: '14px' }}> View details</NavLink></p>
                            </div>
                        </div>


                        <div className=" d-flex mt-4 pb-4" style={{ borderBottom: '1px solid lightgrey' }}>
                            <div className=" me-3" style={{ color: 'grey' }}>Returns & Refunds:</div>
                            <div>
                                <p style={{ margin: 0, fontSize: '14px' }}>Eligible for refunds within 30 days of receiving products. <NavLink style={{ textDecoration: 'none', fontSize: '14px' }}> View details</NavLink></p>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-3 p-3">
                        <p style={{ marginBottom: '0', fontSize: '14px', color: 'grey' }}>The minimum order quantity is 1 piece</p>
                        <span style={{ color: 'grey', fontSize: '14px' }}>0/1 piece</span>
                        <span style={{ marginLeft: '100px' }}>from <b>$2.18</b></span> <br />
                        <span style={{ fontSize: '14px', marginLeft: '120px', color: 'grey' }}>Lead time 15 days <TimerOutlinedIcon sx={{ fontSize: '20px' }} />  </span><br />
                        <div style={{ padding: '6px 0', borderTop: '1px solid lightgrey', marginTop: '10px' }}>
                            <span style={{ fontSize: '14px', marginRight: '10px' }}>Shipping</span>
                            <span style={{ fontSize: '14px', marginLeft: '80px' }}>To be negotiated</span><br />
                        </div>
                        <Button onClick={sendOrderReq} size="small" variant="contained" sx={{ mt: 3, borderRadius: '30px' }} fullWidth>send order request</Button>
                        <Button onClick={onContactSupplier} size="small" sx={{ mt: 2, borderRadius: '30px', border: '1px solid rgb(15, 113, 219)', ":hover": { color: 'white', bgcolor: 'Highlight' } }} fullWidth><EmailOutlinedIcon sx={{ fontSize: '18px', mr: 1 }} />contact Supplier</Button><br />
                        <Button size="small" sx={{ mt: 2, borderRadius: '30px', border: '1px solid rgb(15, 113, 219)', ":hover": { color: 'white', bgcolor: 'Highlight' } }} fullWidth><CallOutlinedIcon sx={{ fontSize: '18px', mr: 1 }} />call us</Button>

                        <div style={{ border: '1px solid lightgrey', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px', borderRadius: '10px', marginTop: '10px' }}>
                            <NavLink to={'/company-page'} style={{ fontWeight: 'bold', fontSize: '14px', color: 'black', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Shenzhen Xiangyin Electronic Technology Co., Ltd.</NavLink>
                            <p style={{ fontSize: '14px', color: 'grey' }}>Trading Company,Distributor/Wholesal</p>
                            <div className=" d-flex">
                                <img style={{ height: '15px' }} src="https://u.alicdn.com/mobile/g/common/flags/1.0.0/assets/cn.png" alt="img" />
                                <p style={{ marginLeft: '6px', fontSize: '14px', marginTop: '-3px' }}>CN</p>
                                <p style={{ marginLeft: '6px', fontSize: '14px', marginTop: '-3px' }}>3 Yr</p>
                            </div>
                            <div className=" d-flex">
                                <div>
                                    <p style={{ margin: 0, color: 'grey' }}>Response Time</p>
                                    <h6 style={{ margin: 0 }}>≤4h</h6>
                                </div>
                                <div className=" ms-4">
                                    <p style={{ margin: 0, color: 'grey' }}>On-time delivery</p>
                                    <h6 style={{ margin: 0 }}>94.1%</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>

                <Box sx={{ m: '10px 30px 0 30px', borderRadius: '10px', bgcolor: 'white', height: '360px', border: '1px solid lightgrey' }}>
                    <h5 style={{ padding: '15px 0 0 15px', fontWeight: 'bold' }}>You may also like</h5>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        slidesPerView={5}
                        spaceBetween={1}
                    >
                        <SwiperSlide>
                            <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hc32059d7336d4934931c16bc78d0aa1em.jpg_220x220.jpg" alt="img" />
                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                <p>1.0 piece (MOQ)</p>

                            </div></SwiperSlide>
                        <SwiperSlide>
                            <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H7515a560a2654c089ad878ab70144c70U.jpg_220x220.jpg" alt="img" />
                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                <p>1.0 piece (MOQ)</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H08a5ae7044194cc492dd431a8423162eC.jpeg_220x220.jpeg" alt="img" />
                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                <p>1.0 piece (MOQ)</p>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1d0d7919eee040d7949ae487ca585904O.jpg_220x220.jpg" alt="img" />
                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                <p>1.0 piece (MOQ)</p>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf02879cd77a94afc90e91d595c926256D.jpg_220x220.jpg" alt="img" />
                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                <p>1.0 piece (MOQ)</p>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1eaf6f756b3e4522b78f837964ca2d47V.jpg_220x220.jpg" alt="img" />
                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                <p>1.0 piece (MOQ)</p>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hc0093dd05fd546b5b5de689edb4f0e636.png_220x220.png" alt="img" />
                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                <p>1.0 piece (MOQ)</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/He338bfe5c25048afb673090a39e8f4d99.png_220x220.png" alt="img" />
                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                <p>1.0 piece (MOQ)</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H89fb94a44bc9414e95a86c1782b5730d2.jpeg_220x220.jpeg" alt="img" />
                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                <p>1.0 piece (MOQ)</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Box>

                <Box sx={{ m: "10px 30px", bgcolor: 'white', borderRadius: '10px', p: '20px 10px', border: '1px solid lightgrey' }}>
                    <Tabs>
                        <TabsList>
                            <Tab style={{ borderRadius: '10px 10px 0 0', margin: '10px 4px 10px 23px', padding: '8px 20px', backgroundColor: 'white', border: '1px solid lightgrey', fontWeight: 'bold' }} value={0}>Product details</Tab>
                            <Tab style={{ borderRadius: '10px 10px 0 0', margin: '10px 23px 10px 4px', padding: '8px 20px', backgroundColor: 'white', border: '1px solid lightgrey', fontWeight: 'bold' }} value={1}>Company profile</Tab>
                        </TabsList>
                        <TabPanel value={0}>
                            <Box sx={{ border: '1px solid lightgrey', width: '801px', borderRadius: '2px', m: '3px 24px' }}>
                                <Typography sx={{ fontSize: '24px', fontWeight: 'bold', margin: '10px' }}>Key attributes</Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: 'bold', margin: '10px' }}>Other attributes</Typography>
                                <TableContainer>
                                    <Table size="small" sx={{ width: '800px', border: '1px solid lightgrey' }}>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Chipset</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>JL</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Communication</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>Wireless+Wired</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Function</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>Microphone, LED Display</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Waterproof Standard</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>IPX-4</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Use</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>Portable Media Player, Mobile Phone, Dj, Gaming, Sports, Travel, PROFESSIONAL, For Internet Bar</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Connectors</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>TYPE-C</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Control Button</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>Yes</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Is wireless</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>Yes</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Private Mold</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>Yes</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Active Noise-Cancellation</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>No</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Battery Indicator</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>LED</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Codecs</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>AAC</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Style</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>Headband</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Model Number</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>B39</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Place of Origin</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>Shenzhen , China</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Game atmosphere light</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>Multicolor</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Model Name</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>B39</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Country of origin</TableCell>
                                                <TableCell sx={{ pl: '170px' }}>China</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                            <Tabs>
                                <TabsList>
                                    <Tab style={{ borderRadius: '10px 10px 0 0', margin: '30px 4px 10px 23px', padding: '8px 20px', backgroundColor: 'white', border: '1px solid lightgrey', fontWeight: 'bold' }} value={0}>Products Description</Tab>
                                    <Tab style={{ borderRadius: '10px 10px 0 0', margin: '30px 23px 10px 4px', padding: '8px 20px', backgroundColor: 'white', border: '1px solid lightgrey', fontWeight: 'bold' }} value={1}>Company profile</Tab>
                                </TabsList>
                                <TabPanel value={0}>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold', margin: '10px 23px' }}>Product details</Typography>
                                    <Typography sx={{ pb: 1, fontSize: '24px', fontWeight: 'bold', margin: '10px 23px', color: "#0d47a1", borderBottom: '2px solid #0d47a1', width: '800px' }}>Products Description</Typography>
                                    <TableContainer>
                                        <Table size="small" sx={{ width: '800px', border: '1px solid lightgrey', ml: 3 }}>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>Country of origin</TableCell>
                                                    <TableCell sx={{ pl: '170px' }}>China</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Model</TableCell>
                                                    <TableCell sx={{ pl: '170px' }}>B39</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Colour</TableCell>
                                                    <TableCell sx={{ pl: '170px' }}>black/white/blue/red/black&red</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Packing</TableCell>
                                                    <TableCell sx={{ pl: '170px' }}>cartons</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Function</TableCell>
                                                    <TableCell sx={{ pl: '170px' }}>support BT/TF/FM/AUX,with UV technology</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <img style={{ margin: '10px 23px', width: '800px' }} src="https://sc04.alicdn.com/kf/Hbbcd8c2f24a446c99c82278819d147327/252010103/Hbbcd8c2f24a446c99c82278819d147327.jpg" alt="img" />
                                    <img style={{ width: '800px', margin: '0 23px' }} src="https://sc04.alicdn.com/kf/H6f66ca502b7f49168df4a39b796027d42/252010103/H6f66ca502b7f49168df4a39b796027d42.jpg" alt="img" />
                                    <img style={{ width: '800px', margin: '0 23px' }} src="https://sc04.alicdn.com/kf/H9c42b7b5d5f8437aaec9a6cbe1c35f78C/252010103/H9c42b7b5d5f8437aaec9a6cbe1c35f78C.jpg" alt="img" />
                                    <img style={{ width: '800px', margin: '0 23px' }} src="https://sc04.alicdn.com/kf/H7f5f286ce3b74ac8bc0dd2146137eb0ds/252010103/H7f5f286ce3b74ac8bc0dd2146137eb0ds.jpg" alt="img" />
                                    <img style={{ width: '800px', margin: '0 23px' }} src="https://sc04.alicdn.com/kf/Ha4008de0354f4da893d7c61d4e59136fx/252010103/Ha4008de0354f4da893d7c61d4e59136fx.jpg" alt="img" />
                                    <img style={{ width: '800px', margin: '0 23px' }} src="https://sc04.alicdn.com/kf/Hc77265e3acf748b484e5ab98447e9e3dq/252010103/Hc77265e3acf748b484e5ab98447e9e3dq.jpeg" alt="img" />
                                    <img style={{ width: '800px', margin: '0 23px' }} src="https://sc04.alicdn.com/kf/H6d9b6040abaa4b69a72d8db053a8ab4cj/252010103/H6d9b6040abaa4b69a72d8db053a8ab4cj.jpeg" alt="img" />
                                    <img style={{ width: '800px', margin: '0 23px' }} src="https://sc04.alicdn.com/kf/H18cb3f45de8a40b689bf7b8ba45b5bb8p/252010103/H18cb3f45de8a40b689bf7b8ba45b5bb8p.jpeg" alt="img" />
                                    <img style={{ width: '800px', margin: '0 23px' }} src="https://sc04.alicdn.com/kf/H33b6e62be3314d8db7d0775534873dc3V/252010103/H33b6e62be3314d8db7d0775534873dc3V.jpeg" alt="img" />

                                    <Box>
                                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold', margin: '10px' }}>Recommended by seller</Typography>
                                        <div className=" d-flex flex-wrap">
                                            <Card sx={{ width: '220px', height: '330px', p: 2, m: 1, cursor: 'pointer' }}>
                                                <CardMedia
                                                    sx={{ height: '170px', width: '165px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                                    image='https://sc04.alicdn.com/kf/Hae11e5e4f7794843a899f923d05fa3493/XB450AP-Wired-Headphone-Cheap-Price-3-5mm.jpg_250x250.jpg_.webp'
                                                    title="logo-design"
                                                />
                                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.90 - US$21.4</p>
                                                <p>5 pieces (MOQ)</p>
                                            </Card>
                                            <Card sx={{ width: '220px', height: '330px', p: 2, m: 1, cursor: 'pointer' }}>
                                                <CardMedia
                                                    sx={{ height: '170px', width: '165px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                                    image='https://sc04.alicdn.com/kf/H7515a560a2654c089ad878ab70144c70U/HOT-Glowing-BT5-0-Headset-Mobile-Phone.jpg_250x250.jpg_.webp'
                                                    title="logo-design"
                                                />
                                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.90 - US$21.4</p>
                                                <p>5 pieces (MOQ)</p>
                                            </Card>
                                            <Card sx={{ width: '220px', height: '330px', p: 2, m: 1, cursor: 'pointer' }}>
                                                <CardMedia
                                                    sx={{ height: '170px', width: '165px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                                    image='https://sc04.alicdn.com/kf/H16772e0e69614ea4b1accdfbc029e7c9t/New-Rainbow-Wearable-Cute-And-Fashionable-Student.jpeg_250x250.jpeg_.webp'
                                                    title="logo-design"
                                                />
                                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.90 - US$21.4</p>
                                                <p>5 pieces (MOQ)</p>
                                            </Card>
                                            <Card sx={{ width: '220px', height: '330px', p: 2, m: 1, cursor: 'pointer' }}>
                                                <CardMedia
                                                    sx={{ height: '170px', width: '165px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                                    image='https://sc04.alicdn.com/kf/H1876c1186b4c4d5c9f046db7724a802fW/i13AP-2021-New-Design-Metallic-Wired-Headset.jpg_250x250.jpg_.webp'
                                                    title="logo-design"
                                                />
                                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.90 - US$21.4</p>
                                                <p>5 pieces (MOQ)</p>
                                            </Card>
                                            <Card sx={{ width: '220px', height: '330px', p: 2, m: 1, cursor: 'pointer' }}>
                                                <CardMedia
                                                    sx={{ height: '170px', width: '165px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                                    image='https://sc04.alicdn.com/kf/Hac83792a5c83421e867811459854f3efv/i12AP-Made-in-China-Stereo-Audio-Earphones.png_250x250.png_.webp'
                                                    title="logo-design"
                                                />
                                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.90 - US$21.4</p>
                                                <p>5 pieces (MOQ)</p>
                                            </Card>
                                            <Card sx={{ width: '220px', height: '330px', p: 2, m: 1, cursor: 'pointer' }}>
                                                <CardMedia
                                                    sx={{ height: '170px', width: '165px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                                    image='https://sc04.alicdn.com/kf/Hd6c96367652c47d8917d5064e94dd336X/NEW-2021External-Sound-Wireless-Eaprhones-Headphones-Headsets.jpg_250x250.jpg_.webp'
                                                    title="logo-design"
                                                />
                                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.90 - US$21.4</p>
                                                <p>5 pieces (MOQ)</p>
                                            </Card>
                                            <Card sx={{ width: '220px', height: '330px', p: 2, m: 1, cursor: 'pointer' }}>
                                                <CardMedia
                                                    sx={{ height: '170px', width: '165px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                                    image='https://sc04.alicdn.com/kf/Hfbf65b5cee5f4a93b65b9cbd53a069b1d/YLZ-2-External-Sound-Wireless-Headset-with.jpg_250x250.jpg_.webp'
                                                    title="logo-design"
                                                />
                                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.90 - US$21.4</p>
                                                <p>5 pieces (MOQ)</p>
                                            </Card>
                                            <Card sx={{ width: '220px', height: '330px', p: 2, m: 1, cursor: 'pointer' }}>
                                                <CardMedia
                                                    sx={{ height: '170px', width: '165px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                                    image='https://sc04.alicdn.com/kf/H806f4b6029104ad78801dba858d1da52A/Factory-direct-sales-of-high-quality-cat.jpg_250x250.jpg_.webp'
                                                    title="logo-design"
                                                />
                                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.90 - US$21.4</p>
                                                <p>5 pieces (MOQ)</p>
                                            </Card>
                                            <Card sx={{ width: '220px', height: '330px', p: 2, m: 1, cursor: 'pointer' }}>
                                                <CardMedia
                                                    sx={{ height: '170px', width: '165px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                                    image='https://sc04.alicdn.com/kf/H961f20bb52234132bcb220c63c57b1be2/Cat-Headset-Cosplay-Wired-Gaming-Headphone-Pink.jpeg_250x250.jpeg_.webp'
                                                    title="logo-design"
                                                />
                                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.90 - US$21.4</p>
                                                <p>5 pieces (MOQ)</p>
                                            </Card>
                                            <Card sx={{ width: '220px', height: '330px', p: 2, m: 1, cursor: 'pointer' }}>
                                                <CardMedia
                                                    sx={{ height: '170px', width: '165px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                                    image='https://sc04.alicdn.com/kf/H68b9fa15d2fb4a4ab7a542296ddc019fV/Sports-Running-Neckband-Wireless-Headphone-Blue-tooth.jpg_250x250.jpg_.webp'
                                                    title="logo-design"
                                                />
                                                <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                                <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.90 - US$21.4</p>
                                                <p>5 pieces (MOQ)</p>
                                            </Card>

                                        </div>
                                    </Box>

                                </TabPanel>

                                <TabPanel value={1}>
                                    <Typography sx={{ pb: 1, fontSize: '24px', fontWeight: 'bold', margin: '10px 23px', color: "#0d47a1", borderBottom: '2px solid #0d47a1', width: '800px' }}>Company Profile</Typography>
                                    <img style={{ width: '800px', margin: '0 23px' }} src="https://sc04.alicdn.com/kf/H6b9892eaf75241bbbbadce21d7757520P/252010103/H6b9892eaf75241bbbbadce21d7757520P.jpg" alt="img" />
                                    <Typography sx={{ pb: 1, fontSize: '16px', fontWeight: 'bold', margin: '15px 23px 1px 23px' }}>Company Profile</Typography>
                                    <Typography sx={{ fontSize: '16px', margin: '2px 23px 0 23px', letterSpacing: '1', textAlign: 'justify', width: '800px' }}>Founded in 2021, Xiangyin Electronic Technology Co., Ltd. is a professional manufacturer from Shenzhen, Guangdong Province, China. We focus on the design, manufacture and sales of high-quality wireless and wired headphones. Now, our major products series are TWS,headphones, wireless headphones, game headphones and so on.Our goal is to be your great long term global manufacturing partner providing great products and services.</Typography>
                                    <Typography sx={{ fontSize: '16px', margin: '0 23px', letterSpacing: '1', textAlign: 'justify' }}>WeChat Nbr. : 86-18124601618</Typography>
                                    <Typography sx={{ fontSize: '16px', margin: '0 23px', letterSpacing: '1', textAlign: 'justify' }}>WhatsApp Nbr. :86-15813331660</Typography>
                                    <div className=" d-flex" style={{ margin: '20px 20px' }}>
                                        <div>
                                            <img style={{ width: '400px', height: '160px', objectFit: 'cover', margin: '5px' }} src="https://sc04.alicdn.com/kf/Habdaf319cae74ed087faae06fbfe49910/252010103/Habdaf319cae74ed087faae06fbfe49910.jpg" alt="img" /><br />
                                            <img style={{ width: '400px', height: '160px', objectFit: 'cover', margin: '5px' }} src="https://sc04.alicdn.com/kf/H00baf5496c7046beb780983b87f98ffbX/252010103/H00baf5496c7046beb780983b87f98ffbX.jpg" alt="img" />
                                        </div>
                                        <div>
                                            <img style={{ width: '400px', height: '330px', objectFit: 'cover', margin: '5px 5px' }} src="https://sc04.alicdn.com/kf/H47541198d62340b0b1d6d7c7c2a563494/252010103/H47541198d62340b0b1d6d7c7c2a563494.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div>
                                        <Typography sx={{ fontSize: '16px', margin: '0 23px', fontWeight: 'bold' }}>Send your message to this supplier</Typography>
                                        <div style={{ margin: '30px 60px' }}>
                                            <p><span style={{ color: 'grey', margin: '0 20px 0 45px' }}>To:</span> Zhang Grace</p>
                                            <div className=" d-flex">
                                                <p><label for="Message" style={{ color: 'grey', marginRight: '20px' }}>Message:</label></p>
                                                <textarea id="message" name="message" rows="8" cols="70" placeholder="Enter your enquiry detail such as product details,color,size etc" />
                                            </div>
                                            <small style={{ fontSize: '14px', color: 'grey', margin: '0 93px' }}>Your message must be between 20-8000 characters</small>

                                            <div className=" d-flex" style={{ margin: '20px 2px' }}>
                                                <p><label style={{ color: 'grey', marginRight: '20px' }}>Quantity:</label></p>
                                                <input placeholder=" 1.0" style={{ width: '200px' }} />
                                                <select style={{ width: '200px', marginLeft: '10px' }}>
                                                    <option>Acre/Acres</option>
                                                    <option>Box/Boxes</option>
                                                    <option>Day/Days</option>
                                                </select>
                                            </div>
                                            <div style={{ margin: '20px 85px' }}>
                                                <p style={{ margin: 0 }}><FormControlLabel control={<Checkbox size="small" />} label=" Recommend matching suppliers if this supplier doesn’t contact me on Message Center within 24 hours. " /></p>
                                                <p style={{ margin: 0 }}><FormControlLabel control={<Checkbox size="small" />} label="I agree to share my Business Card to the supplier." /></p>
                                                <Button variant="contained" sx={{ p: '8px 40px', mt: 1 }}>send</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <Box sx={{ m: '40px 30px 0 30px', borderRadius: '10px', bgcolor: 'white', height: '360px', border: '1px solid lightgrey' }}>
                                        <h5 style={{ padding: '15px 0 0 15px', fontWeight: 'bold' }}>Frequently bought together</h5>
                                        <Swiper
                                            navigation={true}
                                            modules={[Navigation]}
                                            slidesPerView={5}
                                            spaceBetween={1}
                                        >
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H7ba5145889634a98bf3c8cb4b9fa11e8v.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div></SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H7515a560a2654c089ad878ab70144c70U.jpg_220x220.jpg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf58fe06b04c4469c8e69ea123d2b20e2f.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H59e39b3c962045358da71ff75f653ee4T.jpeg_220x220.jpeg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf02879cd77a94afc90e91d595c926256D.jpg_220x220.jpg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1eaf6f756b3e4522b78f837964ca2d47V.jpg_220x220.jpg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hc0093dd05fd546b5b5de689edb4f0e636.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/He338bfe5c25048afb673090a39e8f4d99.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H89fb94a44bc9414e95a86c1782b5730d2.jpeg_220x220.jpeg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </Box>

                                    <Box sx={{ m: '60px 30px 0 30px', borderRadius: '10px', bgcolor: 'white', height: '360px', border: '1px solid lightgrey' }}>
                                        <h5 style={{ padding: '15px 0 0 15px', fontWeight: 'bold' }}>Supplier's popular products</h5>
                                        <Swiper
                                            navigation={true}
                                            modules={[Navigation]}
                                            slidesPerView={5}
                                            spaceBetween={1}
                                        >
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H7ba5145889634a98bf3c8cb4b9fa11e8v.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div></SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H7515a560a2654c089ad878ab70144c70U.jpg_220x220.jpg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf58fe06b04c4469c8e69ea123d2b20e2f.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H59e39b3c962045358da71ff75f653ee4T.jpeg_220x220.jpeg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf02879cd77a94afc90e91d595c926256D.jpg_220x220.jpg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1eaf6f756b3e4522b78f837964ca2d47V.jpg_220x220.jpg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hc0093dd05fd546b5b5de689edb4f0e636.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/He338bfe5c25048afb673090a39e8f4d99.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H89fb94a44bc9414e95a86c1782b5730d2.jpeg_220x220.jpeg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </Box>
                                </TabPanel>
                            </Tabs>
                        </TabPanel>
                        <TabPanel value={1}>
                            <Tabs>
                                <TabsList>
                                    <Tab style={{ borderRadius: '10px 10px 0 0', margin: '10px 4px 10px 23px', padding: '8px 20px', backgroundColor: 'white', border: '1px solid lightgrey', fontWeight: 'bold' }} value={0}>Company Overview</Tab>
                                    <Tab style={{ borderRadius: '10px 10px 0 0', margin: '10px 4px 10px 4px', padding: '8px 20px', backgroundColor: 'white', border: '1px solid lightgrey', fontWeight: 'bold' }} value={1}>Trade Capacity</Tab>
                                </TabsList>
                                <TabPanel value={0}>
                                    <Box>
                                        <Typography sx={{ fontSize: '16px', fontWeight: 'bold', margin: '10px 43px' }}>COMPANY OVERVIEW</Typography>
                                        <Typography sx={{ pb: 1, fontSize: '14px', margin: '10px 43px' }}>Company Album</Typography>
                                        <TableContainer>
                                            <Table size="small" sx={{ width: '1000px', border: '1px solid lightgrey', ml: 3 }}>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>Business type</TableCell>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }} >Trading Company, Distributor/Wholesaler, Business Service (Transportation, finance, travel, Ads, etc)</TableCell>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>Country / Region</TableCell>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>Guangdong, China</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>Main Products</TableCell>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }} >headphones, earphones, TWS, wireless headset, game headphone</TableCell>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>Total employees</TableCell>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>-</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>Year established</TableCell>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }} >2021</TableCell>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>Certifications</TableCell>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>-</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>Product Certifications</TableCell>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>-</TableCell>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>Patents</TableCell>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>-</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>Trademarks</TableCell>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }} >-</TableCell>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>Main Markets</TableCell>
                                                        <TableCell sx={{ width: '400px', fontSize: '14px' }}>North America 30.00% South America 20.00% Mid East 15.00%</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Box>
                                </TabPanel>
                                <TabPanel value={1}>
                                    <Typography className="bg-typo" sx={{ fontSize: '16px', height: '60px', color: 'white', p: '15px 30px', fontWeight: 'bold', margin: '10px 23px', borderRadius: '20px20px 0 0' }}>TRADE CAPABILITIES</Typography>
                                    <Typography sx={{ pb: 1, fontSize: '14px', margin: '10px 43px', fontWeight: 'bold' }}>Main Markets & Product(s)</Typography>
                                    <TableContainer>
                                        <Table size="small" sx={{ width: '1000px', border: '1px solid lightgrey', ml: 3 }}>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>Main markets</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }} >Total Revenue(%)</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>Main Product(s)</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>Verified</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>North America </TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }} >30.00%</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>-</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>-</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>South America</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }} >20.00%</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>-</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>-</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>Mid East</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>15.00%</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>-</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>-</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>Eastern Europe</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }} >10.00%</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>- </TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>-</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>Southeast Asia</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }} >10.00%</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>- </TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>-</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>Southern Europe</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }} >10.00%</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>- </TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>-</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>Western Europe</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }} >5.00%</TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>- </TableCell>
                                                    <TableCell sx={{ width: '400px', fontSize: '14px' }}>-</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Typography sx={{ fontSize: '14px', m: '10px 23px', p: '10px', border: '1px solid lightgrey' }}>View this supplier’s website</Typography>
                                    <div style={{ margin: '30px 0' }}>
                                        <Typography sx={{ fontSize: '16px', margin: '0 23px', fontWeight: 'bold' }}>Send your message to this supplier</Typography>
                                        <div style={{ margin: '30px 60px' }}>
                                            <p><span style={{ color: 'grey', margin: '0 20px 0 45px' }}>To:</span> Zhang Grace</p>
                                            <div className=" d-flex">
                                                <p><label for="Message" style={{ color: 'grey', marginRight: '20px' }}>Message:</label></p>
                                                <textarea id="message" name="message" rows="8" cols="70" placeholder="Enter your enquiry detail such as product details,color,size etc" />
                                            </div>
                                            <small style={{ fontSize: '14px', color: 'grey', margin: '0 93px' }}>Your message must be between 20-8000 characters</small>

                                            <div className=" d-flex" style={{ margin: '20px 2px' }}>
                                                <p><label style={{ color: 'grey', marginRight: '20px' }}>Quantity:</label></p>
                                                <input placeholder=" 1.0" style={{ width: '200px' }} />
                                                <select style={{ width: '200px', marginLeft: '10px' }}>
                                                    <option>Acre/Acres</option>
                                                    <option>Box/Boxes</option>
                                                    <option>Day/Days</option>
                                                </select>
                                            </div>
                                            <div style={{ margin: '20px 85px' }}>
                                                <p style={{ margin: 0 }}><FormControlLabel control={<Checkbox size="small" />} label=" Recommend matching suppliers if this supplier doesn’t contact me on Message Center within 24 hours. " /></p>
                                                <p style={{ margin: 0 }}><FormControlLabel control={<Checkbox size="small" />} label="I agree to share my Business Card to the supplier." /></p>
                                                <Button variant="contained" sx={{ p: '8px 40px', mt: 1 }}>send</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <Box sx={{ m: '40px 30px 0 30px', borderRadius: '10px', bgcolor: 'white', height: '360px', border: '1px solid lightgrey' }}>
                                        <h5 style={{ padding: '15px 0 0 15px', fontWeight: 'bold' }}>Frequently bought together</h5>
                                        <Swiper
                                            navigation={true}
                                            modules={[Navigation]}
                                            slidesPerView={5}
                                            spaceBetween={1}
                                        >
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H7ba5145889634a98bf3c8cb4b9fa11e8v.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div></SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H7515a560a2654c089ad878ab70144c70U.jpg_220x220.jpg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf58fe06b04c4469c8e69ea123d2b20e2f.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H59e39b3c962045358da71ff75f653ee4T.jpeg_220x220.jpeg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf02879cd77a94afc90e91d595c926256D.jpg_220x220.jpg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1eaf6f756b3e4522b78f837964ca2d47V.jpg_220x220.jpg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hc0093dd05fd546b5b5de689edb4f0e636.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/He338bfe5c25048afb673090a39e8f4d99.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H89fb94a44bc9414e95a86c1782b5730d2.jpeg_220x220.jpeg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </Box>

                                    <Box sx={{ m: '60px 30px 0 30px', borderRadius: '10px', bgcolor: 'white', height: '360px', border: '1px solid lightgrey' }}>
                                        <h5 style={{ padding: '15px 0 0 15px', fontWeight: 'bold' }}>Supplier's popular products</h5>
                                        <Swiper
                                            navigation={true}
                                            modules={[Navigation]}
                                            slidesPerView={5}
                                            spaceBetween={1}
                                        >
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H7ba5145889634a98bf3c8cb4b9fa11e8v.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div></SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H7515a560a2654c089ad878ab70144c70U.jpg_220x220.jpg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf58fe06b04c4469c8e69ea123d2b20e2f.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H59e39b3c962045358da71ff75f653ee4T.jpeg_220x220.jpeg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf02879cd77a94afc90e91d595c926256D.jpg_220x220.jpg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1eaf6f756b3e4522b78f837964ca2d47V.jpg_220x220.jpg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hc0093dd05fd546b5b5de689edb4f0e636.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/He338bfe5c25048afb673090a39e8f4d99.png_220x220.png" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div style={{ margin: '20px 60px', width: '200px', overflow: 'hidden' }}>
                                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H89fb94a44bc9414e95a86c1782b5730d2.jpeg_220x220.jpeg" alt="img" />
                                                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                                    <p>1.0 piece (MOQ)</p>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </Box>
                                </TabPanel>
                            </Tabs>
                        </TabPanel>
                        <Box sx={{ ml: 3, mr: 3, mt: 2, p: 3, border: '1px solid lightgrey' }}>
                            <b style={{ fontSize: '18px' }}>Related Searches :</b>
                            <div style={{ display: 'flex', }}>
                                <Box>
                                    <List sx={{ m: '0 30px' }}>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>mini mp3 player</ListItemText>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>digital mp3 player</ListItemText>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>mp3 music player</ListItemText>
                                    </List>
                                </Box>
                                <Box>
                                    <List sx={{ m: '0 30px' }}>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>coby mp3 player</ListItemText>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>China alpine mp3</ListItemText>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>record player</ListItemText>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>China imagic mp3</ListItemText>

                                    </List>
                                </Box>
                                <Box>
                                    <List sx={{ m: '0 30px' }}>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>China guitar mp3</ListItemText>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>China mp3 disney</ListItemText>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>wrist mp3 player</ListItemText>
                                    </List>
                                </Box>
                                <Box>
                                    <List sx={{ m: '0 30px' }}>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>sport mp3 player</ListItemText>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>China newsmy mp3</ListItemText>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>China panton mp3</ListItemText>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}> China compat mp3</ListItemText>
                                    </List>
                                </Box>

                                <Box>
                                    <List sx={{ m: '0 30px' }}>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>usb mp3 player</ListItemText>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>cheap mp3 players</ListItemText>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>China mp3 to wav</ListItemText>
                                        <ListItemText sx={{ fontSize: '14px', m: '1px 10px' }}>China mickey mp3</ListItemText>
                                    </List>
                                </Box>

                            </div>
                            <Box sx={{ display: 'flex', pt: 4, borderTop: '1px solid lightgrey', mt: 3 }}>
                                <Box>
                                    <TwitterIcon sx={{ marginLeft: '10px', color: 'grey', fontSize: '35px' }} />
                                    <AiFillInstagram style={{ marginLeft: '10px', color: 'grey', fontSize: '35px' }} />
                                    <FacebookIcon sx={{ marginLeft: '10px', color: 'grey', fontSize: '35px' }} />
                                    <LinkedInIcon sx={{ marginLeft: '10px', color: 'grey', fontSize: '35px' }} />
                                    <YouTubeIcon sx={{ marginLeft: '10px', color: 'grey', fontSize: '35px' }} />
                                    <EmailIcon sx={{ marginLeft: '10px', color: 'grey', fontSize: '35px' }} />
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <p style={{ margin: ' 0 60px' }}>Trade on the go with the <NavLink style={{ fontWeight: 'bold', color: 'black' }}>Abaris.com app</NavLink> </p>
                                    <img style={{ height: '40px', marginLeft: '50px' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN018KnDNq1JleFgkjLRq_!!6000000001069-2-tps-447-132.png" alt="img" />
                                    <img style={{ height: '40px', marginLeft: '20px' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN01i9Aj641atkjJJ9I6y_!!6000000003388-2-tps-396-132.png" alt="img" />
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', mt: 3, bgcolor: 'lightgrey', pt: 2 }}>
                                <p style={{ fontSize: '14px', paddingLeft: '20px' }}>Copyright © 1996-2023 Abaris  InterMESH Ltd. All rights reserved.</p>
                                <p style={{ fontSize: '14px', position: 'absolute', right: 130 }}>Terms of Use - Privacy Policy - Link to Us</p>
                            </Box>
                        </Box>
                    </Tabs>
                </Box>
            </Box>
        </>
    )
}

export default ConsumerElectronicsHeadPhones
