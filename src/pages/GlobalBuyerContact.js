import { Accordion, AccordionDetails, AccordionSummary, Box, Button, List, TextField, Typography } from "@mui/material"
import { VscAccount } from "react-icons/vsc";
import imgeLogo from '../assets/mainlogo.png'
import { NavLink } from "react-router-dom"
import GlobalBuyerSideBar from "../Components/GlobalBuyerSidebar";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';



const GlobalBuyerContact = () => {
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

                <div className=" col-sm-8" style={{ position: 'absolute', left: 110, display: 'flex' }}>
                    <div className="col-sm-4" style={{ height: '600vh',border:'1px solid lightgrey' }}>
                        <Accordion sx={{ boxShadow: 'none',m:'10px 0 0 40px' }}>
                            <AccordionSummary>
                                <Typography>All contacts - 0 <ExpandMoreIcon /></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <p>All contacts </p>
                                    <p>0</p>
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <p>My contacts </p>
                                    <p>0</p>
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <p>Blocked contacts </p>
                                    <p>0</p>
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <p>Contact Requests </p>
                                    <p>0</p>
                                </div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography>Groups <AddIcon /><ExpandMoreIcon /></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>

                                    </AccordionDetails>
                                </Accordion>
                            </AccordionDetails>
                        </Accordion>

                        <div className=" d-flex" style={{ borderRadius: '20px', margin: '20px', border: '1px solid lightgrey' }}>
                            <TextField variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                }}

                                sx={{ bgcolor: 'white', width: '300px', height: '25px', ml: 3 }}
                                placeholder="Search your Supplier contacts ?"
                            />
                            <Button variant="contained" sx={{ borderRadius: ' 0 20px 20px 0', ml: 2, height: '25px' }}><SearchOutlinedIcon /></Button>
                        </div>
                        <Accordion sx={{ boxShadow: 'none',m:'10px 0 0 30px' }}>
                            <AccordionSummary>
                                <Typography>Sort by contact time<ExpandMoreIcon /></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            </AccordionDetails>
                        </Accordion>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ marginTop: '80px' }}>
                                <p> <ErrorOutlineOutlinedIcon sx={{ fontSize: '32px', ml: '20px' }} /> </p>
                                <p>No Result</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4" style={{backgroundColor:'#eeeeee', width: '1020px' }}>
                        <Box sx={{ display: 'flex',  width: '820px',justifyContent:'center',alignItems:'center',mt:'100px'}}>
                          <img style={{width:'200px'}} src="https://img.alicdn.com/tfs/TB180pnQpXXXXbnXpXXXXXXXXXX-400-400.png" alt="img" />
                          <p>Sorry, we could not find this contacts' information.</p>
                        </Box>
                    </div>
                </div>
            </Box >
        </>


    )
}

export default GlobalBuyerContact
