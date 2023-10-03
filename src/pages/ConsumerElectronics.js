import ConsumerElectronicsNavbar from "../Components/ConsumerElectronicsNavbar"
import { Box, Card, CardMedia, List, Typography } from '@mui/material'
import { NavLink } from "react-router-dom";
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import indflag from '../assets/indiaflag.png'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../stylecss/consumerStyle.css'


const ConsumerElectronics = () => {
    return (
        <>
            <ConsumerElectronicsNavbar />

            <Box sx={{ display: 'flex' }}>
                <div className='logo-img-div pt-2 pb-2'>
                    <p style={{ borderRight: '2px solid lightgrey', paddingRight: '10px' }}><ListOutlinedIcon sx={{ mr: 0.2, mb: 0.4 }} />Categories</p>
                </div>
                <Box sx={{ position: 'absolute', right: 30 }}>
                    <List sx={{ display: 'flex', textAlign: 'center' }}>

                        <li className='nav-list-electronic'>
                            <NavLink to='/'>
                                <p style={{ borderRight: '2px solid lightgrey', paddingRight: '10px' }}><PhoneIphoneOutlinedIcon />Get the app</p>
                            </NavLink>
                        </li>
                        <li className='nav-list-electronic'>
                            <NavLink to='/'>
                                <p style={{ borderRight: '2px solid lightgrey', paddingRight: '10px' }}>English-USD</p>
                            </NavLink>
                        </li>
                        <li className='nav-list-electronic'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>
                                Ship to: <img style={{ width: '25px' }} src={indflag} alt="indflag" /> IN
                            </NavLink>
                        </li>
                    </List>
                </Box>

            </Box>

            <Box className='consumer-electronics-div'>
                <h1>Consumer Electronics</h1>
                <p>Discover new and trending products</p>
            </Box>

            <Box sx={{ m: '-100px 50px 0 50px', boxShadow: '1px 1px 5px grey', borderRadius: '10px', bgcolor: 'white', height: '220px' }}>
                <h4 style={{ padding: '15px 0 0 15px', fontWeight: 'bold' }}>Source by category</h4>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={7}
                    spaceBetween={1}
                >
                    <SwiperSlide>
                        <div style={{ margin: '20px 60px' }}>
                            <img style={{ width: '80px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc02/kf/HTB1NWZvOb2pK1RjSZFsq6yNlXXao.jpg_120x120xz.jpg" alt="img" />
                            <p style={{ width: '110px', height: '80px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Computer Hardware & Software</p>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div style={{ margin: '20px 60px' }}>
                            <img style={{ width: '80px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc02/kf/Heda14cf1140a4fae894375886d962ddcD.jpg_120x120xz.jpg" alt="img" />
                            <p style={{ width: '110px', height: '80px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Speakers & Accessories</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ margin: '20px 60px' }}>
                            <img style={{ width: '80px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc02/kf/HTB1Xl3BOXzqK1RjSZFCq6zbxVXal.jpg_120x120xz.jpg" alt="img" />
                            <p style={{ width: '110px', height: '80px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Camera, Photo & Accessories</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ margin: '20px 60px' }}>
                            <img style={{ width: '80px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc02/kf/HTB1RyEAOcbpK1RjSZFyq6x_qFXaP.jpg_120x120xz.jpg" alt="img" />
                            <p style={{ width: '110px', height: '80px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Television, Home Audio, Video & Accessories</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ margin: '20px 60px' }}>
                            <img style={{ width: '80px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc02/kf/Hdfad9af4cb384b1091420222b53a063dM.jpg_120x120xz.jpg" alt="img" />
                            <p style={{ width: '110px', height: '80px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Cables & Commonly Used Accessories</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ margin: '20px 60px' }}>
                            <img style={{ width: '80px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc02/kf/HTB1pa7vOb2pK1RjSZFsq6yNlXXat.jpg_120x120xz.jpg" alt="img" />
                            <p style={{ width: '110px', height: '80px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Projectors & Presentation Equipments</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ margin: '20px 60px' }}>
                            <img style={{ width: '80px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc02/kf/H8fa6a4f8aae9423e9b391cd07a814f153.jpg_120x120xz.jpg" alt="img" />
                            <p style={{ width: '110px', height: '80px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Used Electronics</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ margin: '20px 60px' }}>
                            <img style={{ width: '80px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc02/kf/HTB1QfoWOhnaK1RjSZFBq6AW7VXaE.jpg_120x120xz.jpg" alt="img" />
                            <p style={{ width: '110px', height: '80px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Other Consumer Electronics</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ margin: '20px 60px' }}>
                            <img style={{ width: '80px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc02/kf/Hbc55f8f00bdd41db91cca2961fd30c49l.jpg_120x120xz.jpg" alt="img" />
                            <p style={{ width: '110px', height: '80px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Mobile Phone & Accessories</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Box>

            <Box sx={{ m: 2, mt: 4 }}>
                <Typography sx={{ fontSize: '24px', fontWeight: 'bolder',m:'20px 40px 10px 40px' }}>Source by store type</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap',ml:3 }}>
                    <Card className="cardd-store"  sx={{ width: '180px', p: 2, m: 1 }}>
                        <CardMedia
                            sx={{ height: '155px', width: '155px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/Hfff3f7f9236b42e5afb05f010a2477d22.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <NavLink className="fw-bold" style={{color:'black',textDecoration:'none'}} size="small">Electronics repair</NavLink>
                    </Card>
                    <Card className="cardd-store"  sx={{ width: '180px', p: 2, m: 1 }}>
                        <CardMedia
                            sx={{ height: '155px', width: '155px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H60d491fbfe214e67851545fa38fda01fj.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <NavLink className="fw-bold" style={{color:'black',textDecoration:'none'}} size="small">Computers & Accessories</NavLink>
                    </Card>
                    <Card className="cardd-store"  sx={{ width: '180px', p: 2, m: 1 }}>
                        <CardMedia
                            sx={{ height: '155px', width: '155px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H06eec1d41d90486381e6dab38573a60ac.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <NavLink className="fw-bold" style={{color:'black',textDecoration:'none'}} size="small">Video & photography</NavLink>
                    </Card>
                    <Card className="cardd-store"  sx={{ width: '180px', p: 2, m: 1 }}>
                        <CardMedia
                            sx={{ height: '155px', width: '155px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H4a6249f830104db2b668a7e77b801f620.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <NavLink className="fw-bold" style={{color:'black',textDecoration:'none'}} size="small">Office supplies</NavLink>
                    </Card>
                    <Card className="cardd-store"  sx={{ width: '180px', p: 2, m: 1 }}>
                        <CardMedia
                            sx={{ height: '155px', width: '155px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/Hc2d711cf419542f0be0bd1a9ff9da64bl.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <NavLink className="fw-bold" style={{color:'black',textDecoration:'none'}} size="small">Products with Easy Return</NavLink>
                    </Card>
                    <Card className="cardd-store"  sx={{ width: '180px', p: 2, m: 1 }}>
                        <CardMedia
                            sx={{ height: '155px', width: '155px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/Hd1535f38142242bd8997b7d3a3fd7afdb.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <NavLink className="fw-bold" style={{color:'black',textDecoration:'none'}} size="small">Audio-visual</NavLink>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default ConsumerElectronics
