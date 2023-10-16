import { Box, Button, List } from "@mui/material"
import { VscAccount } from "react-icons/vsc";
import imgeLogo from '../assets/mainlogo.png'
import { NavLink } from "react-router-dom"
import GlobalBuyerSideBar from "../Components/GlobalBuyerSidebar";
import '../stylecss/globalBuyerLogisticStyle.css'
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


function globalBuyerLogistic() {
    return (
        <>
            <Box sx={{ display: 'flex', boxShadow: '1px 1px 6px lightgrey', p: '6px 0', position: 'sticky', top: 0, zIndex: 10, bgcolor: 'white' }}>
                <div className='logo-img-div pt-2 pb-2 d-flex'>
                    <a href="/">
                        <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                    </a>
                    <p style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '20px' }}>My Abaris</p>
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
                <div className=" col-sm-2" style={{ width: '120px', position: 'fixed', left: 0 }}>
                    <GlobalBuyerSideBar />
                </div>

                <div className=" col-sm-8" style={{ position: 'absolute', left: 110 }}>
                    <Box className='bg-imge' sx={{ width: '1160px', padding: '6px 10px', justifyContent: 'center' }}>
                        <h3 className=" text-white">Find customizable logistics solutions from verified service providers</h3>
                        <div  className=" d-flex justify-content-end  mt-5 me-4">
                            <p style={{ color: 'white', marginTop: '15px', fontWeight: 'bold' }}><TuneOutlinedIcon sx={{ mr: 1 }} />Refine quotes with more filters</p>
                        </div>
                        <div>
                            <Tabs>
                                <TabsList style={{ margin: '0 30px 30px 20px', borderBottom: '1px solid white' }}>
                                    <Tab className='tabs' value={0}>To door </Tab>
                                    <Tab className='tabs' value={1}>To port (FCL) </Tab>
                                </TabsList>
                                <TabPanel value={0}>
                                    <div className="bg-div d-flex">
                                        <div style={{ width: '300px', borderRight: '1px solid lightgrey', marginLeft: '5px' }}>
                                            <p style={{ fontWeight: 'bold', margin: '4px' }}>Origin <CheckCircleOutlineIcon sx={{fontSize:'16px',color:'green',mb:0.3}}/></p>
                                            <div className=" d-flex">
                                                <img style={{ height: '20px', marginLeft: '5px', marginRight: '5px' }} src="https://s.alicdn.com/@u/mobile/g/common/flags/1.0.0/assets/cn.png" alt="img" />
                                                <p>China</p>
                                            </div>
                                        </div>
                                        <div style={{ width: '300px', borderRight: '1px solid lightgrey', marginLeft: '5px' }}>
                                            <p style={{ fontWeight: 'bold', margin: '4px' }}>Destination  <CheckCircleOutlineIcon sx={{fontSize:'16px',color:'green',mb:0.3}}/></p>
                                            <div className=" d-flex">
                                                <img style={{ height: '20px', marginLeft: '5px', marginRight: '5px' }} src="https://s.alicdn.com/@u/mobile/g/common/flags/1.0.0/assets/in.png" alt="img" />
                                                <p>India</p>
                                            </div>
                                        </div>
                                        <div style={{ width: '300px', borderRight: '1px solid lightgrey', marginLeft: '5px' }}>
                                            <p style={{ fontWeight: 'bold', margin: '4px' }}>Expected transit time</p>
                                            <p style={{ margin: '4px', color: 'grey' }}>Select a timeFrame</p>
                                        </div>
                                        <div style={{ width: '300px', marginLeft: '35px' }}>
                                            <Button variant="contained" sx={{ padding: '15px 20px', m: '8px 0 8px 50px',borderRadius:'10px' }}>search quotes</Button>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={1} >
                                <div className="bg-div d-flex">
                                        <div style={{ width: '300px', borderRight: '1px solid lightgrey', marginLeft: '5px' }}>
                                            <p style={{ fontWeight: 'bold', margin: '4px' }}>Origin</p>
                                            <p style={{ margin: '4px', color: 'grey' }}>Where are you shipping from?</p>
                                           
                                        </div>
                                        <div style={{ width: '300px', borderRight: '1px solid lightgrey', marginLeft: '5px' }}>
                                            <p style={{ fontWeight: 'bold', margin: '4px' }}>Destination </p>
                                            <p style={{ margin: '4px', color: 'grey' }}>Where are you shipping from?</p>
                                            
                                        </div>
                                        <div style={{ width: '300px', borderRight: '1px solid lightgrey', marginLeft: '5px' }}>
                                            <p style={{ fontWeight: 'bold', margin: '4px' }}>Container type & quantity</p>
                                            <p style={{ margin: '4px', color: 'grey' }}>Enter container details</p>
                                        </div>
                                        <div style={{ width: '300px', marginLeft: '35px' }}>
                                            <Button variant="contained" sx={{ padding: '15px 20px', m: '8px 0 8px 50px',borderRadius:'10px' }}>search quotes</Button>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </Box>

                    <Box sx={{textAlign:'center',margin:'100px 0 0 30px', width:1000,height:500 }}>
                        <img style={{width:'150px'}} src="https://s.alicdn.com/@img/imgextra/i1/O1CN013G2KDP1X2DaVERvMt_!!6000000002865-55-tps-125-125.svg?quality=close" alt="img" />
                        <p>No results found</p>
                        <p style={{color:'grey'}}>We cannot find any results that match your search. Please try again with different search terms.</p>
                    </Box>
                </div>
            </Box >
        </>
    )
}

export default globalBuyerLogistic
