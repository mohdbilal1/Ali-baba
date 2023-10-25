import { Box, Button, List } from "@mui/material"
import { VscAccount } from "react-icons/vsc";
import imgeLogo from '../assets/mainlogo.png'
import SellarPgSidebar from "../Components/SellerPgSidebar"
import imgg2 from '../assets/visitor.png'
import { NavLink } from "react-router-dom";
import campaignImg from '../assets/campaignimg.png'


const SellerCampaigns = () => {
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
                    <div className=" d-flex m-3" style={{ border: '1px solid lightgrey', borderRadius: '3px', height: '130px' }}>
                        <img style={{ width: '150px', height: '130px', objectFit: 'cover' }} src={imgg2} alt="img" />
                        <div style={{ width: '540px', margin: '30px ' }}>
                            <h6>Want to use Marketing Center?</h6>
                            <p>Upgrade your membership to increase awareness and sales with targeted ads.</p>
                        </div>
                        <Button variant="outlined" sx={{ height: '40px', marginTop: '50px', marginLeft: '30px' }}>Upgrade now </Button>
                    </div>

                    <div className=" d-flex mb-5">
                        <div style={{width:'500px',margin:'30px',fontSize:'14px'}}>
                            <h4 style={{margin:'0 0 30px 0'}}>Increase exposure and conversions with Marketing tools</h4>
                            <p>Find buyers who are searching for products like yours and market to them directly. You can target potential customers based on geography, click history, and more – and you only pay per click. While results vary, sellers see an average traffic increase of 30-50%.</p>  
                            <p>If you’re new to Marketing Center, Smart Marketing is a tool that does the work for you using AI-based site data, as well as intelligent bidding based on the market.</p> 
                            <Button variant="outlined" sx={{ height: '40px', marginTop: '50px', marginLeft: '30px' }}>Chat with a consultant </Button>
                        </div>
                        <div style={{marginTop:'60px'}}>
                            <img style={{width:'400px'}} src={campaignImg} alt="img" />
                        </div>

                    </div>
                </div>
            </Box>

    </>
  )
}

export default SellerCampaigns
