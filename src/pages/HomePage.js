import { Box, Button, List, TextField, Typography, } from "@mui/material"
import Navbar from '../Components/Navbar'
import { NavLink, useNavigate } from "react-router-dom"
import ListIcon from '@mui/icons-material/List';
import '../stylecss/homeStyle.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { FaGlobeAsia } from 'react-icons/fa';
import { FiServer } from 'react-icons/fi';
import { FaRegHandshake } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { BsFillBuildingsFill } from 'react-icons/bs';
import AppleIcon from '@mui/icons-material/Apple';
import { BiLogoPlayStore } from 'react-icons/bi';
import EastIcon from '@mui/icons-material/East';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import SellIcon from '@mui/icons-material/Sell';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Footer from "../Components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const HomePage = () => {
  const navigate=useNavigate();
  const onConsumrElectronic=()=>{
    navigate('/consumer-electronics')
  }
  return (
    <>
      <Navbar />

      <Box>
        <List sx={{ display: 'flex', bgcolor: 'black', p: 2 }}>
          <div className=" d-flex">
            <li className='nav-list-sec'>
              <NavLink to='/'><ListIcon /> All categories</NavLink>
            </li>
            <li className='nav-list-sec'>
              <NavLink to='/'>Featured selections</NavLink>
              <Box className='featureHidden p-3 m-4'>
                <div className=" d-flex justify-content-center align-items-center">
                  <div className='text-center' style={{ border: '1px solid grey', padding: '50px', margin: '20px', borderRadius: '10px', width: '300px', height: '200px' }}>
                    <MilitaryTechIcon sx={{ fontSize: '52px', mb: '15px' }} />
                    <p>Top ranking</p>
                  </div>
                  <div className='text-center' style={{ border: '1px solid grey', padding: '50px', margin: '20px', borderRadius: '10px', width: '300px', height: '200px' }}>
                    <FiberNewIcon sx={{ fontSize: '52px', mb: '15px' }} />
                    <p>New arrivals</p>
                  </div>
                  <div className='text-center' style={{ border: '1px solid grey', padding: '50px', margin: '20px', borderRadius: '10px', width: '300px', height: '200px' }}>
                    <SellIcon sx={{ fontSize: '52px', mb: '15px' }} />
                    <p>Savings spotlight</p>
                  </div>
                  <div className='text-center' style={{ padding: '20px 50px 50px 50px', margin: '20px', borderRadius: '10px', width: '300px', height: '200px' }}>
                    <p> Sample Center</p>
                    <p>Tips</p>
                    <p>LIVE</p>
                    <p>Global suppliers</p>
                  </div>
                </div>
              </Box>
            </li>
            <li className='nav-list-sec'>
              <NavLink to='/'>Trade Assurance</NavLink>
              <Box className='tradeHidden p-3 m-4'>
                <div className=" d-flex justify-content-center align-items-center">
                  <div className='text-center' style={{ width: '400px', paddingLeft: '10px' }}>
                    <img style={{ height: '50px' }} src="https://s.alicdn.com/@img/imgextra/i2/O1CN01d18R1Z1H1GuiHHzpS_!!6000000000697-55-tps-212-32.svg" alt="img" />
                    <h4 style={{ fontSize: '32px', margin: '20px 0' }}>Enjoy protection from payment to delivery</h4>
                    <Button variant="contained" sx={{ borderRadius: '20px' }}>learn more</Button>
                  </div>
                  <div className='text-center d-flex flex-wrap' style={{ padding: '10px 0 10px 10px', margin: '0 0 0 120px', width: '800px' }}>
                    <div className=" d-flex" style={{ backgroundColor: 'rgb(242, 249, 232)', borderRadius: '10px', margin: '20px', padding: '20px', width: '320px' }}>
                      <img src="https://s.alicdn.com/@img/imgextra/i4/O1CN010KADAP2638vcOIcv4_!!6000000007605-55-tps-70-70.svg" alt="img" />
                      <p style={{ margin: '20px 0 0 10px' }}>Safe & easy payments</p>
                      <EastIcon sx={{ ml: 2, mt: 3 }} />
                    </div>
                    <div className=" d-flex" style={{ backgroundColor: 'rgb(242, 249, 232)', borderRadius: '10px', margin: '20px', padding: '20px', width: '320px' }}>
                      <img src="https://s.alicdn.com/@img/imgextra/i3/O1CN01viHX2926YHrS5jYvf_!!6000000007673-55-tps-70-70.svg" alt="img" />
                      <p style={{ margin: '20px 0 0 10px' }}>Money-back policy</p>
                      <EastIcon sx={{ ml: 4, mt: 3 }} />
                    </div>
                    <div className=" d-flex" style={{ backgroundColor: 'rgb(242, 249, 232)', borderRadius: '10px', margin: '20px', padding: '20px', width: '320px' }}>
                      <img src="https://s.alicdn.com/@img/imgextra/i2/O1CN01Zsnn5f28yyAQPbYyz_!!6000000008002-55-tps-70-70.svg" alt="img" />
                      <p style={{ margin: '20px 0 0 10px' }}>Shipping & logistics services</p>
                      <EastIcon sx={{ ml: 2, mt: 3 }} />
                    </div>
                    <div className=" d-flex" style={{ backgroundColor: 'rgb(242, 249, 232)', borderRadius: '10px', margin: '20px', padding: '20px', width: '320px' }}>
                      <img src="https://s.alicdn.com/@img/imgextra/i4/O1CN01hoxDoj1HV2eSjAU58_!!6000000000762-55-tps-70-70.svg" alt="img" />
                      <p style={{ margin: '20px 0 0 10px' }}>After-sales protections</p>
                      <EastIcon sx={{ ml: 2, mt: 3 }} />
                    </div>
                  </div>
                </div>
              </Box>
            </li>
          </div>
          <div className=" d-flex" style={{ position: 'absolute', right: 35 }}>
            <li className='nav-list-sec'>
              <NavLink to='/'>Buyer Central</NavLink>
            </li>
            <li className='nav-list-sec'>
              <NavLink to='/'>Become a supplier</NavLink>

              <Box className='supplierHidden p-3 m-4'>
                <div className=" d-flex justify-content-center align-items-center">
                  <div className='text-center' style={{ border: '1px solid grey', padding: '50px', margin: '20px', borderRadius: '10px', width: '300px', height: '200px' }}>
                    <FaGlobeAsia style={{ fontSize: '52px', marginBottom: '15px' }} />
                    <p>For suppliers based outside of Mainland China</p>
                  </div>
                  <div className='text-center' style={{ border: '1px solid grey', padding: '50px', margin: '20px', borderRadius: '10px', width: '300px', height: '200px' }}>
                    <FiServer style={{ fontSize: '52px', marginBottom: '15px' }} />
                    <p>For suppliers based in Mainland China</p>
                  </div>
                  <div className='text-center' style={{ border: '1px solid grey', padding: '50px', margin: '20px', borderRadius: '10px', width: '300px', height: '200px' }}>
                    <FaRegHandshake style={{ fontSize: '52px', marginBottom: '15px' }} />
                    <p>Partner Program</p>
                  </div>
                </div>
              </Box>
            </li>
            <li className='nav-list-sec'>
              <NavLink to='/'>Help Center</NavLink>
              <Box className='helpHidden p-3 m-4'>
                <div className=" d-flex justify-content-center align-items-center">
                  <div className='text-center' style={{ border: '1px solid grey', padding: '50px', margin: '20px', borderRadius: '10px', width: '300px', height: '200px' }}>
                    <FaUserTie style={{ fontSize: '52px', marginBottom: '15px' }} />
                    <p>For buyers</p>
                  </div>
                  <div className='text-center' style={{ border: '1px solid grey', padding: '50px', margin: '20px', borderRadius: '10px', width: '300px', height: '200px' }}>
                    <BsFillBuildingsFill style={{ fontSize: '52px', marginBottom: '15px' }} />
                    <p>For suppliers </p>
                  </div>
                  <div className='text-center' style={{ padding: '30px 50px 50px 50px', margin: '20px', borderRadius: '10px', width: '300px', height: '200px' }}>
                    <p> Open a dispute</p>
                    <p>Report IPR infringement</p>
                    <p>Report abuse</p>
                  </div>
                </div>
              </Box>
            </li>
            <li className='nav-list-sec'>
              <NavLink to='/'>Get the app</NavLink>
              <Box className='getAppHidden p-3 m-4'>
                <div className=" d-flex justify-content-center align-items-center">
                  <div className='text-center' style={{ padding: '50px', margin: '20px', borderRadius: '10px', height: '200px' }}>
                    <h4>Get the Abarish.com app</h4>
                    <p>Find products, communicate with suppliers, and manage and pay for your orders with the Abaris.com app anytime, anywhere.</p>
                    <NavLink>Learn more</NavLink>
                  </div>
                  <div className='text-center' style={{ border: '1px solid grey', padding: '50px', margin: '20px', borderRadius: '10px', height: '200px' }}>
                    <Button size="small" sx={{ bgcolor: 'black', color: 'white', mb: 3 }}><AppleIcon sx={{ mr: 1, fontSize: '30px' }} />Get it on Apple Store</Button>
                    <Button size="small" sx={{ bgcolor: 'black', color: 'white' }}><BiLogoPlayStore style={{ marginRight: '8px', fontSize: '30px' }} />Get it on Google play Store</Button>
                  </div>
                  <div className='text-center' style={{ padding: '30px 50px 50px 50px', margin: '20px', borderRadius: '10px', width: '300px', height: '200px' }}>
                    <h1>QR Code</h1>
                  </div>
                </div>
              </Box>
            </li>
          </div>

        </List>
      </Box>

      <div className="search-area-div">
        <h1>The leading B2B ecommerce platform for global trade</h1>
        <div className=" d-flex" style={{
          padding: '5px', border: '1px solid grey', borderRadius: '20px', width: '700px',
          backgroundColor: 'white', margin: '60px 0 20px 220px', height: '60px'
        }}>
          <select style={{
            border: 'none', width: '90px', borderRight: '1px solid black', paddingRight: '5px'
          }}>
            <option selected="Products" value="Products">Products</option>
            <option value="Manufacturers">Manufacturers</option>
            <option value="Suppliers">Suppliers</option>
          </select>
          <TextField variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            size="large"
            sx={{ bgcolor: 'white', borderRadius: 'none', border: 'none', pl: 2, pt: 1, width: '500px' }}
            placeholder="What are your looking for?"
          />
          <Button size="large" variant="contained" sx={{ borderRadius: '20px', ml: 5 }}><SearchOutlinedIcon sx={{ mr: 1 }} />Search</Button>
        </div>
        <div className=" d-flex" style={{ margin: '50px 0 0 220px' }}>
          <h4 className=" text-white">Frequently searched:</h4>
          <Button sx={{ color: 'white', border: '1px solid white', ml: 2, fontWeight: 'bold' }}>women's clothing</Button>
          <Button sx={{ color: 'white', border: '1px solid white', ml: 2, fontWeight: 'bold' }}>shoes</Button>
          <Button sx={{ color: 'white', border: '1px solid white', ml: 2, fontWeight: 'bold' }}>airpods</Button>
          <Button sx={{ color: 'white', border: '1px solid white', ml: 2, fontWeight: 'bold' }}>shoes men</Button>
        </div>
      </div>

      <Box sx={{ display: 'flex', bgcolor: 'rgb(24, 12, 10)', padding: '60px 30px' }}>
        <div className="cardd-div">
          <img style={{ width: '50px', borderRadius: '50%', padding: '5px', boxShadow: '1px 1px 5px grey', backgroundColor: 'white' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01IqRqQr1UYmu3AOqmF_!!6000000002530-2-tps-96-96.png" alt="img" />
          <Typography sx={{ fontSize: '25px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Millions of business offerings</Typography>
          <Typography sx={{ color: 'white' }}>Explore products and suppliers for your business from millions of offerings worldwide.</Typography>
        </div>
        <div className="cardd-div">
          <img style={{ width: '50px', borderRadius: '50%', padding: '5px', boxShadow: '1px 1px 5px grey', backgroundColor: 'white' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01yTM8EE1GOLFPjalEn_!!6000000000612-2-tps-96-96.png" alt="img" />
          <Typography sx={{ fontSize: '25px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Assured quality and transactions</Typography>
          <Typography sx={{ color: 'white' }}>Ensure production quality from verified suppliers, with your orders protected from payment to delivery.</Typography>
        </div>
        <div className="cardd-div">
          <img style={{ width: '50px', borderRadius: '50%', padding: '5px', boxShadow: '1px 1px 5px grey', backgroundColor: 'white' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01TFyXvb261lkMrez96_!!6000000007602-2-tps-96-96.png" alt="img" />
          <Typography sx={{ fontSize: '25px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>One-stop trading solution</Typography>
          <Typography sx={{ color: 'white' }}>Order seamlessly from product/supplier search to order management, payment, and fulfillment.</Typography>
        </div>
        <div className="cardd-div">
          <img style={{ width: '50px', borderRadius: '50%', padding: '5px', boxShadow: '1px 1px 5px grey', backgroundColor: 'white' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN01xIFSCp1DYT9tsnHfj_!!6000000000228-2-tps-96-96.png" alt="img" />
          <Typography sx={{ fontSize: '25px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Personalized trading experience</Typography>
          <Typography sx={{ color: 'white' }}>Get curated benefits, such as discounted samples and dedicated support, tailored to your business growth stage.</Typography>
        </div>
      </Box>

      <Box sx={{ display: 'flex', mt: 3 }}>
        <div className=" col-sm-8">
          <h1 style={{ margin: '50px 50px 0 50px', fontSize: '55px' }}>Explore millions of offerings tailored to your business needs</h1>
        </div>
        <div className=" col-sm-4 d-flex flex-wrap">
          <div style={{ margin: '20px', width: '140px' }}>
            <Typography sx={{ color: 'rgb(170, 11, 11)', fontSize: '40px', fontWeight: 'bold' }}>200M+</Typography>
            <Typography sx={{ fontSize: '18px' }}>products</Typography>
          </div>
          <div style={{ margin: '20px', width: '140px' }}>
            <Typography sx={{ color: 'rgb(170, 11, 11)', fontSize: '40px', fontWeight: 'bold' }}>200K+</Typography>
            <Typography sx={{ fontSize: '18px' }}>suppliers</Typography>
          </div>
          <div style={{ margin: '20px', width: '140px' }}>
            <Typography sx={{ color: 'rgb(170, 11, 11)', fontSize: '40px', fontWeight: 'bold' }}>5,900</Typography>
            <Typography sx={{ fontSize: '18px' }}>product categories</Typography>
          </div>
          <div style={{ margin: '20px', width: '140px' }}>
            <Typography sx={{ color: 'rgb(170, 11, 11)', fontSize: '40px', fontWeight: 'bold' }}>200+</Typography>
            <Typography sx={{ fontSize: '18px' }}>countries and regions</Typography>
          </div>
        </div>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', pl: 3, mt: 2 }}>
        <div className="catgroy-div" onClick={onConsumrElectronic}>
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i2/O1CN01lTlEA71idHDZyDnE1_!!6000000004435-2-tps-200-200.png" alt="img" />
          <Typography>Consumer Electronics</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i2/O1CN01FNDTXs1Js3bqyZjbx_!!6000000001083-2-tps-200-200.png" alt="img" />
          <Typography>Home & Garden</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i4/O1CN01SjYZ821m8pTY9ruQ1_!!6000000004910-2-tps-200-200.png" alt="img" />
          <Typography>Industrial Machinery</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i1/O1CN01SECwAR1ehcde7HSzA_!!6000000003903-2-tps-200-200.png" alt="img" />
          <Typography>Mother,Kids & Toys</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i1/O1CN012sGbIl1o81tW54KPo_!!6000000005179-2-tps-200-200.png" alt="img" />
          <Typography>Jewelry, Eyewear</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i3/O1CN01gRUkNN1sW5HWJb8Me_!!6000000005773-2-tps-200-200.png" alt="img" />
          <Typography>Beauty</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i4/O1CN01c8xN8n1Xl6DAeTUDe_!!6000000002963-2-tps-200-200.png" alt="img" />
          <Typography>Packaging & Printing</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i1/O1CN01GqpTkM1kCNBbXXtfT_!!6000000004647-2-tps-200-200.png" alt="img" />
          <Typography>Shoes & Accessories</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i4/O1CN01yvRa9M1eCTa1vhbZ9_!!6000000003835-2-tps-200-200.png" alt="img" />
          <Typography>Tools & Hardware</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i2/O1CN01wmYqD51WrDtOCBmav_!!6000000002841-2-tps-200-200.png" alt="img" />
          <Typography>Construction & Real Estate</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i2/O1CN01pq9lU028SRrrtj79B_!!6000000007931-2-tps-200-200.png" alt="img" />
          <Typography>Furniture</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i4/O1CN01VAlsfc1P9zBujbtCk_!!6000000001799-2-tps-200-200.png" alt="img" />
          <Typography>Home Appliances</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i4/O1CN01ICig8T1LX6qUzxNqk_!!6000000001308-2-tps-200-200.png" alt="img" />
          <Typography>Personal Care & Cleaning</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i3/O1CN01z9EKU11JLXUJcG1Vh_!!6000000001012-2-tps-200-200.png" alt="img" />
          <Typography>Lights & Lighting</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i3/O1CN01Xyr1VF29Tee5GeZrf_!!6000000008069-2-tps-200-200.png" alt="img" />
          <Typography>Vehicles & Transportation</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i1/O1CN01xIExD31nnQ4HHosm7_!!6000000005134-2-tps-200-200.png" alt="img" />
          <Typography>Food & Beverage</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i1/O1CN01Ybvy8D1SCgMy5CYuG_!!6000000002211-2-tps-200-199.png" alt="img" />
          <Typography>Agriculture</Typography>
        </div>
        <div className="catgroy-div">
          <img className="category-img" src="https://s.alicdn.com/@img/imgextra/i4/O1CN01rOPzCa1ZbbEGb8a30_!!6000000003213-2-tps-200-200.png" alt="img" />
          <Typography>Gifts & Crafts</Typography>
        </div>
      </Box>

      <Box className='product-div p-3'>
        <h1 className=" p-4">Discover your next business opportunity</h1>
        <div className='d-flex'>
          <div className=" col-sm-3" style={{ width: '400px', margin: '0 10px' }}>
            <div className=" d-flex p-3">
              <h4>Top ranking</h4>
              <NavLink style={{ marginLeft: '92px', color: 'black', fontWeight: 'bold' }}>view more</NavLink>
            </div>
            <div>
              <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
              >
                <SwiperSlide>
                  <div style={{ backgroundColor: 'white', borderRadius: '20px', paddingBottom: '30px' }}>
                    <div className="p-4">
                      <h5>Most Popular</h5>
                      <p>Rubber Smart Watches</p>
                    </div>
                    <div>
                      <img style={{ marginLeft: '20px', height: '350px' }} src="https://s.alicdn.com/@sc04/kf/Hb8d481a0ec2e4779be411159a64d5f3bg.png_350x350.jpg" alt="img" />
                    </div>
                    <div className=" d-flex">
                      <img style={{ width: '110px', margin: '10px', borderRadius: '20px' }} src="https://s.alicdn.com/@sc04/kf/H3d8363215b9549bf890ae302304dd036T.png_350x350.jpg" alt="img" />
                      <img style={{ width: '110px', margin: '10px', borderRadius: '20px' }} src="https://s.alicdn.com/@sc04/kf/He3a1200e097d46a0ab7a66fea6d83e34K.jpg_350x350.jpg" alt="img" />
                      <img style={{ width: '110px', margin: '10px', borderRadius: '20px' }} src="https://s.alicdn.com/@sc04/kf/Hc4eb2569fb3d430eb96090d5e1113bf33.jpg_350x350.jpg" alt="img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div style={{ backgroundColor: 'white', borderRadius: '20px', paddingBottom: '30px' }}>
                    <div className="p-4">
                      <h5>Most Popular</h5>
                      <p>Men's Solid Shorts</p>
                    </div>
                    <div>
                      <img style={{ width: '380px', height: '350px' }} src="https://s.alicdn.com/@sc04/kf/Ha14d0de3e19f409a832927168957b302F.jpg_350x350.jpg" alt="img" />
                    </div>
                    <div className=" d-flex">
                      <img style={{ width: '110px', margin: '10px', borderRadius: '20px' }} src="https://s.alicdn.com/@sc04/kf/H6751a882510d486f9bf2bb2478d2631cQ.jpg_350x350.jpg" alt="img" />
                      <img style={{ width: '110px', margin: '10px', borderRadius: '20px' }} src="https://s.alicdn.com/@sc04/kf/H711f89344b684f2e9b012dd4f37ef3761.jpg_350x350.jpg" alt="img" />
                      <img style={{ width: '110px', margin: '10px', borderRadius: '20px' }} src="https://s.alicdn.com/@sc04/kf/Hbbba9d419b85472e8c70d97bb0aff591Z.jpg_350x350.jpg" alt="img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div style={{ backgroundColor: 'white', borderRadius: '20px', paddingBottom: '30px' }}>
                    <div className="p-4">
                      <h5>Most Popular</h5>
                      <p>Flat sandals for summer</p>
                    </div>
                    <div>
                      <img style={{ borderRadius: '20px', width: '400px', height: '350px' }} src="https://s.alicdn.com/@sc04/kf/Hcd84898843804ef3871a60990624a050M.jpg_350x350.jpg" alt="img" />
                    </div>
                    <div className=" d-flex">
                      <img style={{ borderRadius: '20px', width: '110px', margin: '10px' }} src="https://s.alicdn.com/@sc04/kf/H5c5a85cb58e940f799d3f428efb894b9M.png_350x350.jpg" alt="img" />
                      <img style={{ borderRadius: '20px', width: '110px', margin: '10px' }} src="https://s.alicdn.com/@sc04/kf/H997089368a8845b081f0ce8daa9613a3e.jpg_350x350.jpg" alt="img" />
                      <img style={{ borderRadius: '20px', width: '110px', margin: '10px' }} src="https://s.alicdn.com/@sc04/kf/H8b33e04adbae4d4495c76890a7d983d2d.jpg_350x350.jpg" alt="img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div style={{ backgroundColor: 'white', borderRadius: '20px', paddingBottom: '30px' }}>
                    <div className="p-4">
                      <h5>Most Popular</h5>
                      <p>Soccer wear for men</p>
                    </div>
                    <div>
                      <img style={{ height: '350px' }} src="https://s.alicdn.com/@sc04/kf/H66d9147aaab647788133d09c38caa951K.jpg_350x350.jpg" alt="img" />
                    </div>
                    <div className=" d-flex">
                      <img style={{ width: '110px', margin: '10px' }} src="https://s.alicdn.com/@sc04/kf/He06faacfbc5049d99052071a06d93633b.jpg_350x350.jpg" alt="img" />
                      <img style={{ width: '110px', margin: '10px' }} src="https://s.alicdn.com/@sc04/kf/H77bef326c76b42f6acf17bbd186782c04.jpg_350x350.jpg" alt="img" />
                      <img style={{ width: '110px', margin: '10px' }} src="https://s.alicdn.com/@sc04/kf/H77bef326c76b42f6acf17bbd186782c04.jpg_350x350.jpg" alt="img" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div style={{ backgroundColor: 'white', borderRadius: '20px', paddingBottom: '30px' }}>
                    <div className="p-4">
                      <h5>Most Popular</h5>
                      <p>Foldable Drones</p>
                    </div>
                    <div>
                      <img style={{ height: '350px' }} src="https://s.alicdn.com/@sc04/kf/H235848edc42a4d26ac88fa0becde6025s.jpg_350x350.jpg" alt="img" />
                    </div>
                    <div className=" d-flex">
                      <img style={{ width: '110px', marginLeft: '10px' }} src="https://s.alicdn.com/@sc04/kf/Hf5b7319cb7dc47638369d2fedf2acf9aN.jpg_350x350.jpg" alt="img" />
                      <img style={{ width: '110px', marginLeft: '10px' }} src="https://s.alicdn.com/@sc04/kf/Haded8c80e3544a8883e8d6414a48ec11b.jpg_350x350.jpg" alt="img" />
                      <img style={{ width: '110px', marginLeft: '10px' }} src="https://s.alicdn.com/@sc04/kf/H09393982753f4eefb3851e502dd448fcP.jpg_350x350.jpg" alt="img" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className=" col-sm-4" style={{ width: '400px' }}>
            <div>
              <div className=" d-flex p-3">
                <h4>New arrivals</h4>
                <NavLink style={{ marginLeft: '140px', color: 'black', fontWeight: 'bold' }}>view more</NavLink>
              </div>
              <div className=" bg-white p-3 rounded-4">
                <h5 className="p-3 ms-3">56,200+ products added today</h5>
                <div className=" d-flex flex-wrap ms-3">
                  <div style={{ padding: '10px', margin: '10px', borderRadius: '20px', backgroundColor: 'lightgrey' }}>
                    <img style={{ width: '120px', borderRadius: '20px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc04/kf/He6bcc4cc5c8d41c4b6a3a88b971b4327V.jpg_350x350.jpg" alt="img" />
                  </div>
                  <div style={{ padding: '10px', margin: '10px', borderRadius: '20px', backgroundColor: 'lightgrey' }}>
                    <img style={{ width: '120px', borderRadius: '20px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc04/kf/Hd0662cbce5824a3c8e4f81c7e6dd0005Z.jpg_350x350.jpg" alt="img" />
                  </div>
                  <div style={{ padding: '10px', margin: '10px', borderRadius: '20px', backgroundColor: 'lightgrey' }}>
                    <img style={{ width: '120px', borderRadius: '20px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc04/kf/H3a7b76b2cbe14d30b7787a38b87ecb6f6.png_350x350.jpg" alt="img" />
                  </div>
                  <div style={{ padding: '10px', margin: '10px', borderRadius: '20px', backgroundColor: 'lightgrey' }}>
                    <img style={{ width: '120px', borderRadius: '20px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc04/kf/H8d5e43a7f9e245608155bb10e9853502g.jpg_350x350.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white d-flex p-4 mt-4 rounded-4">
              <div style={{ padding: '10px', margin: '10px', borderRadius: '20px', backgroundColor: 'lightgrey' }}>
                <img style={{ width: '150px', height: '100px', borderRadius: '20px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc04/kf/Hed056627ed0344c6968e1a4842185e3f3.jpg_350x350.jpg" alt="img" />
              </div>
              <div className=" ms-3">
                <h5 className="m-0 mt-3">New this week</h5>
                <p>Products from Verified Suppliers only</p>
              </div>
            </div>
          </div>
          <div className=" col-sm-4" style={{ width: '380px', margin: '0 0 0 20px' }}>
            <div className=" d-flex p-3">
              <h4>Savings spotlight</h4>
              <NavLink style={{ marginLeft: '62px', color: 'black', fontWeight: 'bold' }}>view more</NavLink>
            </div>
            <div className=" bg-white d-flex p-2 rounded-4">
              <div style={{ padding: '10px', margin: '10px', borderRadius: '20px', backgroundColor: 'lightgrey' }}>
                <img style={{ width: '150px', height: '100px', borderRadius: '20px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc04/kf/Hdf97776a8e4e4ee7824edf20ad63b0cfM.jpg_350x350.jpg" alt="img" />
              </div>
              <div className=" ms-3">
                <h5 className="mt-4">Lowest prices in 180 days</h5>
              </div>
            </div>
            <div className=" bg-white mt-4 rounded-4 pb-3">
              <h4 className="p-3">Deals on best sellers</h4>
              <div style={{ padding: '10px', margin: '10px', borderRadius: '20px', backgroundColor: 'lightgrey' }}>
                <img style={{ borderRadius: '20px', width: '340px', height: '360px', objectFit: 'cover' }} src="https://s.alicdn.com/@sc04/kf/Hd1c10be48f464a59afbc294069f6e2abV.jpg_350x350.jpg" alt="img" />
              </div>
            </div>
          </div>

        </div>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography sx={{ fontSize: '32px', fontWeight: 'bold', m: '20px 60px' }}>Source direct-from-factory</Typography>
        <div style={{ display: 'flex', padding: '20px 30px' }}>
          <div className="directfactory-div">
            <Typography sx={{ fontSize: '20px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Take factory live tours </Typography>
            <div style={{ marginTop: '290px', marginLeft: '20px' }}>
              <NavLink style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>View LIVE</NavLink>
            </div>
          </div>
          <div className="getsample-div">
            <Typography sx={{ fontSize: '20px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Get live samples</Typography>
            <div style={{ marginTop: '290px', marginLeft: '20px' }}>
              <NavLink style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>View more</NavLink>
            </div>
          </div>
          <div className="topManufacture-div">
            <Typography sx={{ fontSize: '20px', m: '10px 0', fontWeight: 'bold', color: 'white' }}>Connect with top-ranking Manufacturers</Typography>
            <div style={{ marginTop: '255px', marginLeft: '20px' }}>
              <NavLink style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>View more</NavLink>
            </div>
          </div>
        </div>
      </Box>

      <Box className='box-bg text-white'>
        <h1>Trade with confidence from production quality to purchase protection</h1>
        <div className=" d-flex ps-5">
          <div className="quality-product col-sm-6" style={{ backdropFilter: 'blur(20px)' }}>
            <Typography sx={{ fontSize: '20px', m: '20px 0' }}>Ensure production quality with</Typography>
            <img style={{ height: '70px' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01cnsiSd1sFb5vxUBwd_!!6000000005737-2-tps-1200-210.png" alt="img" />
            <Typography sx={{ m: '20px 0 30px 0' }}>Connect with a variety of suppliers, including Custom Manufacturers, Brand Holders, and Multispecialty Suppliers, that have verified credentials and capabilities.</Typography>
            <Button sx={{ border: '1px solid white', color: 'white', borderRadius: '20px' }}><PlayCircleIcon sx={{ mr: 0.5 }} />watch the video</Button>
            <NavLink style={{ marginLeft: '20px', color: 'white', fontWeight: 'bold' }}>Learn more</NavLink>
          </div>
          <div className="quality-product col-sm-6" style={{ backdropFilter: 'blur(20px)' }}>
            <Typography sx={{ fontSize: '20px', m: '20px 0' }}>Protect your purchases with</Typography>
            <img style={{ height: '70px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01I0ebSF1UCntpAivUU_!!6000000002482-2-tps-1200-210.png" alt="img" />
            <Typography sx={{ m: '20px 0 30px 0' }}>Source confidently for your business knowing that orders made through Trade Assurance on Abaris.com are protected, from payment to delivery and after-sales.</Typography>
            <Button sx={{ border: '1px solid white', color: 'white', borderRadius: '20px' }}><PlayCircleIcon sx={{ mr: 0.5 }} />watch the video</Button>
            <NavLink style={{ marginLeft: '20px', color: 'white', fontWeight: 'bold' }}>Learn more</NavLink>
          </div>

        </div>
      </Box>

      <Box>
        <h1 style={{ margin: '40px 50px' }}>Find suppliers by country or region</h1>
        <Swiper
          navigation={true} 
          modules={[Navigation]}
          slidesPerView={7}
          spaceBetween={4}
          grabCursor={true}
        >
          <SwiperSlide>
            <div style={{ margin: '60px' }}>
              <img style={{ width: '40px', height: '30px', objectFit: 'cover' }} src="https://s.alicdn.com/@img/tfs/TB1aUq6cgoQMeJjy0FoXXcShVXa-48-48.png" alt="img" />
              <p>Japan</p>
            </div></SwiperSlide>
          <SwiperSlide>
            <div style={{ margin: '60px' }}>
              <img style={{ width: '40px', height: '30px', objectFit: 'cover' }} src="https://s.alicdn.com/@img/tfs/TB18omIbIrI8KJjy0FhXXbfnpXa-48-48.png" alt="img" />
              <p>USA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ margin: '60px' }}>
              <img style={{ width: '40px', height: '30px', objectFit: 'cover' }} src="https://s.alicdn.com/@img/tfs/TB1U8_xAeH2gK0jSZJnXXaT1FXa-268-179.jpg" alt="img" />
              <p>Italy</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ margin: '60px' }}>
              <img style={{ width: '40px', height: '30px', objectFit: 'cover' }} src="https://s.alicdn.com/@img/tps/TB1QwGEPFXXXXXUaXXXXXXXXXXX-48-48.png" alt="img" />
              <p>Turkey</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ margin: '60px' }}>
              <img style={{ width: '40px', height: '30px', objectFit: 'cover' }} src="https://s.alicdn.com/@img/tps/TB1tQC4PFXXXXaOXpXXXXXXXXXX-48-48.png" alt="img" />
              <p>Malaysia</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ margin: '60px' }}>
              <img style={{ width: '40px', height: '30px', objectFit: 'cover' }} src="https://s.alicdn.com/@img/tps/TB1WVfXPFXXXXXvXpXXXXXXXXXX-48-48.png" alt="img" />
              <p>South Korea</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ margin: '60px' }}>
              <img style={{ width: '40px', height: '30px', objectFit: 'cover' }} src="https://s.alicdn.com/@img/tps/TB1fky3PFXXXXcuXpXXXXXXXXXX-48-48.png" alt="img" />
              <p>Vietnam</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ margin: '60px' }}>
              <img style={{ width: '40px', height: '30px', objectFit: 'cover' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01Sbi1Tm28po6huT3zL_!!6000000007982-2-tps-48-48.png" alt="img" />
              <p>Russia</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ margin: '60px' }}>
              <img style={{ width: '40px', height: '30px', objectFit: 'cover' }} src="https://s.alicdn.com/@img/tps/TB1xQi8PFXXXXaRXpXXXXXXXXXX-48-48.png" alt="img" />
              <p>Thailand</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Box>

      <Box className='review-box'>
        <div className=" text-center p-5">
          <h1 style={{ fontSize: '52px', fontWeight: 'bold', letterSpacing: 1, color: 'brown' }}>Personalize your trading experience with curated benefits</h1>
          <p style={{ margin: '30px 0', fontSize: '24px' }}>Grow and succeed with curated benefits offered by Abaris.com, whether you are a startup business needing the essentials to start sourcing or a well-established enterprise looking for tools and services for more complex orders.</p>
          <Box>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              <SwiperSlide>
                <div style={{ padding: '100px 50px', display: 'flex' }}>
                  <div className="m-3 ms-4">
                    <img style={{ width: '170px' }} src="https://s.alicdn.com/@img/imgextra/i3/O1CN01wllRR11a9Uiq6syoP_!!6000000003287-2-tps-352-352.png_350x350.jpg" alt="img" />
                  </div>
                  <div className="p-2 ms-3" style={{ marginTop: '60px' }}>
                    <h4>Dr. Sayed Ibrahim</h4>
                    <p style={{ color: 'grey' }}>Founder of SprinJene</p>
                  </div>
                  <div style={{ width: '600px', padding: '20px', marginTop: '30px' }}>
                    <Typography sx={{ fontSize: '25px' }}>
                      “Once I discovered Abaris.com, I was amazed at how many options I had with suppliers from all over the world.”
                    </Typography>
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ padding: '100px 50px', display: 'flex' }}>
                  <div className="m-3 ms-4">
                    <img style={{ width: '170px' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN01cBGvqy1R9eJnhkpv5_!!6000000002069-2-tps-352-352.png_350x350.jpg" alt="img" />
                  </div>
                  <div className="p-2 ms-3" style={{ marginTop: '60px' }}>
                    <h4>Ron Williams and Tonja Williams</h4>
                    <p style={{ color: 'grey' }}>Founder and CEO (respectively) of Ron Williams Fitness</p>
                  </div>
                  <div style={{ width: '600px', padding: '20px', marginTop: '30px' }}>
                    <Typography sx={{ fontSize: '25px' }}>
                      “Abaris.com is a game changer for small businesses like us. We were able to find the exact product we needed and I don’t think we could have sourced anything without Abaris.com.”
                    </Typography>
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ padding: '100px 50px', display: 'flex' }}>
                  <div className="m-3 ms-4">
                    <img style={{ width: '170px' }} src="https://s.alicdn.com/@img/imgextra/i4/O1CN01XrvnBG1YDUxJ0l5Bh_!!6000000003025-2-tps-352-352.png_350x350.jpg" alt="img" />
                  </div>
                  <div className="p-2 ms-3" style={{ marginTop: '60px' }}>
                    <h4>Eva Jane</h4>
                    <p style={{ color: 'grey' }}>Founder of Eva Jane Beauty</p>
                  </div>
                  <div style={{ width: '600px', padding: '20px', marginTop: '30px' }}>
                    <Typography sx={{ fontSize: '25px' }}>
                      “As an entrepreneur who is deeply involved in the Beauty industry, I have been very devoted to creating my original products. Abaris.com has been my trusted partner in this process.”
                    </Typography>
                  </div>

                </div>
              </SwiperSlide>
            </Swiper>
          </Box>
        </div>
      </Box>

      <Box className='box-div-bg'>
        <div className=" text-center p-5">
          <h1 style={{ color: 'white', fontSize: '52px', fontWeight: 'bold', letterSpacing: 1 }}>Ready to get started?</h1>
          <p style={{ color: 'white', margin: '30px 0', fontSize: '24px' }}>Explore millions of products from trusted suppliers by signing up today!</p>
          <Button sx={{
            mt: 2, borderRadius: '50px', bgcolor: 'orangered', color: 'white', fontWeight: 'bold'
            , p: '12px 40px', fontSize: '18px', ":hover": { bgcolor: 'orangered', color: 'white' }
          }}>Sign up</Button>
        </div>
      </Box>

      <Footer />
    </>
  )
}

export default HomePage



