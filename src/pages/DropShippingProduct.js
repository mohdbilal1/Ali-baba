import { Box, Card, CardMedia, List, Typography } from '@mui/material'
import { NavLink } from "react-router-dom";
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DropshippingSidebar from '../Components/DropshippingSidebar';
import { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const DropShippingProduct = () => {
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
                <div className={`${state && 'widthMange'} col-sm-8`} style={{ position: 'absolute', left: 100, width: '1150px', padding: '20px 0' }}>
                    <div className=' text-center'>
                        <img style={{ width: '300px' }} src="https://s.alicdn.com/@img/imgextra/i2/O1CN01HN9MJo28YrQRQGj35_!!6000000007945-2-tps-800-814.png" alt="img" />
                        <h5>Please add your store</h5>
                        <p style={{ fontSize: '14px' }}>Add your store before you can push products. Click the store icon to add your store right now.</p>
                    </div>

                    <div className=' d-flex p-3 justify-content-evenly ms-5 me-5'>
                        <div>
                            <img style={{ width: '130px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01XE5P2V21KTfiNMFfl_!!6000000006966-2-tps-612-144.png" alt="img" />
                        </div>
                        <div>
                            <img style={{ width: '130px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN0191A8ZC1K4skozMMxk_!!6000000001111-2-tps-612-144.png" alt="img" />
                        </div>
                        <div>
                            <img style={{ width: '130px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01SgQDSg1v7kyfjT4Z2_!!6000000006126-2-tps-612-144.png" alt="img" />
                        </div>
                        <div>
                            <img style={{ width: '130px' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01MVP1iN1ht1H3PX0Mo_!!6000000004334-2-tps-612-144.png" alt="img" />
                        </div>
                        <div>
                            <p style={{ marginTop: '5px', color: 'blue' }}>Connect to other stores<ExpandMoreIcon/></p>
                        </div>

                    </div>

                    <Box sx={{ mt: 4, ml: 2, bgcolor: 'white', borderRadius: '10px',boxShadow:'1px 1px 4px lightgrey' }}>
                        <div className=' d-flex justify-content-between'>
                        <Typography sx={{ fontSize: '18px', fontWeight: 'bolder', m: '20px 40px 10px 20px' }}>Top Ranking Products</Typography>
                            <p style={{margin:'14px 20px 0 0'}}><KeyboardArrowRightIcon/></p>
                        </div>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 3 }}>

                            <Card className="cardd-store" sx={{ width: '130px', height: '220px', m: '10px',textAlign:'center',boxShadow:'none' }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://sc04.alicdn.com/kf/Hc20f4890ab88426e8a966947904336e3B.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black',fontSize:'13px', textDecoration: 'none', padding: '3px 10px' }} size="small">Shoes & Accessories</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '220px', m: '10px',textAlign:'center',boxShadow:'none' }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/H85ef15b27914471da3852e6fdd125088U.jpg_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black',fontSize:'13px', textDecoration: 'none', padding: '3px 10px' }} size="small">Apparel & Accessories</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '220px', m: '10px',textAlign:'center',boxShadow:'none' }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://sc04.alicdn.com/kf/Hb8841de9644047b2ba4c0016d0adf467k.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black',fontSize:'13px', textDecoration: 'none', padding: '3px 10px' }} size="small">Consumer Electronics</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '220px', m: '10px',textAlign:'center',boxShadow:'none' }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://sc04.alicdn.com/kf/H6ab3b4b4337d4abdb06973e4520372e4h.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black',fontSize:'13px', textDecoration: 'none', padding: '3px 10px' }} size="small">Jewelry, Eyewear</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '220px', m: '10px',textAlign:'center',boxShadow:'none' }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://sc04.alicdn.com/kf/H5e1737676afe412d85fbf4531bc80dd1j.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black',fontSize:'13px', textDecoration: 'none', padding: '3px 10px' }} size="small">Home & Garden</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '220px', m: '10px',textAlign:'center',boxShadow:'none' }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://sc04.alicdn.com/kf/H6331841ce47e4eaa9a7b5562c40412776.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black',fontSize:'13px', textDecoration: 'none', padding: '3px 10px' }} size="small">Beauty</NavLink>
                            </Card>

                            <Card className="cardd-store" sx={{ width: '130px', height: '220px', m: '10px',textAlign:'center',boxShadow:'none' }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/A2d330f92836541f5b5fa87c799dc05cdA.jpg_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black',fontSize:'13px', textDecoration: 'none', padding: '3px 10px' }} size="small">Laptop Accessories</NavLink>
                            </Card>

                        </Box>
                    </Box>

                </div>
            </Box >
    </>
  )
}

export default DropShippingProduct
