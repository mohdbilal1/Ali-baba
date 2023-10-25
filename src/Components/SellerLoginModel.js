import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import modelSideImg from '../assets/modelsideimg.png'


const SellerLoginModel = ({ open, setOpen }) => {
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false)
        navigate('/seller-pg')
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box sx={{ width: '700px', height: '500px', mb: 5, bgcolor: 'white', borderRadius: '20px', position: 'relative' }}>
                    <CloseIcon onClick={handleClose} sx={{ position: 'absolute', right: 10, top: 12, bgcolor: 'white',fontSize:'40px',cursor:'pointer' }} />
                    <div className=' d-flex'>
                        <div>
                            <img style={{width:'200px',height:'500px',borderRadius:'20px 0 0 20px'}} src={modelSideImg} alt="img" />
                        </div>
                        <div>
                            <Typography sx={{ m: '50px 100px', fontSize: '40px',fontWeight:'bold',textAlign:'center' }}>Easy start on Abaris.com</Typography>
                            <p style={{margin:'0 40px 10px 40px',textAlign:'center'}}>Tell us a bit about your business and obtain our Play Books tailored for you.</p>
                            <div className=' d-flex justify-content-center align-items-center mt-3'>
                                <TextField size='small' placeholder='Email' sx={{ width: '400px' }} />
                            </div>
                            <div className=' d-flex justify-content-center align-items-center mt-3'>
                                <TextField size='small' placeholder='Name' sx={{ width: '400px' }} />
                            </div>
                            <div className=' d-flex justify-content-center align-items-center m-3'>
                                <Button variant='contained' sx={{ m: '5px 0 30px 0', borderRadius: '20px', p: '6px 50px' }}>Start Now</Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default SellerLoginModel
