import { Box, Button, List } from "@mui/material"
import { VscAccount } from "react-icons/vsc";
import imgeLogo from '../assets/mainlogo.png'
import SellarPgSidebar from "../Components/SellerPgSidebar"
import { NavLink } from "react-router-dom";
import { FaListAlt, FaBriefcase } from "react-icons/fa";
import { BiSolidVideoRecording } from "react-icons/bi";
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import '../stylecss/sellerPageStyle.css'


const SellerProductList = () => {
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
                    <div className=" d-flex justify-content-between m-5">
                        <div className=" d-flex">
                            <h4>Product List</h4>
                            <select style={{ marginLeft: '30px', height: '30px' }}>
                                <option>Global English language</option>
                                <option>Spanish site</option>
                                <option>French site</option>
                                <option>Italian site</option>
                                <option>Thai site </option>
                            </select>
                        </div>
                        <NavLink style={{ textDecoration: 'none' }}>Post a new product</NavLink>
                    </div>

                    <div className=" d-flex ms-4">
                        <div className=" d-flex">
                            <div className=" m-3">
                                <FaListAlt style={{ fontSize: '40px', color: '#0d47a1' }} />
                            </div>
                            <div className=" m-2">
                                <NavLink style={{ textDecoration: 'none' }}>Product tasks  0</NavLink>
                                <p style={{ fontSize: '14px', color: 'grey' }}>Complete tasks to optimize your listings.</p>
                            </div>

                        </div>
                        <div className=" d-flex">
                            <div className=" m-3">
                                <BiSolidVideoRecording style={{ fontSize: '40px', color: '#0d47a1' }} />
                            </div>
                            <div className=" m-2">
                                <NavLink style={{ textDecoration: 'none' }}>Smart video</NavLink>
                                <p style={{ fontSize: '14px', color: 'grey' }}>Generate a video with one click.</p>
                            </div>
                        </div>


                        <div className=" d-flex">
                            <div className=" m-3">
                                <FaBriefcase style={{ fontSize: '40px', color: '#0d47a1' }} />
                            </div>

                            <div className=" m-2">
                                <NavLink style={{ textDecoration: 'none' }}>Brand Search Tool</NavLink>
                                <p style={{ fontSize: '14px', color: 'grey' }}>Search for common trademarks.</p>
                            </div>

                        </div>

                    </div>

                    <div className=" ms-5">
                        <Tabs defaultValue={0}>
                            <TabsList>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontSize: '14px', color: 'grey', marginTop: '13px' }}>Sort by marketing status:</p>
                                    <Tab className="productlist-tab" value={0}>All(0)</Tab>
                                    <Tab className="productlist-tab" value={1}>Approved(0)</Tab>
                                    <Tab className="productlist-tab" value={2}>Editing required(0)</Tab>
                                    <Tab className="productlist-tab" value={3}>Pending approval(0)</Tab>
                                    <Tab className="productlist-tab" value={4}>Drafts(0)</Tab>
                                </div>
                                <div>
                                    <input placeholder='enter product name' style={{ width: '200px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white', marginLeft: '2px' }} />
                                    <input placeholder='enter product model' style={{ width: '200px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white', marginLeft: '20px' }} />

                                    <select style={{ width: '200px', padding: '1px 10px', height: '30px', borderRadius: '5px', border: '1px solid lightgrey', backgroundColor: 'white', marginLeft: '20px' }}>
                                        <option style={{ fontSize: '14px', color: 'grey' }}>All</option>
                                        <option> </option>
                                        <option></option>
                                        <option></option>
                                    </select>

                                    <Button size="small" variant='contained' sx={{ p: '4px 30px', borderRadius: '30px', ml: 2 }}>Search</Button>
                                    <Button size="small" variant='outlined' sx={{ p: '4px 30px', borderRadius: '30px', ml: 3 }}>Clear</Button>
                                </div>
                                <div>
                                    <p style={{ margin: '50px 10px 10px 10px' }}>Marketing view</p>
                                    <button style={{ border: '1px solid grey', backgroundColor: 'white', borderRadius: '20px', color: 'black', padding: '4px 12px', fontSize: '14px', margin: '4px 10px' }}>
                                        Assign owner
                                    </button> <button style={{ border: '1px solid grey', backgroundColor: 'white', borderRadius: '20px', color: 'black', padding: '4px 12px', fontSize: '14px', margin: '4px 10px' }}>
                                        Assign group
                                    </button> <button style={{ border: '1px solid grey', backgroundColor: 'white', borderRadius: '20px', color: 'black', padding: '4px 12px', fontSize: '14px', margin: '4px 10px' }}>
                                        Refresh
                                    </button> <button style={{ border: '1px solid grey', backgroundColor: 'white', borderRadius: '20px', color: 'black', padding: '4px 12px', fontSize: '14px', margin: '4px 10px' }}>
                                        Display online
                                    </button> <button style={{ border: '1px solid grey', backgroundColor: 'white', borderRadius: '20px', color: 'black', padding: '4px 12px', fontSize: '14px', margin: '4px 10px' }}>
                                        Take offline
                                    </button> <button style={{ border: '1px solid grey', backgroundColor: 'white', borderRadius: '20px', color: 'black', padding: '4px 12px', fontSize: '14px', margin: '4px 10px' }}>
                                        Batch modify
                                    </button> <button style={{ border: '1px solid grey', backgroundColor: 'white', borderRadius: '20px', color: 'black', padding: '4px 12px', fontSize: '14px', margin: '4px 10px' }}>
                                        Delete
                                    </button>
                                </div>
                                <div className=" d-flex justify-content-between m-2 p-2" style={{border:'1px solid lightgrey'}}>
                                    <p style={{width:'110px',fontSize:'12px'}}>Product marketing name</p>
                                    <p style={{width:'80px',fontSize:'12px'}}>Product Type</p>
                                    <p style={{width:'40px',fontSize:'12px'}}>Price</p>
                                    <p style={{width:'40px',fontSize:'12px'}}>Owner</p>
                                    <p style={{width:'80px',fontSize:'12px'}}>Last updated</p>
                                    <p style={{width:'80px',fontSize:'12px'}}>Product level</p>
                                    <p style={{width:'60px',fontSize:'12px'}}> Status</p>
                                    <p style={{width:'100px',fontSize:'12px'}}>Views from last month</p>
                                    <p style={{width:'50px',fontSize:'12px'}}>Action</p>
                                </div>
                            </TabsList>
                            <TabPanel value={0}>
                                <img style={{ width: '300px', marginLeft: '200px' }} src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?size=626&ext=jpg&ga=GA1.1.1967397477.1695059684&semt=sph" alt="img" />
                            </TabPanel>
                            <TabPanel value={1}>
                                <img style={{ width: '300px', marginLeft: '200px' }} src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?size=626&ext=jpg&ga=GA1.1.1967397477.1695059684&semt=sph" alt="img" />

                            </TabPanel>
                            <TabPanel value={2}>
                                <img style={{ width: '300px', marginLeft: '200px' }} src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?size=626&ext=jpg&ga=GA1.1.1967397477.1695059684&semt=sph" alt="img" />

                            </TabPanel>
                            <TabPanel value={3}>
                                <img style={{ width: '300px', marginLeft: '200px' }} src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?size=626&ext=jpg&ga=GA1.1.1967397477.1695059684&semt=sph" alt="img" />

                            </TabPanel>
                            <TabPanel value={4}>
                                <img style={{ width: '300px', marginLeft: '200px' }} src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?size=626&ext=jpg&ga=GA1.1.1967397477.1695059684&semt=sph" alt="img" />

                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </Box >

        </>
    )
}

export default SellerProductList
