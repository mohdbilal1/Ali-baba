import { Box, Button, Checkbox, Divider, List, TextField } from "@mui/material"
import { NavLink } from "react-router-dom"
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../stylecss/companyPageStyle.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CompanyPage = () => {
    return (
        <>
            <Box sx={{ display: 'flex', boxShadow: '1px 1px 6px lightgrey', p: '6px 0' }}>
                <div className='pt-2 pb-2 d-flex'>
                    <a href="/">
                        <img className='img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain', margin: '0 10px' }} src={imgeLogo} alt="logo-img" />
                    </a>
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
                                    <p>Production Monitoring & Inspection Services</p>
                                    <p>Logistics Service</p>
                                </div>
                                <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                    <h6>Membership Services </h6>
                                    <p>Buyer Business Identity</p>
                                    <p>Supplier Membership</p>
                                </div>
                            </div>
                        </Box>
                    </div>
                    <div className="service-div">
                        <p style={{ margin: '0 0 0 5px', padding: '6px 8px', borderLeft: '1px solid lightgrey', fontSize: '14px' }}>Help </p>
                        <Box className='hiddenHelp'>
                            <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                <h6>Help Center </h6>
                                <p>For buyers</p>
                                <p>For suppliers</p>
                                <p>Open a case</p>
                                <p>Report IPR infringement</p>
                                <p>Report abuse</p>
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
                            <NavLink to='/' style={{ fontSize: '14px' }}><VscAccount style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />My Abaris </NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>order</NavLink>
                        </li>

                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }} className='signInHover'>English - USD</NavLink>
                        </li>


                    </List>
                </Box>

            </Box>

            <Box className=' d-flex'>
                <div style={{ padding: '22px 30px 10px 40px' }}>
                    <img style={{ width: '220px' }} src="https://sc02.alicdn.com/kf/Heed456c655c14f2ab94ad3fd9c3a96cd9.jpg" alt="img" />
                </div>
                <div className=" p-5 mt-1">
                    <h4 style={{ fontWeight: 'bold' }}>Shenzhen Xiangyin Electronic Technology Co., Ltd.</h4>
                    <h6>3 years - Guangdong, China</h6>
                    <p style={{ fontSize: '14px' }}>Main categories: headphones,earphones,TWS,wireless headset,game headphone</p>
                </div>
                <div style={{ padding: '40px 10px 10px 50px', margin: '0 0 0 50px' }}>
                    <Button variant="contained" size="small" sx={{ borderRadius: '30px', padding: '6px 40px', m: '5px 0' }}>Send Inquiry</Button> <br />
                    <Button variant="outlined" size="small" sx={{ borderRadius: '30px', padding: '6px 40px', m: '5px 0' }}>Send Inquiry</Button>
                    <p style={{ marginLeft: '25px' }}> <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />Follow</p>
                </div>
            </Box>

            <Box sx={{ display: 'flex', bgcolor: '#1976d2', color: 'white', p: 1, position: 'sticky', top: 0, zIndex: 10 }}>
                <List sx={{ display: 'flex', fontSize: '14px' }}>
                    <li style={{ padding: '0 30px' }}>Home </li>
                    <li style={{ padding: '0 30px' }}> Product</li>
                    <li style={{ padding: '0 30px' }}>Profile</li>
                    <li style={{ padding: '0 30px' }}> Contact</li>
                    <li style={{ padding: '0 30px' }}>Custom Page 2</li>
                </List>
                <div style={{ display: 'flex', position: 'absolute', right: 40 }}>
                    <TextField variant="standard"
                        InputProps={{
                            disableUnderline: true,
                        }}
                        size='small'
                        sx={{ bgcolor: 'white', borderRadius: '10px 0 0 10px', border: 'none', p: '5px 10px', height: '37px' }}
                        placeholder="Search in this store"
                    />
                    <div style={{ backgroundColor: 'white', color: 'grey', borderRadius: '0 10px 10px 0', fontSize: '17px', padding: ' 2px 10px' }}>
                        <SearchOutlinedIcon sx={{ fontSize: '20px' }} />
                    </div>
                </div>
            </Box>

            <Box>
                <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    style={{ objectFit: 'cover', height: '500px', overflow: 'hidden' }}
                >
                    <div>
                        <img style={{ width: '100%', height: '500px', objectFit: 'cover' }} src='https://s.alicdn.com/@sc02/kf/H1de44847ffe2444eae8c3da282940015a.jpg_q80.jpg' alt="img" />
                    </div>
                    <div>
                        <img style={{ width: '100%', height: '500px', objectFit: 'cover' }} src='https://s.alicdn.com/@sc02/kf/H6de4c3f719a74fb0b69f1ed9278c0556w.jpg_q80.jpg' alt="img" />
                    </div>
                    <div>
                        <img style={{ width: '100%', height: '500px', objectFit: 'cover' }} src='https://s.alicdn.com/@sc02/kf/Hd86711f437254d62a9c43c39d82678c2d.jpg_q80.jpg' alt="img" />
                    </div>

                </Slider>
            </Box>

            <Box sx={{ m: '10px 30px 0 30px', borderRadius: '10px', bgcolor: 'white', border: '1px solid lightgrey' }}>
                <h5 style={{ padding: '15px 20px', fontWeight: 'bold' }}>Promotion for sample</h5>
                <div className=" d-flex flex-wrap ms-5 ps-4">
                    <div className=" d-flex" style={{ margin: '5px 5px', overflow: 'hidden', border: '1px solid lightgrey', height: '110px' }}>
                        <div>
                            <img style={{ height: '110px', width: '110px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hc32059d7336d4934931c16bc78d0aa1em.jpg_220x220.jpg" alt="img" />
                        </div>
                        <div className=" p-2">
                            <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                            <p style={{ fontWeight: 'bold', margin: '3px 0' }}>$2.18 <span style={{ color: 'grey', fontSize: '12px' }}>/ piece</span></p>
                            <p><b>1.0 piece</b> <span style={{ color: 'grey', fontSize: '12px' }}>/ (Min. Order)</span></p>
                        </div>

                    </div>
                    <div className=" d-flex" style={{ margin: '5px 5px', overflow: 'hidden', border: '1px solid lightgrey', height: '110px' }}>
                        <div>
                            <img style={{ height: '110px', width: '110px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H7515a560a2654c089ad878ab70144c70U.jpg_220x220.jpg" alt="img" />
                        </div>
                        <div className=" p-2">
                            <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                            <p style={{ fontWeight: 'bold', margin: '3px 0' }}>$2.18 <span style={{ color: 'grey', fontSize: '12px' }}>/ piece</span></p>
                            <p><b>1.0 piece</b> <span style={{ color: 'grey', fontSize: '12px' }}>/ (Min. Order)</span></p>
                        </div>

                    </div>
                    <div className=" d-flex" style={{ margin: '5px 5px', overflow: 'hidden', border: '1px solid lightgrey', height: '110px' }}>
                        <div>
                            <img style={{ height: '110px', width: '110px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H08a5ae7044194cc492dd431a8423162eC.jpeg_220x220.jpeg" alt="img" />

                        </div>
                        <div className=" p-2">
                            <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                            <p style={{ fontWeight: 'bold', margin: '3px 0' }}>$2.18 <span style={{ color: 'grey', fontSize: '12px' }}>/ piece</span></p>
                            <p><b>1.0 piece</b> <span style={{ color: 'grey', fontSize: '12px' }}>/ (Min. Order)</span></p>
                        </div>

                    </div>
                    <div className=" d-flex" style={{ margin: '5px 5px', overflow: 'hidden', border: '1px solid lightgrey', height: '110px' }}>
                        <div>
                            <img style={{ height: '110px', width: '110px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1d0d7919eee040d7949ae487ca585904O.jpg_220x220.jpg" alt="img" />

                        </div>
                        <div className=" p-2">
                            <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                            <p style={{ fontWeight: 'bold', margin: '3px 0' }}>$2.18 <span style={{ color: 'grey', fontSize: '12px' }}>/ piece</span></p>
                            <p><b>1.0 piece</b> <span style={{ color: 'grey', fontSize: '12px' }}>/ (Min. Order)</span></p>
                        </div>

                    </div>
                    <div className=" d-flex" style={{ margin: '5px 5px', overflow: 'hidden', border: '1px solid lightgrey', height: '110px' }}>
                        <div>
                            <img style={{ height: '110px', width: '110px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf02879cd77a94afc90e91d595c926256D.jpg_220x220.jpg" alt="img" />

                        </div>
                        <div className=" p-2">
                            <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                            <p style={{ fontWeight: 'bold', margin: '3px 0' }}>$2.18 <span style={{ color: 'grey', fontSize: '12px' }}>/ piece</span></p>
                            <p><b>1.0 piece</b> <span style={{ color: 'grey', fontSize: '12px' }}>/ (Min. Order)</span></p>
                        </div>

                    </div>
                    <div className=" d-flex" style={{ margin: '5px 5px', overflow: 'hidden', border: '1px solid lightgrey', height: '110px' }}>
                        <div>
                            <img style={{ height: '110px', width: '110px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1eaf6f756b3e4522b78f837964ca2d47V.jpg_220x220.jpg" alt="img" />

                        </div>
                        <div className=" p-2">
                            <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                            <p style={{ fontWeight: 'bold', margin: '3px 0' }}>$2.18 <span style={{ color: 'grey', fontSize: '12px' }}>/ piece</span></p>
                            <p><b>1.0 piece</b> <span style={{ color: 'grey', fontSize: '12px' }}>/ (Min. Order)</span></p>
                        </div>

                    </div>
                    <div className=" d-flex" style={{ margin: '5px 5px', overflow: 'hidden', border: '1px solid lightgrey', height: '110px' }}>
                        <div>
                            <img style={{ height: '110px', width: '110px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hc0093dd05fd546b5b5de689edb4f0e636.png_220x220.png" alt="img" />

                        </div>
                        <div className=" p-2">
                            <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                            <p style={{ fontWeight: 'bold', margin: '3px 0' }}>$2.18 <span style={{ color: 'grey', fontSize: '12px' }}>/ piece</span></p>
                            <p><b>1.0 piece</b> <span style={{ color: 'grey', fontSize: '12px' }}>/ (Min. Order)</span></p>
                        </div>

                    </div>
                    <div className=" d-flex" style={{ margin: '5px 5px', overflow: 'hidden', border: '1px solid lightgrey', height: '110px' }}>
                        <div>
                            <img style={{ height: '110px', width: '110px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/He338bfe5c25048afb673090a39e8f4d99.png_220x220.png" alt="img" />

                        </div>
                        <div className=" p-2">
                            <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                            <p style={{ fontWeight: 'bold', margin: '3px 0' }}>$2.18 <span style={{ color: 'grey', fontSize: '12px' }}>/ piece</span></p>
                            <p><b>1.0 piece</b> <span style={{ color: 'grey', fontSize: '12px' }}>/ (Min. Order)</span></p>
                        </div>

                    </div>
                    <div className=" d-flex" style={{ margin: '5px 5px', overflow: 'hidden', border: '1px solid lightgrey', height: '110px' }}>
                        <div>
                            <img style={{ height: '110px', width: '110px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H89fb94a44bc9414e95a86c1782b5730d2.jpeg_220x220.jpeg" alt="img" />

                        </div>
                        <div className=" p-2">
                            <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                            <p style={{ fontWeight: 'bold', margin: '3px 0' }}>$2.18 <span style={{ color: 'grey', fontSize: '12px' }}>/ piece</span></p>
                            <p><b>1.0 piece</b> <span style={{ color: 'grey', fontSize: '12px' }}>/ (Min. Order)</span></p>
                        </div>

                    </div>
                </div>


            </Box>

            <Box sx={{ m: '10px 30px 0 30px', borderRadius: '10px', bgcolor: 'white', border: '1px solid lightgrey' }}>
                <h5 style={{ padding: '15px 20px', fontWeight: 'bold' }}>Ready to Ship</h5>
                <div className=" d-flex flex-wrap ms-5 ps-4">

                    <div className=" d-flex" style={{ margin: '5px 5px', overflow: 'hidden', border: '1px solid lightgrey', height: '110px' }}>
                        <div>
                            <img style={{ height: '110px', width: '110px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H08a5ae7044194cc492dd431a8423162eC.jpeg_220x220.jpeg" alt="img" />

                        </div>
                        <div className=" p-2">
                            <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                            <p style={{ fontWeight: 'bold', margin: '3px 0' }}>$2.18 <span style={{ color: 'grey', fontSize: '12px' }}>/ piece</span></p>
                            <p><b>1.0 piece</b> <span style={{ color: 'grey', fontSize: '12px' }}>/ (Min. Order)</span></p>
                        </div>

                    </div>
                    <div className=" d-flex" style={{ margin: '5px 5px', overflow: 'hidden', border: '1px solid lightgrey', height: '110px' }}>
                        <div>
                            <img style={{ height: '110px', width: '110px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hc0093dd05fd546b5b5de689edb4f0e636.png_220x220.png" alt="img" />

                        </div>
                        <div className=" p-2">
                            <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                            <p style={{ fontWeight: 'bold', margin: '3px 0' }}>$2.18 <span style={{ color: 'grey', fontSize: '12px' }}>/ piece</span></p>
                            <p><b>1.0 piece</b> <span style={{ color: 'grey', fontSize: '12px' }}>/ (Min. Order)</span></p>
                        </div>

                    </div>
                    <div className=" d-flex" style={{ margin: '5px 5px', overflow: 'hidden', border: '1px solid lightgrey', height: '110px' }}>
                        <div>
                            <img style={{ height: '110px', width: '110px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/He338bfe5c25048afb673090a39e8f4d99.png_220x220.png" alt="img" />

                        </div>
                        <div className=" p-2">
                            <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                            <p style={{ fontWeight: 'bold', margin: '3px 0' }}>$2.18 <span style={{ color: 'grey', fontSize: '12px' }}>/ piece</span></p>
                            <p><b>1.0 piece</b> <span style={{ color: 'grey', fontSize: '12px' }}>/ (Min. Order)</span></p>
                        </div>

                    </div>
                    <div className=" d-flex" style={{ margin: '5px 5px', overflow: 'hidden', border: '1px solid lightgrey', height: '110px' }}>
                        <div>
                            <img style={{ height: '110px', width: '110px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1d0d7919eee040d7949ae487ca585904O.jpg_220x220.jpg" alt="img" />

                        </div>
                        <div className=" p-2">
                            <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                            <p style={{ fontWeight: 'bold', margin: '3px 0' }}>$2.18 <span style={{ color: 'grey', fontSize: '12px' }}>/ piece</span></p>
                            <p><b>1.0 piece</b> <span style={{ color: 'grey', fontSize: '12px' }}>/ (Min. Order)</span></p>
                        </div>

                    </div>
                    <div className=" d-flex" style={{ margin: '5px 5px', overflow: 'hidden', border: '1px solid lightgrey', height: '110px' }}>
                        <div>
                            <img style={{ height: '110px', width: '110px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hc32059d7336d4934931c16bc78d0aa1em.jpg_220x220.jpg" alt="img" />
                        </div>
                        <div className=" p-2">
                            <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                            <p style={{ fontWeight: 'bold', margin: '3px 0' }}>$2.18 <span style={{ color: 'grey', fontSize: '12px' }}>/ piece</span></p>
                            <p><b>1.0 piece</b> <span style={{ color: 'grey', fontSize: '12px' }}>/ (Min. Order)</span></p>
                        </div>

                    </div>
                    <div className=" d-flex" style={{ margin: '5px 5px', overflow: 'hidden', border: '1px solid lightgrey', height: '110px' }}>
                        <div>
                            <img style={{ height: '110px', width: '110px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H7515a560a2654c089ad878ab70144c70U.jpg_220x220.jpg" alt="img" />
                        </div>
                        <div className=" p-2">
                            <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                            <p style={{ fontWeight: 'bold', margin: '3px 0' }}>$2.18 <span style={{ color: 'grey', fontSize: '12px' }}>/ piece</span></p>
                            <p><b>1.0 piece</b> <span style={{ color: 'grey', fontSize: '12px' }}>/ (Min. Order)</span></p>
                        </div>

                    </div>

                </div>


            </Box>

            <Box sx={{ mt: 4 }}>
                <div style={{ margin: '0 0 0 30px' }}>
                    <img style={{ objectFit: 'cover' }} src="https://s.alicdn.com/@sc02/kf/Hbba1cf4456ee4720983ec30385b917daf.jpg_q80.jpg" alt="img" />
                </div>
                <div style={{ margin: '0 0 0 30px' }}>
                    <img style={{ objectFit: 'cover' }} src="https://s.alicdn.com/@sc02/kf/Hd76adda24d1941aebce9c0a73ad9445df.jpg_q80.jpg" alt="img" />
                </div>
            </Box>

            <Box sx={{ m: '10px 30px 0 30px' }}>
                <div className=" d-flex flex-wrap">
                    <div style={{ margin: '0px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc01/kf/H2de78907f6014070914500bbb9a254dcV.jpg_250x250.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>
                    </div>

                    <div style={{ margin: '0px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc01/kf/Hada87b71b6c24b14b5c9572c453dbc2cX.png_350x350.png" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>
                    </div>


                    <div style={{ margin: '0px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc01/kf/H4a266b40d24c49a68fa9bfca69d24fbbz.jpg_350x350.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                    </div>


                    <div style={{ margin: '0px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1d0d7919eee040d7949ae487ca585904O.jpg_220x220.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                    </div>


                    <div style={{ margin: '0px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf02879cd77a94afc90e91d595c926256D.jpg_220x220.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                    </div>


                    <div style={{ margin: '0px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1eaf6f756b3e4522b78f837964ca2d47V.jpg_220x220.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                    </div>


                    <div style={{ margin: '0px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hc0093dd05fd546b5b5de689edb4f0e636.png_220x220.png" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>
                    </div>


                    <div style={{ margin: '0px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/He338bfe5c25048afb673090a39e8f4d99.png_220x220.png" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>
                    </div>


                    <div style={{ margin: '0px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H89fb94a44bc9414e95a86c1782b5730d2.jpeg_220x220.jpeg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>
                    </div>
                    <div style={{ margin: '0px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc01/kf/H2de78907f6014070914500bbb9a254dcV.jpg_250x250.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>
                    </div>

                    <div style={{ margin: '0px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc01/kf/Hada87b71b6c24b14b5c9572c453dbc2cX.png_350x350.png" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>
                    </div>


                    <div style={{ margin: '0px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc01/kf/H4a266b40d24c49a68fa9bfca69d24fbbz.jpg_350x350.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                    </div>
                </div>
            </Box>

            <Box sx={{ m: '20px 30px 0 30px', borderRadius: '10px', height: '400px', border: '1px solid lightgrey' }}>
                <h5 style={{ padding: '15px 0 0 15px', fontWeight: 'bold' }}>Top-ranking products</h5>
                <div style={{ position: 'absolute', right: 40 }}>
                    <Button size="small" variant="outlined" sx={{ borderRadius: '20px', margin: '-60px 0 0 0 ' }}>View Details</Button>
                </div>
                <Swiper
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <div className=" d-flex">
                            <div style={{ margin: '20px 60px' }}>
                                <img style={{ height: '300px', width: '300px', objectFit: 'cover', borderRadius: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hc32059d7336d4934931c16bc78d0aa1em.jpg_220x220.jpg" alt="img" />
                            </div>
                            <div style={{ padding: '30px 100px 0 20px' }}>
                                <p style={{ fontSize: '23px' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '3px 0', color: 'blue' }}>$2.18 - $4.25 <span style={{ color: 'grey', fontSize: '14px' }}>/ piece</span></p>
                                <p><b style={{ fontSize: '25px' }}>1.0 piece</b> <span style={{ color: 'grey', fontSize: '14px' }}>/ (Min. Order)</span></p>
                                <Button variant="outlined" sx={{ borderRadius: '20px', mt: 5 }}>View Details</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" d-flex">
                            <div style={{ margin: '20px 60px' }}>
                                <img style={{ height: '300px', width: '300px', objectFit: 'cover', borderRadius: '10px' }} src="https://s.alicdn.com/@sc04/kf/H7515a560a2654c089ad878ab70144c70U.jpg_220x220.jpg" alt="img" />
                            </div>
                            <div style={{ padding: '30px 100px 0 20px' }}>
                                <p style={{ fontSize: '23px' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '3px 0', color: 'blue' }}>$2.18 - $4.25 <span style={{ color: 'grey', fontSize: '14px' }}>/ piece</span></p>
                                <p><b style={{ fontSize: '25px' }}>1.0 piece</b> <span style={{ color: 'grey', fontSize: '14px' }}>/ (Min. Order)</span></p>
                                <Button variant="outlined" sx={{ borderRadius: '20px', mt: 5 }}>View Details</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" d-flex">
                            <div style={{ margin: '20px 60px' }}>
                                <img style={{ height: '300px', width: '300px', objectFit: 'cover', borderRadius: '10px' }} src="https://s.alicdn.com/@sc04/kf/H08a5ae7044194cc492dd431a8423162eC.jpeg_220x220.jpeg" alt="img" />
                            </div>
                            <div style={{ padding: '30px 100px 0 20px' }}>
                                <p style={{ fontSize: '23px' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '3px 0', color: 'blue' }}>$2.18 - $4.25 <span style={{ color: 'grey', fontSize: '14px' }}>/ piece</span></p>
                                <p><b style={{ fontSize: '25px' }}>1.0 piece</b> <span style={{ color: 'grey', fontSize: '14px' }}>/ (Min. Order)</span></p>
                                <Button variant="outlined" sx={{ borderRadius: '20px', mt: 5 }}>View Details</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" d-flex">
                            <div style={{ margin: '20px 60px' }}>
                                <img style={{ height: '300px', width: '300px', objectFit: 'cover', borderRadius: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1d0d7919eee040d7949ae487ca585904O.jpg_220x220.jpg" alt="img" />
                            </div>
                            <div style={{ padding: '30px 100px 0 20px' }}>
                                <p style={{ fontSize: '23px' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '3px 0', color: 'blue' }}>$2.18 - $4.25 <span style={{ color: 'grey', fontSize: '14px' }}>/ piece</span></p>
                                <p><b style={{ fontSize: '25px' }}>1.0 piece</b> <span style={{ color: 'grey', fontSize: '14px' }}>/ (Min. Order)</span></p>
                                <Button variant="outlined" sx={{ borderRadius: '20px', mt: 5 }}>View Details</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" d-flex">
                            <div style={{ margin: '20px 60px' }}>
                                <img style={{ height: '300px', width: '300px', objectFit: 'cover', borderRadius: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf02879cd77a94afc90e91d595c926256D.jpg_220x220.jpg" alt="img" />
                            </div>
                            <div style={{ padding: '30px 100px 0 20px' }}>
                                <p style={{ fontSize: '23px' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '3px 0', color: 'blue' }}>$2.18 - $4.25 <span style={{ color: 'grey', fontSize: '14px' }}>/ piece</span></p>
                                <p><b style={{ fontSize: '25px' }}>1.0 piece</b> <span style={{ color: 'grey', fontSize: '14px' }}>/ (Min. Order)</span></p>
                                <Button variant="outlined" sx={{ borderRadius: '20px', mt: 5 }}>View Details</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" d-flex">
                            <div style={{ margin: '20px 60px' }}>
                                <img style={{ height: '300px', width: '300px', objectFit: 'cover', borderRadius: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1eaf6f756b3e4522b78f837964ca2d47V.jpg_220x220.jpg" alt="img" />
                            </div>
                            <div style={{ padding: '30px 100px 0 20px' }}>
                                <p style={{ fontSize: '23px' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '3px 0', color: 'blue' }}>$2.18 - $4.25 <span style={{ color: 'grey', fontSize: '14px' }}>/ piece</span></p>
                                <p><b style={{ fontSize: '25px' }}>1.0 piece</b> <span style={{ color: 'grey', fontSize: '14px' }}>/ (Min. Order)</span></p>
                                <Button variant="outlined" sx={{ borderRadius: '20px', mt: 5 }}>View Details</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" d-flex">
                            <div style={{ margin: '20px 60px' }}>
                                <img style={{ height: '300px', width: '300px', objectFit: 'cover', borderRadius: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hc0093dd05fd546b5b5de689edb4f0e636.png_220x220.png" alt="img" />
                            </div>
                            <div style={{ padding: '30px 100px 0 20px' }}>
                                <p style={{ fontSize: '23px' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '3px 0', color: 'blue' }}>$2.18 - $4.25 <span style={{ color: 'grey', fontSize: '14px' }}>/ piece</span></p>
                                <p><b style={{ fontSize: '25px' }}>1.0 piece</b> <span style={{ color: 'grey', fontSize: '14px' }}>/ (Min. Order)</span></p>
                                <Button variant="outlined" sx={{ borderRadius: '20px', mt: 5 }}>View Details</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" d-flex">
                            <div style={{ margin: '20px 60px' }}>
                                <img style={{ height: '300px', width: '300px', objectFit: 'cover', borderRadius: '10px' }} src="https://s.alicdn.com/@sc04/kf/He338bfe5c25048afb673090a39e8f4d99.png_220x220.png" alt="img" />
                            </div>
                            <div style={{ padding: '30px 100px 0 20px' }}>
                                <p style={{ fontSize: '23px' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '3px 0', color: 'blue' }}>$2.18 - $4.25 <span style={{ color: 'grey', fontSize: '14px' }}>/ piece</span></p>
                                <p><b style={{ fontSize: '25px' }}>1.0 piece</b> <span style={{ color: 'grey', fontSize: '14px' }}>/ (Min. Order)</span></p>
                                <Button variant="outlined" sx={{ borderRadius: '20px', mt: 5 }}>View Details</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" d-flex">
                            <div style={{ margin: '20px 60px' }}>
                                <img style={{ height: '300px', width: '300px', objectFit: 'cover', borderRadius: '10px' }} src="https://s.alicdn.com/@sc04/kf/H89fb94a44bc9414e95a86c1782b5730d2.jpeg_220x220.jpeg" alt="img" />
                            </div>
                            <div style={{ padding: '30px 100px 0 20px' }}>
                                <p style={{ fontSize: '23px' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '3px 0', color: 'blue' }}>$2.18 - $4.25 <span style={{ color: 'grey', fontSize: '14px' }}>/ piece</span></p>
                                <p><b style={{ fontSize: '25px' }}>1.0 piece</b> <span style={{ color: 'grey', fontSize: '14px' }}>/ (Min. Order)</span></p>
                                <Button variant="outlined" sx={{ borderRadius: '20px', mt: 5 }}>View Details</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Box>

            <Box sx={{ mt: 4 }}>
                <div style={{ margin: '0 0 0 30px' }}>
                    <img style={{ objectFit: 'cover' }} src="https://s.alicdn.com/@sc02/kf/H33ae52b1010d43dcb8d8330bf9ae5c14n.jpg_q80.jpg" alt="img" />
                </div>
                <div style={{ margin: '0 0 0 30px' }}>
                    <img style={{ objectFit: 'cover' }} src="https://s.alicdn.com/@sc02/kf/H05bcb711c0e0459d87a65079b3fd12e3H.jpg_q80.jpg" alt="img" />
                </div>
                <div style={{ margin: '0 0 0 30px' }}>
                    <img style={{ objectFit: 'cover' }} src="https://s.alicdn.com/@sc02/kf/Hf05e2cdb2fc64c129f53836796a9a0d5J.jpg_q80.jpg" alt="img" />
                </div>
            </Box>

            <Box sx={{ m: '10px 30px 0 30px', borderRadius: '10px', bgcolor: 'white', border: '1px solid lightgrey' }}>
                <div style={{ backgroundColor: 'black', padding: '20px 0 150px 0', borderRadius: '10px' }}>
                    <h4 style={{ padding: '15px 0 0 15px', fontWeight: 'bold', color: 'white' }}>Top picks</h4>
                    <div style={{ position: 'absolute', right: 60 }}>
                        <Button size="small" variant="outlined" sx={{ borderRadius: '20px', margin: '-60px 0 0 0 ', color: 'white' }}>View Details <KeyboardArrowRightIcon /></Button>
                    </div>
                </div>
                <div className=" d-flex flex-wrap" style={{ marginTop: '-140px' }}>
                    <div style={{ margin: '20px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc01/kf/H2de78907f6014070914500bbb9a254dcV.jpg_250x250.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>
                    </div>

                    <div style={{ margin: '20px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc01/kf/Hada87b71b6c24b14b5c9572c453dbc2cX.png_350x350.png" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>
                    </div>


                    <div style={{ margin: '20px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc01/kf/H4a266b40d24c49a68fa9bfca69d24fbbz.jpg_350x350.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                    </div>


                    <div style={{ margin: '20px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1d0d7919eee040d7949ae487ca585904O.jpg_220x220.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                    </div>


                    <div style={{ margin: '20px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf02879cd77a94afc90e91d595c926256D.jpg_220x220.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                    </div>


                    <div style={{ margin: '20px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1eaf6f756b3e4522b78f837964ca2d47V.jpg_220x220.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                    </div>


                    <div style={{ margin: '20px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hc0093dd05fd546b5b5de689edb4f0e636.png_220x220.png" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>
                    </div>


                    <div style={{ margin: '20px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/He338bfe5c25048afb673090a39e8f4d99.png_220x220.png" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>
                    </div>


                    <div style={{ margin: '20px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H89fb94a44bc9414e95a86c1782b5730d2.jpeg_220x220.jpeg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>
                    </div>
                    <div style={{ margin: '20px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc01/kf/H2de78907f6014070914500bbb9a254dcV.jpg_250x250.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>
                    </div>

                    <div style={{ margin: '20px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc01/kf/Hada87b71b6c24b14b5c9572c453dbc2cX.png_350x350.png" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>
                    </div>


                    <div style={{ margin: '20px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc01/kf/H4a266b40d24c49a68fa9bfca69d24fbbz.jpg_350x350.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                    </div>

                    <div style={{ margin: '20px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc01/kf/H2de78907f6014070914500bbb9a254dcV.jpg_250x250.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                    </div>


                    <div style={{ margin: '20px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1d0d7919eee040d7949ae487ca585904O.jpg_220x220.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                    </div>


                    <div style={{ margin: '20px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                        <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf02879cd77a94afc90e91d595c926256D.jpg_220x220.jpg" alt="img" />
                        <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                    </div>
                </div>

            </Box>

            <Box>
                <h4 style={{ textAlign: 'center', margin: '20px 0' }}>COMPANY INTRODUCTION</h4>
                <Divider sx={{ height: '1px', border: '1px solid grey', m: '0 40px' }} />
                <div>
                    <div className=" d-flex justify-content-center" style={{ margin: '20px 0' }}>
                        <h6>Verification Type:</h6>
                        <img style={{ width: '25px', height: '25px', objectFit: 'cover', margin: '0 10px' }} src="https://is.alicdn.com/tps/TB1zElEOXXXXXaKXFXXXXXXXXXX-47-47.gif" alt="img" />
                        <p style={{ margin: '-2px 0' }}>Onsite Check</p>
                    </div>
                    <div className=" d-flex flex-wrap m-5">
                        <div className=" d-flex m-4">
                            <div>
                                <img style={{ width: '60px', height: '60px', objectFit: 'cover' }} src="https://cdn2.iconfinder.com/data/icons/miscellaneous-144-color-shadow/128/regional_territorial_geographical_map_pointer_gps_location_route_navigation-512.png" alt="img" />
                            </div>
                            <div className="ms-3">
                                <p className="mb-0">Country / Region:</p>
                                <p>Guangdong, China</p>
                            </div>

                        </div>
                        <div className=" d-flex m-4">
                            <div>
                                <img style={{ width: '60px', height: '60px', objectFit: 'cover' }} src="https://thumbs.dreamstime.com/b/icon-established-situated-established-242587547.jpg" alt="img" />
                            </div>
                            <div className="ms-3">
                                <p className="mb-0">Year Established:</p>
                                <p>2021</p>
                            </div>

                        </div>
                        <div className=" d-flex m-4">
                            <div>
                                <img style={{ width: '60px', height: '60px', objectFit: 'cover' }} src="https://tse2.mm.bing.net/th?id=OIP.07HHR881ifR_1lSx0Og6SAHaH8&pid=Api&P=0&h=180" alt="img" />
                            </div>
                            <div className="ms-3">
                                <p className="mb-0">Business Type:</p>
                                <p style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Trading Company, Distributor/Wholesaler, Business Service (Transportation, finance, travel, Ads, etc)</p>
                            </div>

                        </div>
                        <div className=" d-flex m-4">
                            <div>
                                <img style={{ width: '60px', height: '60px', objectFit: 'cover', mixBlendMode: 'hard-light', borderRadius: '50%' }} src="https://tse2.mm.bing.net/th?id=OIP.GcBi7ZK-g77CoBLyPLuXdQHaIC&pid=Api&P=0&h=180" alt="img" />
                            </div>
                            <div className="ms-3">
                                <p className="mb-0">Main Products:</p>
                                <p style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>headphones,earphones,TWS,wireless headset,game headphone,</p>
                            </div>

                        </div>
                        <div className=" d-flex m-4">
                            <div>
                                <img style={{ width: '60px', height: '60px', objectFit: 'cover' }} src="https://tse2.mm.bing.net/th?id=OIP.WA12lmKpz14j6SDMRLnckQAAAA&pid=Api&P=0&h=180" alt="img" />
                            </div>
                            <div className="ms-3">
                                <p className="mb-0">Main Markets:</p>
                                <p style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>North America, South America, Mid East, Eastern Europe, Southeast Asia</p>
                            </div>

                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" size="small" sx={{ borderRadius: '20px', p: '6px 30px', ml: 2 }}><EmailOutlinedIcon sx={{ fontSize: '18px', mr: 1 }} />contact Supplier</Button>
                        <Button variant="outlined" sx={{ borderRadius: '20px', p: '6px 30px', ml: 2 }}>Start Order</Button>
                        <Button size="small" variant="outlined" sx={{ borderRadius: '20px', p: '6px 30px', ml: 2 }}>learn more about us <KeyboardArrowRightIcon /></Button>

                    </div>
                <Divider sx={{ height: '1px', border: '1px solid grey', m: '30px 40px' }} />

                    <div style={{textAlign:'center'}}>
                        <h5>Send message to supplier</h5>
                        <div className=" d-flex justify-content-center mt-4">
                            <p><label for="Message" style={{ color: 'grey', marginRight: '20px' }}>Message:</label></p>
                            <textarea style={{resize:'none'}} id="message" name="message" rows="5" cols="70" placeholder="Enter your enquiry detail such as product details,color,size etc" />
                        </div>

                        
                        <Button variant="contained" sx={{  p: '6px 30px',m:'20px 0 0 30px'}}>Send</Button>
                    </div>
                </div>
            </Box>

            <Box sx={{ display: 'flex', mt: 3, bgcolor: 'lightgrey', pt: 2 }}>
                <p style={{ fontSize: '14px', paddingLeft: '20px' }}>Copyright © 1996-2023 Abaris  InterMESH Ltd. All rights reserved.</p>
                <p style={{ fontSize: '14px', position: 'absolute', right: 130 }}>Terms of Use - Privacy Policy - Link to Us</p>
            </Box>
        </>
    )
}

export default CompanyPage
