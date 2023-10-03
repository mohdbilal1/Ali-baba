import { AppBar, Box, Button, List, TextField } from '@mui/material'
import { NavLink } from "react-router-dom";
import imgeLogo from '../assets/mainlogo.png'
import '../stylecss/consumerStyle.css'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';


const ConsumerElectronicsNavbar = () => {

    return (
        <>

            <AppBar
                sx={{
                    textAlign: 'center', p: 2, bgcolor: 'white',
                    position: 'sticky', top: 0,boxShadow:'none',borderBottom:'1.4px solid lightgrey'
                }}
            >
                <Box sx={{ display: 'flex',pb:1 }}>
                    <div className='logo-img-div pt-2 pb-2'>
                        <a href="/">
                            <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                        </a>
                    </div>
                    <Box sx={{ position: 'absolute', right: 30 }}>
                        <List sx={{ display: 'flex', textAlign: 'center' }}>
                            <li className='nav-list-electronic mt-0'>
                                <div className=" d-flex" style={{ border: '2px solid rgb(16, 124, 232)', borderRadius: '20px', height: '40px' }}>
                                    <TextField variant="standard"
                                        InputProps={{
                                            disableUnderline: true,
                                        }}

                                        sx={{ bgcolor: 'white', width: '400px', ml: 3, mt: 0.5 }}
                                        placeholder="What are your looking for?"
                                    />
                                    <Button size='small' variant="contained" sx={{ borderRadius: ' 0 20px 20px 0', ml: 5 }}><SearchOutlinedIcon sx={{ mr: 1 }} />Search</Button>
                                </div>

                            </li>
                           
                            <li className='nav-list-electronic'>
                                <NavLink to='/'>
                                    <div>
                                        <ShoppingCartOutlinedIcon sx={{ fontSize: '25px' }} />
                                        <p>Cart</p>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='nav-list-electronic'>
                                <NavLink to='/'>
                                    <div>
                                    <PermIdentityOutlinedIcon sx={{ fontSize: '25px', mr: 0.3 }} />
                                    <p style={{ fontSize: '16px' }}>Sign in</p>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='nav-list-electronic'>
                                <NavLink to='/'>
                                    <div>
                                        <ChatOutlinedIcon/>
                                        <p>Message</p>
                                    </div>
                                </NavLink>
                            </li>

                            <li className='nav-list-electronic'>
                                <NavLink to='/'>
                                    <div>
                                        <ShoppingBasketOutlinedIcon/>
                                        <p>Order</p>
                                    </div>
                                </NavLink>
                            </li>


                        </List>
                    </Box>

                </Box>


            </AppBar>



        </>
    )
}
export default ConsumerElectronicsNavbar;