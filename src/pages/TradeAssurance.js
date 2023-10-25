import { Box, Button, List, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import imgeLogo from '../assets/mainlogo.png'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../stylecss/tradeAssuranceStyle.css'
import Footer from "../Components/Footer.js";
import { GoVideo } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoPlay } from "react-icons/go";



const TradeAssurance = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        appendDots: dots => (
            <div>
              <ul style={{ marginTop: "-50px",padding:'20px 10px' }}> {dots} </ul>
            </div>
          ),
    };
    return (
        <>
            <Box sx={{ p: '0 0 6px 0' }}>
                <div style={{ display: 'flex', boxShadow: '1px 1px 5px 1px lightgrey' }}>
                    <div className='p-2 ps-4 d-flex'>
                        <div className="source-div">
                            <p style={{ margin: '0 0 0 10px', padding: '6px 8px', fontSize: '14px' }}>Sourcing solutions </p>
                            <Box className='hiddenSource'>
                                <div className=" d-flex">
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Search For</h6>
                                        <p>Suppliers by region</p>
                                    </div>
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Source </h6>
                                        <p>Submit RFQ</p>
                                        <p>Instant Quotes</p>
                                        <p>RFQ Sourcing Tool</p>
                                        <p>Refer & Earn</p>
                                    </div>
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Sourcing Tool</h6>
                                        <p>Source Now Chrome Extension</p>
                                    </div>
                                </div>
                            </Box>
                        </div>
                        <div className="service-div">
                            <p style={{ margin: '0 0 0 5px', padding: '6px 8px', borderLeft: '1px solid lightgrey', fontSize: '14px' }}>Services & Membership  </p>
                            <Box className='hiddenService'>
                                <div className=" d-flex">
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Trade Services</h6>
                                        <p>Trade Assurance</p>
                                        <p>Inspection Services</p>
                                        <p>Logistics Service</p>
                                    </div>
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Membership Services </h6>
                                        <p>Buyer Business Identity</p>
                                        <p>Supplier Membership</p>
                                    </div>
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Value-Added Services </h6>
                                        <p>Urgent Request</p>
                                        <p>Extra Quotes</p>
                                    </div>

                                </div>
                            </Box>
                        </div>
                        <div className="service-div">
                            <p style={{ margin: '0 0 0 5px', padding: '6px 8px', borderLeft: '1px solid lightgrey', fontSize: '14px' }}>Help Center </p>
                            <Box className='hiddenHelp'>
                                <div className=" d-flex">
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Help Center </h6>
                                        <p>For buyers</p>
                                        <p>For suppliers</p>
                                        <p>Open a case</p>
                                        <p>Report IPR infringement</p>
                                        <p>Report abuse</p>
                                    </div>
                                    <div className='txt-div' style={{ padding: '10px', margin: '5px' }}>
                                        <h6>Community </h6>
                                        <p>Discussion Forum</p>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </div>

                    <Box sx={{ position: 'absolute', right: 60 }}>
                        <List sx={{ display: 'flex', textAlign: 'center' }}>
                            <li className='nav-list'>
                                <NavLink to='/' style={{ fontSize: '14px' }}>On Abaris</NavLink>
                            </li>

                            <li className='nav-list'>
                                <NavLink to='/' style={{ fontSize: '14px' }}><VscAccount style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />Sign In </NavLink>
                            </li>
                            <li className='nav-list'>
                                <NavLink to='/' style={{ fontSize: '14px' }}><ShoppingCartOutlinedIcon style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />order</NavLink>
                            </li>

                            <li className='nav-list'>
                                <NavLink to='/' style={{ fontSize: '14px' }} className='signInHover'><MdOutlineFavoriteBorder style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />Favorites</NavLink>
                            </li>

                        </List>
                    </Box>
                </div>

                <div className='ps-4 d-flex ms-3 me-1 pt-3'>
                    <div className=" d-flex mt-1">
                        <a href="/">
                            <img className='logo-img img-fluid' style={{ width: '100%', height: '25px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                        </a>
                        <NavLink to={'/trade-assurance'} style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '18px', fontWeight: 'bold', color: 'grey', textDecoration: 'none' }}>Trade Assurance</NavLink>
                    </div>
                    <div className=" d-flex">
                        <List sx={{ display: 'flex', textAlign: 'center' }}>
                            <li style={{ margin: '0 0 0 10px' }}>
                                <NavLink to='/safe-and-easy-payment' style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Safe & easy payments</NavLink>
                            </li>

                            <li style={{ margin: '0 0 0 20px' }}>
                                <NavLink to='/money-back-policy' style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Money-back policy </NavLink>
                            </li>
                            <li style={{ margin: '0 0 0 20px' }}>
                                <NavLink to='/shipping-logistic-service' style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Shipping & logistics services</NavLink>
                            </li>

                            <li style={{ margin: '0 0 0 20px' }}>
                                <NavLink to='/after-sales' style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>After-sales protections</NavLink>
                            </li>
                            <li style={{ margin: '0 0 0 20px' }}>
                                <NavLink to='/video-tutorials' style={{ fontSize: '16px', textDecoration: 'none', color: 'black' }}>Video tutorials </NavLink>
                            </li>

                        </List>
                    </div>
                </div>
            </Box>

            <Box className='tradeAssurance-bgimg-div'>
                <div>
                    <img src="https://s.alicdn.com/@img/imgextra/i4/O1CN01L5FcWy1iazQCc6aqn_!!6000000004430-55-tps-305-46.svg" alt="img" />
                    <h1 style={{ width: '600px', fontWeight: 'bold', letterSpacing: 1, fontSize: '52px' }}>Enjoy protection from payment to delivery on Abaris.com</h1>
                    <Button variant="contained" sx={{ borderRadius: '30px', fontWeight: 'bold', p: '10px 40px', letterSpacing: 1 }}><GoVideo style={{ fontSize: '32px', marginRight: '8px' }} />See how it works</Button>
                </div>
            </Box>

            <Box sx={{ display: 'flex', bgcolor: '#ffd600', height: '500px' }}>
                <div className=" col-sm-7">
                    <h1 style={{ margin: '50px 50px 0 50px', fontSize: '50px', fontWeight: 'bold' }}>Trade Assurance covers every stage of your purchasing journey</h1>
                    <p style={{ margin: '30px 50px 30px 50px', fontSize: '18px' }}>We provide buyers on Abaris.com with secure ways to pay, protect against unforeseen circumstances such as product or shipping issues, and mediate between buyers and suppliers to resolve any issues related to the purchase.</p>
                    <NavLink style={{ color: 'black', fontWeight: 'bold', padding: '20px 50px' }}>Watch to learn more </NavLink>
                </div>
                <div className=" col-sm-5 d-flex flex-wrap mt-5">
                    <div style={{ paddingLeft: '20px', margin: '20px', width: '220px', height: '100px', borderLeft: '5px solid red' }}>
                        <Typography sx={{ fontSize: '40px', fontWeight: 'bold' }}>160M+</Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>Trade Assurance orders</Typography>
                    </div>
                    <div style={{ paddingLeft: '20px', margin: '20px', width: '220px', height: '100px', borderLeft: '5px solid red' }}>
                        <Typography sx={{ fontSize: '40px', fontWeight: 'bold' }}>35M+</Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>Purchased from us</Typography>
                    </div>
                    <div style={{ paddingLeft: '20px', margin: '20px', width: '220px', height: '100px', borderLeft: '5px solid red' }}>
                        <Typography sx={{ fontSize: '40px', fontWeight: 'bold' }}>200K+</Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>Suppliers </Typography>
                    </div>
                    <div style={{ paddingLeft: '20px', margin: '20px', width: '220px', height: '100px', borderLeft: '5px solid red' }}>
                        <Typography sx={{ fontSize: '40px', fontWeight: 'bold' }}>200M+</Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>Products</Typography>
                    </div>
                </div>
            </Box>

            <Box>
                <h1 style={{ margin: '50px 0', textAlign: 'center', fontWeight: 'bold' }}>How we protect your purchases on Abaris.com</h1>
                <p style={{ textAlign: 'center', fontSize: '20px', marginBottom: '40px' }}>Trade Assurance makes it easier and safer for both buyers and suppliers to do business globally. Here is how it works.</p>
                <div className=" d-flex flex-wrap ms-4">
                    <div className=" d-flex" style={{ width: '550px', margin: '20px' }}>
                        <div>
                            <p className="number-point border-0 pt-1" style={{ backgroundColor: '#ffff00' }}>01</p>
                        </div>
                        <div className=" ms-2">

                            <h3 className=" fw-bold">Start Trade Assurance order</h3>
                            <p>You reach an order agreement with a supplier on Abaris.com.</p>
                        </div>
                    </div>
                    <div className=" d-flex" style={{ width: '550px', margin: '20px' }}>
                        <div>
                            <p className="number-point border-0 pt-1" style={{ backgroundColor: '#ffff00' }}>02</p>
                        </div>
                        <div className=" ms-2">

                            <h3 className=" fw-bold">Pay through Abaris.com</h3>
                            <p>Check out with an online payment method or make a wire transfer via Abaris.com.</p>
                        </div>
                    </div>
                    <div className=" d-flex" style={{ width: '550px', margin: '20px' }}>
                        <div>
                            <p className="number-point border-0 pt-1" style={{ backgroundColor: '#ffff00' }}>03</p>
                        </div>
                        <div className=" ms-2">

                            <h3 className=" fw-bold">Payment held in escrow</h3>
                            <p>Your payment is held in escrow and released to the supplier after the product is received and confirmed.</p>
                        </div>
                    </div>
                    <div className=" d-flex" style={{ width: '550px', margin: '20px' }}>
                        <div>
                            <p className="number-point border-0 pt-1" style={{ backgroundColor: '#ffff00' }}>04</p>
                        </div>
                        <div className=" ms-2">

                            <h3 className=" fw-bold">Get money back if order terms are not met</h3>
                            <p>We will assist you in reaching a resolution, including refunds or compensation for order issues.</p>
                        </div>
                    </div>
                </div>
            </Box>

            <Box>
                <video
                    autoPlay
                    loop
                    muted
                    style={{ width: '1000px', height: '500px', margin: '10px 60px' }}
                    poster="https://tbexpand.alicdn.com/1689061843372/copy/87d658fc89dc8ea7.mp4?auth_key=1698227749-0-0-06eb117da21acafdeebb384e36ab495e&biz=publish-47ce0ec6f2243887&t=2150488f16982250489585472e13e4&b=publish&p=cloudvideo_http_video_extranet_notrans&i=418488185345"
                >
                    <source
                        src="https://tbexpand.alicdn.com/1689061843372/copy/87d658fc89dc8ea7.mp4?auth_key=1698227749-0-0-06eb117da21acafdeebb384e36ab495e&biz=publish-47ce0ec6f2243887&t=2150488f16982250489585472e13e4&b=publish&p=cloudvideo_http_video_extranet_notrans&i=418488185345"
                        type="video/mp4"
                    />
                </video>
            </Box>

            <Box sx={{ bgcolor: '#f9a825', padding: '60px 20px' }}>
                <h1 className=" fw-bold text-center m-5">What is covered</h1>
                <div className=" d-flex">
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center', backgroundColor: 'white' }}>
                        <img style={{ margin: '20px 0', width: '84px' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN010KADAP2638vcOIcv4_!!6000000007605-55-tps-70-70.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">Safe & easy payments</h5>
                    </div>
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center', backgroundColor: 'white' }}>
                        <img style={{ margin: '20px 0', width: '84px' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01viHX2926YHrS5jYvf_!!6000000007673-55-tps-70-70.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">Money-back policy</h5>
                    </div>
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center', backgroundColor: 'white' }}>
                        <img style={{ margin: '20px 0', width: '84px' }} src="https://s.alicdn.com/@img/imgextra/i2/O1CN01Zsnn5f28yyAQPbYyz_!!6000000008002-55-tps-70-70.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">Shipping & logistics services</h5>
                    </div>
                    <div style={{ width: '400px', border: '2px solid lightgrey', margin: '5px', borderRadius: '10px', padding: '20px', textAlign: 'center', backgroundColor: 'white' }}>
                        <img style={{ margin: '20px 0', width: '84px' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN01hoxDoj1HV2eSjAU58_!!6000000000762-55-tps-70-70.svg" alt="img" />
                        <h5 className=" fw-bold mb-4">After-sales protections</h5>
                    </div>
                </div>
            </Box>

            <Box sx={{ display: 'flex', mt: 5 }}>
                <div className=" col-sm-6" style={{ width: '630px', padding: '40px 50px' }}>
                    <h3 className=" fw-bold mb-3">Safe & easy payments</h3>
                    <p className=" mb-4">Every payment you make through Abaris.com is encrypted, secure, and processed in as quickly as 2 hours.</p>
                    <p className=" mb-4">Pay with any major online payment method or make a bank-to-bank wire transfer, all in your local currency.</p>
                    <p className=" mb-4">You may also be eligible for flexible financing, such as Payment Terms: 30/60 Days* to free up your cash flow.</p>
                    <div className=" d-flex">
                        <div>
                            <Button variant="contained" sx={{ borderRadius: '30px', p: '6px 20px', m: '20px 10px 20px 0', height: '40px', fontWeight: 'bold' }}>Source supporting products</Button>
                        </div>
                        <div>
                            <Button variant="outlined" sx={{ borderRadius: '30px', p: '6px 20px', m: '20px 10px', height: '40px', fontWeight: 'bold' }}>Learn How it works</Button>
                        </div>
                    </div>
                    <p style={{ fontSize: '12px', color: 'grey' }}>*For eligible buyers</p>
                </div>
                <div className=" col-sm-6">
                    <video
                        autoPlay
                        loop
                        muted
                        style={{ width: '500px', height: '500px', margin: '10px 60px' }}
                        poster="https://tbexpand.alicdn.com/1689235989682/e94bb47cad32a876.mp4?auth_key=1698228881-0-0-07b8809f3c2e7595e1543e6f259946b2&biz=publish-f9c05a35c2b6dc8c&t=2150446e16982261817126524e0d0b&b=publish&p=cloudvideo_http_video_extranet_notrans&i=418413544616"
                    >
                        <source
                            src="https://tbexpand.alicdn.com/1689235989682/e94bb47cad32a876.mp4?auth_key=1698228881-0-0-07b8809f3c2e7595e1543e6f259946b2&biz=publish-f9c05a35c2b6dc8c&t=2150446e16982261817126524e0d0b&b=publish&p=cloudvideo_http_video_extranet_notrans&i=418413544616"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </Box>

            <Box sx={{ display: 'flex', mt: 5 }}>
                <div className=" col-sm-6">
                    <video
                        autoPlay
                        loop
                        muted
                        style={{ width: '500px', height: '500px', margin: '10px 60px' }}
                        poster="https://tbexpand.alicdn.com/1689236025123/e8364824a813a8a4.mp4?auth_key=1698229856-0-0-b1f4dfbab9c3dd62f0640ff1e9a0aac0&biz=publish-2c2d859e1318a713&t=2150489116982271563074654e0db2&b=publish&p=cloudvideo_http_video_extranet_notrans&i=419458547261"
                    >
                        <source
                            src="https://tbexpand.alicdn.com/1689236025123/e8364824a813a8a4.mp4?auth_key=1698229856-0-0-b1f4dfbab9c3dd62f0640ff1e9a0aac0&biz=publish-2c2d859e1318a713&t=2150489116982271563074654e0db2&b=publish&p=cloudvideo_http_video_extranet_notrans&i=419458547261"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className=" col-sm-6" style={{ width: '630px', padding: '40px 50px' }}>
                    <h3 className=" fw-bold mb-3">Money-back policy</h3>
                    <p className=" mb-4">Claim a refund to get your money back if your order has not been shipped, goes missing, or arrives with defects, incorrect items, damages, or other product-related issues.</p>
                    <p className=" mb-4">If you are in an eligible country*, you can also take advantage of our Easy Return service to return defective products locally for free.</p>
                    <div className=" d-flex">
                        <div>
                            <Button variant="contained" sx={{ borderRadius: '30px', p: '6px 20px', m: '20px 10px 20px 0', height: '40px', fontWeight: 'bold' }}>Source supporting products</Button>
                        </div>
                        <div>
                            <Button variant="outlined" sx={{ borderRadius: '30px', p: '6px 20px', m: '20px 10px', height: '40px', fontWeight: 'bold' }}>Learn How it works</Button>
                        </div>
                    </div>
                    <p style={{ fontSize: '12px', color: 'grey' }}>*Available for orders under US $3,000 and to buyers in Australia, Belgium, Canada, Chile, Czech Republic, France, Germany, Israel, Italy, Japan, Korea, Mexico, Netherlands, Pakistan, Poland, Portugal, Russia, Saudi Arabia, Spain, Switzerland, Ukraine, United Arab Emirates, the United Kingdom, the United States and more to come. Read our terms and conditions for full eligibility requirements.</p>
                </div>

            </Box>

            <Box>
                <div style={{ padding: '40px 50px' }}>
                    <h1 className=" fw-bold mb-5">Shipping & logistics services</h1>
                    <p className=" fs-5">Reduce inventory uncertainty knowing your order will be delivered by a fixed date or you receive platform compensation with our On-time Delivery Guarantee.</p>
                    <p className=" fs-5">With Abaris.com Logistics, you can enjoy the reliability of our own logistics network and track your shipment in real-time for most countries and regions around the world.</p>
                    <div className=" d-flex">
                        <div>
                            <Button variant="outlined" sx={{ borderRadius: '30px', p: '10px 50px', m: '20px 10px 20px 0', fontWeight: 'bold' }}>Learn How it works</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <img style={{ marginLeft: '40px' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01R0ppbC1zKoujkeady_!!6000000006696-2-tps-1200-520.png" alt="img" />
                </div>
            </Box>

            <Box sx={{ display: 'flex', mt: 5 }}>
                <div className=" col-sm-6">
                    <video
                        autoPlay
                        loop
                        muted
                        style={{ width: '500px', height: '500px', margin: '10px 60px' }}
                        poster="https://tbexpand.alicdn.com/102b87fae57bc4a3/ddb998a1ca37d9b3/20230711_6bbf4a0c6cd4efc7_419174939879_mp4_264_hd_taobao.mp4?auth_key=1698230435-0-0-bd13caeaedd323d54a62ba9b549909be&biz=publish-1bb64d080763bb26&t=215042dc16982277359002585e133f&b=publish&p=cloudvideo_http_video_extranet_publish&i=419174939879"
                    >
                        <source
                            src="https://tbexpand.alicdn.com/102b87fae57bc4a3/ddb998a1ca37d9b3/20230711_6bbf4a0c6cd4efc7_419174939879_mp4_264_hd_taobao.mp4?auth_key=1698230435-0-0-bd13caeaedd323d54a62ba9b549909be&biz=publish-1bb64d080763bb26&t=215042dc16982277359002585e133f&b=publish&p=cloudvideo_http_video_extranet_publish&i=419174939879"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className=" col-sm-6" style={{ width: '630px', padding: '40px 50px' }}>
                    <h3 className=" fw-bold mb-3">After-sales protections</h3>
                    <p className=" mt-5 mb-5">Get support at your doorstep with our on-site installation, maintenance, repair and free replacement parts services for eligible products.</p>
                    <div className=" d-flex">
                        <div>
                            <Button variant="contained" sx={{ borderRadius: '30px', p: '6px 20px', m: '20px 10px 20px 0', height: '40px', fontWeight: 'bold' }}>Source supporting products</Button>
                        </div>
                        <div>
                            <Button variant="outlined" sx={{ borderRadius: '30px', p: '6px 20px', m: '20px 10px', height: '40px', fontWeight: 'bold' }}>Learn How it works</Button>
                        </div>
                    </div>
                </div>

            </Box>

            <Box sx={{ backgroundImage: "url('https://s.alicdn.com/@img/imgextra/i1/O1CN01M4UxKZ1caB1Qrn5VW_!!6000000003616-55-tps-1920-1069.svg')" }}>
                <h1 className=" text-center pt-5 fw-bold fs-1">Buyer voices</h1>
                <p className=" text-center pt-2 fs-5">See how Trade Assurance benefits others like you.</p>
                <Slider
                    style={{ borderRadius: '5px',margin:'10px 60px' }}
                    {...settings}>
                    <div className=" text-center p-5">
                        <p className=" text-center" style={{ margin: '30px 0 70px 0' }}><GoPlay style={{ fontSize: '75px' }} /></p>
                        <h3>“ Creates peace of mind, knowing that both the supplier and ourselves are protected for the whole transaction. “</h3>
                        <p>Nodnal</p>
                        <p>Brandon Cubina</p>
                    </div>
                    <div className=" text-center p-5">
                        <p className=" text-center" style={{ margin: '30px 0 70px 0' }}><GoPlay style={{ fontSize: '75px' }} /></p>
                        <h3>“ [Trade Assurance] is the number one thing that's made me feel more confident in buying products. “</h3>
                        <p>Peter Crabtree</p>
                        <p>Crabtree Brands</p>
                    </div>
                    <div className=" text-center p-5">
                        <p className=" text-center" style={{ margin: '30px 0 70px 0' }}><GoPlay style={{ fontSize: '75px' }} /></p>
                        <h3>“ Because you're using Trade Assurance, you never have to think about it...[knowing] the fact that you're protected. “</h3>
                        <p>Darren Tang</p>
                        <p>LifeToo</p>
                    </div>
                    <div className=" text-center p-5">
                        <p className=" text-center" style={{ margin: '30px 0 70px 0' }}><GoPlay style={{ fontSize: '75px' }} /></p>
                        <h3>“ When I see they are trade assured, and I know Abaris.com is behind my purchases, well that's a lot of security for me. “</h3>
                        <p>Ezequiel Karpf</p>
                        <p>MyFamilyBuilders</p>
                    </div>

                </Slider>
            </Box>

            <Box sx={{ display: 'flex', bgcolor: '#212121', padding: '60px 30px' }}>
                <div className="cardd-div" style={{ backgroundColor: '#424242' }}>
                    <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN01EUVKJw1yQwa6WjmMN_!!6000000006574-55-tps-48-48.svg" alt="img" />
                    <Typography sx={{ fontSize: '20px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Terms & Conditions</Typography>
                    <NavLink style={{ color: 'white' }}>Read</NavLink>
                </div>
                <div className="cardd-div" style={{ backgroundColor: '#424242' }}>
                    <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01M9qwNo20VdsaCa1lJ_!!6000000006855-55-tps-48-48.svg" alt="img" />
                    <Typography sx={{ fontSize: '20px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Trade Assurance guide</Typography>
                    <NavLink style={{ color: 'white' }}>Download</NavLink>
                </div>
                <div className="cardd-div" style={{ backgroundColor: '#424242' }}>
                    <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01wpCLva1mj0ovMOnfP_!!6000000004989-55-tps-49-48.svg" alt="img" />
                    <Typography sx={{ fontSize: '20px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Customer Service</Typography>
                    <NavLink style={{ color: 'white' }}>Get help</NavLink>
                </div>
                <div className="cardd-div" style={{ backgroundColor: '#424242' }}>
                    <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src='https://s.alicdn.com/@img/imgextra/i3/O1CN01309cZX1sWXjSjRYS5_!!6000000005774-55-tps-48-48.svg' alt="img" />
                    <Typography sx={{ fontSize: '20px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Video tutorials</Typography>
                    <NavLink style={{ color: 'white' }}>Watch</NavLink>
                </div>
            </Box>

            <Footer />
        </>
    )
}

export default TradeAssurance
