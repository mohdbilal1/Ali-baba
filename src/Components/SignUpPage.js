import { Box, Button, Checkbox, Divider, FormControlLabel, List, ListItemText, Radio, RadioGroup, TextField } from "@mui/material"
import imgeLogo from '../assets/mainlogo.png'
import { NavLink } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { AiFillInstagram } from 'react-icons/ai';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const SignUpPage = () => {
    return (
        <>
            <div className='p-2 shadow'>
                <NavLink to="/">
                    <img className='logoImg' src={imgeLogo} alt="logo-img" />
                </NavLink>
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'center',mt:5 }}>
                <Box style={{ padding: "10px", width: '550px', padding:'20px 0',border: '1px solid lightgrey',borderRadius:'10px',boxShadow:'1px 1px 4px lightgrey' }}>

                    <div className=' d-flex mt-3'>
                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 50px' }}>Country/region:</p>
                        <select style={{ width: '300px', padding: '8px 10px' }}>
                            <option>Please Select</option>
                            <option>India</option>
                            <option>Germany</option>
                        </select>
                    </div>
                    <div className=' d-flex m-2'>
                        <p style={{ margin: '7px  20px', color: 'grey', }}>Please select trade role:</p>
                        <RadioGroup
                            row
                            sx={{ fontSize: '14px', m: '2px 0 0 20px' }}
                        >
                            <FormControlLabel value="Sell" control={<Radio />} label="Sell" />
                            <FormControlLabel value="Purchase" control={<Radio />} label="Purchase" />
                            <FormControlLabel value="Both" control={<Radio />} label="Both" />
                        </RadioGroup>
                    </div>

                    <div className='m-3 d-flex'>
                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 46px' }}>Email Address:</p>
                        <TextField size='small' placeholder='It will be used to sign in your account' sx={{ width: '300px' }} />
                    </div>

                    <div className='m-3 d-flex'>
                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 35px' }}>Login Password:</p>
                        <TextField size='small' placeholder='Password' sx={{ width: '300px' }} />
                    </div>
                    <div className='m-3 d-flex'>
                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 18px' }}>Confirm Password:</p>
                        <TextField size='small' placeholder='Password' sx={{ width: '300px' }} />
                    </div>
                    <div className='d-flex ms-3 me-3'>
                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 13px 0 32px' }}>Company Name:</p>
                        <TextField size='small' placeholder='e.g. A brand or register company name' sx={{ width: '300px' }} />
                    </div>
                    <div className='m-3 d-flex'>
                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 72px' }}>Full Name:</p>
                        <TextField size='small' placeholder='First Name' sx={{ width: '142px' }} />
                        <TextField size='small' placeholder='Last Name' sx={{ width: '142px', ml: 2 }} />
                    </div>
                    <div className='m-3 d-flex' style={{ marginLeft: '150px', padding: '0 0 0 10px' }}>
                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 116px' }}>Tel:</p>
                        <TextField size='small' sx={{ width: '60px' }} placeholder='91' />
                        <TextField size='small' sx={{ width: '60px', ml: 2 }} placeholder='area' />
                        <TextField size='small' sx={{ width: '147px', ml: 2 }} placeholder='phone number' />
                    </div>
                    <div className='m-3 d-flex'>
                        <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 66px' }}> Verification:</p>
                    </div>
                    <div className='m-3 d-flex'>
                        <FormControlLabel control={<Checkbox />} label="" sx={{margin:'-30px 0 0 60px'}}/>
                        <p style={{ fontSize: '14px',margin:'10px 50px 10px 10px' }}>I agree to (a)Free Membership Agreement, (b) Terms of Use, and (c) Privacy Policy. I agree to receive more information from Alibaba.com about its products and services.</p>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Button sx={{padding:'10px 30px',m:'10px 0 30px 0' }} variant='contained' >Agree and Register</Button>
                    </div>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2, bgcolor: '#424242', color: 'white',mt:5 }}>
                <Box sx={{ width: '350px' }}>
                    <List sx={{ mr: 3 }}>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>
                            <a href="/">
                                <img className='img-fluid' style={{ width: '100%', height: '45px', borderRadius: '8px', objectFit: 'contain', margin: '10px 0 0 -10px' }} src={imgeLogo} alt="logo-img" />
                            </a>
                        </ListItemText>
                        <ListItemText sx={{ margin: '30px' }}><h1 style={{ fontSize: '26px', fontWeight: 'bold' }}>Reach millions of B2B buyers globally</h1></ListItemText>
                        <Divider sx={{ border: '1px solid white' }} />
                        <Box sx={{ mt: 3 }}>
                            <TwitterIcon sx={{ marginLeft: '10px', color: 'white', fontSize: '45px' }} />
                            <AiFillInstagram style={{ marginLeft: '20px', color: 'white', fontSize: '45px' }} />
                            <FacebookIcon sx={{ marginLeft: '20px', color: 'white', fontSize: '45px' }} />
                            <LinkedInIcon sx={{ marginLeft: '20px', color: 'white', fontSize: '45px' }} />
                        </Box>
                    </List>
                </Box>
                <Box>
                    <List sx={{ ml: 5, mr: 3 }}>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}><b style={{ fontSize: '18px' }}> Platform</b></ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Why Abaris.com</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>How to sell</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Product features</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Services</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>RFQ</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Storefront</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>KWA</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Keywords trends</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Product showcas</ListItemText>
                    </List>
                </Box>
                <Box>
                    <List sx={{ ml: 4, mr: 3 }}>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}><b style={{ fontSize: '18px' }}> Solutions</b></ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>B2B ecommerce</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Wholesale ecommerce</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>International trade</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Global buy, global sell</ListItemText>
                    </List>
                </Box>
                <Box>
                    <List sx={{ ml: 4, mr: 3 }}>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}><b style={{ fontSize: '18px' }}>Pricing</b></ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Success stories</ListItemText>
                    </List>
                </Box>
                <Box>
                    <List sx={{ ml: 4, mr: 3 }}>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}><b style={{ fontSize: '18px' }}>  Resources</b></ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Business blogs</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Webinars</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Industry reports</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Playbooks</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Learning center</ListItemText>

                    </List>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', bgcolor: 'lightgrey', pt: 2 }}>
                <p style={{ fontSize: '14px', paddingLeft: '40px' }}>Copyright © 1996-2023 Abaris  InterMESH Ltd. All rights reserved.</p>
                <p style={{ fontSize: '14px', position: 'absolute', right: 30 }}>Terms of Use - Privacy Policy - Link to Us</p>
            </Box>
        </>
    )
}

export default SignUpPage
