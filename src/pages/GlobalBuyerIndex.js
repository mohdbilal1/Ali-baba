import { Box, Button, Divider, List } from "@mui/material"
import { VscAccount } from "react-icons/vsc";
import imgeLogo from '../assets/mainlogo.png'
import { NavLink, useNavigate } from "react-router-dom"
import GlobalBuyerSideBar from "../Components/GlobalBuyerSidebar";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import '../stylecss/globalBuyerContactStyle.css'
import { useEffect } from "react";

const GlobalBuyerIndex = () => {
    const loginStatus = true
    const navigate = useNavigate()
    useEffect(() => {
        if (loginStatus === false) {
            navigate('/login_area')
        }
    },[loginStatus, navigate])
    return (
        <>


            <Box>
                <Box sx={{ display: 'flex', boxShadow: '1px 1px 6px lightgrey', p: '6px 0', position: 'fixed', top: 0, zIndex: 10, bgcolor: 'white', width: '100%' }}>
                    <div className='logo-img-div pt-2 pb-2 d-flex'>
                        <a href="/">
                            <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                        </a>
                        <p style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '20px' }}>My Abaris</p>
                        <NavLink to='/seller-pg' style={{ fontSize: '14px' }}>
                            <button style={{ border: '1px solid grey', backgroundColor: 'white', borderRadius: '20px', color: 'black', padding: '4px 12px', fontSize: '12px', marginTop: '4px' }}>
                                Switch to Seller
                            </button>
                        </NavLink>
                    </div>
                    <Box sx={{ position: 'absolute', right: 60 }}>
                        <List sx={{ display: 'flex', textAlign: 'center' }}>

                            <li className='nav-list'>
                                <NavLink to='/' style={{ fontSize: '14px' }}>
                                    <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '12px' }}>
                                        Upgrade to gold supplier</button>
                                </NavLink>
                            </li>

                            <li className='nav-list'>
                                <NavLink to='/' style={{ fontSize: '14px' }}><VscAccount style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />My Account</NavLink>
                            </li>

                            <li className='nav-list'>
                                <NavLink to='/' style={{ fontSize: '14px' }}>Help</NavLink>
                            </li>

                        </List>
                    </Box>

                </Box>

                <Box sx={{ display: 'flex', bgcolor: 'rgb(232, 232, 242)' }}>
                    <div className=" col-sm-2" style={{ width: '120px', position: 'fixed', left: 0, top: 70 }}>
                        <GlobalBuyerSideBar />
                    </div>

                    <div className="right-area col-sm-8" style={{ position: 'absolute', left: 110 }}>
                        <Box sx={{ bgcolor: '#bbdefb', m: 2, width: '1120px', p: '50px 20px 70px 20px', display: 'flex', position: 'relative' }}>
                            <div className=" d-flex">
                                <VscAccount style={{ fontSize: '58px', margin: '0 8px 3px 0', color: 'grey' }} />
                                <h4 style={{ margin: '10px 0 0 10px' }}>Mohd Bilal</h4>
                                <NavLink style={{ margin: '13px 0 0 10px', color: 'black', textDecoration: 'none' }}>My Profile <KeyboardArrowRightIcon /></NavLink>
                            </div>
                            <div style={{ display: 'flex', position: 'absolute', right: '10px' }}>
                                <div className=" text-center" style={{ margin: '0 40px' }}>
                                    <h1>0</h1>
                                    <p>Business card requests</p>
                                </div>
                                <div className=" text-center" style={{ margin: '0 40px' }}>
                                    <h1>2</h1>
                                    <p>Favorites</p>
                                </div>
                                <div className=" text-center" style={{ margin: '0 40px' }}>
                                    <h1>0</h1>
                                    <p>My coupons</p>
                                </div>
                            </div>
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '1120px', padding: '6px 10px' }}>
                            <div className=" d-flex" style={{ backgroundColor: 'white', borderRadius: '10px', width: '530px', margin: '10px', padding: '30px 10px' }}>
                                <div className=" m-2">
                                    <img style={{ width: '80px' }} src="https://s.alicdn.com/@sc04/kf/Hee66b42a37164f2fa0950b8b1145f0ccR.jpg_220x220.jpg" alt="img" />
                                </div>
                                <div className=" m-2">
                                    <p style={{ marginBottom: '3px' }}>Upgrade to</p>
                                    <h6>3-day coupon giveaway: up to US $80 off</h6>
                                </div>
                                <div style={{ margin: '30px 10px 0 0' }}>
                                    <Button variant="outlined" sx={{ borderRadius: '20px', width: '120px', height: '30px' }}>view more</Button>
                                </div>
                            </div>

                            <div className=" d-flex" style={{ backgroundColor: 'white', borderRadius: '10px', width: '530px', margin: '10px', padding: '30px 10px' }}>
                                <div className=" m-2">
                                    <img style={{ width: '80px' }} src="https://s.alicdn.com/@sc04/kf/Hee66b42a37164f2fa0950b8b1145f0ccR.jpg_220x220.jpg" alt="img" />
                                </div>
                                <div className=" m-2">
                                    <p style={{ marginBottom: '3px' }}>Upgrade to</p>
                                    <h6>US $10 off with a new supplier</h6>
                                </div>
                                <div style={{ margin: '30px 10px 0 30px' }}>
                                    <Button variant="outlined" sx={{ borderRadius: '20px', width: '120px', height: '30px' }}>view more</Button>
                                </div>
                            </div>

                            <div className=" d-flex" style={{ backgroundColor: 'white', borderRadius: '10px', width: '530px', margin: '10px', padding: '30px 10px' }}>
                                <div className=" m-2">
                                    <h4>Abaris.com market tren</h4>
                                    <p style={{ marginBottom: '3px' }}>Explore market trends to discover new business opportunities</p>
                                </div>
                                <div style={{ margin: '30px 10px 0 0' }}>
                                    <Button variant="outlined" sx={{ borderRadius: '20px', width: '130px', height: '30px' }}>Learn more</Button>
                                </div>
                            </div>

                            <div className=" d-flex" style={{ backgroundColor: 'white', borderRadius: '10px', width: '530px', margin: '10px', padding: '30px 10px' }}>
                                <div className=" m-2">
                                    <h4>Verify company information</h4>
                                    <p style={{ marginBottom: '3px' }}>Get tax-exempt status and upgrade to Platinum</p>
                                </div>
                                <div style={{ margin: '30px 10px 0 20px' }}>
                                    <Button variant="outlined" sx={{ borderRadius: '20px', width: '120px', height: '30px' }}>Verify</Button>
                                </div>
                            </div>

                        </Box>

                        <Box sx={{ m: 2, bgcolor: 'white', width: '1080px', borderRadius: '10px' }}>
                            <div className=" d-flex" style={{ padding: '20px 10px 10px 10px' }}>
                                <h4 style={{ margin: '0 0 0 10px' }}>My Order</h4>
                                <div style={{ position: 'absolute', right: "70px" }}>
                                    <p>View all</p>
                                </div>
                            </div>
                            <Divider sx={{ height: '1px', border: '1px solid grey', m: '10px 0', width: '1080px' }} />

                            <div style={{ textAlign: 'center', padding: '60px 0 20px 10px' }}>
                                <p>No orders yet…</p>
                                <p style={{ fontSize: '20px', color: 'grey' }}>Get US $10 off your first order over US $100 with a new supplier</p>
                                <Button variant="contained" sx={{ borderRadius: '20px', padding: '8px 30px' }}>Source now</Button>
                            </div>
                        </Box>

                        <Box sx={{ m: 2, bgcolor: 'white', width: '1080px', borderRadius: '10px' }}>
                            <div className=" d-flex" style={{ padding: '20px 10px 10px 10px' }}>
                                <div>
                                    <h6 style={{ margin: '0 0 0 10px', fontWeight: 'bold' }}>Stay connected and competitive!</h6>
                                    <p style={{ margin: '0 0 0 10px', fontSize: '14px' }}>A complete profile open up new business opportunities.</p>
                                </div>
                                <div style={{ position: 'absolute', right: "70px" }}>
                                    <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '14px' }}>
                                        verify Business Information</button>
                                </div>
                            </div>
                            <Divider sx={{ height: '1px', border: '1px solid grey', m: '10px 0', width: '1080px' }} />

                            <div style={{ textAlign: 'center', padding: '20px 0 20px 10px' }}>
                                <p> © 1999-2023</p>
                            </div>
                        </Box>

                    </div>
                </Box >
            </Box>
        </>


    )
}

export default GlobalBuyerIndex
