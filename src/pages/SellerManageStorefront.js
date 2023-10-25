import { Box, Button, Checkbox, Divider, FormControlLabel, List, TextField } from "@mui/material"
import { NavLink } from "react-router-dom"
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import { MdFavoriteBorder, MdKeyboardArrowDown } from "react-icons/md";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import '../stylecss/sellerPageStyle.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const SellerManageStorefront = () => {
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

            <Box sx={{ display: 'flex', bgcolor: "black", color: 'white', padding: '15px 0 0 20px' }}>
                <p>Mohd Bilal<MdKeyboardArrowDown style={{ margin: '-3px 0 0px 5px', fontSize: '30px' }} /></p>
                <p style={{ marginLeft: '20px' }}><MdFavoriteBorder style={{ margin: '-3px 5px 0 0', fontSize: '22px' }} />Favorite supplier</p>
            </Box>

            <Box className='manage-bg-img'>
                <div className="manage-div-bg">
                    <div>
                        <h4>Mohd Bilal</h4>
                        <p>India</p>
                    </div>
                </div>
            </Box>

            <Box sx={{ display: 'flex', bgcolor: 'black', color: 'white', p: 1, position: 'sticky', top: 0, zIndex: 10 }}>
                <List sx={{ display: 'flex', fontSize: '14px' }}>
                    <li style={{ padding: '0 30px' }}>Home </li>
                    <li style={{ padding: '0 30px' }}> Product <MdKeyboardArrowDown style={{ margin: '-2px 5px 0 0', fontSize: '22px' }}/></li>
                    <li style={{ padding: '0 30px' }}>Profile <MdKeyboardArrowDown style={{ margin: '-2px 5px 0 0', fontSize: '22px' }}/></li>
                    <li style={{ padding: '0 30px' }}> Contact</li>
                </List>
                <div style={{ display: 'flex', position: 'absolute', right: 40 }}>
                    <TextField variant="standard"
                        InputProps={{
                            disableUnderline: true,
                        }}
                        size='small'
                        sx={{ bgcolor: 'white', borderRadius: '10px 0 0 10px', border: 'none', p: '5px 10px', height: '34px' }}
                        placeholder="Search in this store"
                    />
                    <div style={{ backgroundColor: 'white', color: 'grey', borderRadius: '0 10px 10px 0', fontSize: '17px', padding: ' 2px 10px' }}>
                        <SearchOutlinedIcon sx={{ fontSize: '20px' }} />
                    </div>
                </div>
            </Box>

            <Box className='choose-bg'>
                <h1>Why Choose Us</h1>
            </Box>

            <Box>
                <h4 style={{ textAlign: 'center', margin: '20px 0' }}>COMPANY INTRODUCTION</h4>
                <Divider sx={{ height: '1px', border: '1px solid grey', m: '0 40px' }} />
                <div>
                    <div className=" d-flex justify-content-center" style={{ margin: '20px 0' }}>
                        <h6>Verification Type:</h6>
                    </div>
                    <div className="m-5">
                        <div className=" d-flex m-4">
                            <div>
                                <img style={{ width: '40px', height: '40px', objectFit: 'cover' }} src="https://cdn2.iconfinder.com/data/icons/miscellaneous-144-color-shadow/128/regional_territorial_geographical_map_pointer_gps_location_route_navigation-512.png" alt="img" />
                            </div>
                            <div className="ms-3">
                                <p className="mb-0">Country / Region:</p>
                                <p>India</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" size="small" sx={{ borderRadius: '20px', p: '6px 30px', ml: 2 }}><EmailOutlinedIcon sx={{ fontSize: '18px', mr: 1 }} />contact Supplier</Button>
                        <Button size="small" variant="outlined" sx={{ borderRadius: '20px', p: '6px 30px', ml: 2 }}>learn more about us <KeyboardArrowRightIcon /></Button>

                    </div>
                <Divider sx={{ height: '1px', border: '1px solid grey', m: '30px 40px' }} />
                  
                    <div style={{margin:'10px 0 10px 200px'}}>
                        <h5>Send message to supplier</h5>
                        <div className=" d-flex ms-5 mt-4">
                            <p  style={{ color: 'grey', marginRight: '20px' }}>To:</p>
                            <p>Mohd Bilal</p>
                        </div>
                        <div className=" d-flex  mt-2">
                            <p><label for="Message" style={{ color: 'grey', marginRight: '20px' }}>Message:</label></p>
                            <textarea style={{resize:'none'}} id="message" name="message" rows="5" cols="70" placeholder="Enter your enquiry detail such as product details,color,size etc" />
                        </div>
                        <Button variant="contained" sx={{  p: '6px 30px',m:'20px 0 0 85px'}}>Send</Button>
                        <p style={{margin:'10px 0 10px 85px'}}><FormControlLabel control={<Checkbox />} label="I agree to share my Business Card to the supplier." /></p>
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

export default SellerManageStorefront
