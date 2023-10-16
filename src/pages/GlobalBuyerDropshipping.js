import { Box, Button, Card, CardMedia, List, TextField, Typography } from '@mui/material'
import { NavLink } from "react-router-dom";
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DropshippingSidebar from '../Components/DropshippingSidebar';
import ListIcon from '@mui/icons-material/List';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { BiErrorCircle } from "react-icons/bi";
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base';
import { TbApps } from "react-icons/tb";
import { FaHeadphones, FaTrafficLight } from "react-icons/fa";
import { GrBucket } from "react-icons/gr";
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';





const GlobalBuyerDropshipping = () => {
    const [state,setState] = useState(false)
    return (
        <>
            <Box sx={{ display: 'flex', boxShadow: '1px 1px 6px lightgrey', p: '6px 0' }}>
                <div className='logo-img-div pt-2 pb-2 d-flex'>
                    <a href="/">
                        <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                    </a>
                    <p style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '20px' }}>Dropshipping</p>
                </div>
                <Box sx={{ position: 'absolute', right: 60 }}>
                    <List sx={{ display: 'flex', textAlign: 'center' }}>
                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Featured partners</NavLink>
                        </li>

                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Getting started</NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}><NotificationsOutlinedIcon style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} /></NavLink>
                        </li>

                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }} className='signInHover'><VscAccount style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} /></NavLink>
                        </li>
                    </List>
                </Box>

            </Box>
            <Box sx={{ display: 'flex', bgcolor: 'rgb(232, 232, 242)' }}>
                <div className=" col-sm-3" style={{ position: 'fixed', left: 0 }}>
                    <DropshippingSidebar setState={setState} state={state}/>
                </div>

                <div className={`${state && 'widthMange'} col-sm-8`} style={{ position: 'absolute', left: 100, width: '1200px', padding: '20px 0' }}>
                    <div className=' d-flex'>
                        <p style={{ margin: '10px 30px' }}> <ListIcon /> category</p>
                        <div className=" d-flex" style={{ border: '2px solid  #ffe172 ', borderRadius: '5px', height: '40px', margin: '10px 5px' }}>
                            <TextField variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                }}

                                sx={{ bgcolor: 'white', width: '800px', ml: 3, mt: 0.5 }}
                                placeholder="What are your looking for?"
                            />
                            <Button size='small' variant="contained" sx={{ borderRadius: ' 0 2px 2px 0', ml: 5, bgcolor: ' #ffe172', color: 'black' }}><SearchOutlinedIcon sx={{ mr: 1 }} />Search</Button>
                        </div>
                    </div>

                    <div className=' d-flex p-3 justify-content-evenly'>
                        <div>
                            <p style={{ marginTop: '5px' }}><BiErrorCircle style={{ color: 'blue', marginBottom: '3px', fontSize: '18px' }} />Please add your store</p>
                        </div>
                        <div>
                            <img style={{ width: '160px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01XE5P2V21KTfiNMFfl_!!6000000006966-2-tps-612-144.png" alt="img" />
                        </div>
                        <div>
                            <img style={{ width: '160px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN0191A8ZC1K4skozMMxk_!!6000000001111-2-tps-612-144.png" alt="img" />
                        </div>
                        <div>
                            <img style={{ width: '160px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01SgQDSg1v7kyfjT4Z2_!!6000000006126-2-tps-612-144.png" alt="img" />
                        </div>
                        <div>
                            <img style={{ width: '160px' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01MVP1iN1ht1H3PX0Mo_!!6000000004334-2-tps-612-144.png" alt="img" />
                        </div>
                        <div>
                            <p style={{ marginTop: '5px', color: 'blue' }}>Connect to other stores <ExpandMoreIcon/></p>
                        </div>

                    </div>

                    <div className=' d-flex' style={{ margin: '20px 40px' }}>
                        <div>
                            <img style={{ width: '532px', height: '260px', objectFit: 'cover', borderRadius: '10px' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN01FybSb41ZPgzwmwpg2_!!6000000003187-2-tps-1080-260.png" alt="img" />
                        </div>
                        <div style={{ padding: '0 30px' }}>
                            <div className=' d-flex'>
                                <div style={{ width: '300px', paddingRight: '10px' }}>
                                    <h6>What is dropshipping and why it matters?</h6>
                                    <p>Read more</p>
                                </div>
                                <div>
                                    <img style={{ width: '80px', margin: '-3px 0 10px 10px' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN01rs6zbe1slCIIJZRfK_!!6000000005806-2-tps-1550-1550.png" alt="img" />
                                </div>
                            </div>
                            <div className=' d-flex'>
                                <div style={{ width: '300px', paddingRight: '10px' }}>
                                    <h6>Why dropship on Abaris.com?</h6>
                                    <p>Read more</p>
                                </div>
                                <div>
                                    <img style={{ width: '80px', margin: '-3px 0 10px 10px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01CziT0K1kfgbULcyHd_!!6000000004711-2-tps-1750-1750.png" alt="img" />
                                </div>
                            </div>
                            <div className=' d-flex'>
                                <div style={{ width: '300px', paddingRight: '10px' }}>
                                    <h6>Your complete guide to dropshipping on Abaris.com</h6>
                                    <p>Read more</p>
                                </div>
                                <div>
                                    <img style={{ width: '80px', margin: '-3px 0 10px 10px' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01xq2Mfq21V0q4oBFCz_!!6000000006989-2-tps-1550-1550.png" alt="img" />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className=" d-flex flex-wrap m-2">
                        <Box sx={{ mt: 3, ml: 2, bgcolor: 'white', borderRadius: '20px' }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 'bolder', m: '20px 40px 10px 10px' }}>Local US stock</Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 1 }}>
                                <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: '10px' }}>
                                    <CardMedia
                                        sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                        image='https://s.alicdn.com/@sc04/kf/H046cb0f845f14ebfb5fed0fa547ccd9fE.png_250x250xz.jpg'
                                        title="logo-design"
                                    />
                                    <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$167.00</NavLink>
                                </Card>
                                <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: '10px' }}>
                                    <CardMedia
                                        sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                        image='https://s.alicdn.com/@sc04/kf/H431add27d091450180374c4208b7b8c0N.jpg_250x250xz.jpg'
                                        title="logo-design"
                                    />
                                    <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$11.70</NavLink>
                                </Card>
                                <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: '10px' }}>
                                    <CardMedia
                                        sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                        image='https://s.alicdn.com/@sc04/kf/H8a5d9eea58d348deb7cc49482e85b855v.jpg_250x250xz.jpg'
                                        title="logo-design"
                                    />
                                    <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$47.90</NavLink>
                                </Card>
                                <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: '10px' }}>
                                    <CardMedia
                                        sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                        image='https://s.alicdn.com/@sc04/kf/H2fbcd7f2708d44d0909a7375d0377da2w.png_250x250xz.jpg'
                                        title="logo-design"
                                    />
                                    <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$1.70</NavLink>
                                </Card>
                                <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: '10px' }}>
                                    <CardMedia
                                        sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                        image='https://s.alicdn.com/@sc04/kf/Hbff7f173aff84e338cfd5465ff62e5cap.jpg_250x250xz.jpg'
                                        title="logo-design"
                                    />
                                    <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$0.50</NavLink>
                                </Card>
                                <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: '10px' }}>
                                    <CardMedia
                                        sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                        image='https://s.alicdn.com/@sc04/kf/H38e62b947eee49eea6d0e58769103248U.png_250x250xz.jpg'
                                        title="logo-design"
                                    />
                                    <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$0.20</NavLink>
                                </Card>
                                <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: '10px' }}>
                                    <CardMedia
                                        sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                        image='https://s.alicdn.com/@sc04/kf/A2d330f92836541f5b5fa87c799dc05cdA.jpg_250x250xz.jpg'
                                        title="logo-design"
                                    />
                                    <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$10.50</NavLink>
                                </Card>

                            </Box>
                        </Box>


                        <Box sx={{ mt: 3, bgcolor: 'white', ml: 2, borderRadius: '20px' }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 'bolder', m: '20px 40px 10px 10px' }}>Products from featured suppliers</Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 0.4 }}>
                                <Card className="cardd-store" sx={{ width: '142px', height: '190px', m: '15px' }}>
                                    <CardMedia
                                        sx={{ height: '130px', width: '140px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                        image='https://s.alicdn.com/@sc04/kf/Hcbe19a98ed3f48e98fee6e24ef6a3d4dy.jpg_250x250xz.jpg'
                                        title="logo-design"
                                    />
                                    <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$124.41</NavLink>
                                </Card>

                                <Card className="cardd-store" sx={{ width: '142px', height: '190px', m: '15px' }}>
                                    <CardMedia
                                        sx={{ height: '130px', width: '140px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                        image='https://s.alicdn.com/@sc04/kf/H70f7805290a44e89b10815c403702ee0g.jpg_250x250xz.jpg'
                                        title="logo-design"
                                    />
                                    <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$14.41</NavLink>
                                </Card>
                                <Card className="cardd-store" sx={{ width: '142px', height: '190px', m: '15px' }}>
                                    <CardMedia
                                        sx={{ height: '130px', width: '140px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                        image='https://s.alicdn.com/@sc04/kf/Ha693ed8e39fb458480eeaf0af939ead36.jpg_250x250xz.jpg'
                                        title="logo-design"
                                    />
                                    <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$1.41</NavLink>
                                </Card>
                            </Box>
                        </Box>

                        <Box sx={{ mt: 3, bgcolor: 'white', ml: 2, borderRadius: '20px' }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 'bolder', m: '20px 40px 10px 10px' }}>Products under US $10</Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 0.4 }}>
                                <Card className="cardd-store" sx={{ width: '142px', height: '190px', m: '15px' }}>
                                    <CardMedia
                                        sx={{ height: '130px', width: '140px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                        image='https://s.alicdn.com/@sc04/kf/Hcdf43279384240c09b6569259234250ao.jpg_250x250xz.jpg'
                                        title="logo-design"
                                    />
                                    <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$22.00</NavLink>
                                </Card>
                                <Card className="cardd-store" sx={{ width: '142px', height: '190px', m: '15px' }}>
                                    <CardMedia
                                        sx={{ height: '130px', width: '140px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                        image='https://s.alicdn.com/@sc04/kf/Hd45c0628863d489dab039dd93e55605dZ.png_250x250xz.jpg'
                                        title="logo-design"
                                    />
                                    <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$8.30</NavLink>
                                </Card>

                                <Card className="cardd-store" sx={{ width: '142px', height: '190px', m: '15px' }}>
                                    <CardMedia
                                        sx={{ height: '130px', width: '140px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                        image='https://s.alicdn.com/@sc04/kf/HTB1dbVNzL9TBuNjy1zb760pepXaA.png_250x250xz.jpg'
                                        title="logo-design"
                                    />
                                    <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$220.00</NavLink>
                                </Card>
                            </Box>
                        </Box>
                    </div>

                    <div>
                        <Tabs>
                            <TabsList style={{ marginLeft: '30px' }}>
                                <Tab className='dropship-tab' value={0}><TbApps style={{ margin: '0 10px 3px 0', fontSize: '20px' }} />All</Tab>
                                <Tab className='dropship-tab' value={1}><FaHeadphones style={{ margin: '0 10px 3px 0', fontSize: '20px' }} />Consumer Electronics</Tab>
                                <Tab className='dropship-tab' value={2}><GrBucket style={{ margin: '0 10px 3px 0', fontSize: '20px' }} />Home Appliances</Tab>
                                <Tab className='dropship-tab' value={3}><FaTrafficLight style={{ margin: '0 10px 3px 0', fontSize: '20px' }} />Vehicles & Accessories</Tab>
                            </TabsList>
                            <TabPanel value={0}>
                                <div className=' d-flex' style={{ marginLeft: '450px' }}>
                                    <div className=' d-flex mt-3'>
                                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 20px' }}>Currency:</p>
                                        <select style={{ width: '180px', padding: '1px 10px', height: '30px', borderRadius: '5px' }}>
                                            <option>Us Dollar</option>
                                            <option>India Rupee</option>
                                            <option>Iraqi Dinar</option>
                                        </select>
                                    </div>
                                    <div className=' d-flex mt-3'>
                                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 20px' }}>Ship To:</p>
                                        <select style={{ width: '180px', padding: '1px 10px', height: '30px', borderRadius: '5px' }}>
                                            <option>America</option>
                                            <option>India</option>
                                            <option>Iraq</option>
                                        </select>
                                    </div>
                                </div>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', ml:3,mt:'10px' }}>
                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H6d9b6040abaa4b69a72d8db053a8ab4cj.jpeg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$2.18</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1.0 piece (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H6b890f67467d4d22af4cf62134b3c38dA.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$2.90 - US$21.4</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>5 pieces (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H433071eb841e4db99ebdf199fe3e5afdW.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                       <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hba1e31a22fd04b5186a9c798f624e038d.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/He763694b14484907bb90f90b453f433dI.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H7136eaef84894c818dfca619dc4bb0e5P.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hb1a32b2d7f72442e91e78f5243e9b168t.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hcc9705eb9d474732911f3a481637457bJ.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hca2bf58c9ec44977be7cff518f405b7fZ.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>


                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/U3ed4130db7c74aed959a6bf6bc115b8cB.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>


                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H4427f804e7ae4c24818624adb9518d00Z.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>


                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H0809fba050464e72b0e171ab3858c4e3v.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>


                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H9bae9ae1a6804a5893e5da565af265668.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H58029006a00c4bbca943cab4943918adF.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H9ba88146713046d9b7a8dd813953de4fO.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H6b890f67467d4d22af4cf62134b3c38dA.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$2.90 - US$21.4</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>5 pieces (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>
                                </Box>
                            </TabPanel>

                            <TabPanel value={1}>
                            <div className=' d-flex' style={{ marginLeft: '450px' }}>
                                    <div className=' d-flex mt-3'>
                                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 20px' }}>Currency:</p>
                                        <select style={{ width: '180px', padding: '1px 10px', height: '30px', borderRadius: '5px' }}>
                                            <option>Us Dollar</option>
                                            <option>India Rupee</option>
                                            <option>Iraqi Dinar</option>
                                        </select>
                                    </div>
                                    <div className=' d-flex mt-3'>
                                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 20px' }}>Ship To:</p>
                                        <select style={{ width: '180px', padding: '1px 10px', height: '30px', borderRadius: '5px' }}>
                                            <option>America</option>
                                            <option>India</option>
                                            <option>Iraq</option>
                                        </select>
                                    </div>
                                </div>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', ml:3,mt:'10px' }}>
                                    
                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hba1e31a22fd04b5186a9c798f624e038d.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/He763694b14484907bb90f90b453f433dI.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H7136eaef84894c818dfca619dc4bb0e5P.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hb1a32b2d7f72442e91e78f5243e9b168t.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hcc9705eb9d474732911f3a481637457bJ.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hca2bf58c9ec44977be7cff518f405b7fZ.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>


                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/U3ed4130db7c74aed959a6bf6bc115b8cB.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>


                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H4427f804e7ae4c24818624adb9518d00Z.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>
                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H6d9b6040abaa4b69a72d8db053a8ab4cj.jpeg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$2.18</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1.0 piece (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H6b890f67467d4d22af4cf62134b3c38dA.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$2.90 - US$21.4</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>5 pieces (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H433071eb841e4db99ebdf199fe3e5afdW.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                       <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>



                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H0809fba050464e72b0e171ab3858c4e3v.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>


                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H9bae9ae1a6804a5893e5da565af265668.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H58029006a00c4bbca943cab4943918adF.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H9ba88146713046d9b7a8dd813953de4fO.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H6b890f67467d4d22af4cf62134b3c38dA.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$2.90 - US$21.4</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>5 pieces (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>
                                </Box>
                            </TabPanel>

                            <TabPanel value={2}>
                                <div className=' d-flex' style={{ marginLeft: '450px' }}>
                                    <div className=' d-flex mt-3'>
                                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 20px' }}>Currency:</p>
                                        <select style={{ width: '180px', padding: '1px 10px', height: '30px', borderRadius: '5px' }}>
                                            <option>Us Dollar</option>
                                            <option>India Rupee</option>
                                            <option>Iraqi Dinar</option>
                                        </select>
                                    </div>
                                    <div className=' d-flex mt-3'>
                                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 20px' }}>Ship To:</p>
                                        <select style={{ width: '180px', padding: '1px 10px', height: '30px', borderRadius: '5px' }}>
                                            <option>America</option>
                                            <option>India</option>
                                            <option>Iraq</option>
                                        </select>
                                    </div>
                                </div>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', ml:3,mt:'10px' }}>
                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H6d9b6040abaa4b69a72d8db053a8ab4cj.jpeg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$2.18</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1.0 piece (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H6b890f67467d4d22af4cf62134b3c38dA.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$2.90 - US$21.4</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>5 pieces (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H433071eb841e4db99ebdf199fe3e5afdW.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                       <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hba1e31a22fd04b5186a9c798f624e038d.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/He763694b14484907bb90f90b453f433dI.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H7136eaef84894c818dfca619dc4bb0e5P.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hb1a32b2d7f72442e91e78f5243e9b168t.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hcc9705eb9d474732911f3a481637457bJ.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hca2bf58c9ec44977be7cff518f405b7fZ.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>


                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/U3ed4130db7c74aed959a6bf6bc115b8cB.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>


                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H4427f804e7ae4c24818624adb9518d00Z.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>


                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H0809fba050464e72b0e171ab3858c4e3v.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>


                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H9bae9ae1a6804a5893e5da565af265668.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H58029006a00c4bbca943cab4943918adF.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H9ba88146713046d9b7a8dd813953de4fO.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H6b890f67467d4d22af4cf62134b3c38dA.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$2.90 - US$21.4</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>5 pieces (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>
                                </Box>
                            </TabPanel>

                            <TabPanel value={3}>
                            <div className=' d-flex' style={{ marginLeft: '450px' }}>
                                    <div className=' d-flex mt-3'>
                                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 20px' }}>Currency:</p>
                                        <select style={{ width: '180px', padding: '1px 10px', height: '30px', borderRadius: '5px' }}>
                                            <option>Us Dollar</option>
                                            <option>India Rupee</option>
                                            <option>Iraqi Dinar</option>
                                        </select>
                                    </div>
                                    <div className=' d-flex mt-3'>
                                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 20px' }}>Ship To:</p>
                                        <select style={{ width: '180px', padding: '1px 10px', height: '30px', borderRadius: '5px' }}>
                                            <option>America</option>
                                            <option>India</option>
                                            <option>Iraq</option>
                                        </select>
                                    </div>
                                </div>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', ml:3,mt:'10px' }}>
                                   
                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hb1a32b2d7f72442e91e78f5243e9b168t.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hcc9705eb9d474732911f3a481637457bJ.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hca2bf58c9ec44977be7cff518f405b7fZ.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>


                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/U3ed4130db7c74aed959a6bf6bc115b8cB.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>


                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H4427f804e7ae4c24818624adb9518d00Z.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>


                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H0809fba050464e72b0e171ab3858c4e3v.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>
                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H6d9b6040abaa4b69a72d8db053a8ab4cj.jpeg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$2.18</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1.0 piece (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H6b890f67467d4d22af4cf62134b3c38dA.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$2.90 - US$21.4</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>5 pieces (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H433071eb841e4db99ebdf199fe3e5afdW.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                       <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/Hba1e31a22fd04b5186a9c798f624e038d.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/He763694b14484907bb90f90b453f433dI.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H7136eaef84894c818dfca619dc4bb0e5P.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>



                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H9bae9ae1a6804a5893e5da565af265668.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H58029006a00c4bbca943cab4943918adF.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H9ba88146713046d9b7a8dd813953de4fO.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1 box (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>

                                    <Card sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                                        <CardMedia
                                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                            image='https://s.alicdn.com/@sc04/kf/H6b890f67467d4d22af4cf62134b3c38dA.jpg_250x250xz.jpg'
                                            title="logo-design"
                                        />
                                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$2.90 - US$21.4</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>+US$6,98(Shipping)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>5 pieces (MOQ)</p>
                                        <p style={{ fontSize: '14px',margin: '3px 0' }}>1-7 days(Processing Time)</p>
                                    </Card>
                                </Box>
                            </TabPanel>
                        </Tabs>
                    </div>

                </div>
            </Box >
        </>
    )
}

export default GlobalBuyerDropshipping
