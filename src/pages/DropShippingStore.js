import { Box, Button, List } from '@mui/material'
import { NavLink } from "react-router-dom";
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DropshippingSidebar from '../Components/DropshippingSidebar';
import { useState } from 'react';



const DropshippingStore = () => {
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

                    <div>
                        <h3 style={{ margin:'20px' }}>My Store</h3>
                        <h5 style={{ margin:'40px 0 0 60px' }} >Add Store</h5>
                        <p style={{ fontSize: '14px',margin:'5px 0 0 60px' }}>Add your store here first. The store information is used only for managing products and orders, and will not be known by your suppliers.</p>
                    </div>

                    <div className=' d-flex flex-wrap p-3 ms-5 me-5'>
                        <div style={{ width: '300px', margin: '20px' }}>
                            <img style={{ width: '200px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01XE5P2V21KTfiNMFfl_!!6000000006966-2-tps-612-144.png" alt="img" />
                            <Button size='small' variant='contained' sx={{ borderRadius: '20px', padding: '5px 60px', mt: 1 }}>Add Store</Button>
                        </div>
                        <div style={{ width: '300px', margin: '20px' }}>
                            <img style={{ width: '200px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN0191A8ZC1K4skozMMxk_!!6000000001111-2-tps-612-144.png" alt="img" />
                            <Button size='small' variant='contained' sx={{ borderRadius: '20px', padding: '5px 60px', mt: 1 }}>Add Store</Button>

                        </div>
                        <div style={{ width: '300px', margin: '20px' }}>
                            <img style={{ width: '200px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01SgQDSg1v7kyfjT4Z2_!!6000000006126-2-tps-612-144.png" alt="img" />
                            <Button size='small' variant='contained' sx={{ borderRadius: '20px', padding: '5px 60px', mt: 1 }}>Add Store</Button>

                        </div>
                        <div style={{ width: '300px', margin: '20px' }}>
                            <img style={{ width: '200px' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01MVP1iN1ht1H3PX0Mo_!!6000000004334-2-tps-612-144.png" alt="img" />
                            <Button size='small' variant='contained' sx={{ borderRadius: '20px', padding: '5px 60px', mt: 1 }}>Add Store</Button>

                        </div>
                        <div style={{ width: '300px', margin: '20px' }}>
                            <img style={{ width: '200px' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN0106pSg01lud84fgP1S_!!6000000004879-2-tps-612-144.png" alt="img" />
                            <Button size='small' variant='contained' sx={{ borderRadius: '20px', padding: '5px 60px', mt: 1 }}>Add Store</Button>
                        </div>
                    </div>

                    <div  style={{ margin:'40px 0 0 60px' }} >
                        <NavLink style={{textDecoration:'none'}}>If you want to add other stores, please click here to feedback</NavLink>
                    </div>
                </div>
            </Box >
        </>
    )
}

export default DropshippingStore
