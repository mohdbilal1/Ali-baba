
import { Box, Button, Checkbox, Divider, FormControlLabel, Modal, Radio, RadioGroup, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import '../stylecss/navbarStyle.css'

const SigninSignUpModel = ({ signInOpen, setSigInOpen }) => {
    const navigate = useNavigate();

    const handleClose = () => {
        setSigInOpen(false);
        navigate('/');
    }
    return (
        <>
            <Modal
                open={signInOpen}
                onClose={handleClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box sx={{ width: '600px', height: '550px', mb: '100px', mt: '100px', bgcolor: 'white', borderRadius: '10px', position: 'relative', overflow: 'scroll' }}>
                    <CloseIcon onClick={handleClose} sx={{ position: 'absolute', right: 10, top: 12, bgcolor: 'white' }} />
                    <div>
                        <Tabs>
                            <TabsList style={{ margin: '0 30px 30px 20px', borderBottom: '1px solid lightgrey' }}>
                                <Tab className='signin-tabs' value={0}>Sign In</Tab>
                                <Tab className='signin-tabs' value={1}>Sign Up</Tab>
                            </TabsList>
                            <TabPanel value={0}>
                                <div className='m-3'>
                                    <p style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 2px 2px' }}>Account:</p>
                                    <TextField size='small' placeholder='Email Address or Member ID' fullWidth />
                                </div>
                                <div className='m-3'>
                                    <div className=' d-flex'>
                                        <p style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 2px 2px' }}>Password:</p>
                                        <p style={{ fontSize: '14px', color: 'darkblue', position: 'absolute', right: 30 }}>Forgot password?</p>

                                    </div>
                                    <TextField size='small' placeholder='Password' fullWidth />

                                </div>
                                <p className='p-tag'><FormControlLabel className='labl' control={<Checkbox />} label="Stay signed in. Details." /></p>
                                <div className='m-3'>
                                    <Button variant='contained' sx={{ m: '10px 0 0 0' }} fullWidth>Sign In </Button>
                                </div>
                                <p style={{ color: 'darkblue', margin: '0 20px', fontSize: '14px' }}>Mobile number sign in</p>
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
                                <div className=' m-3'>
                                    <p style={{ margin: 0, height: '24px' }}><FormControlLabel control={<Checkbox />} label="I agree to Free Membership Agreement." /></p>
                                    <p style={{ margin: 0, height: '24px' }}><FormControlLabel control={<Checkbox />} label="I agree to Receive marketing materials" /></p>
                                </div>
                            </TabPanel>
                            <TabPanel value={1} style={{ padding: "10px"}}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <TwitterIcon sx={{ marginLeft: '2px', color: '#0d47a1', fontSize: '35px' }} />
                                    <GoogleIcon sx={{ marginLeft: '20px', color: '#0F9D58', fontSize: '35px' }} />
                                    <FacebookIcon sx={{ marginLeft: '20px', color: '#0d47a1', fontSize: '35px' }} />
                                    <LinkedInIcon sx={{ marginLeft: '20px', color: '#0d47a1', fontSize: '35px' }} />
                                </Box>
                                <Divider sx={{ border: '1px solid grey', m: '10px 20px 0 20px' }} />

                                <div className=' d-flex mt-3'>
                                    <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 20px' }}>Country/region:</p>
                                    <select style={{ width: '400px', padding: '8px 10px' }}>
                                        <option>Please Select</option>
                                        <option>India</option>
                                        <option>Germany</option>
                                    </select>
                                </div>
                                <div className=' d-flex m-2'>
                                    <p style={{ margin: '7px  20px' }}>I'm here to:</p>
                                    <RadioGroup
                                        row
                                        sx={{ fontSize: '14px', m: '2px 0 0 20px' }}
                                    >
                                        <FormControlLabel value="Sell" control={<Radio />} label="Sell" />
                                        <FormControlLabel value="Purchase" control={<Radio />} label="Purchase" />
                                        <FormControlLabel value="Both" control={<Radio />} label="Both" />
                                    </RadioGroup>
                                </div>
                                <div style={{ marginLeft: '130px', padding: '0 20px' }}>
                                    <p style={{ fontSize: '12px', colorl: 'grey', marginBottom: 0 }}>Purchaser and seller will have different experience. And you may NOT change your role later.</p>
                                </div>
                                <div className='m-3 d-flex'>
                                    <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 74px' }}>Email:</p>
                                    <TextField size='small' placeholder='It will be used to sign in your account' sx={{ width: '400px' }} />
                                </div>

                                <div className='m-3 d-flex'>
                                    <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 46px' }}>Password:</p>
                                    <TextField size='small' placeholder='Password' sx={{ width: '400px' }} />
                                </div>
                                <div className='m-3 d-flex'>
                                    <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 70px' }}>Name:</p>
                                    <TextField size='small' placeholder='First Name' sx={{ width: '192px' }} />
                                    <TextField size='small' placeholder='Last Name' sx={{ width: '192px', ml: 2 }} />
                                </div>
                                <div className='d-flex ms-3 me-3'>
                                    <p style={{ fontSize: '16px', color: 'grey', margin: '0 13px 0 0' }}>Company Name:</p>
                                    <TextField size='small' placeholder='e.g. A brand or register company name' sx={{ width: '400px' }} />
                                </div>
                                <div style={{ marginLeft: '130px', padding: '0 20px' }}>
                                    <p style={{ fontSize: '12px', colorl: 'grey', marginBottom: 0 }}>Suppliers prefer to do business with companies.</p>
                                </div>
                                <div style={{ marginLeft: '130px', padding: '0 20px' }}>
                                    <p style={{ margin: 0, height: '24px' }}><FormControlLabel control={<Checkbox />} label="I'm a non-business entity" /></p>

                                </div>
                                <div className='m-3 d-flex' style={{ marginLeft: '150px', padding: '0 0 0 90px' }}>
                                    <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 2px' }}>Tel:</p>
                                    <TextField size='small' sx={{width:'60px'}} placeholder='086' />
                                    <TextField size='small' sx={{width:'100px',ml:2}} placeholder='0571' />
                                    <TextField size='small' sx={{width:'220px',ml:2}} placeholder='85022088' />
                                </div>
                                <div className='m-3 d-flex'>
                                    <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 30px' }}> Verification:</p>
                                    <Button size='small' sx={{ width: '400px' }} variant='contained' >Verify</Button>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>


                </Box>
            </Modal>
        </>
    )
}

export default SigninSignUpModel
