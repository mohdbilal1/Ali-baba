import { Box, Button, List, Table, TableCell, TableContainer, TableRow } from "@mui/material"
import { VscAccount } from "react-icons/vsc";
import imgeLogo from '../assets/mainlogo.png'
import { NavLink } from "react-router-dom"
import SellarPgSidebar from "../Components/SellerPgSidebar";
import { GoPlay } from "react-icons/go";
import '../stylecss/sellerPageStyle.css'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import data from "../data/chartdata";
import LinearProgress from '@mui/material/LinearProgress';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import medalImg from '../assets/medalimg.png'
import { TbBuildingStore } from "react-icons/tb";
import { BsBox } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";
import { RiEditCircleLine } from "react-icons/ri";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { useEffect } from "react";
import SellerLoginModel from "../Components/SellerLoginModel";
import { useState } from 'react';




const SellerPage = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    };

    useEffect(() => {
        handleOpen()
    }, [])

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <SellerLoginModel open={open} setOpen={setOpen} />
            <Box sx={{ display: 'flex', boxShadow: '1px 1px 6px lightgrey', p: '6px 0', position: 'fixed', top: 0, zIndex: 10, bgcolor: 'white', width: '100%' }}>
                <div className='logo-img-div pt-2 pb-2 d-flex'>
                    <a href="/">
                        <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                    </a>
                    <p style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '20px' }}>My Abaris</p>
                    <NavLink to='/globalBuyerIndex' style={{ fontSize: '14px' }}>
                        <button style={{ border: '1px solid grey', backgroundColor: 'white', borderRadius: '20px', color: 'black', padding: '4px 12px', fontSize: '12px', marginTop: '4px' }}>
                            Switch to Buyer
                        </button>
                    </NavLink>
                </div>
                <Box sx={{ position: 'absolute', right: 60 }}>
                    <List sx={{ display: 'flex', textAlign: 'center' }}>

                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>
                                <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '12px' }}>
                                    Upgrade to gold supplier</button>
                            </NavLink>
                        </li>

                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}><VscAccount style={{ fontSize: '18px', margin: '0 8px 3px 0', color: 'grey' }} />My Account</NavLink>
                        </li>

                        <li className='nav-list'>
                            <NavLink to='/' style={{ fontSize: '14px' }}>Help</NavLink>
                        </li>

                    </List>
                </Box>

            </Box>

            <Box sx={{ display: 'flex', bgcolor: 'rgb(232, 232, 242)' }}>
                <div className=" col-sm-2" style={{ width: '120px', position: 'fixed', left: 0, top: 65 }}>
                    <SellarPgSidebar />
                </div>

                <div className="col-sm-9" style={{ position: 'absolute', left: 270, top: 65, width: '995px' }}>
                    <Box sx={{ display: 'flex', bgcolor: '#2979ff', padding: '10px 50px' }}>
                        <div style={{ color: 'white' }}>
                            <p style={{ fontSize: '20px', fontWeight: 400, padding: '40px 40px 0 0px' }}>Hello, Mohd Bilal,welcome to Abaris.com</p>
                            <p style={{ fontSize: '20px', fontWeight: 400 }}>Here in the My Abaris workbench you'll find tools and services to help your business thrive. Some features are only available when you upgrade!</p>
                        </div>
                        <div>
                            <img style={{ width: '250px', margin: '30px 50px 40px 50px' }} src="https://img.freepik.com/free-vector/discussion-concept-illustration_114360-5179.jpg?w=740&t=st=1697443085~exp=1697443685~hmac=40d321dad6dd2c34593b46b21ec9b0d929f14856bec2a0438c0309eb424c258b" alt="img" />
                        </div>
                    </Box>


                    <div className=" d-flex m-5">
                        <div>
                            <h5 style={{ fontWeight: 'bold' }}>Get to know Abaris.com</h5>
                            <p>Discover how your new membership works, and how we can help your business grow.</p>
                            <Button variant="outlined" sx={{ mt: 4 }}>Watch video</Button>
                        </div>
                        <div className="vedio-btn-bg">
                            <p style={{ margin: '40px 0 0 100px' }}><GoPlay style={{ fontSize: '60px', color: 'lightgrey' }} /></p>
                        </div>
                    </div>

                    <div className=" d-flex mb-5 justify-content-between" style={{ backgroundColor: '#0d47a1', padding: '10px 40px' }}>
                        <img style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%', marginTop: '5px' }} src="https://tse2.explicit.bing.net/th?id=OIP.lg2cHJKM6-YQVdw7C8q4owHaHa&pid=Api&P=0&h=180" alt="img" />
                        <p style={{ color: 'white', marginTop: '10px' }}>Add your industry and view the according industry report</p>
                        <p style={{ color: 'white', marginTop: '10px', marginLeft: '20px' }}>Industry</p>
                        <select style={{ width: '240px', height: '30px', margin: '10px 0px' }}>
                            <option style={{ fontSize: '14px' }} selected>please select industry</option>
                            <option style={{ fontSize: '14px' }}>Agriculture</option>
                            <option style={{ fontSize: '14px' }}>Food & Beverage</option>
                            <option style={{ fontSize: '14px' }}>Apparel & Accessories</option>
                            <option style={{ fontSize: '14px' }}>Fabric & Textile Raw Material</option>
                            <option style={{ fontSize: '14px' }}>Electrical Equipme</option>
                        </select>
                        <Button size="small" variant="contained" sx={{ height: '30px', color: 'black', border: '1px solid white', mt: 1.3, bgcolor: 'white' }}>save </Button>
                    </div>

                    <div className="m-5">
                        <h6 style={{ fontWeight: 'bold', margin: '20px 0' }}>Industry Insight</h6>
                        <div>
                            <div style={{ width: '760px' }}>
                                <div className=" d-flex justify-content-between ms-5">
                                    <p style={{ fontSize: '18px' }}>Buyer Demand Trend</p>
                                    <p style={{ fontSize: '18px' }}>Buyer demand trend in past 2 years</p>
                                </div>
                                <div>
                                    <LineChart
                                        width={800}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="pv"
                                            stroke="#8884d8"
                                            activeDot={{ r: 8 }}
                                        />
                                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                    </LineChart>
                                </div>
                            </div>

                            <div style={{ margin: '30px 50px' }}>
                                <p>Hot search keywords this month</p>
                                <div>
                                    <TableContainer className=" d-flex" style={{ border: '1px solid lightgrey', width: '680px' }}>
                                        <Table sx={{ border: '1px solid lightgrey', width: '180px' }}>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold', color: 'white', bgcolor: '#0d47a1' }}>Hot Searches</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>laptop</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>tablet</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>computer</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>ipad</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>ssd</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>mouse pad</TableCell>
                                            </TableRow>
                                        </Table>



                                        <Table sx={{ border: '1px solid white', width: '500px' }}>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold', color: 'white', bgcolor: '#0d47a1' }}>Popularity</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ display: 'flex' }}>1389 <LinearProgress variant="determinate" value={100} style={{ height: '12px', width: '400px', margin: '5px 0 0 25px' }} /> </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ display: 'flex' }}>534  <LinearProgress variant="determinate" value={60} style={{ height: '12px', width: '400px', margin: '5px 0 0 30px' }} /></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ display: 'flex' }}>404  <LinearProgress variant="determinate" value={50} style={{ height: '12px', width: '400px', margin: '5px 0 0 30px' }} /></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ display: 'flex' }}>306  <LinearProgress variant="determinate" value={40} style={{ height: '12px', width: '400px', margin: '5px 0 0 30px' }} /></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ display: 'flex' }}>238  <LinearProgress variant="determinate" value={30} style={{ height: '12px', width: '400px', margin: '5px 0 0 30px' }} /></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ display: 'flex' }}>211  <LinearProgress variant="determinate" value={20} style={{ height: '12px', width: '400px', margin: '5px 0 0 30px' }} /></TableCell>
                                            </TableRow>

                                        </Table>
                                    </TableContainer>
                                </div>

                                <div style={{ border: '1px solid grey', margin: '30px 0 0 0px', textAlign: 'center', width: '300px', height: '30px', borderRadius: '10px', padding: '0px' }}>
                                    <p>View the full industry report <KeyboardArrowRightIcon /> </p>
                                </div>
                            </div>

                            <div className=" d-flex" style={{ border: '1px solid lightgrey', borderRadius: '10px' }}>
                                <img style={{ width: '150px' }} src="https://s.alicdn.com/@img/tfs/TB1CQbaVFP7gK0jSZFjXXc5aXXa-292-264.png" alt="img" />
                                <div style={{ width: '540px', margin: '30px ' }}>
                                    <h5>Remember to verify your email</h5>
                                    <p>Verify your email address now to receive the Abaris.com Seller Playbook, full of step-by-step instructions and insider tips.</p>
                                </div>
                                <Button variant="outlined" sx={{ height: '40px', marginTop: '50px' }}>verify now</Button>
                            </div>
                        </div>

                    </div>

                    <Box>
                        <div className=" d-flex ms-4">
                            <h6 className=" ms-5 mt-1">Recommended Quotations</h6>
                            <p style={{ marginLeft: '40px' }}>Seize your opportunities and reach millions of buyers</p>
                        </div>
                        <div>
                            <Swiper
                                pagination={pagination}
                                modules={[Pagination]}
                                style={{ height: '840px' }}
                            >
                                <SwiperSlide>
                                    <div className=" d-flex flex-wrap ms-5">
                                        <div style={{ width: '400px', padding: '20px', border: '1px solid lightgrey', margin: '20px', height: '360px', borderRadius: '6px' }}>
                                            <NavLink style={{ textDecoration: 'none', marginLeft: '8px' }}>Womens Leather Belt with Metal Accents/Details</NavLink>
                                            <div className=" d-flex flex-wrap mt-3">
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Destination : </span>NorthAmerica</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Quantity : </span>Piece/Pieces</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Time Left : </span>12 day</p>
                                            </div>
                                            <p style={{ fontSize: '14px', margin: '10px' }}>I am looking for a women&#39;s black leather belt that looks like the pictures below.It should have metal details</p>
                                            <img style={{ height: '24px', margin: '10px 10px 20px 10px' }} src={medalImg} alt="img" /> <br />
                                            <NavLink to='/' style={{ fontSize: '14px', margin: '10px' }}>
                                                <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '16px' }}>
                                                    Upgrade and quote now</button>
                                            </NavLink>
                                        </div>
                                        <div style={{ width: '400px', padding: '20px', border: '1px solid lightgrey', margin: '20px', height: '360px', borderRadius: '6px' }}>
                                            <NavLink style={{ textDecoration: 'none', marginLeft: '8px' }}>Silicone rubber coated fiberglass sleeve</NavLink>
                                            <div className=" d-flex flex-wrap mt-3">
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Destination : </span>Europe</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Quantity : </span>Meter/Meters</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Time Left : </span>9 day</p>
                                            </div>
                                            <p style={{ fontSize: '14px', margin: '10px' }}>Ni hao,can you produce those silicone foam rubber coated glassfiber hose?The surca is not smooth,</p>
                                            <img style={{ height: '24px', margin: '10px 10px 20px 10px' }} src={medalImg} alt="img" /> <br />
                                            <NavLink to='/' style={{ fontSize: '14px', margin: '10px' }}>
                                                <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '16px' }}>
                                                    Upgrade and quote now</button>
                                            </NavLink>
                                        </div>
                                        <div style={{ width: '400px', padding: '20px', border: '1px solid lightgrey', margin: '20px', height: '360px', borderRadius: '6px' }}>
                                            <NavLink style={{ textDecoration: 'none', marginLeft: '8px' }}>CR80 Plastic Programmable QR Code Scan NFC NTAG 216 Google Review NFC Card</NavLink>
                                            <div className=" d-flex flex-wrap mt-3">
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Destination : </span>NorthAmerica</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Quantity : </span>Piece/Pieces</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Time Left : </span>9 day</p>
                                            </div>
                                            <p style={{ fontSize: '14px', margin: '10px' }}>Material:PVC,PET,BioPVC,Clear PVC,BioPaper Size:86*54*0.76mm</p>
                                            <img style={{ height: '24px', margin: '10px 10px 20px 10px' }} src={medalImg} alt="img" /> <br />
                                            <NavLink to='/' style={{ fontSize: '14px', margin: '10px' }}>
                                                <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '16px' }}>
                                                    Upgrade and quote now</button>
                                            </NavLink>
                                        </div>
                                        <div style={{ width: '400px', padding: '20px', border: '1px solid lightgrey', margin: '20px', height: '360px', borderRadius: '6px' }}>
                                            <NavLink style={{ textDecoration: 'none', marginLeft: '8px' }}>protein shaker</NavLink>
                                            <div className=" d-flex flex-wrap mt-3">
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Destination : </span>Asia</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Quantity : </span>Piece/Pieces</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Time Left : </span>12 day</p>
                                            </div>
                                            <p style={{ fontSize: '14px', margin: '10px' }}>Looking forward to produce this small request,who can fulfill,would be able to partner with on our next larger</p>
                                            <img style={{ height: '24px', margin: '10px 10px 20px 10px' }} src={medalImg} alt="img" /> <br />
                                            <NavLink to='/' style={{ fontSize: '14px', margin: '10px' }}>
                                                <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '16px' }}>
                                                    Upgrade and quote now</button>
                                            </NavLink>
                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=" d-flex flex-wrap ms-5">
                                        <div style={{ width: '400px', padding: '20px', border: '1px solid lightgrey', margin: '20px', height: '360px', borderRadius: '6px' }}>
                                            <NavLink style={{ textDecoration: 'none', marginLeft: '8px' }}>100%Pure Linen Hemstitch Dinner Napkins Natural Fabric Hemstitch Handcrafted Linen Napkins</NavLink>
                                            <div className=" d-flex flex-wrap mt-3">
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Destination : </span>NorthAmerica</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Quantity : </span>Piece/Pieces</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Time Left : </span>6 day</p>
                                            </div>
                                            <p style={{ fontSize: '14px', margin: '10px' }}>What is the shipping cost?Size:48 x 48 cm Weight:35g Keyword:natural linen napkin Colour:white </p>
                                            <img style={{ height: '24px', margin: '10px 10px 20px 10px' }} src={medalImg} alt="img" /> <br />
                                            <NavLink to='/' style={{ fontSize: '14px', margin: '10px' }}>
                                                <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '16px' }}>
                                                    Upgrade and quote now</button>
                                            </NavLink>
                                        </div>
                                        <div style={{ width: '400px', padding: '20px', border: '1px solid lightgrey', margin: '20px', height: '360px', borderRadius: '6px' }}>
                                            <NavLink style={{ textDecoration: 'none', marginLeft: '8px' }}>BIMINI TOP ALUMINUM BAR</NavLink>
                                            <div className=" d-flex flex-wrap mt-3">
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Destination : </span>Europe</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Quantity : </span>Piece/Pieces</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Time Left : </span>11 day</p>
                                            </div>
                                            <p style={{ fontSize: '14px', margin: '10px' }}>Please see drawing.this is one piece tube-it will have bimini fitting in each end that fit inside.,</p>
                                            <img style={{ height: '24px', margin: '10px 10px 20px 10px' }} src={medalImg} alt="img" /> <br />
                                            <NavLink to='/' style={{ fontSize: '14px', margin: '10px' }}>
                                                <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '16px' }}>
                                                    Upgrade and quote now</button>
                                            </NavLink>
                                        </div>
                                        <div style={{ width: '400px', padding: '20px', border: '1px solid lightgrey', margin: '20px', height: '360px', borderRadius: '6px' }}>
                                            <NavLink style={{ textDecoration: 'none', marginLeft: '8px' }}>New design wholesale summer customized popular sun mini hat head umbrella</NavLink>
                                            <div className=" d-flex flex-wrap mt-3">
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Destination : </span>NorthAmerica</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Quantity : </span>Piece/Pieces</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Time Left : </span>12 day</p>
                                            </div>
                                            <p style={{ fontSize: '14px', margin: '10px' }}>Hello.I Wish to buy 25,000 of this with custom design.How much is it?Feature:hat umbrella Size:12 inches</p>
                                            <img style={{ height: '24px', margin: '10px 10px 20px 10px' }} src={medalImg} alt="img" /> <br />
                                            <NavLink to='/' style={{ fontSize: '14px', margin: '10px' }}>
                                                <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '16px' }}>
                                                    Upgrade and quote now</button>
                                            </NavLink>
                                        </div>
                                        <div style={{ width: '400px', padding: '20px', border: '1px solid lightgrey', margin: '20px', height: '360px', borderRadius: '6px' }}>
                                            <NavLink style={{ textDecoration: 'none', marginLeft: '8px' }}>New Spot Hot Sale PU Leather Romantic Sweet Luxury Gift Box Makeup Bags Small Travel Jewelry</NavLink>
                                            <div className=" d-flex flex-wrap mt-3">
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Destination : </span>Asia</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Quantity : </span>Piece/Pieces</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Time Left : </span>13 day</p>
                                            </div>
                                            <p style={{ fontSize: '14px', margin: '10px' }}>Is it possible to make this without anything on the bottom-remove the ring part?I am looking for a nice leather box</p>
                                            <img style={{ height: '24px', margin: '10px 10px 20px 10px' }} src={medalImg} alt="img" /> <br />
                                            <NavLink to='/' style={{ fontSize: '14px', margin: '10px' }}>
                                                <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '16px' }}>
                                                    Upgrade and quote now</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=" d-flex flex-wrap ms-5">
                                        <div style={{ width: '400px', padding: '20px', border: '1px solid lightgrey', margin: '20px', height: '360px', borderRadius: '6px' }}>
                                            <NavLink style={{ textDecoration: 'none', marginLeft: '8px' }}>100%Pure Linen Hemstitch Dinner Napkins Natural Fabric Hemstitch Handcrafted Linen Napkins</NavLink>
                                            <div className=" d-flex flex-wrap mt-3">
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Destination : </span>NorthAmerica</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Quantity : </span>Piece/Pieces</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Time Left : </span>6 day</p>
                                            </div>
                                            <p style={{ fontSize: '14px', margin: '10px' }}>What is the shipping cost?Size:48 x 48 cm Weight:35g Keyword:natural linen napkin Colour:white </p>
                                            <img style={{ height: '24px', margin: '10px 10px 20px 10px' }} src={medalImg} alt="img" /> <br />
                                            <NavLink to='/' style={{ fontSize: '14px', margin: '10px' }}>
                                                <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '16px' }}>
                                                    Upgrade and quote now</button>
                                            </NavLink>
                                        </div>
                                        <div style={{ width: '400px', padding: '20px', border: '1px solid lightgrey', margin: '20px', height: '360px', borderRadius: '6px' }}>
                                            <NavLink style={{ textDecoration: 'none', marginLeft: '8px' }}>BIMINI TOP ALUMINUM BAR</NavLink>
                                            <div className=" d-flex flex-wrap mt-3">
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Destination : </span>Europe</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Quantity : </span>Piece/Pieces</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Time Left : </span>11 day</p>
                                            </div>
                                            <p style={{ fontSize: '14px', margin: '10px' }}>Please see drawing.this is one piece tube-it will have bimini fitting in each end that fit inside.,</p>
                                            <img style={{ height: '24px', margin: '10px 10px 20px 10px' }} src={medalImg} alt="img" /> <br />
                                            <NavLink to='/' style={{ fontSize: '14px', margin: '10px' }}>
                                                <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '16px' }}>
                                                    Upgrade and quote now</button>
                                            </NavLink>
                                        </div>
                                        <div style={{ width: '400px', padding: '20px', border: '1px solid lightgrey', margin: '20px', height: '360px', borderRadius: '6px' }}>
                                            <NavLink style={{ textDecoration: 'none', marginLeft: '8px' }}>New design wholesale summer customized popular sun mini hat head umbrella</NavLink>
                                            <div className=" d-flex flex-wrap mt-3">
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Destination : </span>NorthAmerica</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Quantity : </span>Piece/Pieces</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Time Left : </span>12 day</p>
                                            </div>
                                            <p style={{ fontSize: '14px', margin: '10px' }}>Hello.I Wish to buy 25,000 of this with custom design.How much is it?Feature:hat umbrella Size:12 inches</p>
                                            <img style={{ height: '24px', margin: '10px 10px 20px 10px' }} src={medalImg} alt="img" /> <br />
                                            <NavLink to='/' style={{ fontSize: '14px', margin: '10px' }}>
                                                <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '16px' }}>
                                                    Upgrade and quote now</button>
                                            </NavLink>
                                        </div>
                                        <div style={{ width: '400px', padding: '20px', border: '1px solid lightgrey', margin: '20px', height: '360px', borderRadius: '6px' }}>
                                            <NavLink style={{ textDecoration: 'none', marginLeft: '8px' }}>New Spot Hot Sale PU Leather Romantic Sweet Luxury Gift Box Makeup Bags Small Travel Jewelry</NavLink>
                                            <div className=" d-flex flex-wrap mt-3">
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Destination : </span>Asia</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Quantity : </span>Piece/Pieces</p>
                                                <p style={{ margin: '10px', fontSize: '14px' }}><span style={{ color: 'grey' }}>Time Left : </span>13 day</p>
                                            </div>
                                            <p style={{ fontSize: '14px', margin: '10px' }}>Is it possible to make this without anything on the bottom-remove the ring part?I am looking for a nice leather box</p>
                                            <img style={{ height: '24px', margin: '10px 10px 20px 10px' }} src={medalImg} alt="img" /> <br />
                                            <NavLink to='/' style={{ fontSize: '14px', margin: '10px' }}>
                                                <button style={{ border: '1px solid blue', backgroundColor: 'white', borderRadius: '20px', color: 'blue', padding: '4px 12px', fontSize: '16px' }}>
                                                    Upgrade and quote now</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <NavLink to='/' style={{ display: 'flex', justifyContent: 'center', margin: '30px 10px' }}>
                                <Button variant="contained" style={{ borderRadius: '20px', padding: '4px 32px', fontSize: '14px', marginLeft: '10px' }}>
                                    Update your industry now</Button>
                            </NavLink>
                        </div>
                    </Box>

                    <Box sx={{ margin: '30px' }}>
                        <div className=" d-flex">
                            <h5 style={{ margin: '10px 30px' }}>Grow your margins with a suite of tools built for B2B sale</h5>
                            <NavLink to='/' style={{ margin: '10px' }}>
                                <Button size="small" variant="outlined" style={{ borderRadius: '20px', padding: '4px 32px', fontSize: '14px', marginLeft: '30px' }}>
                                    Upgrade for unlimited access</Button>
                            </NavLink>
                        </div>
                        <div style={{ scrollBehavior: 'smooth', overflowX: 'scroll', margin: '20px' }}>
                            <div style={{ display: 'inline-flex' }}>
                                <div style={{ width: '300px', margin: '20px' }}>
                                    <h4><TbBuildingStore style={{ marginRight: '5px', marginBottom: '4px' }} /> Set up storefront</h4>
                                    <p>Showcase your brand and capabilities online - no design or coding required.</p>
                                    <Button variant="outlined" style={{ borderRadius: '20px', padding: '4px 32px', fontSize: '14px' }}>
                                        learn more
                                    </Button>
                                </div>
                                <div style={{ width: '300px', margin: '20px' }}>
                                    <h4><BsBox style={{ marginRight: '5px', marginBottom: '4px' }} />Post products</h4>
                                    <p>Optimize your product listings for SEO with posting suggestions based on site data – including titles, keywords, and more.</p>
                                    <Button variant="outlined" style={{ borderRadius: '20px', padding: '4px 32px', fontSize: '14px' }}>
                                        learn more
                                    </Button>
                                </div>
                                <div style={{ width: '300px', margin: '20px' }}>
                                    <h4><BiNetworkChart style={{ marginRight: '5px', marginBottom: '4px' }} t />Get traffic</h4>
                                    <p>Increasing awareness and conversions with our marketing tools like Keyword Advertising</p>
                                    <Button variant="outlined" style={{ borderRadius: '20px', padding: '4px 32px', fontSize: '14px' }}>
                                        learn more
                                    </Button>
                                </div>
                                <div style={{ width: '300px', margin: '20px' }}>
                                    <h4><RiEditCircleLine style={{ marginRight: '5px', marginBottom: '4px' }} />Find new business</h4>
                                    <p>Easily find and connect with buyers in the Request for Quotation (RFQ) market.</p>
                                    <Button variant="outlined" style={{ borderRadius: '20px', padding: '4px 32px', fontSize: '14px' }}>
                                        learn more
                                    </Button>
                                </div>
                                <div style={{ width: '300px', margin: '20px' }}>
                                    <h4><TbBrandGoogleAnalytics style={{ marginRight: '5px', marginBottom: '4px' }} />Analyze data</h4>
                                    <p>Visualize your store’s metrics and historical data, and get intelligent suggestions based on platform information.</p>
                                    <Button variant="outlined" style={{ borderRadius: '20px', padding: '4px 32px', fontSize: '14px' }}>
                                        learn more
                                    </Button>
                                </div>


                            </div>
                        </div>
                    </Box>

                    <Box>
                        <div className=" d-flex ms-5 mt-5">
                            <h5 style={{ margin: '10px 30px' }}>Choose an Abaris.com seller plan to launch your business growth</h5>
                            <NavLink to='/' style={{ margin: '10px' }}>
                                <Button size="small" variant="outlined" style={{ borderRadius: '20px', padding: '4px 32px', fontSize: '14px', marginLeft: '40px' }}>
                                    select a plan</Button>
                            </NavLink>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                            <img style={{ width: '800px' }} src="https://s.alicdn.com/@img/tfs/TB1lvesqk9l0K4jSZFKXXXFjpXa-2032-692.png" alt="img" />
                        </div>
                    </Box>


                    <Box sx={{ display: 'flex', mt: 5, bgcolor: 'lightgrey', pt: 2 }}>
                        <p style={{ fontSize: '14px', paddingLeft: '40px' }}>Copyright © 1996-2023 Abaris  InterMESH Ltd. All rights reserved.</p>
                        <p style={{ fontSize: '14px', position: 'absolute', right: 30 }}>Terms of Use - Privacy Policy - Link to Us</p>
                    </Box>

                </div>
            </Box >
        </>
    )
}

export default SellerPage
