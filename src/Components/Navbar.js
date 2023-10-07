import { AppBar, Box, Button, Divider, List, TextField } from '@mui/material'
import { NavLink } from "react-router-dom";
import imgeLogo from '../assets/mainlogo.png'
import '../stylecss/navbarStyle.css'
import indflag from '../assets/indiaflag.png'
import LanguageIcon from '@mui/icons-material/Language';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import SigninSignUpModel from './SigninSignUpModel';
import { useState } from 'react';


const Navbar = () => {
    const [signInOpen,setSigInOpen]=useState(false);
    
    const onSignIn=()=>{
        setSigInOpen(true);
    }

    return (
        <>

            <AppBar
                sx={{
                    textAlign: 'center', p: 2, bgcolor: 'white',
                    position: 'sticky', top: 0
                }}
            >
                <Box sx={{ display: 'flex' }}>
                    <div className='logo-img-div pt-2 pb-2'>
                        <a href="/">
                            <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                        </a>
                    </div>
                    <Box sx={{ position: 'absolute', right: 30 }}>
                        <List sx={{ display: 'flex', textAlign: 'center' }}>
                            <li className='nav-list mt-0'>
                                <div className=" d-flex" style={{ padding: '5px', border: '1px solid grey', borderRadius: '20px', height: '40px' }}>
                                    <select style={{
                                        border: 'none', width: '90px', borderRight: '1px solid black', paddingRight: '5px'
                                    }}>
                                        <option selected="Products" value="Products">Products</option>
                                        <option value="Manufacturers">Manufacturers</option>
                                        <option value="Suppliers">Suppliers</option>
                                    </select>
                                    <TextField variant="standard"
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                        size='small'
                                        sx={{ bgcolor: 'white', borderRadius: 'none', border: 'none', pl: 1 }}
                                        placeholder="What are your looking for?"
                                    />
                                    <Button size='small' variant="contained" sx={{ borderRadius: '20px', ml: 5 }}><SearchOutlinedIcon sx={{ mr: 1 }} />Search</Button>
                                </div>

                            </li>
                            <li className='nav-list'>
                                <NavLink to='/' style={{ fontSize: '14px' }}>Ship to: <img style={{ width: '25px' }} src={indflag} alt="indflag" /> IN</NavLink>
                                <Box className='shipToHidden'>
                                    <KeyboardArrowUpIcon sx={{ color: 'lightgrey', mt: -5, bgcolor: 'white', fontSize: '36px' }} />
                                    <div>
                                        <div style={{ padding: '3px 10px 10px 10px', textAlign: 'left', margin: '-3px 10px 10px 10px', borderRadius: '2px' }}>
                                            <h5>Specify your location</h5>
                                            <p style={{ fontSize: '14px' }}>Shipping options and fees vary based on your location</p>
                                            <Button variant='contained' fullWidth>Sign in to Add address</Button>
                                            <div className=' d-flex mt-4 ps-1'>
                                                <Divider sx={{ border: '1px solid grey', width: '155px', height: '1px' }} />
                                                <p style={{ borderRadius: '10px', marginTop: '-23px', padding: '10px', color: 'grey', backgroundColor: 'white' }}>OR</p>
                                                <Divider sx={{ border: '1px solid grey', width: '155px', height: '1px' }} />
                                            </div>
                                            <select style={{ width: '355px', margin: '0 0 10px 0', padding: '8px 10px' }}>
                                                <option>India</option>
                                                <option>China</option>
                                                <option>Turkey</option>
                                            </select>
                                            <TextField size='small' fullWidth sx={{ m: '10px 0' }} placeholder='Enter City or ZIP Code' />
                                            <Button variant='contained' fullWidth>save</Button>
                                        </div>
                                    </div>
                                </Box>
                            </li>

                            <li className='nav-list'>
                                <NavLink to='/'><LanguageIcon sx={{ fontSize: '25px' }} /></NavLink>
                                <Box className='langAndCurrencyHidden'>
                                    <KeyboardArrowUpIcon sx={{ color: 'lightgrey', mt: -5, bgcolor: 'white', fontSize: '36px' }} />
                                    <div>
                                        <div style={{ padding: '3px 10px 10px 10px', textAlign: 'left', margin: '-3px 10px 10px 10px', borderRadius: '2px' }}>
                                            <h5>Set language and currency</h5>
                                            <p style={{ fontSize: '14px' }}>Select your preferred language and currency. You can update the settings at any time.</p>
                                            <p style={{ margin: '2px', fontSize: '14px', color: 'grey' }}>Language</p>
                                            <select style={{ width: '355px', margin: '0 0 10px 0', padding: '8px 10px' }}>
                                                <option>English</option>
                                                <option>Deutsch</option>
                                                <option>Turk</option>
                                            </select>
                                            <p style={{ margin: '2px', fontSize: '14px', color: 'grey' }}>Currency</p>
                                            <select style={{ width: '355px', margin: '0 0 10px 0', padding: '8px 10px' }}>
                                                <option>USD-US Dollar</option>
                                                <option>EUR-euro</option>
                                                <option>INR- Indian Rupee</option>
                                            </select>
                                            <Button variant='contained' fullWidth>save</Button>
                                        </div>
                                    </div>
                                </Box>
                            </li>
                            <li className='nav-list'>
                                <NavLink to='/'><PermIdentityOutlinedIcon sx={{ fontSize: '25px' }} /></NavLink>
                                <Box className='loginHidden'>
                                    <KeyboardArrowUpIcon sx={{ color: 'lightgrey', mt: -5, ml:'60px',bgcolor: 'white', fontSize: '36px' }} />
                                    <div style={{height:'500px',overflow:'scroll'}}>
                                        <div style={{ padding: '3px 10px 10px 10px', textAlign: 'left', margin: '-3px 10px 10px 10px', borderRadius: '2px' }}>
                                            <h6 style={{padding:'10px 0'}}>Welcome to Abaris.com</h6>
                                            <Button variant='contained' fullWidth>Sign in</Button>
                                            <p style={{ margin: '20px', fontSize: '14px', color: 'grey',textAlign:'center' }}>Or, continue with:</p>
                                            <Box sx={{textAlign:'center',m:'20px 0'}}>
                                                <TwitterIcon sx={{ marginLeft: '10px', color:'#0d47a1', fontSize: '35px' }} />
                                                <GoogleIcon sx={{ marginLeft: '40px', color: '#0F9D58', fontSize: '35px' }} />
                                                <FacebookIcon sx={{ marginLeft: '40px', color: '#0d47a1', fontSize: '35px' }} />
                                                <LinkedInIcon sx={{ marginLeft: '40px', color: '#0d47a1', fontSize: '35px' }} />
                                            </Box>
                                            <p style={{ margin: '10px 0', fontSize: '14px', color: 'grey' }}>By signing in via social media, I agree to the Alibaba.com Free Membership Agreement and Privacy Policy, and to receive emails about the platform’s products and services.</p>
                                            <Divider sx={{border:'1px solid grey',m:'10px 0'}}/>
                                            <p>My Alibaba</p>
                                            <p>Orders</p>
                                            <p>Messages</p>
                                            <p>RFQs</p>
                                            <p>Favorites</p>
                                            <p>Account</p>
                                            <Divider sx={{border:'1px solid grey',m:'10px 0'}}/>
                                            <p>Membership Program</p>
                                        </div>
                                    </div>
                                </Box>
                            </li>

                            <li className='nav-list'>
                                <Button onClick={onSignIn} variant='contained' sx={{ borderRadius: '30px', p: '6px 30px',ml:4 }}>SignUp</Button>
                                <SigninSignUpModel signInOpen={signInOpen} setSigInOpen={setSigInOpen}/>
                            </li>
                        </List>
                    </Box>

                </Box>


            </AppBar>



        </>
    )
}
export default Navbar;