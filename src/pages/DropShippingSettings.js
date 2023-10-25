import { Box, Checkbox, Divider, FormControl, FormControlLabel, List, Radio, RadioGroup, Switch } from '@mui/material'
import { NavLink } from "react-router-dom";
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DropshippingSidebar from '../Components/DropshippingSidebar';
import { useState } from 'react';
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';




const DropshippingSetting = () => {
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

                <div className={`${state && 'widthMange'} col-sm-8`} style={{ position: 'absolute', left: 100, width: '1150px', padding: '20px 0 50px 0', backgroundColor: '#e3f2fd' }}>

                    <div>
                        <h3 style={{ margin: '20px 40px' }}>Settings</h3>
                    </div>

                    <div>
                        <Tabs defaultValue={0}>
                            <TabsList style={{ marginLeft: '30px' }}>
                                <Tab style={{ margin: '2px 2px 0 2px', border: 'none', padding: '8px 20px',backgroundColor:'white',borderRadius:'8px 8px 0 0' }} value={0}>General</Tab>
                                <Tab style={{ margin: '2px 2px 0 2px', border: 'none', padding: '8px 20px',backgroundColor:'white',borderRadius:'8px 8px 0 0' }} value={1}>Pricing rules</Tab>
                                <Tab style={{ margin: '2px 2px 0 2px', border: 'none', padding: '8px 20px',backgroundColor:'white',borderRadius:'8px 8px 0 0' }} value={2}>Orders</Tab>
                                <Tab style={{ margin: '2px 2px 0 2px', border: 'none', padding: '8px 20px',backgroundColor:'white',borderRadius:'8px 8px 0 0' }} value={3}>Products</Tab>
                            </TabsList>
                            <Divider sx={{ border: '1px solid grey', margin: '0 50px 20px 30px' }} />
                            <TabPanel value={0}>
                                <div>
                                    <h5 style={{ margin: '20px 0 20px 50px' }}>Auto updates</h5>
                                    <div style={{ margin: '40px 0 10px 50px' }}>
                                        <h6>When a product is no longer available</h6>
                                        <p style={{ fontSize: '14px' }}>Choose an action when one of your products is no longer available from the supplier. Applies to all existing products.</p>
                                        <FormControl>
                                            <RadioGroup
                                                defaultValue="Set quantity to zero"
                                                name="radio-buttons-group"
                                            >
                                                <FormControlLabel value="Unpublish product" control={<Radio />} label="Unpublish product" />
                                                <FormControlLabel value="Set quantity to zero" control={<Radio />} label="Set quantity to zero" />
                                                <FormControlLabel value="Do nothing" control={<Radio />} label="Do nothing" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </div>
                                <Divider sx={{ border: '1px solid grey', margin: '30px 50px 20px 50px' }} />

                                <div style={{ margin: '40px 0 10px 50px' }}>
                                    <h6>When a variant is no longer available</h6>
                                    <p style={{ fontSize: '14px' }}>Choose an action when one of the product's variants is no longer available from the supplier.</p>
                                    <FormControl>
                                        <RadioGroup
                                            defaultValue="Set quantity to zero"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel value="Unpublish variant" control={<Radio />} label="Unpublish variant" />
                                            <FormControlLabel value="Set quantity to zero" control={<Radio />} label="Set quantity to zero" />
                                            <FormControlLabel value="Do nothing" control={<Radio />} label="Do nothing" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <Divider sx={{ border: '1px solid grey', margin: '30px 50px 20px 50px' }} />

                                <div style={{ margin: '40px 0 10px 50px' }}>
                                    <h6>When the cost changes</h6>
                                    <p style={{ fontSize: '14px' }}>Choose an action when the cost of your product changes.</p>
                                    <FormControl>
                                        <RadioGroup
                                            defaultValue="Update price and compare-at price"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel value=" Do nothing" control={<Radio />} label=" Do nothing" />
                                            <FormControlLabel value="Update price and compare-at price" control={<Radio />} label="Update price and compare-at price" />
                                            <FormControlLabel value="Update price only" control={<Radio />} label="Update price only" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <Divider sx={{ border: '1px solid grey', margin: '30px 50px 20px 50px' }} />

                                <div style={{ margin: '40px 0 10px 50px' }}>
                                    <h6>When inventory changes</h6>
                                    <p style={{ fontSize: '14px' }}>Choose an action when the inventory level of a particular product changes.</p>
                                    <FormControl>
                                        <RadioGroup
                                            defaultValue="Auto updates"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel value=" Do nothing" control={<Radio />} label=" Do nothing" />
                                            <FormControlLabel value="Auto updates" control={<Radio />} label="Auto updates" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>

                            </TabPanel>
                            <TabPanel value={1}>
                                <div>
                                    <h5 style={{ margin: '20px 0 20px 50px' }}>Pricing rules</h5>
                                    <h6 style={{ margin: '30px 0 20px 80px' }}>Price : <HelpOutlineOutlinedIcon sx={{ fontSize: '18px' }} /></h6>
                                    <div style={{ margin: '30px 0 10px 70px', display: 'flex' }}>
                                        <p style={{ margin: '0 10px' }}>Price =<span style={{ margin: '0 10px' }}> cost (USD)</span></p>
                                        <select style={{ width: '100px', fontSize: '20px', height: '30px', paddingTop: '-10px' }}>
                                            <option style={{ fontSize: '25px' }}>+</option>
                                            <option style={{ fontSize: '25px' }}>x</option>
                                        </select>
                                        <input size='small' placeholder='input a number here' style={{ width: '200px', marginLeft: '20px', height: '30px' }} />
                                        <AddIcon sx={{ margin: '5px 20px' }} />
                                        <p style={{ marginTop: '-4px' }}><FormControlLabel control={<Checkbox />} label="Shipping Fee" /></p>
                                    </div>
                                    <p style={{ margin: '5px 50px 10px 70px', fontSize: '14px' }}>If the cost is US $20, the shipping fee is US $5, and you choose "X" (multiply), input 2 as the multiplier, check "Shipping fee", then the price equals to US $20 x 2 + US $5 = US $45.</p>
                                    <div className=' d-flex ' style={{ margin: '30px 0 10px 70px', }}>
                                        <p>Round price:</p>
                                        <input size='small' placeholder='input a number here' style={{ width: '200px', marginLeft: '20px', height: '30px' }} />
                                    </div>
                                    <p style={{ margin: '5px 50px 10px 70px', fontSize: '14px' }}>You can set a specific value at the end of your retail price. The system will add this value to the end of the price after decimal point. Example: If you input 99, and the original price is 19.21, then the final price will be 19.99.</p>
                                </div>
                                <Divider sx={{ border: '1px solid grey', margin: '30px 50px 20px 50px' }} />
                                <div>
                                    <h6 style={{ margin: '5px 0 5px 80px' }}>Compare-at </h6>
                                    <h6 style={{ margin: '5px 0 20px 80px' }}>Price : <HelpOutlineOutlinedIcon sx={{ fontSize: '18px' }} /></h6>
                                    <div style={{ margin: '30px 0 10px 70px', display: 'flex' }}>
                                        <p style={{ margin: '0 10px' }}>Price =<span style={{ margin: '0 10px' }}> cost (USD)</span></p>
                                        <select style={{ width: '100px', fontSize: '20px', height: '30px', paddingTop: '-10px' }}>
                                            <option style={{ fontSize: '25px' }}>+</option>
                                            <option style={{ fontSize: '25px' }}>x</option>
                                        </select>
                                        <input size='small' placeholder='input a number here' style={{ width: '200px', marginLeft: '20px', height: '30px' }} />
                                        <AddIcon sx={{ margin: '5px 20px' }} />
                                        <p style={{ marginTop: '-4px' }}><FormControlLabel control={<Checkbox />} label="Shipping Fee" /></p>
                                    </div>

                                    <div style={{ margin: '5px 50px 10px 70px' }}>
                                        <div className='me-5 d-flex'>
                                            <Switch defaultChecked color="warning" />
                                            <p style={{ marginTop: '7px', fontSize: '14px' }}>Use Compare-at Price</p>

                                        </div>
                                        <p style={{ fontSize: '14px' }}>Product prices must be lower than their compare-at prices. If product prices are higher, compare-at prices are automatically removed.</p>
                                        <div className=' d-flex '>
                                            <p style={{ fontSize: '14px' }}>Round compare-at price:</p>
                                            <input size='small' placeholder='input a number here' style={{ width: '200px', height: '30px', marginLeft: '20px' }} />
                                        </div>
                                        <p style={{ fontSize: '14px' }}>You can set a specific value at the end of your compare-at price. The system will add this value to the end of the price after decimal point. Example: If you input 99, and the original price is 19.21, then the final price will be 19.99</p>
                                    </div>
                                    <Divider sx={{ border: '1px solid grey', margin: '30px 50px 20px 50px' }} />
                                    <div style={{ margin: '5px 50px 10px 70px' }}>
                                        <div className=' d-flex '>
                                            <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px' }}>Currency:</p>
                                            <div>
                                                <p style={{ fontSize: '15px', margin: '10px' }}>The currency value is synchronized from your store settings, and cannot be changed here. To change the currency, please change your store’s currency settings first.</p>
                                                <select style={{ width: '240px', height: '30px', margin: '10px 10px' }} disabled>
                                                    <option style={{ fontSize: '14px' }}>USD</option>
                                                    <option style={{ fontSize: '14px' }}>INR</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ margin: '5px 50px 10px 70px' }}>
                                        <div className=' d-flex '>
                                            <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px' }}>Shipping to:</p>
                                            <div>
                                                <p style={{ fontSize: '15px', margin: '10px' }}>The shipping fee will vary with the destination country. Select the country as needed.</p>
                                                <select style={{ width: '240px', height: '30px', margin: '10px 10px' }}>
                                                    <option style={{ fontSize: '14px' }}>America</option>
                                                    <option style={{ fontSize: '14px' }}>United State</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value={2}>
                                <div style={{ margin: '20px 0 20px 50px' }}>
                                    <h5 style={{ margin: '20px 0' }} >Orders</h5>
                                    <div className='me-5 d-flex'>
                                        <Switch defaultChecked color="warning" />
                                        <p style={{ marginTop: '5px', fontSize: '16px', fontWeight: 'bold' }}>Automatic order cancellation</p>
                                    </div>
                                    <p style={{ marginLeft: '7px', fontSize: '14px' }}>When your customer cancels an order in your store, and you have not paid for the order on Abaris.com, the system will cancel it automatically.</p>
                                    <Divider sx={{ border: '1px solid grey', margin: '30px 50px 20px 1px' }} />

                                    <div className='me-5 d-flex'>
                                        <Switch defaultChecked color="warning" />
                                        <p style={{ marginTop: '5px', fontSize: '16px', fontWeight: 'bold' }}>Automatic logistics synchronization</p>
                                    </div>
                                    <p style={{ marginLeft: '7px', fontSize: '14px' }}>When your supplier modifies the tracking number, the system will synchronize it to your store automatically.</p>
                                </div>
                            </TabPanel>
                            <TabPanel value={3}>
                                <div style={{ margin: '20px 0 20px 50px' }}>
                                    <h5 style={{ margin: '20px 0' }} >Products</h5>
                                    <div className='me-5'>
                                        <h6>When you want to resize the description image when importing product</h6>
                                        <p style={{ marginTop: '5px', fontSize: '16px' }}>Set the product image size you want, when you want to restore the original size, clear the data you set and save it.</p>
                                    </div>
                                    <p style={{ marginLeft: '7px', fontSize: '14px' }}>When your supplier modifies the tracking number, the system will synchronize it to your store automatically.</p>
                                    <div className=' d-flex mt-5 '>
                                        <div className=' d-flex '>
                                            <p style={{ fontSize: '14px' }}>image width=</p>
                                            <input size='small' placeholder='input a number here' style={{ width: '200px', marginLeft: '15px', height: '25px' }} /> <span style={{ marginLeft: '10px',fontSize:'14px' }}>px</span>
                                        </div>
                                        <p style={{margin:'-5px 20px 0 20px',fontSize:'20px'}}>x</p>
                                        <div className=' d-flex '>
                                            <p style={{ fontSize: '14px' }}>image height=</p>
                                            <input size='small' placeholder='input a number here' style={{ width: '200px', marginLeft: '10px', height: '25px' }} /> <span style={{ marginLeft: '10px',fontSize:'14px' }}>px</span>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </Box >
        </>
    )
}

export default DropshippingSetting
