import { Box, Button, Checkbox, Divider, FormControlLabel } from "@mui/material";
import imgeLogo from '../assets/mainlogo.png'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import '../stylecss/consumerStyle.css'
import AttachmentIcon from '@mui/icons-material/Attachment';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';


const SendEnquiry = () => {
    const openFileInput = () => {
        const fileInput = document.getElementById('fileInput');
        fileInput.click();
    };
    return (
        <>
            <Box sx={{ display: 'flex', boxShadow: '1px 1px 6px lightgrey', p: '6px 0' }}>
                <div className='logo-img-div pt-2 pb-2 d-flex'>
                    <a href="/">
                        <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                    </a>
                    <p style={{ margin: '0 20px', padding: '0 10px', borderLeft: '1px solid lightgrey', fontSize: '20px' }}>Contact supplier</p>
                </div>
            </Box>

            <Box sx={{ width: '900px', margin: '40px 0 20px 200px', backgroundColor: 'aliceblue', boxShadow: '1px 1px 6px lightgrey', padding: '20px 50px', borderRadius: '8px' }}>
                <div className=" d-flex pt-2">
                    <p>To: <img style={{ width: '30px', height: '30px', borderRadius: '50%', marginLeft: '8px' }} src="https://sc04.alicdn.com/kf/Hc345529c81764e11aaba4109fcefe752F.jpg_120x120.jpg" alt="img" /> <b style={{ paddingLeft: '8px' }}>Zhang Grace</b> </p>
                    <Divider sx={{ height: '20px', border: '2px solid grey', m: '5px 10px' }} />
                    <p> <b>Shenzhen Xiangyin Electronic Technology Co, Ltd.</b> </p>
                    <img style={{ height: '30px', marginLeft: '8px' }} src="https://s.alicdn.com/@img/imgextra/i1/O1CN01I0ebSF1UCntpAivUU_!!6000000002482-2-tps-1200-210.png" alt="img" />
                </div>

                <div style={{ width: '800px', margin: '10px', backgroundColor: 'white', boxShadow: '1px 1px 6px lightgrey', padding: '20px 50px', borderRadius: '8px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 'bold', margin: 0 }}>Detailed requirements:<ErrorOutlineOutlinedIcon /> </p>
                    <p style={{ color: 'grey', fontSize: '12px' }}>Enter product details such as color, size, materials etc. and other specification requirements to receive an accurate quote.</p>
                    <textarea id="message" name="message" rows="4" cols="90" style={{ resize: 'none' }} placeholder="Please type in" />

                    <Box sx={{ backgroundColor: 'aliceblue', m: '20px 0', p: '30px 10px', borderRadius: '20px' }}>
                        <p style={{ fontSize: '12px' }}><EmojiObjectsOutlinedIcon sx={{ color: '#ff9100', fontSize: '17px', mb: 0.3 }} />Check out these questions from other buyers. Click to insert the questions in the box above.</p>
                        <div className=" d-flex flex-wrap">
                            <p className="question">What is the best price you can offer?</p>
                            <p className="question"> What is the shipping cost?</p>
                            <p className="question">Do you support customization? </p>
                            <p className="question">Can I add my own logo?</p>
                            <p className="question">How long will it take to ship to my country?</p>
                            <p className="question">What is the MOQ for this product?</p>
                            <p className="question">Do you have a new catalog?</p>
                            <p className="question">Can I get a sample first?</p>
                        </div>
                    </Box>
                </div>
                <div onClick={openFileInput} style={{ cursor: 'pointer', margin: '40px 30px 10px 30px', border: '1px solid #0d47a1', width: '200px', height: '40px', borderRadius: '20px', padding: '5px 0 0 10px' }}>
                    <p style={{ fontSize: '16px', color: '#0d47a1' }}> <AttachmentIcon sx={{ fontSize: '26px', ml: 1, mr: 1 }} />Add Attachment</p>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                    />
                </div>
            </Box>

            <Box sx={{textAlign:'center'}}>
                <Button variant="contained" sx={{borderRadius:'30px',padding:'10px 60px',m:'10px 0'}}>Send Inquiry</Button>
                <p style={{margin:0}}><FormControlLabel control={<Checkbox />} label="Recommend matching suppliers if this supplier doesn't contact me on Message Center within 24 hours" /></p>
                <p><FormControlLabel control={<Checkbox />} label="Agree to share Business Card with supplier." /></p>
                <p style={{margin:'0 150px'}}>Please make sure your contact information is correct (View and Edit). Your message will be sent directly to the recipient(s) and will not be publicly displayed. Note that if the recipient is a Gold Supplier, they can view your contact information, including your registered email address. Abaris will never distribute or sell your personal information to third parties without your express permission.</p>
                <Box sx={{ display: 'flex', pt: 4, borderTop: '1px solid lightgrey', mt: 3, bgcolor: 'lightgrey' }}>
                    <p style={{ fontSize: '14px', paddingLeft: '20px' }}>Copyright © 1996-2023 Abaris  InterMESH Ltd. All rights reserved.</p>
                    <p style={{ fontSize: '14px', position: 'absolute', right: 130 }}>Terms of Use - Privacy Policy - Link to Us</p>
                </Box>
            </Box>
        </>
    )
}

export default SendEnquiry
