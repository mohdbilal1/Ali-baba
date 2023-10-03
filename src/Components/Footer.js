import { Box, List, ListItemText } from "@mui/material"
import { AiFillInstagram } from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <Box sx={{ display: 'flex', ml: 5, mr: 5, pt: 2,borderTop:'1px solid lightgrey' }}>
                <Box>
                    <List sx={{ ml: 3, mr: 3 }}>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}><b style={{ fontSize: '18px' }}>Get support</b></ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Help Center</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Live chat</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Check order status</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Refunds</ListItemText>
                    </List>
                </Box>
                <Box>
                    <List sx={{ ml: 3, mr: 3 }}>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}><b style={{ fontSize: '18px' }}> Trade Assurance</b></ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Safe and easy payments</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Money-back policy</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>On-time shipping</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>After-sales protections</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Product monitoring services</ListItemText>
                    </List>
                </Box>
                <Box>
                    <List sx={{ ml: 3, mr: 3 }}>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}><b style={{ fontSize: '18px' }}>Source on Abaris.com</b></ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Request for Quotation</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Membership program</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Abaris.com Logistics</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Sales tax and VAT</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Abaris.com Reads</ListItemText>

                    </List>
                </Box>
                <Box>
                    <List sx={{ ml: 3, mr: 3 }}>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}><b style={{ fontSize: '18px' }}>Sell on Abaris.com</b></ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Start selling</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Seller Central</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}> Become a Verified Supplier</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Partnerships</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Download the app for suppliers</ListItemText>
                    </List>
                </Box>
                <Box>
                    <List sx={{ ml: 3, mr: 3 }}>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}><b style={{ fontSize: '18px' }}>Get to know us</b></ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>About Abaris.com</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Corporate responsibility</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>News center</ListItemText>
                        <ListItemText sx={{ fontSize: '14px', m: '10px 0' }}>Careers</ListItemText>

                    </List>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', pt: 4 ,borderTop:'1px solid lightgrey',ml: 5, mr: 5,mt:3}}>
                <Box>
                    <TwitterIcon sx={{ marginLeft: '20px',color:'grey', fontSize: '35px' }} />
                    <AiFillInstagram style={{ marginLeft: '20px',color:'grey', fontSize: '35px' }} />
                    <FacebookIcon sx={{ marginLeft: '20px',color:'grey', fontSize: '35px' }} />
                    <LinkedInIcon sx={{ marginLeft: '20px',color:'grey', fontSize: '35px' }} />
                    <YouTubeIcon sx={{ marginLeft: '20px',color:'grey', fontSize: '35px' }} />
                    <EmailIcon sx={{ marginLeft: '20px',color:'grey', fontSize: '35px' }} />
                </Box>
                <Box sx={{ position: 'absolute', right: 30, display: 'flex' }}>
                     <p style={{paddingTop:'5px'}}>Trade on the go with the <NavLink style={{fontWeight:'bold',color:'black'}}>Abaris.com app</NavLink> </p>
                    <img style={{height:'40px',marginLeft:'20px'}} src="https://s.alicdn.com/@img/imgextra/i4/O1CN018KnDNq1JleFgkjLRq_!!6000000001069-2-tps-447-132.png" alt="img" />
                    <img style={{height:'40px',marginLeft:'20px'}} src="https://s.alicdn.com/@img/imgextra/i4/O1CN01i9Aj641atkjJJ9I6y_!!6000000003388-2-tps-396-132.png" alt="img" />
                </Box>
            </Box>
           
            <Box sx={{ display: 'flex',mt:3 ,bgcolor:'lightgrey',pt:2}}>
                <p style={{ fontSize: '14px', paddingLeft: '40px' }}>Copyright © 1996-2023 Abaris  InterMESH Ltd. All rights reserved.</p>
                <p style={{ fontSize: '14px', position: 'absolute', right: 30 }}>Terms of Use - Privacy Policy - Link to Us</p>
            </Box>

        </>
    )
}

export default Footer

