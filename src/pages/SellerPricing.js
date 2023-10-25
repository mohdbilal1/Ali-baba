import { Box, Button, Divider, List, ListItemText, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material"
import checkImg from '../assets/check.png'
import { MdError } from "react-icons/md";
import { NavLink } from "react-router-dom"
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import indflag from '../assets/indiaflag.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { AiFillInstagram } from 'react-icons/ai';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
 


const SellerPricing = () => {
    return (
        <>
            <Box sx={{ display: 'flex', boxShadow: '1px 1px 6px lightgrey', p: '6px 0' }}>
                <div className='pt-2 pb-2 d-flex'>
                    <a href="/">
                        <img className='img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain', margin: '0 10px' }} src={imgeLogo} alt="logo-img" />
                    </a>
                    <div className="Platform-div ps-5" style={{ marginTop: '1px' }}>
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
                    <div className="Solutions-div" style={{ marginTop: '1px' }}>
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
                    <div style={{ marginTop: '5px' }}>
                        <NavLink to={'/supplier-pricing'} style={{ margin: '0 0 0 5px', padding: '6px 8px', color: 'black', fontSize: '14px', textDecoration: 'none' }}>Pricing </NavLink>
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
                                <button style={{ border: '1px solid grey', backgroundColor: '#0d47a1', borderRadius: '20px', color: 'white', padding: '4px 12px', fontSize: '12px' }}>
                                    Chat with consultant
                                </button>
                            </NavLink>
                        </li>



                    </List>
                </Box>

            </Box>

            <Box>
                <h1 style={{ textAlign: 'center', margin: '30px 0', color: 'darkblue' }}>Reach millions of B2B buyers globally</h1>
                <p style={{ textAlign: 'center', margin: '30px 0', fontSize: '20px' }}>Choose an Abaris.com seller plan to launch your new business growth</p>

                <div className=" d-flex">
                    <TableContainer>
                        <Table sx={{ width: '321px', border: '1px solid lightgrey', marginLeft: '100px' }}>
                            <TableBody>
                                <div style={{ height: '305px' }}></div>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Platform features</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>Post products</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>Showcased products<MdError style={{ color: 'grey', marginLeft: '10px', fontSize: '18px', marginBottom: '3px' }} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>RFQ response <MdError style={{ color: 'grey', marginLeft: '10px', fontSize: '18px', marginBottom: '3px' }} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>RFQ Green Pass <MdError style={{ color: 'grey', marginLeft: '10px', fontSize: '18px', marginBottom: '3px' }} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>RFQ Priority Quote <MdError style={{ color: 'grey', marginLeft: '10px', fontSize: '18px', marginBottom: '3px' }} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>Keywords trends <MdError style={{ color: 'grey', marginLeft: '10px', fontSize: '18px', marginBottom: '3px' }} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>Keyword ad spend <MdError style={{ color: 'grey', marginLeft: '10px', fontSize: '18px', marginBottom: '3px' }} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>Product Advisor <MdError style={{ color: 'grey', marginLeft: '10px', fontSize: '18px', marginBottom: '3px' }} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>Star Supplier Direct <MdError style={{ color: 'grey', marginLeft: '10px', fontSize: '18px', marginBottom: '3px' }} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>Sub accounts <MdError style={{ color: 'grey', marginLeft: '10px', fontSize: '18px', marginBottom: '3px' }} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Onboarding</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>Product posting service <MdError style={{ color: 'grey', marginLeft: '10px', fontSize: '18px', marginBottom: '3px' }} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>Minisite creation <MdError style={{ color: 'grey', marginLeft: '10px', fontSize: '18px', marginBottom: '3px' }} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>Business verification support <MdError style={{ color: 'grey', marginLeft: '10px', fontSize: '18px', marginBottom: '3px' }} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Customer service</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>Platform Operation Training</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ height: '110px' }}></TableCell>
                                </TableRow>
                            </TableBody>

                        </Table>
                    </TableContainer>

                    <TableContainer>
                        <Table sx={{ width: '421px', border: '2px solid #1565c0' }}>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ bgcolor: '#1565c0', color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Recommended</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ color: '#1565c0', fontWeight: 'bold', fontSize: '22px', textAlign: 'center' }}>Gold Supplier Standard</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontSize: '32px', fontWeight: 'bold', color: 'darkblue', textAlign: 'center' }}>Rs. 215,000 /year</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}><Button variant="contained" sx={{ borderRadius: '40px', p: '6px 40px' }}>Select & pay</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ color: 'darkblue', textAlign: 'center' }}>Get more information</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ height: '50px' }}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>Unlimited</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>20</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>40/month</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>5/month</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>5/month</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}> <img style={{ height: '20px' }} src={checkImg} alt="img" /> </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}> Rs. 72,000 + Rs.7,200*</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>6 months</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>2-star direct for 6months</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ height: '50px' }}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>50</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}><img style={{ height: '20px' }} src={checkImg} alt="img" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}><img style={{ height: '20px' }} src={checkImg} alt="img" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ height: '50px' }}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}><img style={{ height: '20px' }} src={checkImg} alt="img" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}><Button variant="contained" sx={{ borderRadius: '40px', p: '6px 40px' }}>Select & pay</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ color: 'darkblue', textAlign: 'center' }}>Get more information</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer>
                        <Table sx={{ width: '380px', border: '1px solid lightgrey' }}>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ height: '50px' }}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ color: '#1565c0', fontWeight: 'bold', fontSize: '22px', textAlign: 'center' }}>Gold Supplier Plus</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontSize: '32px', fontWeight: 'bold', color: 'darkblue', textAlign: 'center' }}>Rs. 143,000 /year</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}><Button variant="contained" sx={{ borderRadius: '40px', p: '6px 40px' }}>Select & pay</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ color: 'darkblue', textAlign: 'center' }}>Get more information</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ height: '50px' }}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>Unlimited</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>20</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>40/month</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>5/month</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>5/month</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}> <img src={checkImg} alt="img" /> </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>/</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>3 months</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>/</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ height: '50px' }}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}>50</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}><img src={checkImg} alt="img" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}><img src={checkImg} alt="img" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ height: '50px' }}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}><img src={checkImg} alt="img" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center' }}><Button variant="contained" sx={{ borderRadius: '40px', p: '6px 40px' }}>Select & pay</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ color: 'darkblue', textAlign: 'center' }}>Get more information</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p style={{ textAlign: 'center', fontSize: '14px', margin: '40px 0' }}>*The complimentary top-up of KWA Rs.7,200 is eligible for Smart Marketing service only.</p>
            </Box>

            <Box sx={{ bgcolor: '#2979ff', display: 'flex',justifyContent:'center',height:'300px',alignItems:'center' }}>
                <div>
                    <h1 style={{color:'white'}}>Ready to Grow Your Business?</h1>
                    <NavLink to='/supplier-pricing'>
                        <button style={{ border: '2px solid white', backgroundColor:'#2979ff', borderRadius: '20px', color: 'white', padding: '8px 40px', fontSize: '16px',margin:'30px' }}>
                            Start Selling
                        </button>
                    </NavLink>
                    <NavLink>
                        <button style={{ border: '2px solid white', borderRadius: '20px', padding: '8px 40px', fontSize: '16px',margin:'30px' }}>
                            Chat with consultant
                        </button>
                    </NavLink>
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

export default SellerPricing
