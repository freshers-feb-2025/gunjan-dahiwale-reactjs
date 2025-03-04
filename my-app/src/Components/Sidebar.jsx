import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, Paper, useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import GroupIcon from '@mui/icons-material/Group';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CampaignIcon from '@mui/icons-material/Campaign';
import AddNewPatient from './AddNewPatient'; 
function Sidebar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [active, setActive] = useState({
        user: true,
        care: false,
        device: false,
        announcements: false
    });
    const [open, setOpen] = useState(false);

    const toggleDrawer = (state) => {
        setOpen(state);
    }

    const handleActive = (section) => {
        setActive({
            user: false,
            care: false,
            device: false,
            announcements: false,
            [section]: true
        })

    }

    const sidebarContent = (
        <Paper sx={{ width: '100%', height: '100vh', backgroundColor: 'gray', color: 'white', textAlign: 'center', padding: 2 }}>

            <Box
                sx={{
                    cursor: 'pointer',
                    mb: 3,
                    p: 1,
                    borderRadius: '8px',
                    color: active.user ? 'goldenrod' : 'white',
                }}
                onClick={() => handleActive('user')}
            >
                <GroupIcon fontSize='large' />
                <Typography>User Management</Typography>
            </Box>

            <Box
                sx={{
                    cursor: 'pointer',
                    mb: 3,
                    p: 1,
                    borderRadius: '8px',
                    color: active.care ? 'goldenrod' : 'white'

                }}
                onClick={() => handleActive('care')}
            >
                <EditNoteIcon fontSize='large' />
                <Typography>Care Plan Management</Typography>
            </Box>

            <Box
                sx={{
                    cursor: 'pointer',
                    mb: 3,
                    p: 1,
                    borderRadius: '8px',
                    color: active.device ? 'goldenrod' : 'white'

                }}
                onClick={() => handleActive('device')}
            >
                <PhoneIphoneIcon fontSize='large' />
                <Typography>Device Management</Typography>
            </Box>

            <Box
                sx={{
                    cursor: 'pointer',
                    mb: 3,
                    p: 1,
                    borderRadius: '8px',
                    color: active.announcements ? 'goldenrod' : 'white'

                }}
                onClick={() => handleActive('announcements')}
            >
                <CampaignIcon fontSize='large' />
                <Typography>Announcements</Typography>
            </Box>

        </Paper>

    )

    return (
        <Grid container>
            <Grid item xs={12} sm={3} md={2}>
                <AppBar position="static" color="transparent" elevation={0}>
                    <Toolbar sx={{ display: 'flex' }}>
                        {isMobile ? (
                            <IconButton edge="start" color="inherit" onClick={() => toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            sidebarContent
                        )}

                        <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
                            {sidebarContent}
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Grid>

            <Grid item xs={12} sm={9} md={10} sx={{ p: 2 }}>
                {active.user && <AddNewPatient />}
                {active.care && <Typography>Care Plan Details</Typography>}
                {active.device && <Typography>Device Information</Typography>}
                {active.announcements && <Typography>Latest Announcements</Typography>}
            </Grid>
        </Grid>
    );
}

export default Sidebar;
