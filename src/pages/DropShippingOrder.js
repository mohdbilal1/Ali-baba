import { Box, Button, Divider, List, Switch } from '@mui/material'
import { NavLink } from "react-router-dom";
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DropshippingSidebar from '../Components/DropshippingSidebar';
import { useState } from 'react';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base';
import RemoveIcon from '@mui/icons-material/Remove';



const DropShippingOrder = () => {
    const [state, setState] = useState(false)

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
                    <DropshippingSidebar setState={setState} state={state} />
                </div>

                <div className={`${state && 'widthMange'} col-sm-8`} style={{ position: 'absolute', left: 100, width: '1150px', padding: '20px 0', backgroundColor: '#eeeeee' }}>
                    <div className=' d-flex justify-content-between'>
                        <h4 style={{ marginLeft: '20px' }}>My Orders</h4>
                        <div className='me-5 d-flex'>
                            <p style={{ marginTop: '4px', fontWeight: 'bold' }}>Logistics sync:</p>
                            <Switch defaultChecked color="warning" />
                            <HelpOutlineOutlinedIcon style={{ marginTop: '7px', color: 'grey' }} />
                        </div>
                    </div>

                    <div>
                        <p style={{ fontSize: '14px', color: 'grey',margin:'20px 30px 2px 30px' }}>Abaris.com order status:</p>
                        <Tabs defaultValue={0}>
                            <TabsList>
                                <Tab style={{ margin: '2px 2px 0 2px', border: 'none', padding: '5px 20px' }} value={0}>All <span style={{ color: '#ff6d00' }}>0</span></Tab>
                                <Tab style={{ margin: '2px 2px 0 2px', border: 'none', padding: '5px 20px' }} value={1}>Has Unmapped Products <span style={{ color: '#ff6d00' }}>0</span></Tab>
                                <Tab style={{ margin: '2px 2px 0 2px', border: 'none', padding: '5px 20px' }} value={2}>To order <span style={{ color: '#ff6d00' }}>0</span></Tab>
                                <Tab style={{ margin: '2px 2px 0 2px', border: 'none', padding: '5px 20px' }} value={3}>Unpaid <span style={{ color: '#ff6d00' }}>0</span></Tab>
                                <Tab style={{ margin: '2px 2px 0 2px', border: 'none', padding: '5px 20px' }} value={4}>To be shipped <span style={{ color: '#ff6d00' }}>0</span></Tab>
                                <Tab style={{ margin: '2px 2px 0 2px', border: 'none', padding: '5px 20px' }} value={5}>To be received <span style={{ color: '#ff6d00' }}>0</span></Tab>
                                <Tab style={{ margin: '2px 2px 0 2px', border: 'none', padding: '5px 20px' }} value={6}>Refund being processed</Tab>
                            </TabsList>
                            <Divider sx={{ border: '1px solid grey' }} />
                            <TabPanel value={0}>
                                <div className=' d-flex flex-wrap' style={{ marginLeft: '20px' }}>
                                    <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}>Abaris.com order status</p>
                                        <select style={{ width: '220px', padding: '1px 10px', height: '30px', borderRadius: '5px',border:'1px solid lightgrey',backgroundColor:'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option>All </option>
                                            <option>To Order </option>
                                            <option>To be confirm by supplier </option>
                                            <option>Unpaid </option>
                                            <option>To be shipped </option>
                                            <option>To be received</option>

                                        </select>
                                    </div>
                                    <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}>Abaris.com order time</p>
                                        <select style={{ width: '220px', padding: '1px 10px', height: '30px', borderRadius: '5px',border:'1px solid lightgrey',backgroundColor:'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option> Within 3 months</option>
                                            <option>Within 6 months</option>
                                            <option>Within 1 year</option>
                                        </select>
                                    </div>
                                    <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}> Store order time</p>
                                        <select style={{ width: '220px', padding: '1px 10px', height: '30px', borderRadius: '5px',border:'1px solid lightgrey',backgroundColor:'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option> Within 3 months</option>
                                            <option>Within 6 months</option>
                                            <option>Within 1 year</option>
                                        </select>
                                    </div>
                                    <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}> Abaris order ID</p>
                                        <input placeholder='Please input' style={{ width: '220px', padding: '1px 10px', height: '30px', borderRadius: '5px',border:'1px solid lightgrey',backgroundColor:'white' }} />
                                    </div>
                                    <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}>Store order ID</p>
                                        <input placeholder='Please input' style={{ width: '220px', padding: '1px 10px', height: '30px', borderRadius: '5px',border:'1px solid lightgrey',backgroundColor:'white' }} />
                                    </div>
                                    <div className='mt-3 mb-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}>Start time</p>
                                        <input type='date' placeholder='Please input' style={{ width: '220px', padding: '1px 10px', height: '30px', borderRadius: '5px',border:'1px solid lightgrey',backgroundColor:'white' }} />
                                    </div><RemoveIcon sx={{marginTop:'40px'}}/>
                                    <div className=' mt-3 mb-3 me-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}>End time</p>
                                        <input type='date' placeholder='Please input' style={{ width: '100px', padding: '1px 10px', height: '30px', borderRadius: '5px',border:'1px solid lightgrey',backgroundColor:'white' }} />
                                    </div>
                                    <div className=' mt-3 mb-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}>Start time</p>
                                        <input type='date' placeholder='Please input' style={{ width: '220px', padding: '1px 10px', height: '30px', borderRadius: '5px',border:'1px solid lightgrey',backgroundColor:'white' }} />
                                    </div><RemoveIcon sx={{marginTop:'40px'}}/>
                                    <div className=' mt-3 mb-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}>End time</p>
                                        <input type='date' placeholder='Please input' style={{ width: '100px', padding: '1px 10px', height: '30px', borderRadius: '5px',border:'1px solid lightgrey',backgroundColor:'white' }} />
                                    </div>
                                    <div className=' m-3'>
                                        <Button variant='contained' sx={{ borderRadius: '10px',mt:'20px' }}>Search</Button>
                                        <Button variant='outlined' sx={{ borderRadius: '10px',mt:'20px',ml:3 }}>Reset</Button>
                                    </div>

                                </div>
                            </TabPanel>
                            <TabPanel value={1}>
                                
                            </TabPanel>
                            <TabPanel value={2}></TabPanel>
                            <TabPanel value={3}></TabPanel>
                            <TabPanel value={4}></TabPanel>
                            <TabPanel value={5}></TabPanel>
                            <TabPanel value={6}></TabPanel>
                        </Tabs>
                    </div>


                </div>
            </Box >
        </>
    )
}

export default DropShippingOrder
