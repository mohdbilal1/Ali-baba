import { Box, Button, Checkbox, Divider, FormControlLabel, List, TextField } from "@mui/material"
import { VscAccount } from "react-icons/vsc";
import imgeLogo from '../assets/mainlogo.png'
import SellarPgSidebar from "../Components/SellerPgSidebar"
import { NavLink } from "react-router-dom";
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base';
import { GoTrash } from "react-icons/go";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import '../stylecss/sellerPageStyle.css'




const SellerOrders = () => {
    return (
        <>
            <Box sx={{ display: 'flex', boxShadow: '1px 1px 6px lightgrey', p: '6px 0', position: 'fixed', top: 0, zIndex: 10, bgcolor: 'white', width: '100%' }}>
                <div className='logo-img-div pt-2 pb-2 d-flex'>
                    <a href="/">
                        <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                    </a>
                    <p style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '20px' }}>My Abaris</p>
                    <NavLink to='/globalBuyerIndex' style={{ fontSize: '14px' }}>
                        <button style={{ border: '1px solid grey', backgroundColor: 'white', borderRadius: '20px', color: 'black', padding: '4px 12px', fontSize: '12px', marginTop: '4px' }}>
                            Switch to Buyer
                        </button>
                    </NavLink>
                </div>
                <Box sx={{ position: 'absolute', right: 60 }}>
                    <List sx={{ display: 'flex', textAlign: 'center' }}>

                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>
                                <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '12px' }}>
                                    Upgrade to gold supplier</button>
                            </NavLink>
                        </li>

                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}><VscAccount style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />My Account</NavLink>
                        </li>

                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Help</NavLink>
                        </li>

                    </List>
                </Box>

            </Box>

            <Box sx={{ display: 'flex', bgcolor: 'rgb(232, 232, 242)' }}>
                <div className=" col-sm-2" style={{ width: '120px', position: 'fixed', left: 0, top: 65 }}>
                    <SellarPgSidebar />
                </div>

                <div className="col-sm-9" style={{ position: 'absolute', left: 270, top: 65, width: '995px' }}>
                    <div className=' d-flex justify-content-between'>
                        <h5 style={{ marginLeft: '30px', marginTop: '30px' }}>All Orders</h5>
                        <div className='me-5 d-flex'>
                            <Button size="small" variant="outlined" sx={{ mt: 3, borderRadius: '30px', p: '6px 30px' }}>Draft Trade Assurence Order </Button>
                        </div>
                    </div>

                    <div>
                        <Tabs defaultValue={0}>
                            <TabsList style={{ marginLeft: '20px' }}>
                                <Tab style={{ margin: '40px 0 5px 0', border: 'none', padding: '5px 15px', backgroundColor: 'white' }} value={0}>All</Tab>
                                <Tab style={{ margin: '40px 0 5px 0', border: 'none', padding: '5px 15px', backgroundColor: 'white' }} value={1}>To be confirmed</Tab>
                                <Tab style={{ margin: '40px 0 5px 0', border: 'none', padding: '5px 15px', backgroundColor: 'white' }} value={2}>Unpaid</Tab>
                                <Tab style={{ margin: '40px 0 5px 0', border: 'none', padding: '5px 15px', backgroundColor: 'white' }} value={3}>To be shipped</Tab>
                                <Tab style={{ margin: '40px 0 5px 0', border: 'none', padding: '5px 15px', backgroundColor: 'white' }} value={4}>To be received</Tab>
                                <Tab style={{ margin: '40px 0 5px 0', border: 'none', padding: '5px 15px', backgroundColor: 'white' }} value={5}>In dispute</Tab>
                                <Tab style={{ margin: '40px 0 5px 0', border: 'none', padding: '5px 15px', backgroundColor: 'white' }} value={5}>Completed/Closed</Tab>
                                <Tab style={{ margin: '40px 0 5px 0', border: 'none', padding: '5px 15px', backgroundColor: 'white' }} value={5}><GoTrash style={{ marginRight: '4px', marginBottom: '2px' }} />Trashed Order</Tab>
                            </TabsList>
                            <Divider sx={{ border: '1px solid grey', margin: '0 30px' }} />
                            <TabPanel value={0}>
                                <div className=" d-flex" style={{ border: '1px solid lightgrey', borderRadius: '20px', height: '30px', margin: '20px 0 20px 110px', width: '500px' }}>
                                    <TextField variant="standard"
                                        InputProps={{
                                            disableUnderline: true,
                                        }}

                                        sx={{ bgcolor: 'white', width: '400px', ml: 3 }}
                                        placeholder="Order ID ,Email, Name,Acount,Remark,Product Name"
                                    />
                                    <Button size='small' variant="outlined" sx={{ borderRadius: ' 0 20px 20px 0', ml: 5, color: 'grey', border: '1px solid lightgrey' }}><SearchOutlinedIcon sx={{ mr: 1 }} /></Button>
                                </div>
                                <div className=' d-flex flex-wrap' style={{ justifyContent: 'center' }}>
                                    <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}>Order Status</p>
                                        <select style={{ width: '240px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option>Waiting for Draft Contract  (0)</option>
                                            <option>Waiting for Order Confirmation  (0) </option>
                                            <option>Processing  (0) </option>
                                            <option>To be confirmed  (0) </option>
                                            <option>Unpaid  (0)</option>
                                            <option>Shipped  (0)</option>

                                        </select>
                                    </div>
                                    <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}>Account</p>
                                        <select style={{ width: '240px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option> Mohd Bila</option>
                                            <option></option>
                                            <option></option>
                                        </select>
                                    </div>
                                    <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}> Country/Region</p>
                                        <select style={{ width: '240px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option> United States of America</option>
                                            <option>Australia</option>
                                            <option>Canada</option>
                                            <option>India</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                    <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}> Create Time</p>
                                        <select style={{ width: '240px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option> Within 3 months</option>
                                            <option>Within 1 year </option>
                                            <option>Within 6 months</option>

                                        </select>
                                    </div> <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}> Order Amount</p>
                                        <select style={{ width: '240px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option>  ≤ 1000.00</option>
                                            <option>1000.01 ~ 3000.00</option>
                                            <option>3000.01 ~ 5000.00</option>
                                            <option>5000.01 ~ 10000.00</option>
                                            <option>10000.01 ~ 30000.00</option>
                                            <option>≥ 30000.01</option>
                                        </select>
                                    </div> <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}> Buyer Country/Region</p>
                                        <select style={{ width: '240px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option> United</option>
                                            <option>Australia</option>
                                            <option>Canada</option>
                                            <option>India</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div> <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}> Drafted by</p>
                                        <select style={{ width: '240px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option> Buyer</option>
                                            <option>Seller</option>
                                        </select>
                                    </div> <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}> Order Type</p>
                                        <select style={{ width: '240px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option> dropshipping</option>
                                            <option>Warehouse Order</option>
                                            <option>Payment Terms</option>
                                            <option>Sample Order</option>
                                            <option>Letter of Credit</option>
                                        </select>
                                    </div> <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}> Business Source</p>
                                        <select style={{ width: '240px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option> Direct Order</option>
                                            <option>Inquiry</option>
                                            <option>RFQ</option>
                                            <option>OneTouch</option>
                                        </select>
                                    </div> <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}> Shipping Method</p>
                                        <select style={{ width: '240px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option> Air Cargo</option>
                                            <option>Postal</option>
                                            <option>Land Transportation</option>
                                            <option>Multimodal Transport</option>
                                            <option>Sea Freight</option>
                                        </select>
                                    </div> <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}> Currency</p>
                                        <select style={{ width: '240px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option> USD</option>
                                            <option>CNY</option>
                                            <option>EUR</option>
                                        </select>
                                    </div> <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}> Export Type</p>
                                        <select style={{ width: '240px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option> Convenient Delivery</option>
                                            <option>Self-Title Export</option>
                                            <option>OneTouch Agency Export</option>
                                            <option>Market Purchase Export</option>
                                        </select>
                                    </div> <div className=' m-3'>
                                        <p style={{ fontSize: '14px', color: 'grey', margin: '0 15px 2px 4px' }}> Order Promotion</p>
                                        <select style={{ width: '240px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white' }}>
                                            <option style={{ fontSize: '14px', color: 'grey' }}>Please Select</option>
                                            <option> Shipping discount</option>
                                            <option>Transaction fee discount</option>
                                        </select>
                                    </div>


                                </div>
                                <div style={{margin:'30px 70px'}}>
                                    <Button className="btn-hvr" size="small" variant="outlined" sx={{height:'35px',width:'20px',borderRadius:'20px 0 0 20px',padding:'4px 0 4px 20px'}}>
                                       <FormControlLabel control={<Checkbox />} />
                                    </Button>
                                    <Button className="btn-hvr" variant="outlined" sx={{borderRadius:'0'}}>Assign to</Button>
                                    <Button className="btn-hvr" variant="outlined" sx={{borderRadius:'0'}}>Export Orders</Button>
                                    <Button className="btn-hvr" variant="outlined" sx={{borderRadius:'0 20px 20px 0'}}>Delete</Button>
                                </div>
                                <div className="info-div">
                                    <p>Buyer Info</p>
                                    <p>Product Info</p>
                                    <p>Amount</p>
                                    <p>Export | Shipping</p>
                                    <p>Status</p>
                                    <p>Action</p>
                                </div>
                                <div style={{display:'flex',justifyContent:'center',margin:'40px'}}>
                                    <p>No results.</p>
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
            </Box>
        </>
    )
}

export default SellerOrders
