import { Box, Button, Card, CardMedia, Divider, List } from '@mui/material'
import { NavLink } from "react-router-dom";
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import '../stylecss/dropShippingBuyerAcademy.css'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


const DropShippingBuyerAcademy = () => {
    return (
        <>
            <Box sx={{ display: 'flex', boxShadow: '1px 1px 6px lightgrey', p: '6px 0' }}>
                <div className='logo-img-div pt-2 pb-2 d-flex'>
                    <a href="/">
                        <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                    </a>
                    <p style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '20px' }}>Dropshipping</p>
                </div>
                <Box sx={{ position: 'absolute', right: 30 }}>
                    <List sx={{ display: 'flex', textAlign: 'center' }}>
                        <li className='nav-list-buyerAc'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Learn Dropshipping</NavLink>
                        </li>

                        <li className='nav-list-buyerAc'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Scale Your Sales</NavLink>
                        </li>
                        <li className='nav-list-buyerAc'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Find Ideas</NavLink>
                        </li>
                        <li className='nav-list-buyerAc'>
                            <NavLink to='/buyer-academy' style={{ fontSize: '14px' }}>Start Dropshipping </NavLink>
                        </li>

                        <li className='nav-list-buyerAc'>
                            <NavLink to='/' style={{ fontSize: '14px' }} className='signInHover'><VscAccount style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} /></NavLink>
                        </li>

                        <li className='nav-list-buyerAc'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>
                                <Button size='small' variant='contained' sx={{ borderRadius: '30px', p: '3px 20px' }}>Start for free</Button>
                            </NavLink>
                        </li>
                    </List>
                </Box>

            </Box>

            <div className='academy-bgdiv text-center'>
                <img style={{ margin: '40px 0 0 0', width: '90px', objectFit: 'cover' }} src="https://s.alicdn.com/@img/imgextra/i2/O1CN01EGP7xJ1watnrBYUFS_!!6000000006325-2-tps-101-101.png" alt="img" />
                <h1 style={{ margin: '10px 0', fontWeight: 'bold', color: 'white' }}>INVEST LESS. SELL MORE.</h1>
                <h4 style={{ margin: '10px 0', color: 'white' }}>Learn about Dropshipping on Abaris.com in 60 seconds</h4>
                <p style={{ margin: '40px 150px', color: 'white', fontSize: '20px' }}>Our featured dropshipping solution is a simple yet effective way to grow your online business. You can make full use of the free tools we provide to source niche products for your online store from Abaris.com.</p>
            </div>

            <div>
                <h2 style={{ textAlign: 'center', fontWeight: 'bold', margin: '40px 0 0 0' }}>Grow your dropshipping business with Abaris.com</h2>
                <p style={{ textAlign: 'center', margin: '6px 110px', fontSize: '18px' }}>Tap into one of the world's biggest B2B wholesale platforms and source directly from pre-vetted suppliers, manufacturers, and factories.</p>
                <div className=' d-flex flex-wrap' style={{ margin: '20px 50px' }}>
                    <div className=' d-flex' style={{ width: '580px' }}>
                        <div style={{ margin: '10px' }}>
                            <img style={{ marginTop: '6px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01NpEOVQ1bwmoM6UgMX_!!6000000003530-2-tps-30-28.png" alt="img" />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <p>Access over 1 million dropshipping products that you can sell straight from your online store right away.</p>
                        </div>

                    </div>
                    <div className=' d-flex' style={{ width: '580px' }}>
                        <div style={{ margin: '10px' }}>
                            <img style={{ marginTop: '6px' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01sIaBYX1srbnkeZI3a_!!6000000005820-2-tps-30-30.png" alt="img" />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <p>Source from over 10,000 verified or top-rated manufacturers to keep up with your inventory needs, branding customization, design printing, and more.</p>
                        </div>

                    </div>
                    <div className=' d-flex' style={{ width: '580px' }}>
                        <div style={{ margin: '10px' }}>
                            <img style={{ marginTop: '6px' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN018I827Q264yMYreOX4_!!6000000007609-2-tps-30-30.png" alt="img" />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <p>Enjoy quality products at wholesale prices with no minimum order requirements.</p>
                        </div>

                    </div>
                    <div className=' d-flex' style={{ width: '580px' }}>
                        <div style={{ margin: '10px' }}>
                            <img style={{ marginTop: '6px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01kdr4YH23tP7yrGojq_!!6000000007313-2-tps-30-42.png" alt="img" />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <p>Import trending products in bulk to your store with a single click to save time and effort*.</p>
                        </div>

                    </div>
                    <div className=' d-flex' style={{ width: '580px' }}>
                        <div style={{ margin: '10px' }}>
                            <img style={{ marginTop: '6px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01PmSoWM1hHSljNSTJ3_!!6000000004252-2-tps-26-30.png" alt="img" />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <p>Have your orders fulfilled automatically with fast shipping to your customers globally.</p>
                        </div>

                    </div>
                    <div className=' d-flex' style={{ width: '580px' }}>
                        <div style={{ margin: '10px' }}>
                            <img style={{ marginTop: '6px' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01bFNrUH1wN9vrmULvd_!!6000000006295-2-tps-30-30.png" alt="img" />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <p>Protect your orders with our Abaris.com Trade Assurance program in the event that your supplier fails to ship on time or the product quality varies from what is agreed upon.</p>
                        </div>

                    </div><div className=' d-flex' style={{ width: '580px' }}>
                        <div style={{ margin: '10px' }}>
                            <img style={{ marginTop: '6px' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN013Tyam91bNyi8Mudti_!!6000000003454-2-tps-26-26.png" alt="img" />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <p>Save time tracking orders and shipments with our smart synchronization tools.</p>
                        </div>

                    </div>

                </div>
            </div>

            <div className=' text-center  pb-5'>
                <p style={{ fontSize: '14px', margin: '10px 60px' }}>*WooCommerce and Shopify stores are supported so far, and we highly recommend you use our feature partners <strong>Modalyst, Syncee, Dropified, Spocket</strong>, or <strong>Sezam</strong> to connect your store with Dropshipping on Abaris.com. <a href="/" target="_blank">Learn more</a></p>
                <Button size='small' variant='contained' sx={{ borderRadius: '30px', p: '10px 20px', m: '20px 0' }}>Start for free</Button>

            </div>

            <div className=' text-center  pb-5'>
                <h1 style={{ fontWeight: 'bold', margin: '20px 0 0 0' }}>How to drop ship on Abaris.com</h1>
                <p style={{ margin: '10px 0', fontSize: '20px' }}>It only takes four steps for you to start your dropshipping business on Abaris.com.</p>
            </div>

            <div className=' text-center'>
                <Divider style={{ border: '2px solid #ff6d00', height: '2px', width: '920px', marginLeft: '200px' }} />
                <div style={{ margin: '-45px 0 0 100px', display: 'flex' }}>
                    <p style={{ marginLeft: '40px', padding: '20px', backgroundColor: 'white', color: '#ff6d00', zIndex: 10 }}><PersonAddAltOutlinedIcon sx={{ fontSize: '50px' }} /></p>
                    <p style={{ marginLeft: '210px', padding: '20px', backgroundColor: 'white', color: '#ff6d00', zIndex: 10 }}><SearchOutlinedIcon sx={{ fontSize: '50px' }} /></p>
                    <p style={{ marginLeft: '210px', padding: '20px', backgroundColor: 'white', color: '#ff6d00', zIndex: 10 }}><FavoriteBorderOutlinedIcon sx={{ fontSize: '50px' }} /></p>
                    <p style={{ marginLeft: '210px', padding: '20px', backgroundColor: 'white', color: '#ff6d00', zIndex: 10 }}> <DescriptionOutlinedIcon sx={{ fontSize: '50px' }} /></p>
                </div>
                <div className=' d-flex' style={{ margin: '0 30px 0 30px' }}>
                    <div style={{ width: '400px', marginLeft: '10px' }}>
                        <h5 style={{ fontWeight: 'bold' }}>STEP 1</h5>
                        <h6 style={{ fontWeight: 'bold' }}>Connect your store</h6>
                        <p>Create a free dropshipping buyer account on Abaris.com, and then connect it to your store</p>
                    </div>
                    <div style={{ width: '400px', marginLeft: '30px' }}>
                        <h5 style={{ fontWeight: 'bold' }}>STEP 2</h5>
                        <h6 style={{ fontWeight: 'bold' }}>Find products to sell</h6>
                        <p>In the Abaris.com dropshipping center, click "Add to Import List" button on any product you want to sell to create an import list from where you can also customize the product settings.</p>
                    </div>
                    <div style={{ width: '400px', marginLeft: '30px' }}>
                        <h5 style={{ fontWeight: 'bold' }}>STEP 3</h5>
                        <h6 style={{ fontWeight: 'bold' }}>Import products into your store</h6>
                        <p>Go to your "Import List", select products, and click "Push to Store" to import in bulk and start selling.</p>
                    </div>
                    <div style={{ width: '400px', marginLeft: '30px' }}>
                        <h5 style={{ fontWeight: 'bold' }}>STEP 4</h5>
                        <h6 style={{ fontWeight: 'bold' }}>Fulfill orders automatically</h6>
                        <p>When you get an order and pay it to your supplier on Abaris.com, the supplier will ship the products for your customer. You will track orders and shipments through our synchronization tools. Learn more.</p>
                    </div>

                </div>
                <Button size='small' variant='contained' sx={{ borderRadius: '30px', p: '10px 30px', m: '30px 0' }}>Find niche products</Button>
            </div>

            <div className=' text-center  pb-5'>
                <h1 style={{ fontWeight: 'bold', margin: '20px 0 0 0' }}>Explore unique products for dropshipping</h1>
                <p style={{ margin: '10px 0', fontSize: '20px' }}>Quickly test out your new product ideas without having to worry about the risks of stocking and storing inventory.</p>
            </div>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 3, mt: '10px' }}>

                <Card className='crd-hovr' sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                    <CardMedia
                        sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                        image='https://s.alicdn.com/@sc04/kf/H6b890f67467d4d22af4cf62134b3c38dA.jpg_250x250xz.jpg'
                        title="logo-design"
                    />
                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$2.90 - US$21.4</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>+US$6,98(Shipping)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>5 pieces (MOQ)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1-7 days(Processing Time)</p>
                </Card>

                <Card className='crd-hovr'  sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                    <CardMedia
                        sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                        image='https://s.alicdn.com/@sc04/kf/H433071eb841e4db99ebdf199fe3e5afdW.jpg_250x250xz.jpg'
                        title="logo-design"
                    />
                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>+US$6,98(Shipping)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1 box (MOQ)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1-7 days(Processing Time)</p>
                </Card>

                <Card className='crd-hovr'  sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                    <CardMedia
                        sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                        image='https://s.alicdn.com/@sc04/kf/Hba1e31a22fd04b5186a9c798f624e038d.jpg_250x250xz.jpg'
                        title="logo-design"
                    />
                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>+US$6,98(Shipping)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1 box (MOQ)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1-7 days(Processing Time)</p>
                </Card>

                <Card className='crd-hovr'  sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                    <CardMedia
                        sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                        image='https://s.alicdn.com/@sc04/kf/He763694b14484907bb90f90b453f433dI.jpg_250x250xz.jpg'
                        title="logo-design"
                    />
                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>+US$6,98(Shipping)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1 box (MOQ)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1-7 days(Processing Time)</p>
                </Card>

                <Card className='crd-hovr'  sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                    <CardMedia
                        sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                        image='https://s.alicdn.com/@sc04/kf/H7136eaef84894c818dfca619dc4bb0e5P.jpg_250x250xz.jpg'
                        title="logo-design"
                    />
                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>+US$6,98(Shipping)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1 box (MOQ)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1-7 days(Processing Time)</p>
                </Card>

                <Card className='crd-hovr'  sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                    <CardMedia
                        sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                        image='https://s.alicdn.com/@sc04/kf/Hb1a32b2d7f72442e91e78f5243e9b168t.jpg_250x250xz.jpg'
                        title="logo-design"
                    />
                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>+US$6,98(Shipping)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1 box (MOQ)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1-7 days(Processing Time)</p>
                </Card>

                <Card className='crd-hovr'  sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                    <CardMedia
                        sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                        image='https://s.alicdn.com/@sc04/kf/Hcc9705eb9d474732911f3a481637457bJ.jpg_250x250xz.jpg'
                        title="logo-design"
                    />
                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>+US$6,98(Shipping)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1 box (MOQ)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1-7 days(Processing Time)</p>
                </Card>

                <Card className='crd-hovr'  sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                    <CardMedia
                        sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                        image='https://s.alicdn.com/@sc04/kf/Hca2bf58c9ec44977be7cff518f405b7fZ.jpg_250x250xz.jpg'
                        title="logo-design"
                    />
                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>+US$6,98(Shipping)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1 box (MOQ)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1-7 days(Processing Time)</p>
                </Card>


                <Card className='crd-hovr'  sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                    <CardMedia
                        sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                        image='https://s.alicdn.com/@sc04/kf/U3ed4130db7c74aed959a6bf6bc115b8cB.jpg_250x250xz.jpg'
                        title="logo-design"
                    />
                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>+US$6,98(Shipping)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1 box (MOQ)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1-7 days(Processing Time)</p>
                </Card>


                <Card className='crd-hovr'  sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                    <CardMedia
                        sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                        image='https://s.alicdn.com/@sc04/kf/H4427f804e7ae4c24818624adb9518d00Z.jpg_250x250xz.jpg'
                        title="logo-design"
                    />
                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>+US$6,98(Shipping)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1 box (MOQ)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1-7 days(Processing Time)</p>
                </Card>


                <Card className='crd-hovr'  sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                    <CardMedia
                        sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                        image='https://s.alicdn.com/@sc04/kf/H0809fba050464e72b0e171ab3858c4e3v.jpg_250x250xz.jpg'
                        title="logo-design"
                    />
                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>+US$6,98(Shipping)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1 box (MOQ)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1-7 days(Processing Time)</p>
                </Card>


                <Card className='crd-hovr'  sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                    <CardMedia
                        sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                        image='https://s.alicdn.com/@sc04/kf/H9bae9ae1a6804a5893e5da565af265668.jpg_250x250xz.jpg'
                        title="logo-design"
                    />
                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>+US$6,98(Shipping)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1 box (MOQ)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1-7 days(Processing Time)</p>
                </Card>

                <Card className='crd-hovr'  sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                    <CardMedia
                        sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                        image='https://s.alicdn.com/@sc04/kf/H58029006a00c4bbca943cab4943918adF.jpg_250x250xz.jpg'
                        title="logo-design"
                    />
                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>+US$6,98(Shipping)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1 box (MOQ)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1-7 days(Processing Time)</p>
                </Card>

                <Card className='crd-hovr'  sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                    <CardMedia
                        sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                        image='https://s.alicdn.com/@sc04/kf/H9ba88146713046d9b7a8dd813953de4fO.jpg_250x250xz.jpg'
                        title="logo-design"
                    />
                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>B39 Wireless Headphones Portable Folding Headset MP3 Player With Microphone LED Colorful Lights BT Headset with UV</p>
                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$120.00</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>+US$6,98(Shipping)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1 box (MOQ)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1-7 days(Processing Time)</p>
                </Card>

                <Card className='crd-hovr'  sx={{ width: '230px', height: '405px', p: 2, m: 1, cursor: 'pointer' }}>
                    <CardMedia
                        sx={{ height: '210px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                        image='https://s.alicdn.com/@sc04/kf/H6b890f67467d4d22af4cf62134b3c38dA.jpg_250x250xz.jpg'
                        title="logo-design"
                    />
                    <p size="small" style={{ width: '210px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>S85 New GPS Racing Drone Pro Real 4K HD Camera 5G Long Range Quadcopter WiFi FPV Smart Follow Me Foldable Avoid Obstacles</p>
                    <p style={{ fontWeight: 'bold', margin: '3px 0', fontSize: '16px' }}>US$2.90 - US$21.4</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>+US$6,98(Shipping)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>5 pieces (MOQ)</p>
                    <p style={{ fontSize: '14px', margin: '3px 0' }}>1-7 days(Processing Time)</p>
                </Card>
            </Box>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Button size='small' variant='contained' sx={{ borderRadius: '30px', p: '10px 30px', m: '30px 0' }}>view more</Button>
            </div>

            <div className='bgg-last'>
                <div style={{margin:'0 200px'}}>
                <p style={{padding:'40px 0 8px 0',margin:0}}>Dropshipping on Abaris.com</p>
                <h3 style={{padding:'2px 0 0 0',margin:0}}>Discover all your treasures today.</h3>
                <Button size='small' variant='contained' sx={{ borderRadius: '30px', p: '10px 30px', m: '20px 0' }}>Start for free</Button>
                </div>
            </div>
            <Box sx={{ display: 'flex',mt:0.1 ,bgcolor:'lightgrey',pt:2}}>
                <p style={{ fontSize: '14px', paddingLeft: '40px' }}>Copyright © 1996-2023 Abaris  InterMESH Ltd. All rights reserved.</p>
                <p style={{ fontSize: '14px', position: 'absolute', right: 30 }}>Terms of Use - Privacy Policy - Link to Us</p>
            </Box>
        </>
    )
}

export default DropShippingBuyerAcademy
