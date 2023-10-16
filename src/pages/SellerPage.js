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



const SellerPage = () => {
    return (
        <>
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
                            <p style={{ fontSize: '20px', fontWeight: 400, padding: '40px 40px 0 0px' }}>Hello, Mohd Bilal,welcome to Alibaba.com</p>
                            <p style={{ fontSize: '20px', fontWeight: 400 }}>Here in the My Alibaba workbench you'll find tools and services to help your business thrive. Some features are only available when you upgrade!</p>
                        </div>
                        <div>
                            <img style={{ width: '250px', margin: '30px 50px 40px 50px' }} src="https://img.freepik.com/free-vector/discussion-concept-illustration_114360-5179.jpg?w=740&t=st=1697443085~exp=1697443685~hmac=40d321dad6dd2c34593b46b21ec9b0d929f14856bec2a0438c0309eb424c258b" alt="img" />
                        </div>
                    </Box>

                    <div className=" d-flex m-5">
                        <div>
                            <h5 style={{ fontWeight: 'bold' }}>Get to know Alibaba.com</h5>
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

                            <div style={{margin:'30px 50px'}}>
                                <p>Hot search keywords this month</p>
                                <div>
                                    <TableContainer  className=" d-flex" style={{border: '1px solid lightgrey',width:'680px'}}>
                                        <Table sx={{ border: '1px solid lightgrey', width: '180px' }}>
                                            <TableRow>
                                                <TableCell sx={{fontWeight:'bold',color:'white',bgcolor:'#0d47a1'}}>Hot Searches</TableCell>
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
                                                <TableCell  sx={{fontWeight:'bold',color:'white',bgcolor:'#0d47a1'}}>Popularity</TableCell>
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

                                <div style={{border:'1px solid grey',margin:'30px 0 0 0px',textAlign:'center',width:'300px',height:'30px',borderRadius:'10px',padding:'0px'}}>
                                    <p>View the full industry report <KeyboardArrowRightIcon/> </p>
                                </div>
                            </div>

                            <div className=" d-flex" style={{border:'1px solid lightgrey',borderRadius:'10px'}}>
                                <img style={{width:'150px'}} src="https://s.alicdn.com/@img/tfs/TB1CQbaVFP7gK0jSZFjXXc5aXXa-292-264.png" alt="img" />
                                <div style={{width:'540px',margin:'30px '}}>
                                    <h5>Remember to verify your email</h5>
                                    <p>Verify your email address now to receive the Alibaba.com Seller Playbook, full of step-by-step instructions and insider tips.</p>
                                </div>
                                <Button variant="outlined" sx={{height:'40px',marginTop:'50px'}}>verify now</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Box >
        </>
    )
}

export default SellerPage
