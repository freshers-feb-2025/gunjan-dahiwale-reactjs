import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Box from '@mui/material/Box';
import AddNewPatient from '../Components/AddNewPatient';
import IconButton from '@mui/material/IconButton';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

function Index() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <IconButton
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    right: 20,
                    backgroundColor: 'goldenrod',
                    boxShadow: 3,
                    '&:hover': { backgroundColor: 'black' }
                }}
            >
                <QuestionMarkIcon sx={{ fontSize: 40, color: 'White' }} />
            </IconButton>
        </>
    );
}

export default Index;
