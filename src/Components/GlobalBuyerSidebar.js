import { Box, Divider, Link, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { LuShip } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import '../stylecss/globalBuyerContactStyle.css'

const GlobalBuyerSideBar = () => {

    const navigate = useNavigate();

    const onHome = () => {
        navigate('/globalBuyerIndex')
    }
    const onOrder = () => {
        navigate('/order')
    }
    const onMessage = () => {
        navigate('/message')
    }
    const onBuyingLead = () => {
        navigate('/buying-lead')
    }
    const onTransaction = () => {
        navigate('/transaction')
    }
    const onContact = () => {
        navigate('/contact')
    }
    const onList = () => {
        navigate('/mylist')
    }

    const onTrade = () => {
        navigate('/trade-service')
    }
    const onDropshipping = () => {
        navigate('/dropshipping')
    }

    const onLogistics = () => {
        navigate('/logistic')
    }


    return (
        <>
            <Box sx={{overflowY:'scroll',height:'90vh',overflowX:'none'}}>
                <TableContainer sx={{ boxShadow: '0.1px 0.1px 3px grey', width: '110px'}}>
                    <Table sx={{ bgcolor: '#bbdefb', width: '110px' }}>
                        <TableBody>
                            <TableRow className="sidebar" onClick={onHome} sx={{ ":hover": { cursor: 'pointer', bgcolor: '#f57f17' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center', pt: 2 }}>
                                    <HomeOutlinedIcon sx={{ fontSize: '30px' }} />
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Home</Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow onClick={onMessage} sx={{ ":hover": { cursor: 'pointer', bgcolor: '#f57f17' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <MessageOutlinedIcon sx={{ fontSize: '30px' }} />
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Messages</Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow onClick={onBuyingLead} sx={{ ":hover": { cursor: 'pointer', bgcolor: '#f57f17' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <PlaylistAddIcon sx={{ fontSize: '30px' }} />
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Buying Leads </Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow className="openbar" onClick={onOrder} sx={{ ":hover": { cursor: 'pointer', bgcolor: '#f57f17' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <DescriptionOutlinedIcon sx={{ fontSize: '30px' }} />
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Orders </Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow onClick={onTransaction} sx={{ ":hover": { cursor: 'pointer', bgcolor: '#f57f17' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <PaidOutlinedIcon sx={{ fontSize: '30px' }} />
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Transactions</Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow className="openbar" onClick={onContact} sx={{ ":hover": { cursor: 'pointer', bgcolor: '#f57f17' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <PeopleAltOutlinedIcon sx={{ fontSize: '30px' }} />
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Contacts</Link>
                                    </div>
                                </TableCell>
                                <div className=" hidebar col-sm-2 d">
                                    <ul style={{ backgroundColor: '#64b5f6', width: '170px', height: '100vh',paddingLeft: 13 }}>
                                        <li style={{ listStyle: 'none', fontWeight: 'bold', margin: '30px 0 15px 0', fontSize: '14px' }}>Contacts</li>
                                        <li style={{ listStyle: 'none', margin: '10px 0 15px 0', fontSize: '14px' }}>My Contacts</li>
                                        <li style={{ listStyle: 'none', margin: '4px 0 4px 0', fontSize: '14px', color: 'grey' }}>Business Cards</li>
                                        <Divider sx={{ height: '1px', border: '1px solid grey', m: '4px 0', width: '140px' }} />


                                        <li style={{ listStyle: 'none', margin: '4px 0 10px 0', fontSize: '14px' }}>Business Card Requests</li>
                                        <li style={{ listStyle: 'none', margin: '10px 0 10px 0', fontSize: '14px' }}>Received</li>
                                        <li style={{ listStyle: 'none', margin: '10px 0 10px 0', fontSize: '14px' }}>Sent</li>
                                        <li style={{ listStyle: 'none', margin: '10px 0 10px 0', fontSize: '14px' }}>Requests</li>
                                    </ul>
                                </div>
                            </TableRow>
                            <TableRow onClick={onList} sx={{ ":hover": { cursor: 'pointer', bgcolor: '#f57f17' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <PlaylistAddIcon sx={{ fontSize: '30px' }} />
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            My Lists</Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow onClick={onTrade} sx={{ ":hover": { cursor: 'pointer', bgcolor: '#f57f17' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <LanguageOutlinedIcon sx={{ fontSize: '30px' }} />
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Trade Services </Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow onClick={onDropshipping} sx={{ ":hover": { cursor: 'pointer', bgcolor: '#f57f17' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <LocalShippingOutlinedIcon sx={{ fontSize: '30px' }} />
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            DropShipping WorkStation</Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow onClick={onLogistics} sx={{ ":hover": { cursor: 'pointer', bgcolor: '#f57f17' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center', pb: 3 }}>
                                    <LuShip style={{ fontSize: '30px' }} />
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            logistics</Link>
                                    </div>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default GlobalBuyerSideBar
