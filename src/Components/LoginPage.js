import { Box, Button, Checkbox, Divider, FormControlLabel, TextField } from '@mui/material'
import imgeLogo from '../assets/mainlogo.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import '../stylecss/loginPageStyle.css'
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    return (
        <>
            <Box>
                <div className='p-4'>
                    <NavLink to="/">
                        <img className='logoImg' src={imgeLogo} alt="logo-img" />
                    </NavLink>
                </div>
                <div className='bg-img-login'>
                    <Box sx={{ width: '400px', height: '430px', border: '3px solid lightgrey', bgcolor: 'white', padding: '20px', borderRadius: '6px',position:'absolute',right:'60px' }}>
                        <div className='m-3'>
                            <p style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 2px 2px' }}>Account:</p>
                            <TextField size='small' placeholder='Email Address or Member ID' fullWidth />
                        </div>
                        <div className='m-3'>
                            <div className=' d-flex justify-content-between '>
                                <p style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 2px 2px' }}>Password:</p>
                                <p style={{ fontSize: '14px', color: 'darkblue' }}>Forgot password?</p>

                            </div>
                            <TextField size='small' placeholder='Password' fullWidth />

                        </div>
                        <p className='p-tag'><FormControlLabel className='labl' control={<Checkbox />} label="Stay signed in. Details." /></p>
                        <div className='m-3'>
                            <Button variant='contained' sx={{ m: '10px 0 0 0' }} fullWidth>Sign In </Button>
                        </div>
                        <div className=' d-flex justify-content-between '>
                            <p style={{ color: 'darkblue', margin: '0 20px', fontSize: '14px' }}>Mobile number sign in</p>
                            <p style={{ color: 'darkblue', margin: '0 20px', fontSize: '14px' }}>Create Account</p>
                        </div>
                        <Divider sx={{ border: '1px solid grey', m: '20px 20px 0 20px' }} />
                        <div className=' d-flex m-3'>
                            <p>Sign in with: </p>
                            <Box sx={{ textAlign: 'center', mt: -0.5 }}>
                                <TwitterIcon sx={{ marginLeft: '10px', color: '#0d47a1', fontSize: '35px' }} />
                                <GoogleIcon sx={{ marginLeft: '20px', color: '#0F9D58', fontSize: '35px' }} />
                                <FacebookIcon sx={{ marginLeft: '20px', color: '#0d47a1', fontSize: '35px' }} />
                                <LinkedInIcon sx={{ marginLeft: '20px', color: '#0d47a1', fontSize: '35px' }} />
                            </Box>
                        </div>
                    </Box>
                </div>
            </Box>


        </>
    )
}

export default LoginPage
