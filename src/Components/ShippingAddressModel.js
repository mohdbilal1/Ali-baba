
import { Box, Button, Modal, TextField, Typography } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';


const ShippingAddressModel = ({ open, setOpen }) => {
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false)
        navigate('/order-request')
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                    <Box sx={{ width: '800px', height: '500px', mb: 5, bgcolor: 'white', borderRadius: '10px', position: 'relative', overflow: 'scroll',overflowX:'hidden' }}>
                        <CloseIcon onClick={handleClose} sx={{ position: 'absolute', right: 10, top: 12, bgcolor: 'white' }} />
                        <Typography sx={{ p: '20px 0 10px 40px', fontSize: '18px' }}>Edit address<HelpOutlineOutlinedIcon sx={{ ml: 1, mb: 0.3, color: 'grey' }} /></Typography>
                        <div className=' d-flex justify-content-center align-items-center mt-3'>
                            <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 2px' }}>Country/region</p>
                            <select style={{ width: '500px', padding: '8px 10px' }}>
                                <option>Please Select</option>
                                <option>India</option>
                                <option>Germany</option>
                            </select>
                        </div>
                        <div className=' d-flex justify-content-center align-items-center mt-3'>
                            <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 6px' }}>Address Line 1</p>
                            <TextField size='small' placeholder='Select date' sx={{ width: '500px' }} />
                        </div>
                        <div className=' d-flex justify-content-center align-items-center mt-3'>
                            <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 2px' }}>Address Line 2</p>
                            <TextField size='small' placeholder='Select date' sx={{ width: '500px' }} />
                        </div>
                        <div className=' d-flex justify-content-center align-items-center mt-3'>
                            <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 2px' }}>State/Province</p>
                            <TextField size='small' placeholder='Select date' sx={{ width: '500px' }} />
                        </div>
                        <div className=' d-flex justify-content-center align-items-center mt-3'>
                            <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 80px' }}>City</p>
                            <TextField size='small' placeholder='Select date' sx={{ width: '500px' }} />
                        </div>
                        <div className=' d-flex justify-content-center align-items-center mt-3'>
                            <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 42px' }}>Zip Code</p>
                            <TextField size='small' placeholder='Select date' sx={{ width: '500px' }} />
                        </div>
                        <div className=' d-flex justify-content-center align-items-center mt-3'>
                            <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 4px' }}>Contact Name</p>
                            <TextField size='small' placeholder='Select date' sx={{ width: '500px' }} />
                        </div>
                        <div className=' d-flex justify-content-center align-items-center mt-3'>
                            <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 2px' }}>Phone Number</p>
                            <TextField size='small' placeholder='Select date' sx={{ width: '500px' }} />
                        </div>

                        <div className=' d-flex justify-content-center align-items-center m-3'>
                            <p style={{ fontSize: '16px', color: 'grey', margin: '0 15px 0 2px' }}>Tags</p>
                            <Button size='small' variant='outlined' sx={{ m: '10px', borderRadius: '20px' }}>Business</Button>
                            <Button size='small' variant='outlined' sx={{ m: '10px', borderRadius: '20px' }}>factory</Button>
                            <Button size='small' variant='outlined' sx={{ m: '10px', borderRadius: '20px' }}>warehouse</Button>
                            <Button size='small' variant='outlined' sx={{ m: '10px', borderRadius: '20px' }}>residential</Button>
                        </div>

                        <div className=' d-flex justify-content-center align-items-center m-3'>
                            <Button variant='contained' sx={{ m: '5px 0 30px 0', borderRadius: '20px', p: '10px 50px' }}>Submit to supplier</Button>
                        </div>
                    </Box>
            </Modal>


        </>
    )
}

export default ShippingAddressModel;
