import { Box, Button, Checkbox, Divider, FormControlLabel, List, TextField } from '@mui/material'
import { NavLink } from "react-router-dom";
import imgeLogo from '../assets/mainlogo.png'
import '../stylecss/navbarStyle.css'
import StorefrontIcon from '@mui/icons-material/Storefront';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { PiNumberCircleOneBold, PiNumberCircleTwoBold, PiNumberCircleThreeBold, PiNumberCircleFourBold } from "react-icons/pi";
import {FiTruck } from "react-icons/fi";
import {FaRegCreditCard } from "react-icons/fa";
import {TbArrowBackUp } from "react-icons/tb";
import {VscAccount } from "react-icons/vsc";
import ShippingAddressModel from './ShippingAddressModel';
import { useState } from 'react';


const SendOrderReq = () => {
    const [open,setOpen]=useState();
    const openFileInput = () => {
        const fileInput = document.getElementById('fileInput');
        fileInput.click();
    };

    const goShippingAddress=()=>{
        setOpen(true);
    }
    

    return (
        <>
            <Box sx={{ display: 'flex', boxShadow: '1px 1px 6px lightgrey', p: '6px 0' }}>
                <div className='logo-img-div pt-2 pb-2 d-flex'>
                    <a href="/">
                        <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                    </a>
                    <p style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '20px' }}>My Abaris</p>
                </div>
                <Box sx={{ position: 'absolute', right: 60 }}>
                    <List sx={{ display: 'flex', textAlign: 'center' }}>
                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Trade</NavLink>
                        </li>

                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Development</NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Account</NavLink>
                        </li>

                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }} className='signInHover'><VscAccount style={{fontSize:'18px',margin:'0 8px 3px 0',color:'grey'}}/>My Account</NavLink>
                        </li>


                    </List>
                </Box>

            </Box>

            <Box sx={{ backgroundColor: 'aliceblue' }}>
                <h3 style={{ fontWeight: 'bold', letterSpacing: 1, margin: '0 0 40px 200px', padding: '40px 0 0 0' }}>Send order request</h3>
                <div style={{ width: '900px', marginLeft: '200px', backgroundColor: 'white', boxShadow: '1px 1px 6px lightgrey', padding: '20px 50px', borderRadius: '8px' }}>
                    <div>
                        <h5 style={{ fontWeight: 'bold' }}>Product details</h5>
                        <p style={{ fontSize: '14px', color: 'grey' }}>Specify your purchase details and let the supplier know you requirements.</p>
                        <p style={{ fontSize: '14px', color: 'grey' }}><StorefrontIcon />Shenzhen Xiangyin Electronic Technology Co., Ltd.</p>
                        <div className=' d-flex'>
                            <div>
                                <img src="https://sc04.alicdn.com/kf/H6d9b6040abaa4b69a72d8db053a8ab4cj.jpeg_100x100.jpeg" alt="img" />
                            </div>
                            <div className=' ms-4'>
                                <h6>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</h6>
                                <p style={{ fontSize: '12px' }}>MOQ: 1 Pieces</p>
                                <div className=" d-flex" style={{ backgroundColor: 'aliceblue', padding: '10px 30px', borderRadius: '8px', margin: '20px 0' }}>
                                    <p style={{ fontSize: '14px', color: 'grey' }}>Color:</p>
                                    <img style={{ margin: '0 5px', height: '25px', border: '1px solid lightgrey' }} src="https://s.alicdn.com/@sc04/kf/H33b6e62be3314d8db7d0775534873dc3V.jpeg_100x100xz.jpeg" alt="img" />
                                    <p style={{ fontSize: '14px', color: 'grey' }}>Blue</p>
                                    <p style={{ margin: '0 47px' }}>USD 2.18 <span style={{ fontSize: '14px', color: 'grey' }}>/ piece</span></p>
                                    <p style={{ margin: '0 47px' }}>USD 2.18 <span style={{ fontSize: '14px', color: 'grey' }}>/ piece</span></p>

                                </div>
                                <TextField size='small' placeholder='Enter Additional Customization Details' fullWidth />
                            </div>

                        </div>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div onClick={openFileInput} style={{ margin: '40px 0', backgroundColor: 'white', width: '900px', borderStyle: 'dashed', borderColor: 'lightgrey', borderRadius: '10px', textAlign: 'center', cursor: 'pointer' }}>
                                <FileUploadOutlinedIcon sx={{ fontSize: '43px', pt: 1 }} /> <br />
                                <p style={{ fontSize: '12px' }}>Attach supporting file</p>
                                <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: 'none' }}
                                />
                                <p style={{ color: 'grey', fontSize: '12px' }}>Attach supporting file that help the supplier better understanding your customization requirements</p>
                            </div>
                        </Box>

                        <div>
                            <FormControlLabel control={<Checkbox />} label="I need inspection service from Abaris.com (after manufacturing) for this order." />
                            <p style={{ color: 'grey', margin: '-10px 0 0 30px', fontSize: '14px' }}>May incur additional service fees (Est. US $118-218)<ErrorOutlineOutlinedIcon /> </p>
                        </div>
                    </div>
                </div>

                <div style={{ width: '900px', margin: '20px 0 0 200px', backgroundColor: 'white', boxShadow: '1px 1px 6px lightgrey', padding: '20px 50px', borderRadius: '8px' }}>
                    <div>
                        <h5 style={{ fontWeight: 'bold' }}>Shipping details</h5>
                        <p style={{ fontSize: '16px', color: 'grey', margin: '16px 0 0 2px' }}>Select your delivery preference</p>
                        <select style={{ width: '500px', margin: '0 0 10px 0', padding: '4px 10px' }}>
                            <option>Deliver to my door</option>
                            <option>I want my order ship to my freight forwarder</option>
                            <option>I am open to all suggestions</option>
                        </select>
                        <p style={{ fontSize: '16px', color: 'grey', margin: '16px 0 0 2px' }}>Destination address</p>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ margin: '2px 0', padding: '20px 0', backgroundColor: 'white', width: '900px', borderStyle: 'dashed', borderColor: 'lightgrey', borderRadius: '10px', textAlign: 'center' }}>
                                <Button onClick={goShippingAddress} variant='contained' sx={{ p: '8px 40px' }}><LocationOnOutlinedIcon sx={{ fontSize: '23px' }} />Add an Adress</Button>
                            </div>
                        </Box>
                        <ShippingAddressModel open={open} setOpen={setOpen}/>
                        <div>
                            <p style={{ fontSize: '16px', color: 'grey', margin: '16px 0 0 2px' }}>Expected delivery date</p>
                            <TextField type='date' size='small' placeholder='Select date' fullWidth />
                        </div>
                        <div>
                            <p style={{ fontSize: '16px', color: 'grey', margin: '16px 0 0 2px' }}>Additional notes</p>
                            <TextField size='small' fullWidth />
                        </div>

                    </div>
                </div>

                <div style={{ width: '900px', margin: '20px 0 0 200px', backgroundColor: 'white', boxShadow: '1px 1px 6px lightgrey', padding: '10px', borderRadius: '8px' }}>
                    <h6 style={{ fontWeight: 'bold', padding: '10px' }}>What's next for your purchase?</h6>
                    <div className=' d-flex p-3'>
                        <div className=' d-flex'>
                            <div>
                                <PiNumberCircleOneBold style={{ fontSize: '24px', marginRight: '10px' }} />
                            </div>
                            <div>
                                <h6 style={{ fontSize: '14px', marginTop: '4px' }}>Submit order request</h6>
                            </div>
                        </div>
                        <Divider sx={{ border: '2px solid grey', width: '30px', height: '1px', margin: '9px' }} />
                        <div className=' d-flex w-25'>
                            <div>
                                <PiNumberCircleTwoBold style={{ fontSize: '24px', marginRight: '10px' }} />
                            </div>
                            <div>
                                <h6 style={{ fontSize: '14px', marginTop: '4px' }}>Negotiate details with supplier</h6>
                            </div>
                        </div>
                        <Divider sx={{ border: '2px solid grey', width: '30px', height: '1px', margin: '9px' }} />
                        <div className=' d-flex w-25'>
                            <div>
                                <PiNumberCircleThreeBold style={{ fontSize: '24px', marginRight: '10px' }} />
                            </div>
                            <div>
                                <h6 style={{ fontSize: '14px', marginTop: '4px' }}>Receive sample order if necessary</h6>
                            </div>
                        </div>
                        <Divider sx={{ border: '2px solid grey', width: '30px', height: '1px', margin: '9px' }} />
                        <div className=' d-flex w-25'>
                            <div>
                                <PiNumberCircleFourBold style={{ fontSize: '24px', marginRight: '10px' }} />
                            </div>
                            <div>
                                <h6 style={{ fontSize: '14px', marginTop: '4px' }}>Make payment for bulk order and wait for delivery</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ width: '900px', margin: '20px 0 0 200px', backgroundColor: 'white', boxShadow: '1px 1px 6px lightgrey', padding: '10px', borderRadius: '8px' }}>
                    <div className=' d-flex'>
                        <h5 style={{ fontWeight: 'bold', padding: '10px' }}>Protections for this order</h5>
                        <div className=' mt-2'>
                            <span style={{ fontSize: '13px', color: 'grey',marginRight:'5px' }}>with</span>
                            <img style={{ height: '26px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01I0ebSF1UCntpAivUU_!!6000000002482-2-tps-1200-210.png" alt="img" />
                            <span style={{ marginLeft: '-120px', fontSize: '14px', color: 'grey' }}>Trade Assrance</span>
                        </div>
                    </div>
                    <div className='p-3'>
                        <div className=' d-flex'>
                            <div>
                                <FiTruck style={{ fontSize: '24px', marginRight: '10px' }} />
                            </div>
                            <div className=' ms-2'>
                                <h6 style={{ fontSize: '14px', marginTop: '4px' }}>On-time shipping and logistics services</h6>
                                <p style={{color:'grey',fontSize:'12px'}}>Guaranteed dispatch and delivery times</p>
                            </div>
                        </div>
                      
                        <div className=' d-flex'>
                            <div>
                                <FaRegCreditCard style={{ fontSize: '24px', marginRight: '10px' }} />
                            </div>
                            <div className=' ms-2'>
                                <h6 style={{ fontSize: '14px', marginTop: '4px' }}>Safe and easy payments</h6>
                                <p style={{color:'grey',fontSize:'12px'}}>20+ secure payment methods and currencies accepted</p>
                            </div>
                        </div>
                      
                        <div className=' d-flex'>
                            <div>
                                <TbArrowBackUp style={{ fontSize: '24px', marginRight: '10px' }} />
                            </div>
                            <div className=' ms-2'>
                                <h6 style={{ fontSize: '14px', marginTop: '4px' }}>Money-back policy </h6>
                                <p style={{color:'grey',fontSize:'12px'}}>Claim a refund if products are not delivered, missing, or defective within 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'30px 0'}}>
                <Button variant='contained' sx={{borderRadius:'50px',p:'12px 40px'}}>Submit to supplier</Button>
                </div>
            </Box>

        </>
    )
}

export default SendOrderReq
