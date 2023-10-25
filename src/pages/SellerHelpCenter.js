import { Box, Button, Divider, List, TextField } from "@mui/material"
import { NavLink } from "react-router-dom"
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import '../stylecss/sellerPageStyle.css'
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import { GoPerson,GoSearch } from "react-icons/go";
import { BiMessageDots,BiDollarCircle } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { GrAppsRounded } from "react-icons/gr";


const SellerHelpCenter = () => {
   
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

            <Box className='help-bg-img'>
                <div className=" d-flex" style={{ border: '3px solid rgb(16, 124, 232)', borderRadius: '6px', height: '50px' }}>
                    <TextField variant="standard"
                        InputProps={{
                            disableUnderline: true,
                        }}

                        sx={{ bgcolor: 'white', width: '500px', pl: 1, pt: 0.6 }}
                        placeholder="Enter question or keyword.Example:Payment"
                    />
                    <Button size='small' variant="contained" sx={{ borderRadius: '4px' }}><SearchOutlinedIcon sx={{ mr: 1 }} />Search</Button>
                </div>

            </Box>


            <Box>
                <div className=" text-center m-5">
                    <h6 style={{ margin: '10px 60px' }}>Learning Center</h6>
                    <Divider sx={{ width: '40px', border: '2px solid red', marginLeft: '564px' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div className="text-center" style={{ width: '240px', boxShadow: '1px 1px 4px lightgrey', padding: '20px', borderRadius: '6px' }}>
                        <img style={{ width: '100px' }} src="https://china-southnorth-01.oss-cn-zhangjiakou.aliyuncs.com/intl-social-service/26/143003/20221221/feae3cbf8d4f4f3083353464134f1490-helphub-1671593631683-rc-upload-1671586634092-38" alt="img" />
                        <h6 style={{ margin: '20px 0 0 0' }}>Sourcing on Abaris.com</h6>
                        <p style={{ fontSize: '14px', color: 'grey' }}>Your guide to Sourcing, Ordering, and Shipping</p>

                    </div>
                    <div className="text-center" style={{ width: '240px', boxShadow: '1px 1px 4px lightgrey', padding: '20px', borderRadius: '6px' }}>
                        <img style={{ width: '100px' }} src="https://china-southnorth-01.oss-cn-zhangjiakou.aliyuncs.com/intl-social-service/26/143003/20221221/dbd187d6c6dd4795899c2fbac6b80b75-helphub-1671593646203-rc-upload-1671586634092-40" alt="img" />
                        <h6 style={{ margin: '20px 0 0 0' }}>Trade Assurance</h6>
                        <p style={{ fontSize: '14px', color: 'grey' }}>Protect Your Abaris.com Orders See How It Works</p>

                    </div>
                    <div className="text-center" style={{ width: '240px', boxShadow: '1px 1px 4px lightgrey', padding: '20px', borderRadius: '6px' }}>
                        <img style={{ width: '100px' }} src="https://china-southnorth-01.oss-cn-zhangjiakou.aliyuncs.com/intl-social-service/26/143003/20221221/b2a8ce88e80843a3954923a65576156a-helphub-1671593659758-rc-upload-1671586634092-42" alt="img" />
                        <h6 style={{ margin: '20px 0 0 0' }}>Get the APP</h6>
                        <p style={{ fontSize: '14px', color: 'grey' }}>Abaris.com APP Get Download Link</p>

                    </div>
                    <div className="text-center" style={{ width: '240px', boxShadow: '1px 1px 4px lightgrey', padding: '20px', borderRadius: '6px' }}>
                        <img style={{ width: '100px' }} src="https://china-southnorth-01.oss-cn-zhangjiakou.aliyuncs.com/intl-social-service/26/143003/20221221/649de8ef6bee44839b837a8f2659e8c0-helphub-1671587635341-rc-upload-1671586634092-32" alt="img" />
                        <h6 style={{ margin: '20px 0 0 0' }}>Abaris.com Logistics</h6>
                        <p style={{ fontSize: '14px', color: 'grey' }}>Smart logistics services for global B2B buyers</p>

                    </div>
                </div>
            </Box>

            <Box>
                <div className=" text-center m-5">
                    <h6 style={{ margin: '10px 60px' }}>Hot Topics</h6>
                    <Divider sx={{ width: '40px', border: '2px solid red', marginLeft: '562px' }} />
                </div>
                <Tabs defaultValue={0}>
                    <TabsList style={{margin:'10px 20px 5px 20px'}}>
                        <Tab  className="seller-help-tab" value={0}><GoPerson style={{fontSize:'20px',marginRight:'10px'}}/>My Account</Tab>
                        <Tab  className="seller-help-tab" value={1}><GoSearch  style={{fontSize:'20px',marginRight:'10px'}}/>Sourcing</Tab>
                        <Tab  className="seller-help-tab" value={2}><BiMessageDots  style={{fontSize:'20px',marginRight:'10px'}}/>Negotiation</Tab>
                        <Tab  className="seller-help-tab" value={3}><BsCart3  style={{fontSize:'20px',marginRight:'10px'}}/>Order&Payment</Tab>
                        <Tab  className="seller-help-tab" value={4}><BiDollarCircle  style={{fontSize:'20px',marginRight:'10px'}}/>After-Sales</Tab>
                        <Tab  className="seller-help-tab" value={5}><GrAppsRounded  style={{fontSize:'20px',marginRight:'10px'}}/>Self-Service</Tab>
                    </TabsList>
                    <TabPanel value={0} style={{border:'1px solid lightgrey',width:'1180px',marginLeft:'20px'}}>
                        <div className="ms-5 mt-3">
                            <ul style={{display:'flex',flexWrap:'wrap'}}>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>What can I do if I forgot my password?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How can I register an account on Abaris.com?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>Why cannot I receive the Email verification code?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>Why cannot I receive the SMS verification code?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>What can I do if my account was deactivated?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I delete verification phone number?</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel value={1} style={{border:'1px solid lightgrey',width:'1180px',marginLeft:'20px'}}>
                    <div className="ms-5 mt-3">
                            <ul style={{display:'flex',flexWrap:'wrap'}}>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I buy on Abaris.com?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How can I search products on Abaris.com?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I add a product to My Favorites?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How can I find the supplier's contact information?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>Can I know the product details, such as price, MOQ, shipping fee?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I post RFQ?</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel value={2} style={{border:'1px solid lightgrey',width:'1180px',marginLeft:'20px'}}>
                    <div className="ms-5 mt-3">
                            <ul style={{display:'flex',flexWrap:'wrap'}}>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I contact suppliers?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>Why is there no reply from supplier?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>Why does my chat history disappear in Message Center?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>Should I communicate with suppliers outside of Abaris.com?</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel value={3} style={{border:'1px solid lightgrey',width:'1180px',marginLeft:'20px'}}>
                    <div className="ms-5 mt-3">
                            <ul style={{display:'flex',flexWrap:'wrap'}}>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I place a Trade Assurance order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How does Trade Assurance protect my online transaction?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>What is your concern about VAT/GST/ US Sales tax?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I pay for Trade Assurance order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>Why was my payment not received in my order after I paid?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>When will the supplier ship my Trade Assurance order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>When will I receive my order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I add the inspection service to my Trade Assurance order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>Why cannot I pay for my Trade Assurance order?</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel value={4} style={{border:'1px solid lightgrey',width:'1180px',marginLeft:'20px'}}>
                    <div className="ms-5 mt-3">
                            <ul style={{display:'flex',flexWrap:'wrap'}}>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I open a dispute for my Trade Assurance order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I submit a complaint for my offline order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>What's the dispute process for Trade Assurance order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How long does it take for me to receive the refund for Trade Assurance order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I return products for my Trade Assurance order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>When will my dispute case be solved?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I cancel a dispute for my Trade Assurance order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I check the status of my dispute case?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I deal with my Trade Assurance order dispute?</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel value={5} style={{border:'1px solid lightgrey',width:'1180px',marginLeft:'20px'}}>
                    <div className="ms-5 mt-3">
                            <ul style={{display:'flex',flexWrap:'wrap'}}>
                            <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I cancel a dispute for my Trade Assurance order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I check the status of my dispute case?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I deal with my Trade Assurance order dispute?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I open a dispute for my Trade Assurance order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I submit a complaint for my offline order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>What's the dispute process for Trade Assurance order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How long does it take for me to receive the refund for Trade Assurance order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>How do I return products for my Trade Assurance order?</li>
                                <li style={{margin:'15px',width:'300px',color:'grey'}}>When will my dispute case be solved?</li>
                               
                            </ul>
                        </div>
                    </TabPanel>
                </Tabs>
            </Box>

            <Box>
                <div className=" text-center m-5">
                    <h6 style={{ margin: '10px 60px' }}>Contact Us</h6>
                    <Divider sx={{ width: '40px', border: '2px solid red', marginLeft: '562px' }} />
                </div>

                <div className=" d-flex ms-4 justify-content-center m-5">
                       
                        <div className=" d-flex p-2" style={{boxShadow:'1px 1px 4px lightgrey',width:'300px'}}>
                            <div className=" m-3">
                               <img style={{width:'60px'}} src="https://china-southnorth-01.oss-cn-zhangjiakou.aliyuncs.com/intl-social-service/26/143003/20201020/27971dcdea8341a89899e3cda97e396f-helphub-1603162860555-rc-upload-1603161626115-10" alt="img" />
                            </div>
                            <div className=" m-2 mt-4">
                                <NavLink style={{ textDecoration: 'none' }}>Online Service</NavLink>
                                <p style={{ fontSize: '14px', color: 'grey' }}>24/7 Service for Buyer</p>
                            </div>
                        </div>


                        <div className=" d-flex ms-4 p-2" style={{boxShadow:'1px 1px 4px lightgrey',width:'300px'}}>
                            <div className=" m-3">
                                <img style={{width:'60px'}} src="https://china-southnorth-01.oss-cn-zhangjiakou.aliyuncs.com/intl-social-service/26/143003/20201020/92fea2f7ec3d4f52ae264548cd3adc1e-helphub-1603162869896-rc-upload-1603161626115-12" alt="img" />
                            </div>

                            <div className=" m-2 mt-4">
                                <NavLink style={{ textDecoration: 'none' }}>Survey</NavLink>
                                <p style={{ fontSize: '14px', color: 'grey' }}>Leave Feedback</p>
                            </div>

                        </div>

                    </div>
               
            </Box>

            <Box sx={{ display: 'flex',mt:3 ,bgcolor:'lightgrey',pt:2}}>
                <p style={{ fontSize: '14px', paddingLeft: '40px' }}>Copyright © 1996-2023 Abaris  InterMESH Ltd. All rights reserved.</p>
                <p style={{ fontSize: '14px', position: 'absolute', right: 30 }}>Terms of Use - Privacy Policy - Link to Us</p>
            </Box>
        </>
    )
}

export default SellerHelpCenter
