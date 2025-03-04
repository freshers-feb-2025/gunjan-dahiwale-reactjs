import React, { useState } from 'react';
import { Box, Typography, Divider, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function PatientTabs() {
    const [activeTab, setActiveTab] = useState("Patient");
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

    return (
        <>
            <Box sx={{ position: 'relative' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: isMobile ? 2 : 4, 
                    color: 'gray',
                    pb: 1,
                    flexWrap: 'wrap',
                    flexDirection: isMobile ? 'column' : 'row', 
                }}>
                    {["Patient", "Care Team", "Billing Approver"].map((tab) => (
                        <Box key={tab} sx={{ position: 'relative', textAlign: isMobile ? 'center' : 'left' }}>
                            <Typography
                                onClick={() => setActiveTab(tab)}
                                sx={{
                                    cursor: 'pointer',
                                    color: activeTab === tab ? 'rgb(72, 181, 231)' : 'gray',
                                    pb: 1,
                                    fontSize: isMobile ? '14px' : '16px',
                                }}
                            >
                                {tab}
                            </Typography>
                            {activeTab === tab && (
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: isMobile ? -4 : -8, 
                                    left: 0,
                                    width: '100%',
                                    height: '2px',
                                    backgroundColor: 'rgb(72, 181, 231)',
                                }} />
                            )}
                        </Box>
                    ))}
                </Box>
                <Divider sx={{ position: 'absolute', bottom: 0, width: '100%' }} />
            </Box>
        </>
    );
}

export default PatientTabs;