import { Box, Divider, List } from "@mui/material"
import { VscAccount } from "react-icons/vsc";
import imgeLogo from '../assets/mainlogo.png'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GlobalBuyerSideBar from "../Components/GlobalBuyerSidebar";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { NavLink } from "react-router-dom";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';


const GlobalBuyerTransaction = () => {
    return (
        <>
            <Box sx={{ display: 'flex', boxShadow: '1px 1px 6px lightgrey', p: '14px 0', position: 'sticky', top: 0, zIndex: 10, bgcolor: 'white' }}>
                <div className='logo-img-div pt-2 pb-2 d-flex'>
                    <a href="/">
                        <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                    </a>
                    <p style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '20px' }}>My Abaris</p>
                    <p style={{ fontSize: '16px', margin: '4px 2px' }}>Buyer Centra</p>
                    <p style={{ fontSize: '16px', margin: '4px 2px 6px 20px' }}>Help</p>
                    <p style={{ fontSize: '16px', margin: '4px 20px' }}>English-USD </p>

                </div>
                <Box sx={{ position: 'absolute', right: 60 }}>
                    <List sx={{ display: 'flex', textAlign: 'center' }}>

                        <li className=' ms-5'>
                            <div>
                                <VscAccount style={{ fontSize: '22px', margin: '0 8px 3px 0', color: 'grey' }} />
                                <p style={{ fontSize: '14px' }}>My Abaris</p>
                            </div>
                        </li>

                        <li className=' ms-5'>
                            <div>
                                <ChatOutlinedIcon style={{ fontSize: '22px', margin: '0 8px 3px 0', color: 'grey' }} />
                                <p style={{ fontSize: '14px' }}>Message</p>
                            </div>
                        </li>

                        <li className=' ms-5'>
                            <div>
                                <ShoppingBasketOutlinedIcon style={{ fontSize: '22px', margin: '0 8px 3px 0', color: 'grey' }} />
                                <p style={{ fontSize: '14px' }}>Order</p>
                            </div>
                        </li>
                        <li className=' ms-5'>
                            <div>
                                <ShoppingCartOutlinedIcon style={{ fontSize: '22px', margin: '0 8px 3px 0', color: 'grey' }} />
                                <p style={{ fontSize: '14px' }}>Cart</p>
                            </div>
                        </li>
                    </List>
                </Box>

            </Box>

            <Box sx={{ display: 'flex', bgcolor: 'rgb(232, 232, 242)' }}>
                <div className=" col-sm-2" style={{ width: '120px', position: 'fixed', left: 0 }}>
                    <GlobalBuyerSideBar />
                </div>

                <div className=" col-sm-8 d-flex" style={{ position: 'absolute', left: 110 }}>
                    <div className=" col-sm-2">
                        <ul style={{ backgroundColor: '#64b5f6', width: '170px', height: '100vh', position: 'fixed', left: 110, paddingLeft: 13 }}>
                            <li style={{ listStyle: 'none', fontWeight: 'bold', margin: '30px 0 30px 0', fontSize: '14px' }}>Transactions</li>
                            <li style={{ listStyle: 'none', margin: '10px 0 4px 0', fontSize: '14px', color: 'grey' }}>Overview</li>
                            <Divider sx={{ height: '1px', border: '1px solid grey', m: '4px 0', width: '140px' }} />
                            <li style={{ listStyle: 'none', margin: '4px 0 4px 0', fontSize: '14px' }}>Overview</li>

                            <li style={{ listStyle: 'none', margin: '20px 0 4px 0', fontSize: '14px', color: 'grey' }}>Transactions Statements</li>
                            <Divider sx={{ height: '1px', border: '1px solid grey', m: '4px 0', width: '140px' }} />

                            <li style={{ listStyle: 'none', margin: '4px 0 10px 0', fontSize: '14px' }}>All Transactions</li>
                            <li style={{ listStyle: 'none', margin: '10px 0 10px 0', fontSize: '14px' }}>Transaction Report</li>
                            <li style={{ listStyle: 'none', margin: '10px 0 10px 0', fontSize: '14px' }}>Trade Assurance Orders</li>
                            <li style={{ listStyle: 'none', margin: '10px 0 10px 0', fontSize: '14px' }}>Logistics Orders</li>

                            <li style={{ listStyle: 'none', margin: '20px 0 4px 0', fontSize: '14px', color: 'grey' }}>Manage Accounts </li>
                            <Divider sx={{ height: '1px', border: '1px solid grey', m: '4px 0', width: '140px' }} />
                            <li style={{ listStyle: 'none', margin: '4px 0 10px 0', fontSize: '14px' }}> Wire Transfer Accounts</li>
                            <li style={{ listStyle: 'none', margin: '10px 0 10px 0', fontSize: '14px' }}>Wire transfer tracking</li>
                            <li style={{ listStyle: 'none', margin: '10px 0 10px 0', fontSize: '14px' }}>Bank/Card Accounts</li>



                        </ul>
                    </div>


                    <div className=" col-sm-6" style={{ width: '1020px', backgroundColor: '#e0e0e0' }}>
                        <div style={{ marginLeft: '40px', marginTop: 10, padding: '20px 0px 10px 10px' }}>
                            <h6 style={{ margin: '0 0 0 10px', fontWeight: 'bold' }}>Overview</h6>
                            <p style={{ padding: '20px 10px', backgroundColor: 'white', margin: '20px 10px', width: '900px' }}><ErrorOutlineIcon sx={{ mb: 0.3, color: '#2962ff' }} />Want to learn more about official Abaris.com success guide? <NavLink style={{ color: '#2962ff' }}>click here</NavLink></p>
                        </div>

                        <div style={{ marginLeft: '40px', padding: '20px' }}>
                            <p style={{ color: 'grey', margin: '20px 0' }}>Transaction Processing</p>
                            <div className=" d-flex" style={{ backgroundColor: 'white', borderRadius: '10px', width: '900px' }}>
                                <div style={{ margin: '30px', color: 'grey' }}>
                                    <AccessTimeOutlinedIcon />
                                    <p style={{ margin: '10px 0 10px 0' }}>Payment processing <KeyboardArrowRightIcon /></p>
                                    <h4>USD0.00</h4>
                                </div>
                                <div style={{ margin: '30px', color: 'grey' }}>
                                    <AccountBalanceIcon />
                                    <p style={{ margin: '10px 0 10px 0' }}>Payment not yet matched to order <KeyboardArrowRightIcon /></p>
                                    <h4>USD0.00</h4>
                                </div>
                                <div style={{ margin: '30px', color: 'grey' }}>
                                    <PaidOutlinedIcon />
                                    <p style={{ margin: '10px 0 10px 0' }}>Refund processing <KeyboardArrowRightIcon /></p>
                                    <h4>USD0.00</h4>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginLeft: '40px', padding: '20px' }}>
                            <p style={{ color: 'grey', margin: '20px 0' }}>Manage Accounts</p>
                            <div className=" d-flex" style={{ backgroundColor: 'white', borderRadius: '10px', width: '900px',padding:'0 0 0 10px' }}>
                                <div style={{ margin: '30px'}}>
                                    <p style={{ color: 'grey', margin: '20px 20px' }}>Credit/debit Card</p>
                                    <p style={{ backgroundColor:'lightgrey', padding: '40px 30px',width:'200px',color:'grey',borderRadius:'6px',marginLeft:'10px' }}>No Card</p>

                                </div>
                                <div style={{ margin: '30px'}}>
                                    <p style={{ color: 'grey', margin: '20px 20px' }}>Bank Account</p>
                                    <p style={{ backgroundColor:'lightgrey', padding: '40px 30px',width:'200px',color:'grey',borderRadius:'6px' }}>No bank account</p>
                                </div>
                                <div style={{ margin: '30px'}}>
                                    <p style={{ color: 'grey', margin: '20px 20px' }}>Wire Transfer - T/T</p>
                                    <p style={{ backgroundColor:'lightgrey', padding: '40px 30px',width:'200px',color:'grey',borderRadius:'6px' }}>No T/T account</p>
                                </div>
                            </div>
                        </div>


                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3, bgcolor: 'lightgrey', p: 2, marginLeft: '40px' }}>
                            <p style={{ fontSize: '14px', paddingLeft: '20px' }}>Copyright © 1996-2023 Abaris  InterMESH Ltd. All rights reserved.</p>
                            <p style={{ fontSize: '14px' }}>Terms of Use - Privacy Policy - Link to Us</p>
                        </Box>
                    </div>
                </div>
            </Box >
        </>
    )
}

export default GlobalBuyerTransaction
