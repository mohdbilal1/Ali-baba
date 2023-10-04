import ConsumerElectronicsNavbar from "../Components/ConsumerElectronicsNavbar"
import { Box, Card, CardMedia, List, Typography } from '@mui/material'
import { NavLink, useNavigate } from "react-router-dom";
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import indflag from '../assets/indiaflag.png'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../stylecss/consumerStyle.css'


const ConsumerElectronics = () => {

    const navigate=useNavigate();
    const headphoneDetails=()=>{
        navigate('/consumer-electronics/headphone-pge')
    }
    return (
        <>
            <ConsumerElectronicsNavbar />

            <Box className='cons-elec-main-div'>
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
                    <Typography sx={{ fontSize: '24px', fontWeight: 'bolder', m: '20px 40px 10px 40px' }}>Source by store type</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 3 }}>
                        <Card className="cardd-store" sx={{ width: '180px', p: 2, m: 1 }}>
                            <CardMedia
                                sx={{ height: '155px', width: '155px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                image='https://s.alicdn.com/@sc04/kf/Hfff3f7f9236b42e5afb05f010a2477d22.jpg_250x250xz.jpg'
                                title="logo-design"
                            />
                            <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none' }} size="small">Electronics repair</NavLink>
                        </Card>
                        <Card className="cardd-store" sx={{ width: '180px', p: 2, m: 1 }}>
                            <CardMedia
                                sx={{ height: '155px', width: '155px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                image='https://s.alicdn.com/@sc04/kf/H60d491fbfe214e67851545fa38fda01fj.jpg_250x250xz.jpg'
                                title="logo-design"
                            />
                            <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none' }} size="small">Computers & Accessories</NavLink>
                        </Card>
                        <Card className="cardd-store" sx={{ width: '180px', p: 2, m: 1 }}>
                            <CardMedia
                                sx={{ height: '155px', width: '155px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                image='https://s.alicdn.com/@sc04/kf/H06eec1d41d90486381e6dab38573a60ac.jpg_250x250xz.jpg'
                                title="logo-design"
                            />
                            <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none' }} size="small">Video & photography</NavLink>
                        </Card>
                        <Card className="cardd-store" sx={{ width: '180px', p: 2, m: 1 }}>
                            <CardMedia
                                sx={{ height: '155px', width: '155px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                image='https://s.alicdn.com/@sc04/kf/H4a6249f830104db2b668a7e77b801f620.jpg_250x250xz.jpg'
                                title="logo-design"
                            />
                            <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none' }} size="small">Office supplies</NavLink>
                        </Card>
                        <Card className="cardd-store" sx={{ width: '180px', p: 2, m: 1 }}>
                            <CardMedia
                                sx={{ height: '155px', width: '155px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                image='https://s.alicdn.com/@sc04/kf/Hc2d711cf419542f0be0bd1a9ff9da64bl.jpg_250x250xz.jpg'
                                title="logo-design"
                            />
                            <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none' }} size="small">Products with Easy Return</NavLink>
                        </Card>
                        <Card className="cardd-store" sx={{ width: '180px', p: 2, m: 1 }}>
                            <CardMedia
                                sx={{ height: '155px', width: '155px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                image='https://s.alicdn.com/@sc04/kf/Hd1535f38142242bd8997b7d3a3fd7afdb.jpg_250x250xz.jpg'
                                title="logo-design"
                            />
                            <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none' }} size="small">Audio-visual</NavLink>
                        </Card>
                    </Box>
                </Box>

                <div className=" d-flex flex-wrap m-3">
                    <Box className=' col-sm-6' sx={{ mt: 3, ml: 3, bgcolor: 'white', width: '570px', borderRadius: '20px' }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: 'bolder', m: '20px 40px 10px 10px' }}>Verified Pro Supplier</Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 2 }}>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/H046cb0f845f14ebfb5fed0fa547ccd9fE.png_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$167.00</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/H431add27d091450180374c4208b7b8c0N.jpg_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$11.70</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/H8a5d9eea58d348deb7cc49482e85b855v.jpg_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$47.90</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/H2fbcd7f2708d44d0909a7375d0377da2w.png_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$1.70</NavLink>
                            </Card>
                        </Box>
                    </Box>

                    <Box className=' col-sm-6' sx={{ mt: 3, bgcolor: 'white', ml: 3, width: '570px', borderRadius: '20px' }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: 'bolder', m: '20px 40px 10px 10px' }}>Up to 90% off samples</Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 0.4 }}>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/Hbff7f173aff84e338cfd5465ff62e5cap.jpg_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$0.50</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/H38e62b947eee49eea6d0e58769103248U.png_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$0.20</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/A2d330f92836541f5b5fa87c799dc05cdA.jpg_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$10.50</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/H58766a0d2b05454ca158c71d197eef73t.png_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$12.50</NavLink>
                            </Card>
                        </Box>
                    </Box>

                    <Box className=' col-sm-6' sx={{ mt: 3, bgcolor: 'white', ml: 3, width: '570px', borderRadius: '20px' }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: 'bolder', m: '20px 40px 10px 10px' }}>Verified suppliers</Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 0.4 }}>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/Hcbe19a98ed3f48e98fee6e24ef6a3d4dy.jpg_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$124.41</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/Ha88b00ad673746f7b5e7dcf377b630e68.jpg_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$0.41</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/H70f7805290a44e89b10815c403702ee0g.jpg_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$14.41</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/Ha693ed8e39fb458480eeaf0af939ead36.jpg_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$1.41</NavLink>
                            </Card>
                        </Box>
                    </Box>

                    <Box className=' col-sm-6' sx={{ mt: 3, bgcolor: 'white', ml: 3, width: '570px', borderRadius: '20px' }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: 'bolder', m: '20px 40px 10px 10px' }}>For E-commerce Merchants</Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 0.4 }}>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/Hcdf43279384240c09b6569259234250ao.jpg_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$22.00</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/Hd45c0628863d489dab039dd93e55605dZ.png_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$8.30</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/Had35458810134b83a3e0578a5a65a7e66.png_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$1.01</NavLink>
                            </Card>
                            <Card className="cardd-store" sx={{ width: '130px', height: '190px', m: 0.4 }}>
                                <CardMedia
                                    sx={{ height: '130px', width: '130px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                                    image='https://s.alicdn.com/@sc04/kf/HTB1dbVNzL9TBuNjy1zb760pepXaA.png_250x250xz.jpg'
                                    title="logo-design"
                                />
                                <NavLink className="fw-bold" style={{ color: 'black', textDecoration: 'none', padding: '3px 30px' }} size="small">US$220.00</NavLink>
                            </Card>
                        </Box>
                    </Box>
                </div>

                <Box>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bolder', m: '30px 40px 10px 50px' }}>Just for you</Typography>
                    <Swiper
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        style={{ width: '1170px', borderRadius: '10px' }}
                    >
                        <SwiperSlide>
                            <div style={{ padding: '10px 0' }}>
                                <img style={{ borderRadius: '10px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN011Yjezu1ss4Ip88Xu2_!!6000000005821-0-tps-1200-200.jpg" alt="img" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div style={{ padding: '10px 0' }}>
                                <img style={{ borderRadius: '10px' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01waiPhg28xaxO5AqOv_!!6000000007999-0-tps-1200-200.jpg" alt="img" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div style={{ padding: '10px 0' }}>
                                <img style={{ borderRadius: '10px' }} src="https://s.alicdn.com/@img/imgextra/i2/O1CN01KbdKJp1RIoDl73MNg_!!6000000002089-0-tps-1200-200.jpg" alt="img" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div style={{ padding: '10px 0' }}>
                                <img style={{ borderRadius: '10px' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN01tenQWS1hpodIrhBuA_!!6000000004327-0-tps-1200-200.jpg" alt="img" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div style={{ padding: '10px 0' }}>
                                <img style={{ borderRadius: '10px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01rtcMiE1bu2WygwpEE_!!6000000003524-2-tps-1200-200.png" alt="img" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div style={{ padding: '10px 0' }}>
                                <img style={{ borderRadius: '10px' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN013CCySv1nh0iJPNJaz_!!6000000005120-2-tps-1920-220.png" alt="img" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap',ml:2.4 }}>
                    <Card onClick={headphoneDetails} sx={{ width: '230px', height: '355px', p: 2, m: 1,cursor:'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H6d9b6040abaa4b69a72d8db053a8ab4cj.jpeg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.18</p>
                        <p>1.0 piece (MOQ)</p>
                    </Card>

                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1,cursor:'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H6b890f67467d4d22af4cf62134b3c38dA.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.90 - US$21.4</p>
                        <p>5 pieces (MOQ)</p>
                    </Card>

                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1,cursor:'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H433071eb841e4db99ebdf199fe3e5afdW.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>US$2.90 - US$21.4</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>

                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1,cursor:'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/Hba1e31a22fd04b5186a9c798f624e038d.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>US$2.90 - US$21.4</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>

                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1,cursor:'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/He763694b14484907bb90f90b453f433dI.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>US$2.90 - US$21.4</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>

                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1,cursor:'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H7136eaef84894c818dfca619dc4bb0e5P.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>US$2.90 - US$21.4</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>

                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1,cursor:'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/Hb1a32b2d7f72442e91e78f5243e9b168t.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>US$2.90 - US$21.4</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>

                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1,cursor:'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/Hcc9705eb9d474732911f3a481637457bJ.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>US$2.90 - US$21.4</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>

                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1,cursor:'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/Hca2bf58c9ec44977be7cff518f405b7fZ.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>US$2.90 - US$21.4</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>


                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1,cursor:'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/U3ed4130db7c74aed959a6bf6bc115b8cB.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>US$2.90 - US$21.4</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>


                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1,cursor:'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H4427f804e7ae4c24818624adb9518d00Z.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>US$2.90 - US$21.4</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>


                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1,cursor:'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H0809fba050464e72b0e171ab3858c4e3v.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>US$2.90 - US$21.4</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>


                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1,cursor:'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H9bae9ae1a6804a5893e5da565af265668.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>US$2.90 - US$21.4</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>

                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1,cursor:'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H58029006a00c4bbca943cab4943918adF.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>US$2.90 - US$21.4</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>

                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1,cursor:'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H9ba88146713046d9b7a8dd813953de4fO.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>US$2.90 - US$21.4</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default ConsumerElectronics
