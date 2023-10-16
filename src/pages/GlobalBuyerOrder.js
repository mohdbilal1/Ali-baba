import { Box, Button, Divider, List } from "@mui/material"
import { VscAccount } from "react-icons/vsc";
import imgeLogo from '../assets/mainlogo.png'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GlobalBuyerSideBar from "../Components/GlobalBuyerSidebar";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';




const GlobalBuyerOrder = () => {
    return (
        <>
            <Box sx={{ display: 'flex', boxShadow: '1px 1px 6px lightgrey', p: '14px 0', position: 'sticky', top: 0, zIndex: 10, bgcolor: 'white' }}>
                <div className='logo-img-div pt-2 pb-2 d-flex'>
                    <a href="/">
                        <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                    </a>
                    <p style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '20px' }}>My Abaris</p>
                    <p style={{ fontSize: '16px', margin: '4px 2px' }}>Buyer Centra</p>
                    <p style={{ fontSize: '16px', margin: '4px 2px 6px 20px' }}>Help</p>
                    <p style={{ fontSize: '16px', margin: '4px 20px' }}>English-USD </p>

                </div>
                <Box sx={{ position: 'absolute', right: 60 }}>
                    <List sx={{ display: 'flex', textAlign: 'center' }}>

                        <li className=' ms-5'>
                            <div>
                                <VscAccount style={{ fontSize: '22px', margin: '0 8px 3px 0', color: 'grey' }} />
                                <p style={{ fontSize: '14px' }}>My Abaris</p>
                            </div>
                        </li>

                        <li className=' ms-5'>
                            <div>
                                <ChatOutlinedIcon style={{ fontSize: '22px', margin: '0 8px 3px 0', color: 'grey' }} />
                                <p style={{ fontSize: '14px' }}>Message</p>
                            </div>
                        </li>

                        <li className=' ms-5'>
                            <div>
                                <ShoppingBasketOutlinedIcon style={{ fontSize: '22px', margin: '0 8px 3px 0', color: 'grey' }} />
                                <p style={{ fontSize: '14px' }}>Order</p>
                            </div>
                        </li>
                        <li className=' ms-5'>
                            <div>
                                <ShoppingCartOutlinedIcon style={{ fontSize: '22px', margin: '0 8px 3px 0', color: 'grey' }} />
                                <p style={{ fontSize: '14px' }}>Cart</p>
                            </div>
                        </li>
                    </List>
                </Box>

            </Box>


            <Box sx={{ display: 'flex', bgcolor: 'rgb(232, 232, 242)' }}>
                <div className=" col-sm-2" style={{ width: '120px', position: 'fixed', left: 0 }}>
                    <GlobalBuyerSideBar />
                </div>

                <div className=" col-sm-8 d-flex" style={{ position: 'absolute', left: 110 }}>
                    <div className=" col-sm-2">
                        <ul style={{ backgroundColor: '#64b5f6', width: '170px', height: '100vh', position: 'fixed', left: 110, paddingLeft: 13 }}>
                            <li style={{ listStyle: 'none', fontWeight: 'bold', margin: '30px 0 30px 0' }}>Orders</li>
                            <li style={{ listStyle: 'none', margin: '10px 0 4px 0',fontSize:'14px',color:'gray' }}>All Orders</li>
                            <Divider sx={{ height: '1px', border: '1px solid grey', m: '3px 0', width: '140px' }} />
                            <li style={{ listStyle: 'none', margin: '4px 0 10px 0',fontSize:'14px' }}>All Orders</li>
                            <li style={{ listStyle: 'none', margin: '10px 0 10px 0' }}>Reviews</li>
                            <li style={{ listStyle: 'none', margin: '10px 0 10px 0' }}>Refund Requests</li>
                            <li style={{ listStyle: 'none', margin: '10px 0 10px 0' }}>My Coupons</li>
                            <li style={{ listStyle: 'none', margin: '10px 0 10px 0' }}>Tax Information</li>
                        </ul>
                    </div>


                    <div className=" col-sm-6" style={{ width: '1000px', height: '600px' }}>
                        <div className=" d-flex position-relative" style={{ marginLeft: '40px', marginTop: 10, padding: '20px 10px 10px 10px' }}>
                            <div>
                                <h6 style={{ margin: '0 0 0 10px', fontWeight: 'bold' }}>All Orders</h6>
                            </div>
                            <div style={{ position: 'absolute', right: "20px" }}>
                                <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '14px' }}>
                                    Draft Trade Assurance Order</button>
                            </div>
                        </div>

                        <div style={{ marginLeft: '40px', textAlign: 'center', padding: '60px 0 20px 0' }}>
                            <img style={{ width: '200px' }} src="https://img.freepik.com/free-vector/warehouse-staff-wearing-uniform-loading-parcel-box-checking-product-from-warehouse-delivery-logistic-storage-truck-transportation-industry-delivery-logistic-business-delivery_1150-60909.jpg?w=1060&t=st=1696852686~exp=1696853286~hmac=9a603a567b0b2d31e0ccc962426944dc2c24cc00611711e18b83f10bfbc31e89" alt="img" />
                            <p style={{ color: 'grey', margin: '20px 0' }}>No orders yet</p>
                            <p>Abaris.com gives you purchase protection from payment to delivery with</p>
                        </div>

                        <Box sx={{ m: '10px 30px 0 30px', borderRadius: '10px', bgcolor: 'white' }}>
                            <div style={{ borderRadius: '10px', display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                <h4 style={{ padding: '15px 0 0 15px', fontWeight: 'bold' }}>New arrivals</h4>
                                <div>
                                    <Button size="small" variant="outlined" sx={{ borderRadius: '20px', margin: '10px 0 0 0 ' }}>View more <KeyboardArrowRightIcon /></Button>
                                </div>
                            </div>
                            <div className=" d-flex flex-wrap" style={{ margin: '10px', padding: '0 20px' }}>
                                <div style={{ margin: '10px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc01/kf/H2de78907f6014070914500bbb9a254dcV.jpg_250x250.jpg" alt="img" />
                                    <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                    <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>
                                </div>


                                <div style={{ margin: '10px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1d0d7919eee040d7949ae487ca585904O.jpg_220x220.jpg" alt="img" />
                                    <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                    <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                                </div>


                                <div style={{ margin: '10px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf02879cd77a94afc90e91d595c926256D.jpg_220x220.jpg" alt="img" />
                                    <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                    <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                                </div>


                                <div style={{ margin: '10px', padding: '15px', width: '200px', overflow: 'hidden', border: '1px solid lightgrey' }}>
                                    <img style={{ height: '160px', width: '165px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} src="https://s.alicdn.com/@sc04/kf/H1eaf6f756b3e4522b78f837964ca2d47V.jpg_220x220.jpg" alt="img" />
                                    <p size="small" style={{ width: '170px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                                    <p>1.0 piece <span style={{ fontSize: '12px', color: 'grey' }}>(Min. Order)</span></p>

                                </div>

                            </div>

                        </Box>

                        <Box sx={{ display: 'flex', justifyContent:'space-between',mt: 3, bgcolor: 'lightgrey', p: 2,marginLeft:'40px' }}>
                            <p style={{ fontSize: '14px', paddingLeft: '20px' }}>Copyright © 1996-2023 Abaris  InterMESH Ltd. All rights reserved.</p>
                            <p style={{ fontSize: '14px'}}>Terms of Use - Privacy Policy - Link to Us</p>
                        </Box>
                    </div>
                </div>
            </Box >
        </>
    )
}

export default GlobalBuyerOrder
