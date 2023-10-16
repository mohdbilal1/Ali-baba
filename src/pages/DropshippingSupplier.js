import { Box, Button,List } from '@mui/material'
import { NavLink } from "react-router-dom";
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DropshippingSidebar from '../Components/DropshippingSidebar';
import { useState } from 'react';



const DropshippingSupplier = () => {
    const [state, setState] = useState(false)

    return (
        <>
            <Box sx={{ display: 'flex', boxShadow: '1px 1px 6px lightgrey', p: '6px 0' }}>
                <div className='logo-img-div pt-2 pb-2 d-flex'>
                    <a href="/">
                        <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                    </a>
                    <p style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '20px' }}>Dropshipping</p>
                </div>
                <Box sx={{ position: 'absolute', right: 60 }}>
                    <List sx={{ display: 'flex', textAlign: 'center' }}>
                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Featured partners</NavLink>
                        </li>

                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Getting started</NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}><NotificationsOutlinedIcon style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} /></NavLink>
                        </li>

                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }} className='signInHover'><VscAccount style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} /></NavLink>
                        </li>
                    </List>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', bgcolor: 'rgb(232, 232, 242)' }}>
                <div className=" col-sm-3" style={{ position: 'fixed', left: 0 }}>
                    <DropshippingSidebar setState={setState} state={state} />
                </div>

                <div className={`${state && 'widthMange'} col-sm-8`} style={{ position: 'absolute', left: 100, width: '1150px', padding: '20px 0 50px 0', backgroundColor: '#eeeeee' }}>
                <div className=' text-center'>
                        <img style={{ width: '300px' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN01lPV2BK21YDYfGZq8A_!!6000000006996-2-tps-800-814.png" alt="img" />
                        <h5>You haven't added any supplier yet.</h5>
                        <p style={{ fontSize: '14px' }}>There is no product in your Import List, go to Search Products to add new products.</p>
                        <Button size='small' variant='contained' sx={{ borderRadius: '20px',padding:'6px 30px' }}>Add To My Supplier</Button>
                    </div>
                </div>
            </Box >
        </>
    )
}

export default DropshippingSupplier
