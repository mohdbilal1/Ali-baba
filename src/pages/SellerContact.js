import { Box, Button, Card, CardMedia, List } from "@mui/material"
import ConsumerElectronicsNavbar from "../Components/ConsumerElectronicsNavbar"
import { NavLink } from "react-router-dom"
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import indflag from '../assets/indiaflag.png'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import { FaArrowLeftLong } from "react-icons/fa6";
import '../stylecss/sellerPageStyle.css'

const SellerContact = () => {
    return (
        <>
            <ConsumerElectronicsNavbar />

            <Box sx={{ display: 'flex' }}>
                <div className='logo-img-div pt-2 pb-2 d-flex'>
                    <p style={{ borderRight: '2px solid lightgrey', padding: '0 10px 0 0' }}><ListOutlinedIcon sx={{ mr: 0.2, mb: 0.4 }} />Categories</p>
                    <p style={{ borderRight: '2px solid lightgrey', padding: '0 10px' }}>Ready to ship</p>
                    <p style={{ borderRight: '2px solid lightgrey', padding: '0 10px' }}>Trade show</p>
                    <p style={{ borderRight: '2px solid lightgrey', padding: '0 10px' }}>Buyer central</p>

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

            <Box sx={{ display: 'flex', padding: '20px', justifyContent: 'center' }}>
                <div style={{ marginRight: '20px' }}>
                    <img style={{ width: '300px' }} src="https://s.alicdn.com/@img/tfs/TB1SU4upFT7gK0jSZFpXXaTkpXa-440-348.png" alt="img" />
                </div>
                <div className=" m-4">
                    <h5>Oops! We can't find the page you're looking for.</h5>
                    <Button size="small" variant="contained" sx={{ mt: 3, fontWeight: 'bold', borderRadius: '30px', p: '6px 30px' }}><FaArrowLeftLong style={{ marginRight: '8px', fontSize: '20px' }} />Back </Button>
                    <Button size="small" sx={{ mt: 3, ml: 2, borderRadius: '30px', border: '1px solid rgb(15, 113, 219)', fontWeight: 'bold', ":hover": { color: 'white', bgcolor: 'Highlight' }, p: '6px 30px' }} >Go to homepage</Button>
                    <p style={{ marginTop: '10px' }}>Here are some useful links:</p>
                    <ul>
                        <li>Explore selected products in All categories</li>
                        <li>Visit the Help Center</li>
                    </ul>
                    <p>We've also compiled some products you might like below</p>
                </div>
            </Box>

            <Box>
                <h4 style={{ margin: '40px 60px' }}>Discounts up to 10% off</h4>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div>
                        <img style={{ width: '130px' }} src="https://s.alicdn.com/@sc04/kf/Hd70cfc4bd898414e8e81e9c5980cc353A.jpg_220x220.jpg" alt="img" />
                        <h6 style={{ margin: '20px 0 0 0' }}>US$101.52 - US$108.72</h6>
                    </div>
                    <div>
                        <img style={{ width: '130px' }} src="https://s.alicdn.com/@sc04/kf/H7320a3476dd243d4b798235f3ad9affeI.jpg_220x220.jpg" alt="img" />
                        <h6 style={{ margin: '20px 0 0 0' }}>US$26.50 - US$32.00</h6>
                    </div>
                    <div>
                        <img style={{ width: '130px' }} src="https://s.alicdn.com/@sc04/kf/Hbf6652aa939444cb97fac0b8c89871f8n.jpg_220x220.jpg" alt="img" />
                        <h6 style={{ margin: '20px 0 0 0' }}>US$6.65 - US$7.06</h6>
                    </div>
                </div>
            </Box>
            <div>
                <h4 style={{ margin: '40px 60px' }}>Just for you</h4>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 2.4 }}>
                   
                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1, cursor: 'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H6b890f67467d4d22af4cf62134b3c38dA.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$2.90 - US$21.4</p>
                        <p>5 pieces (MOQ)</p>
                    </Card>

                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1, cursor: 'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H433071eb841e4db99ebdf199fe3e5afdW.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>100 pieces (MOQ)</p>
                    </Card>

                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1, cursor: 'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/Hba1e31a22fd04b5186a9c798f624e038d.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>100 pieces (MOQ)</p>
                    </Card>

                   

                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1, cursor: 'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H7136eaef84894c818dfca619dc4bb0e5P.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>100 pieces (MOQ)</p>
                    </Card>

                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1, cursor: 'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/Hb1a32b2d7f72442e91e78f5243e9b168t.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>100 pieces (MOQ)</p>
                    </Card>


                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1, cursor: 'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/Hca2bf58c9ec44977be7cff518f405b7fZ.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>2 pieces (MOQ)</p>
                    </Card>


                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1, cursor: 'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/U3ed4130db7c74aed959a6bf6bc115b8cB.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>2 pieces (MOQ)</p>
                    </Card>


                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1, cursor: 'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H0809fba050464e72b0e171ab3858c4e3v.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>


                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1, cursor: 'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H9bae9ae1a6804a5893e5da565af265668.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>

                    <Card sx={{ width: '230px', height: '355px', p: 2, m: 1, cursor: 'pointer' }}>
                        <CardMedia
                            sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                            image='https://s.alicdn.com/@sc04/kf/H58029006a00c4bbca943cab4943918adF.jpg_250x250xz.jpg'
                            title="logo-design"
                        />
                        <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                        <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '18px' }}>US$120.00</p>
                        <p>1 box (MOQ)</p>
                    </Card>
                </Box>
            </div>
            
            <Box sx={{ display: 'flex',mt:3 ,bgcolor:'lightgrey',pt:2}}>
                <p style={{ fontSize: '14px', paddingLeft: '40px' }}>Copyright © 1996-2023 Abaris  InterMESH Ltd. All rights reserved.</p>
                <p style={{ fontSize: '14px', position: 'absolute', right: 30 }}>Terms of Use - Privacy Policy - Link to Us</p>
            </Box>

        </>
    )
}

export default SellerContact
