import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const Layout = () => {
    return (
        <Box>
            <Navbar />
            <main><Outlet /></main>
        </Box>
    );
}

export default Layout;
