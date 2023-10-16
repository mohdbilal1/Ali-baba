import { Box, Button, Checkbox, FormControlLabel, List } from "@mui/material"
import { NavLink } from "react-router-dom"
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../stylecss/globalBuyerMylist.css'
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base';
import AddIcon from '@mui/icons-material/Add';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FiEdit } from "react-icons/fi";




const GlobalBuyerMylist = () => {
    return (
        <>
            <Box sx={{ boxShadow: '1px 1px 6px lightgrey', p: '6px 0' }}>
                <div style={{ display: 'flex' }}>
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
                            <p style={{ margin: '0 0 0 5px', padding: '6px 8px', borderLeft: '1px solid lightgrey', fontSize: '14px' }}>Help & Community </p>
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
                                <NavLink to='/' style={{ fontSize: '14px' }}><VscAccount style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />My Abaris </NavLink>
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
                <div className='ps-4 d-flex ms-3'>
                    <a href="/">
                        <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                    </a>
                    <p style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '20px' }}>Favorites</p>
                </div>
            </Box>
            <div>
                <Tabs>
                    <TabsList style={{ margin: '0 30px 30px 20px', borderBottom: '1px solid lightgrey' }}>
                        <Tab className='signin-tabs' value={0}>Product </Tab>
                        <Tab className='signin-tabs' value={1}>Supplier </Tab>
                    </TabsList>
                    <TabPanel value={0}>
                        <div className=" d-flex" style={{ justifyContent: 'space-around', width: '600px' }}>
                            <p>All(2)</p>
                            <p>Ungrouped(2)</p>
                            <p><AddIcon style={{ marginBottom: '3px' }} />Create new group</p>
                        </div>
                        <div className=" d-flex">
                            <p style={{ margin: '8px 0 0 50px', color: 'grey', pl: 2, pr: 2 }}><FormControlLabel control={<Checkbox />} label="" /></p>
                            <div className=" d-flex justify-content-between" style={{ width: '520px' }}>
                                <Button size="small" sx={{ mt: 2, border: '1px solid grey', color: 'grey', height: '30px', pl: 2, pr: 2 }}><EmailOutlinedIcon sx={{ fontSize: '18px', mr: 1 }} />contact Supplier</Button><br />
                                <Button size="small" sx={{ mt: 2, border: '1px solid grey', color: 'grey', height: '30px', pl: 2, pr: 2 }}>Compare </Button><br />
                                <Button size="small" sx={{ mt: 2, border: '1px solid grey', color: 'grey', height: '30px', pl: 2, pr: 2 }}><KeyboardArrowDownIcon sx={{ fontSize: '18px', mr: 1 }} />Move to  </Button><br />
                                <Button size="small" sx={{ mt: 2, border: '1px solid grey', color: 'grey', height: '30px', pl: 2, pr: 2 }}>Delete </Button><br />
                            </div>
                        </div>
                        <Box className=' d-flex mt-2'>
                            <div style={{ padding: '22px 30px 10px 40px' }}>
                                <img style={{ width: '150px' }} src="https://s.alicdn.com/@sc04/kf/H6d9b6040abaa4b69a72d8db053a8ab4cj.jpeg_220x220.jpeg" alt="img" />
                            </div>
                            <div className=" p-5 mt-1" style={{width:'800px'}}>
                                <h6 style={{ fontWeight: 'bold' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</h6>
                                <div className=' mt-2'>
                                    <span style={{ fontSize: '16px', color: 'grey', marginRight: '5px' }}>3Yrs</span>
                                    <img style={{ height: '26px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01I0ebSF1UCntpAivUU_!!6000000002482-2-tps-1200-210.png" alt="img" />
                                    <span style={{ marginLeft: '-120px', fontSize: '16px', color: 'grey' }}>Shenzhen Xiangyin Electronic Technology Co., Ltd.[China]</span>
                                </div>
                                <p style={{ margin: '10px 0', fontWeight: 'bold' }}>US $2.18 <span style={{ fontSize: '14px', color: 'grey' }}>/ piece</span></p>
                                <p style={{ margin: '10px 0', fontWeight: 'bold' }}>1 piece <span style={{ fontSize: '14px', color: 'grey' }}>/ (Min.Order)</span></p>
                                <p><FiEdit /><span style={{ fontSize: '14px', marginLeft: '4px' }} >Remarks</span></p>
                            </div>
                            <div style={{ padding: '40px 10px 10px 4px', margin: '0 0 0 10px' }}>
                                <Button variant="contained" size="small" sx={{ mt: 2, border: '1px solid grey', height: '30px', pl: 2, pr: 2 }}><EmailOutlinedIcon sx={{ fontSize: '18px', mr: 1 }} />contact Supplier</Button><br />
                                <Button variant="outlined" size="small" sx={{ padding: '6px 55px', m: '5px 0', height: '30px',mt:2 }}>Chat Now</Button>
                            </div>
                        </Box>

                        <Box className=' d-flex'>
                            <div style={{ padding: '22px 30px 10px 40px' }}>
                                <img style={{ width: '150px' }} src="https://s.alicdn.com/@sc04/kf/H6d9b6040abaa4b69a72d8db053a8ab4cj.jpeg_220x220.jpeg" alt="img" />
                            </div>
                            <div className=" p-5 mt-1" style={{width:'800px'}}>
                                <h6 style={{ fontWeight: 'bold' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</h6>
                                <div className=' mt-2'>
                                    <span style={{ fontSize: '16px', color: 'grey', marginRight: '5px' }}>3Yrs</span>
                                    <img style={{ height: '26px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01I0ebSF1UCntpAivUU_!!6000000002482-2-tps-1200-210.png" alt="img" />
                                    <span style={{ marginLeft: '-120px', fontSize: '16px', color: 'grey' }}>Shenzhen Xiangyin Electronic Technology Co., Ltd.[China]</span>
                                </div>
                                <p style={{ margin: '10px 0', fontWeight: 'bold' }}>US $2.18 <span style={{ fontSize: '14px', color: 'grey' }}>/ piece</span></p>
                                <p style={{ margin: '10px 0', fontWeight: 'bold' }}>1 piece <span style={{ fontSize: '14px', color: 'grey' }}>/ (Min.Order)</span></p>
                                <p><FiEdit /><span style={{ fontSize: '14px', marginLeft: '4px' }} >Remarks</span></p>
                            </div>
                            <div style={{ padding: '40px 10px 10px 4px', margin: '0 0 0 10px' }}>
                                <Button variant="contained" size="small" sx={{ mt: 2, border: '1px solid grey', height: '30px', pl: 2, pr: 2 }}><EmailOutlinedIcon sx={{ fontSize: '18px', mr: 1 }} />contact Supplier</Button><br />
                                <Button variant="outlined" size="small" sx={{ padding: '6px 55px', m: '5px 0', height: '30px',mt:2 }}>Chat Now</Button>
                            </div>
                        </Box>
                    </TabPanel>
                    <TabPanel value={1} style={{ padding: "10px" }}>
                    <div className=" d-flex" style={{ justifyContent: 'space-around', width: '600px' }}>
                            <p>All(2)</p>
                            <p>Ungrouped(2)</p>
                            <p><AddIcon style={{ marginBottom: '3px' }} />Create new group</p>
                        </div>
                        <div className=" d-flex">
                            <p style={{ margin: '8px 0 0 50px', color: 'grey', pl: 2, pr: 2 }}><FormControlLabel control={<Checkbox />} label="" /></p>
                            <div className=" d-flex justify-content-between" style={{ width: '520px' }}>
                                <Button size="small" sx={{ mt: 2, border: '1px solid grey', color: 'grey', height: '30px', pl: 2, pr: 2 }}><EmailOutlinedIcon sx={{ fontSize: '18px', mr: 1 }} />contact Supplier</Button><br />
                                <Button size="small" sx={{ mt: 2, border: '1px solid grey', color: 'grey', height: '30px', pl: 2, pr: 2 }}>Compare </Button><br />
                                <Button size="small" sx={{ mt: 2, border: '1px solid grey', color: 'grey', height: '30px', pl: 2, pr: 2 }}><KeyboardArrowDownIcon sx={{ fontSize: '18px', mr: 1 }} />Move to  </Button><br />
                                <Button size="small" sx={{ mt: 2, border: '1px solid grey', color: 'grey', height: '30px', pl: 2, pr: 2 }}>Delete </Button><br />
                            </div>
                        </div>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'100px'}}>
                            <p>There are no items in this group.</p>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </>
    )
}

export default GlobalBuyerMylist
