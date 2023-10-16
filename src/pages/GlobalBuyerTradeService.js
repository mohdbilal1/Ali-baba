import { Box, Button, List } from '@mui/material'
import { NavLink } from "react-router-dom";
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import GlobalBuyerSideBar from '../Components/GlobalBuyerSidebar';
import '../stylecss/globalBuyerTrade.css'
import img1 from '../assets/iconn.png'
import img2 from '../assets/aplyicon.png'
import img3 from '../assets/imgicon.png'
import img4 from '../assets/negociate.png'
import img5 from '../assets/merchnt.png'
import img6 from '../assets/paymnticon.png'
import img7 from '../assets/prodct.png'
import img8 from '../assets/buyericon.png'


const GlobalBuyerTradeService = () => {
    return (
        <>
            <Box sx={{ display: 'flex', boxShadow: '1px 1px 6px lightgrey', p: '6px 0' }}>
                <div className='logo-img-div pt-2 pb-2 d-flex'>
                    <a href="/">
                        <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                    </a>
                    <p style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '20px' }}>My Abaris</p>
                </div>
                <Box sx={{ position: 'absolute', right: 60 }}>
                    <List sx={{ display: 'flex', textAlign: 'center' }}>
                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Trade</NavLink>
                        </li>

                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Development</NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Account</NavLink>
                        </li>

                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }} className='signInHover'><VscAccount style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />My Account</NavLink>
                        </li>
                    </List>
                </Box>

            </Box>

            <Box sx={{ display: 'flex', bgcolor: 'rgb(232, 232, 242)' }}>
                <div className=" col-sm-2" style={{ width: '120px', position: 'fixed', left: 0 }}>
                    <GlobalBuyerSideBar />
                </div>

                <div className=" col-sm-8" style={{ position: 'absolute', left: 110, width: '1160px' }}>
                    <Box className='bg-img'>
                        <div className=' d-flex' style={{ backgroundColor: 'white', width: '600px', padding: '0 30px', borderRadius: '10px 10px 0 0' }}>
                            <p style={{ fontWeight: 'bold', fontSize: '42px' }}>Payment Terms:</p>
                            <p style={{ fontSize: '40px', marginTop: '4px' }}>30/60 Days</p>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '10px 30px', borderRadius: '0 10px 10px 0' }}>
                            <p><span style={{ fontWeight: 'bold' }}>Payment Terms: 30/60 Days,</span> also known as <span style={{ fontWeight: 'bold' }}>Open Account (OA)</span> by suppliers, allows eligible buyers to purchase on credit through a flexible payment date. You can not only improve your business’s cash flow by having 30 or 60 days after shipment to settle your order balance, but you can also enjoy this service for free without interest or any extra costs.</p>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '20px 0 30px 30px', borderRadius: '0 0 10px 10px' }}>
                            <Button variant='contained' sx={{ borderRadius: '20px', p: '6px 30px' }}>Apply Now</Button>
                            <Button variant='outlined' sx={{ borderRadius: '20px', p: '6px 30px', ml: 4 }}>How to Use </Button>
                        </div>
                    </Box>

                    <Box className='bg-img2'>
                        <ul style={{ color: 'white', fontSize: '20px' }}>
                            <li>Buyers should meet the following conditions to apply: ① Your business has been legally registered for at least 2 years and is in good standing;② You have spent at least US $2,000 on Abaris.com within the last 12 months.</li>
                            <li style={{ marginTop: '10px' }}>Eligible buyer can receive a maximum initial credit line of US $50,000</li>
                        </ul>
                    </Box>

                    <Box >
                        <h4 className=' text-center mt-5 mb-5 fw-bold'>Key benefits of Abaris.com Payment Terms</h4>
                        <div className=' d-flex'>
                            <div className='m-4 text-center'>
                                <img style={{width:'100px'}} src="https://img.alicdn.com/imgextra/i3/O1CN01XNUeO21TQiA0iK6CC_!!6000000002377-2-tps-238-216.png" alt="img" />
                                <h6>Free service</h6>
                                <p style={{fontSize:'14px'}}>No fees or hidden charges to activate Payment Terms service</p>
                            </div>
                            <div className='m-4 text-center'>
                                <img style={{width:'100px'}} src="https://img.alicdn.com/imgextra/i4/O1CN01lUMWpK1SZ7p8xvWQG_!!6000000002260-2-tps-238-216.png" alt="img" />
                                <h6>Improved cash flow</h6>
                                <p style={{fontSize:'14px'}}>Improve your cash flow by paying for products later</p>
                            </div>
                            <div className='m-4 text-center'>
                                <img style={{width:'100px'}} src={img1} alt="img" />
                                <h6>Clear reconciliation</h6>
                                <p style={{fontSize:'14px'}}>Easy management and tracking of spending and credit</p>
                            </div>
                            <div className='m-4 text-center'>
                                <img style={{width:'100px'}} src="https://img.alicdn.com/imgextra/i3/O1CN01hCfPSf1CKRGn384EG_!!6000000000062-2-tps-238-216.png" alt="img" />
                                <h6>Fast ordering</h6>
                                <p style={{fontSize:'14px'}}>Get Payment Terms orders quickly using available credit</p>
                            </div>

                        </div>
                    </Box>

                    <Box>
                        <h4 className=' text-center mt-5 mb-5 fw-bold'>Product flow</h4>
                        <div className=' d-flex flex-wrap ms-5'>
                            <div style={{width:'200px'}} className='m-4 text-center'>
                                <img style={{width:'70px',margin:'10px 0 0 20px'}} src={img2} alt="img" />
                                <h6>Apply </h6>
                            </div>
                            <div style={{width:'200px'}} className='m-4 text-center'>
                                <img style={{width:'70px',margin:'10px 0 0 20px'}} src={img3} alt="img" />
                                <h6>Credit reward</h6>
                            </div>
                            <div style={{width:'200px'}} className='m-4 text-center'>
                                <img style={{width:'70px',margin:'10px 0 0 20px'}} src={img4} alt="img" />
                                <h6>Negotiate with merchant</h6>
                            </div>
                            <div style={{width:'200px'}} className='m-4 text-center'>
                                <img style={{width:'70px',margin:'10px 0 0 20px'}} src={img5} alt="img" />
                                <h6>Merchant starts order</h6>
                            </div>

                            <div style={{width:'200px'}} className='m-4 text-center'>
                                <img style={{width:'70px',margin:'10px 0 0 20px'}} src={img6} alt="img" />
                                <h6>Buyer makes remaining payment</h6>
                            </div>
                            <div style={{width:'200px'}} className='m-4 text-center'>
                                <img style={{width:'70px',margin:'10px 0 0 20px'}} src={img7} alt="img" />
                                <h6>Product shipped and Payment Terms start</h6>
                            </div>
                            <div style={{width:'200px'}} className='m-4 text-center'>
                                <img style={{width:'70px',margin:'10px 0 0 20px'}} src={img8} alt="img" />
                                <h6>Buyer makes initial payment</h6>
                            </div>

                        </div>
                    </Box>

                </div>
            </Box >



        </>
    )
}

export default GlobalBuyerTradeService
