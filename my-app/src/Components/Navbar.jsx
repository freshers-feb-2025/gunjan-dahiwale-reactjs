import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import logo from '../assests/KencorLogo.png';

function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

    return (
        <AppBar position="static" sx={{backgroundColor: 'white'}} elevation={0}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img src={logo} alt="Kencor Health Logo" style={{ height: '50px' }} />
                    {!isMobile && (
                        <Typography variant="h6" sx={{ color: 'gray' }}>kencor health</Typography>
                    )}
                </Box>

                {!isMobile ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body1"><b>GCw CareTeam_Physician1</b></Typography>
                        <Button variant="contained" sx={{ textTransform: 'none', backgroundColor: "goldenrod", borderRadius: '50px', height: '30px' }}>
                            Semi Care
                        </Button>
                    </Box>
                ) : (
                    <IconButton edge="end" color="inherit">
                        <MenuIcon />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
