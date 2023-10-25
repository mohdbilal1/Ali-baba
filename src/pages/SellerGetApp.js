import { Box, Button, Divider, List, ListItemText } from "@mui/material"
import { NavLink } from "react-router-dom"
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import indflag from '../assets/indiaflag.png'
import '../stylecss/sellerPageStyle.css'
import img1 from '../assets/img1App.png'
import img2 from '../assets/img2App.png'
import img3 from '../assets/img3App.png'
import androidimg from '../assets/androidimg.png'
import appleimg from '../assets/appleimg.png'
import qrcodeimg from '../assets/qrcodeimg.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { AiFillInstagram } from 'react-icons/ai';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




const SellerGetApp = () => {
    return (
        <>
            <Box sx={{ display: 'flex', boxShadow: '1px 1px 6px lightgrey', p: '6px 0' }}>
                <div className='pt-2 pb-2 d-flex'>
                    <a href="/">
                        <img className='img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain', margin: '0 10px' }} src={imgeLogo} alt="logo-img" />
                    </a>
                    <div className="Platform-div ps-5" style={{marginTop:'1px'}}>
                        <p style={{ margin: '0 0 0 10px', padding: '6px 8px', fontSize: '14px' }}>Platform</p>
                        <Box className='hiddenPlatform'>
                            <div className=" d-flex">
                                <ul className="ul-li">
                                    <li>Why Abaris.com</li>
                                    <li>How to sell</li>
                                    <li>Product features</li>
                                    <li>ggs-sso.listFreeTrial</li>
                                    <li>Services</li>
                                    <li>ggs-sso.listRFQ</li>
                                    <li>ggs-sso.listStorefront</li>
                                    <li>ggs-sso.listKWA</li>
                                    <li>ggs-sso.listKeywords.trends</li>
                                    <li>ggs-sso.listProduct.showcase</li>
                                </ul>
                            </div>
                        </Box>
                    </div>
                    <div className="Solutions-div" style={{marginTop:'1px'}}>
                        <p style={{ margin: '0 0 0 5px', padding: '6px 8px', fontSize: '14px' }}>Solutions</p>
                        <Box className='hiddenSolutions'>
                            <div className=" d-flex">
                                <ul className="ul-li">
                                    <li> ggs-sso.listVerifiedSupplier</li>
                                    <li>ggs-sso.listOfficialAccountManager</li>
                                    <li></li>ggs-sso.listAdvertising
                                    <li>B2B ecommerce</li>
                                    <li>Wholesale ecommerce</li>
                                    <li>International trade</li>
                                    <li>Global buy, global sell</li>
                                </ul>
                            </div>
                        </Box>
                    </div>
                    <div style={{marginTop:'5px'}}>
                        <NavLink to={'/supplier-pricing'} style={{ margin: '0 0 0 5px', padding: '6px 8px',color:'black', fontSize: '14px',textDecoration:'none' }}>Pricing </NavLink>
                    </div>
                </div>
                <Box>
                    <List sx={{ display: 'flex', textAlign: 'center' }}>
                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Resources</NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Business blogs</NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}><img style={{ width: '25px' }} src={indflag} alt="indflag" /> IN</NavLink>
                        </li>


                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}><VscAccount style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />My Abaris </NavLink>
                        </li>


                        <li className='nav-list'>
                            <NavLink to='/supplier-pricing'>
                                <button style={{ border: '1px solid grey', backgroundColor: 'white', borderRadius: '20px', color: 'black', padding: '4px 12px', fontSize: '12px' }}>
                                    Start Selling
                                </button>
                            </NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink>
                                <button style={{ border: '1px solid grey', backgroundColor: '#0d47a1', borderRadius: '20px', color: 'white', padding: '4px 12px', fontSize: '12px'}}>
                                    Chat with consultant
                                </button>
                            </NavLink>
                        </li>



                    </List>
                </Box>

            </Box>

            <Box className='get-app-bg'>
                <div className="divmain">
                    <h1>Reach millons of buyers on your mobile device</h1>
                    <p className="mt-5">Reach millons of buyers on your mobile device With the Alisupplier app, discover more opportunities to manage and grow your business anytime, anywhere.</p>
                    <Button variant="contained" sx={{ margin: '40px 0', borderRadius: '30px', padding: '6px 30px' }}>Download Now for android</Button><br />
                    <Button variant="outlined" sx={{ borderRadius: '30px', padding: '6px 30px' }}>Download Now for iphone</Button>
                </div>
            </Box>

            <Box sx={{mb:4}}>
                <div>
                    <div>
                        <img style={{ width: '100%', margin: '30px 0' }} src={img1} alt="img" />
                    </div>
                    <div>
                        <img style={{ width: '100%', margin: '30px 0' }} src={img2} alt="img" />
                    </div>
                    <div>
                        <img style={{ width: '100%', margin: '30px 0' }} src={img3} alt="img" />
                    </div>
                </div>
                <div>
                    <h1 className=" text-center m-2 mb-4">Download now</h1>
                    <div className=" d-flex justify-content-center">
                        <div style={{ boxShadow: '1px 1px 5px grey', margin: '20px', borderRadius: '10px' }}>
                            <img style={{ width: '300px', height: '200px', objectFit: 'cover', margin: '30px 0' }} src={androidimg} alt="img" />
                            <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>iOS</h4>
                        </div>
                        <div style={{ boxShadow: '1px 1px 5px grey', margin: '20px', borderRadius: '10px' }}>
                            <img style={{ width: '300px', height: '200px', objectFit: 'cover', margin: '30px 0' }} src={appleimg} alt="img" />
                            <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>Android</h4>
                        </div>
                        <div style={{ boxShadow: '1px 1px 5px grey', margin: '20px', borderRadius: '10px' }}>
                            <img style={{ width: '300px', height: '200px', objectFit: 'cover', margin: '30px 0' }} src={qrcodeimg} alt="img" />
                            <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>QR code</h4>
                        </div>

                    </div>
                </div>

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2, bgcolor: '#424242', color: 'white' }}>
                <Box sx={{ width: '350px' }}>
                    <List sx={{ mr: 3 }}>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>
                            <a href="/">
                                <img className='img-fluid' style={{ width: '100%', height: '45px', borderRadius: '8px', objectFit: 'contain', margin: '10px 0 0 -10px' }} src={imgeLogo} alt="logo-img" />
                            </a>
                        </ListItemText>
                        <ListItemText sx={{ margin: '30px' }}><h1 style={{ fontSize: '26px', fontWeight: 'bold' }}>Reach millions of B2B buyers globally</h1></ListItemText>
                        <Divider sx={{ border: '1px solid white' }} />
                        <Box sx={{ mt: 3 }}>
                            <TwitterIcon sx={{ marginLeft: '10px', color: 'white', fontSize: '45px' }} />
                            <AiFillInstagram style={{ marginLeft: '20px', color: 'white', fontSize: '45px' }} />
                            <FacebookIcon sx={{ marginLeft: '20px', color: 'white', fontSize: '45px' }} />
                            <LinkedInIcon sx={{ marginLeft: '20px', color: 'white', fontSize: '45px' }} />
                        </Box>
                    </List>
                </Box>
                <Box>
                    <List sx={{ ml: 5, mr: 3 }}>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}><b style={{ fontSize: '18px' }}> Platform</b></ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Why Abaris.com</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>How to sell</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Product features</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Services</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>RFQ</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Storefront</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>KWA</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Keywords trends</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Product showcas</ListItemText>
                    </List>
                </Box>
                <Box>
                    <List sx={{ ml: 4, mr: 3 }}>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}><b style={{ fontSize: '18px' }}> Solutions</b></ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>B2B ecommerce</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Wholesale ecommerce</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>International trade</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Global buy, global sell</ListItemText>
                    </List>
                </Box>
                <Box>
                    <List sx={{ ml: 4, mr: 3 }}>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}><b style={{ fontSize: '18px' }}>Pricing</b></ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Success stories</ListItemText>
                    </List>
                </Box>
                <Box>
                    <List sx={{ ml: 4, mr: 3 }}>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}><b style={{ fontSize: '18px' }}>  Resources</b></ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Business blogs</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Webinars</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Industry reports</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Playbooks</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Learning center</ListItemText>

                    </List>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', bgcolor: 'lightgrey', pt: 2 }}>
                <p style={{ fontSize: '14px', paddingLeft: '40px' }}>Copyright © 1996-2023 Abaris  InterMESH Ltd. All rights reserved.</p>
                <p style={{ fontSize: '14px', position: 'absolute', right: 30 }}>Terms of Use - Privacy Policy - Link to Us</p>
            </Box>
        </>

    )
}

export default SellerGetApp
