import { AppBar, Box, Button, List, TextField } from '@mui/material'
import { NavLink } from "react-router-dom";
import imgeLogo from '../assets/mainlogo.png'
import '../stylecss/navbarStyle.css'
import indflag from '../assets/indiaflag.png'
import LanguageIcon from '@mui/icons-material/Language';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';




const Navbar = () => {
    
    return (
        <>

            <AppBar 
                sx={{
                textAlign: 'center', p: 2, bgcolor: 'white',
                position: 'sticky', top: 0 }}
            >
                <Box sx={{ display: 'flex' }}>
                    <div className='logo-img-div pt-2 pb-2'>
                        <a href="/">
                            <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                        </a>
                    </div>
                    <Box sx={{ position: 'absolute', right: 30 }}>
                        <List sx={{ display: 'flex', textAlign: 'center' }}>
                            <li className='nav-list mt-0'>
                                <div className=" d-flex" style={{ padding: '5px', border: '1px solid grey', borderRadius: '20px',height:'40px' }}>
                                    <select style={{
                                        border: 'none', width: '90px',borderRight:'1px solid black',paddingRight:'5px'
                                    }}>
                                        <option selected="Products" value="Products">Products</option>
                                        <option value="Manufacturers">Manufacturers</option>
                                        <option value="Suppliers">Suppliers</option>
                                    </select>
                                    <TextField variant="standard"
                                        InputProps={{
                                            disableUnderline: true,
                                        }} 
                                        size='small'
                                         sx={{ bgcolor: 'white', borderRadius: 'none', border: 'none',pl:1 }} 
                                         placeholder="What are your looking for?" 
                                    />
                                    <Button size='small' variant="contained" sx={{ borderRadius: '20px',ml:5 }}><SearchOutlinedIcon sx={{ mr: 1 }} />Search</Button>
                                </div>

                            </li>
                            <li className='nav-list'>

                                <NavLink to='/' style={{fontSize:'14px'}}>Ship to: <img style={{ width: '25px' }} src={indflag} alt="indflag" /> IN</NavLink>
                            </li>

                            <li className='nav-list'>
                                <NavLink to='/'><LanguageIcon sx={{ fontSize: '25px' }} /></NavLink>
                            </li>
                            <li className='nav-list'>
                                <NavLink to='/'><PermIdentityOutlinedIcon sx={{ fontSize: '25px' }} /></NavLink>
                            </li>

                            <li className='nav-list'>
                                <NavLink to='/' className='signInHover'><Button variant='contained' sx={{ borderRadius: '30px', p: '6px 30px' }}>SignUp</Button></NavLink>
                            </li>


                        </List>
                    </Box>

                </Box>


            </AppBar>



        </>
    )
}
export default Navbar;