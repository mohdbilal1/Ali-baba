
import { Box, Button, Divider, List, ListItemText, TextField } from "@mui/material"
import { NavLink } from "react-router-dom"
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { AiFillInstagram } from 'react-icons/ai';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const HelpCenterFAQ = () => {
    return (
        <>
            <Box sx={{ p: '0 0 6px 0' }}>
                <div style={{ display: 'flex', boxShadow: '1px 1px 5px 1px lightgrey' }}>
                    <div className='p-2 ps-4 d-flex'>
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
                                        <p>Refer & Earn</p>
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
                                        <p>Inspection Services</p>
                                        <p>Logistics Service</p>
                                    </div>
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Membership Services </h6>
                                        <p>Buyer Business Identity</p>
                                        <p>Supplier Membership</p>
                                    </div>
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Value-Added Services </h6>
                                        <p>Urgent Request</p>
                                        <p>Extra Quotes</p>
                                    </div>

                                </div>
                            </Box>
                        </div>
                        <div className="service-div">
                            <p style={{ margin: '0 0 0 5px', padding: '6px 8px', borderLeft: '1px solid lightgrey', fontSize: '14px' }}>Help Center </p>
                            <Box className='hiddenHelp'>
                                <div className=" d-flex">
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Help Center </h6>
                                        <p>For buyers</p>
                                        <p>For suppliers</p>
                                        <p>Open a case</p>
                                        <p>Report IPR infringement</p>
                                        <p>Report abuse</p>
                                    </div>
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Community </h6>
                                        <p>Discussion Forum</p>
                                    </div>
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
                                <NavLink to='/' style={{ fontSize: '14px' }}><VscAccount style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />Sign In </NavLink>
                            </li>
                            <li className='nav-list'>
                                <NavLink to='/' style={{ fontSize: '14px' }}><ShoppingCartOutlinedIcon style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />order</NavLink>
                            </li>

                            <li className='nav-list'>
                                <NavLink to='/' style={{ fontSize: '14px' }} className='signInHover'><MdOutlineFavoriteBorder style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />Favorites</NavLink>
                            </li>

                        </List>
                    </Box>
                </div>
                <div className='ps-4 d-flex ms-3 justify-content-between me-5 pt-3'>
                    <div className=" d-flex">
                        <a href="/">
                            <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                        </a>
                        <p style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '18px', fontWeight: 'bold', color: 'grey' }}>Help Center for Buyer</p>
                    </div>
                    <div className=" d-flex">
                        <NavLink to={'/help-center'} style={{ margin: '0 10px' }}>Homepage</NavLink>
                        <NavLink to={'/FAQ'} style={{ margin: '0 10px' }}>FAQ</NavLink>
                    </div>
                </div>
            </Box>

            <Box sx={{ width: '700px', margin: '60px 0 0 300px' }}>
                <div className=" d-flex" style={{ border: '2px solid rgb(16, 124, 232)', borderRadius: '6px', height: '50px' }}>
                    <TextField variant="standard"
                        InputProps={{
                            disableUnderline: true,
                        }}

                        sx={{ bgcolor: 'white', width: '640px', pl: 2, pt: 0.6 }}
                        placeholder="Search for questions"
                    />
                    <Button size='small' variant="contained" sx={{ borderRadius: '4px' }}><SearchOutlinedIcon sx={{ mr: 1, fontSize: '30px' }} /></Button>
                </div>

            </Box>

            <div className=" d-flex mt-5">
                <div className=" col-sm-3">
                    <Box sx={{ width: '240px' }}>
                        <ul style={{ backgroundColor: '#616161', color: 'white', listStyle: 'none', marginLeft: '30px', paddingLeft: '1px' }}>
                            <li style={{ fontWeight: 'bold', textOverflow: 'ellipsis', padding: '15px', width: '208px', overflow: 'hidden', whiteSpace: 'nowrap', backgroundColor: 'black' }}><BiSolidCategoryAlt style={{ marginRight: '10px', fontSize: '20px' }} />Categories</li>

                            <div className=" d-flex">
                                <li style={{ textOverflow: 'ellipsis', padding: '15px', width: '150px', overflow: 'hidden', whiteSpace: 'nowrap' }}>Abaris.com intro </li>
                                <MdKeyboardArrowDown style={{ marginTop: '20px', fontSize: '22px', marginLeft: '10px' }} />
                            </div>
                            <div className=" d-flex">
                                <li style={{ textOverflow: 'ellipsis', padding: '15px', width: '150px', overflow: 'hidden', whiteSpace: 'nowrap' }}>Account Management</li>
                                <MdKeyboardArrowDown style={{ marginTop: '20px', fontSize: '22px', marginLeft: '10px' }} />
                            </div>
                            <div className=" d-flex">
                                <li style={{ textOverflow: 'ellipsis', padding: '15px', width: '150px', overflow: 'hidden', whiteSpace: 'nowrap' }}>Sourcing</li>
                                <MdKeyboardArrowDown style={{ marginTop: '20px', fontSize: '22px', marginLeft: '10px' }} />
                            </div>
                            <div className=" d-flex">
                                <li style={{ textOverflow: 'ellipsis', padding: '15px', width: '150px', overflow: 'hidden', whiteSpace: 'nowrap' }}>Promotions & Shopping Guide</li>
                                <MdKeyboardArrowDown style={{ marginTop: '20px', fontSize: '22px', marginLeft: '10px' }} />
                            </div>
                            <div className=" d-flex">
                                <li style={{ textOverflow: 'ellipsis', padding: '15px', width: '150px', overflow: 'hidden', whiteSpace: 'nowrap' }}>Business Negotiation</li>
                                <MdKeyboardArrowDown style={{ marginTop: '20px', fontSize: '22px', marginLeft: '10px' }} />
                            </div>
                            <div className=" d-flex">
                                <li style={{ textOverflow: 'ellipsis', padding: '15px', width: '150px', overflow: 'hidden', whiteSpace: 'nowrap' }}>Tax management</li>
                                <MdKeyboardArrowDown style={{ marginTop: '20px', fontSize: '22px', marginLeft: '10px' }} />
                            </div>

                            <div className=" d-flex">
                                <li style={{ textOverflow: 'ellipsis', padding: '15px', width: '150px', overflow: 'hidden', whiteSpace: 'nowrap' }}>Place Order</li>
                                <MdKeyboardArrowDown style={{ marginTop: '20px', fontSize: '22px', marginLeft: '10px' }} />
                            </div>
                            <div className=" d-flex">
                                <li style={{ textOverflow: 'ellipsis', padding: '15px', width: '150px', overflow: 'hidden', whiteSpace: 'nowrap' }}>Order Payment</li>
                                <MdKeyboardArrowDown style={{ marginTop: '20px', fontSize: '22px', marginLeft: '10px' }} />
                            </div>
                            <div className=" d-flex">
                                <li style={{ textOverflow: 'ellipsis', padding: '15px', width: '150px', overflow: 'hidden', whiteSpace: 'nowrap' }}>Inspection&Production Monitoring</li>
                                <MdKeyboardArrowDown style={{ marginTop: '20px', fontSize: '22px', marginLeft: '10px' }} />
                            </div>
                            <div className=" d-flex">
                                <li style={{ textOverflow: 'ellipsis', padding: '15px', width: '150px', overflow: 'hidden', whiteSpace: 'nowrap' }}>Shipping</li>
                                <MdKeyboardArrowDown style={{ marginTop: '20px', fontSize: '22px', marginLeft: '10px' }} />
                            </div>
                            <div className=" d-flex">
                                <li style={{ textOverflow: 'ellipsis', padding: '15px', width: '150px', overflow: 'hidden', whiteSpace: 'nowrap' }}>Order Receipt</li>
                                <MdKeyboardArrowDown style={{ marginTop: '20px', fontSize: '22px', marginLeft: '10px' }} />
                            </div>
                            <div className=" d-flex">
                                <li style={{ textOverflow: 'ellipsis', padding: '15px', width: '150px', overflow: 'hidden', whiteSpace: 'nowrap' }}>After-sales Service</li>
                                <MdKeyboardArrowDown style={{ marginTop: '20px', fontSize: '22px', marginLeft: '10px' }} />
                            </div>
                            <div className=" d-flex">
                                <li style={{ textOverflow: 'ellipsis', padding: '15px', width: '150px', overflow: 'hidden', whiteSpace: 'nowrap' }}>Order Feedback</li>
                                <MdKeyboardArrowDown style={{ marginTop: '20px', fontSize: '22px', marginLeft: '10px' }} />
                            </div>
                            <div className=" d-flex">
                                <li style={{ textOverflow: 'ellipsis', padding: '15px', width: '150px', overflow: 'hidden', whiteSpace: 'nowrap' }}>Security & Abaris.com Rules</li>
                                <MdKeyboardArrowDown style={{ marginTop: '20px', fontSize: '22px', marginLeft: '10px' }} />
                            </div>
                            <div className=" d-flex">
                                <li style={{ textOverflow: 'ellipsis', padding: '15px', width: '150px', overflow: 'hidden', whiteSpace: 'nowrap' }}>Others</li>
                                <MdKeyboardArrowDown style={{ marginTop: '20px', fontSize: '22px', marginLeft: '10px' }} />
                            </div>
                        </ul>
                    </Box>
                </div>
                <div className=" col-sm-9" style={{width:'1000px'}}>
                    <h5 className="m-4">All Categories</h5>
                    <div className=" d-flex flex-wrap">
                        <div style={{ border: '1px solid lightgrey', width: '400px',margin:'10px', height: '180px', padding: '20px' }}>
                            <h6>Abaris.com intro</h6>
                            <div className=" d-flex mt-4" style={{ color: 'grey',fontSize:'14px'  }}>
                                <p style={{margin:'0 2px 0 0'}}>Abaris.com intro</p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>About Abaris.com</p>
                            </div>
                        </div>
                        <div style={{ border: '1px solid lightgrey', width: '400px',margin:'10px', height: '180px', padding: '20px' }}>
                            <h6>Account Management</h6>
                            <div className=" d-flex mt-4 flex-wrap" style={{ color: 'grey',fontSize:'14px' }}>
                                <p style={{margin:'0 2px 0 0'}}>Abaris.com APP Settings </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Cancellation&Reactivation </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Account Settings  </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Registration </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Login </p>

                            </div>
                        </div>
                        <div style={{ border: '1px solid lightgrey', width: '400px',margin:'10px', height: '180px', padding: '20px' }}>
                    
                            <h6>Sourcing</h6>
                            <div className=" d-flex mt-4 flex-wrap" style={{ color: 'grey',fontSize:'14px'  }}>
                                <p style={{margin:'0 2px 0 0'}}>Recommending </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Trade Knowledge</p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Supplier Qualification </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Search </p>
                            </div>
                        </div>
                       
                        <div style={{ border: '1px solid lightgrey', width: '400px',margin:'10px', height: '180px', padding: '20px' }}>
                            <h6> Promotions & Shopping Guide</h6>
                            <div className=" d-flex mt-4 flex-wrap" style={{ color: 'grey',fontSize:'14px'  }}>
                                <p style={{margin:'0 2px 0 0'}}>Shopping Guide </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Scenarized Promotion</p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Super Promotion </p>
                            </div>
                        </div>
                    
                        <div style={{ border: '1px solid lightgrey', width: '400px',margin:'10px', height: '180px', padding: '20px' }}>
                            <h6>Business Negotiation</h6>
                            <div className=" d-flex mt-4 flex-wrap" style={{ color: 'grey',fontSize:'14px'  }}>
                                <p style={{margin:'0 2px 0 0'}}>Manual Reception </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Trade Messenger</p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>RFQ </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Inquiry</p>
                            </div>
                        </div>
                    
                        <div style={{ border: '1px solid lightgrey', width: '400px',margin:'10px', height: '180px', padding: '20px' }}>
                            <h6>  Tax management</h6>
                            <div className=" d-flex mt-4 flex-wrap" style={{ color: 'grey',fontSize:'14px'  }}>
                                <p style={{margin:'0 2px 0 0'}}>Tax rules </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Submit tax information </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 0'}}>Verify tax information </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 0'}}>Tax order management </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 0'}}>Tax invoice </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 0'}}>Tax refund </p>

                            </div>
                        </div>
                        
                        <div style={{ border: '1px solid lightgrey', width: '400px',margin:'10px', height: '180px', padding: '20px' }}>
                            <h6>Place Order</h6>
                            <div className=" d-flex mt-4 flex-wrap" style={{ color: 'grey',fontSize:'14px'  }}>
                                <p style={{margin:'0 2px 0 0'}}>Trade Assurance intro </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Place Order </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Confirm Order </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Order Management</p>
                            </div>
                        </div>
                        
                        <div style={{ border: '1px solid lightgrey', width: '400px',margin:'10px', height: '180px', padding: '20px' }}>
                            <h6>Order Payment</h6>
                            <div className=" d-flex mt-4 flex-wrap" style={{ color: 'grey',fontSize:'14px'  }}>
                                <p style={{margin:'0 2px 0 0'}}>Payment Types</p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Checkout </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Financial</p>
                            </div>
                        </div>
                        
                        <div style={{ border: '1px solid lightgrey', width: '400px',margin:'10px', height: '180px', padding: '20px' }}>
                            <h6>Inspection&Production Monitoring</h6>
                            <div className=" d-flex mt-4 flex-wrap" style={{ color: 'grey',fontSize:'14px'  }}>
                                <p style={{margin:'0 2px 0 0'}}>Inspection Service </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Production Monitoring Service</p>
                             </div>
                        </div>
                       
 


                        <div style={{ border: '1px solid lightgrey', width: '400px',margin:'10px', height: '180px', padding: '20px' }}>
                            <h6> Shipping</h6>
                            <div className=" d-flex mt-4 flex-wrap" style={{ color: 'grey',fontSize:'14px'  }}>
                                <p style={{margin:'0 2px 0 0'}}>Abaris.com Fulfillment Services</p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Shipping </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Abaris.com Logistics Service</p>
                             </div>
                        </div>
                        


                        <div style={{ border: '1px solid lightgrey', width: '400px',margin:'10px', height: '180px', padding: '20px' }}>
                            <h6>Order Receipt</h6>
                            <div className=" d-flex mt-4 flex-wrap" style={{ color: 'grey',fontSize:'14px'  }}>
                                <p style={{margin:'0 2px 0 5px'}}>Order Delivery </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Order Complete</p>
                             </div>
                        </div>
    
                        <div style={{ border: '1px solid lightgrey', width: '400px',margin:'10px', height: '180px', padding: '20px' }}>
                            <h6> After-sales Service</h6>
                            <div className=" d-flex mt-4 flex-wrap" style={{ color: 'grey',fontSize:'14px'  }}>
                                <p style={{margin:'0 2px 0 0'}}>Chargeback </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Order Refund</p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Goods Issue </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Dispute Process </p>       
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Dispute Rules </p>                        
                             </div>
                        </div>
                
                        <div style={{ border: '1px solid lightgrey', width: '400px',margin:'10px', height: '180px', padding: '20px' }}>
                            <h6>Order Feedback</h6>
                            <div className=" d-flex mt-4 flex-wrap" style={{ color: 'grey',fontSize:'14px'  }}>
                                <p style={{margin:'0 2px 0 0'}}>Feedback Rules </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Feedback Management</p>
                             </div>
                        </div> 
                        <div style={{ border: '1px solid lightgrey', width: '400px',margin:'10px', height: '180px', padding: '20px' }}>
                            <h6> Security & Abaris.com Rules</h6>
                            <div className=" d-flex mt-4 flex-wrap" style={{ color: 'grey',fontSize:'14px'  }}>
                                <p style={{margin:'0 2px 0 0'}}>Abaris.com Rules</p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Scam/Spoof Email</p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Suspicious Members</p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>IPR Complaint</p>                          
                                
                             </div>
                        </div>
                        <div style={{ border: '1px solid lightgrey', width: '400px',margin:'10px', height: '180px', padding: '20px' }}>
                            <h6>Others</h6>
                            <div className=" d-flex mt-4 flex-wrap" style={{ color: 'grey',fontSize:'14px'  }}>
                                <p style={{margin:'0 2px 0 0'}}>Transfer </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>Others </p>
                                <Divider sx={{height:'20px',borderRight:'2px solid grey',margin:'5px 10px'}} />
                                <p style={{margin:'0 2px 0 5px'}}>For Sellers</p>
                             </div>
                        </div>
                    </div>
                </div>

            </div>

            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2, bgcolor: '#424242', color: 'white',mt:2 }}>
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

export default HelpCenterFAQ
