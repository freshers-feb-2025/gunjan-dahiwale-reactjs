import React from 'react';
import { Paper, Box, Typography, TextField, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Insurance() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Paper elevation={0}>
                <Typography variant='h5' sx={{ color: 'goldenrod', marginTop: '20px', textAlign: isMobile ? 'center' : 'left' }}>
                    Insurance information
                </Typography>

                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1, alignItems: 'center' }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                Insurance Name
                            </Typography>
                            <TextField
                                label=""
                                size="small"
                                variant="outlined"
                                sx={{ width: isMobile ? '100%' : '80%' }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1, alignItems: 'center' }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                Group ID
                            </Typography>
                            <TextField
                                label=""
                                size="small"
                                variant="outlined"
                                sx={{ width: isMobile ? '100%' : '80%' }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1, alignItems: 'center' }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                Member ID
                            </Typography>
                            <TextField
                                label=""
                                size="small"
                                variant="outlined"
                                sx={{ width: isMobile ? '100%' : '80%' }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <hr style={{ border: '1px solid rgb(238, 235, 235)', width: '100%', marginTop: '30px' }} />
            </Paper>
        </>
    );
}

export default Insurance;