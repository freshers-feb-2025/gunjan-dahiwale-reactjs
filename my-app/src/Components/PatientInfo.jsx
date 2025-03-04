import React from 'react';
import { Paper, Box, Typography, TextField, MenuItem, Select, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useFormContext } from 'react-hook-form';

function PatientInfo() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { register, setValue, watch } = useFormContext();
    return (
        <>
            <Paper elevation={0}>
                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1, alignItems: 'center' }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                Email
                            </Typography>
                            <TextField
                                label="email@email.com"
                                size="small"
                                variant="outlined"
                                sx={{ width: isMobile ? '100%' : '80%' }}
                                {...register('Email')}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1, alignItems: 'center' }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                Confirm Email
                            </Typography>
                            <TextField
                                label="email@email.com"
                                size="small"
                                variant="outlined"
                                sx={{ width: isMobile ? '100%' : '80%' }}
                                {...register('Confirm Email')}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <hr style={{ border: '1px solid rgb(238, 235, 235)', width: '100%', marginTop: '30px' }} />

                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1, alignItems: 'center' }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                Address Line 1
                            </Typography>
                            <TextField
                                label="Street address, P.O.Box"
                                variant="outlined"
                                size="small"
                                sx={{ width: isMobile ? '100%' : '80%' }}
                                {...register('Address Line 1')}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1, alignItems: 'center' }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                Address Line 2
                            </Typography>
                            <TextField
                                label="Apt, Unit, Building, Floor, etc"
                                variant="outlined"
                                size="small"
                                sx={{ width: isMobile ? '100%' : '80%' }}
                                {...register('Address Line 2')}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <hr style={{ border: '1px solid rgb(238, 235, 235)', width: '100%', marginTop: '30px' }} />

                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1, alignItems: 'center' }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                City
                            </Typography>
                            <TextField
                                label=""
                                variant="outlined"
                                size="small"
                                sx={{ width: isMobile ? '100%' : '80%' }}
                                {...register('City')}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1, alignItems: 'center' }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                State
                            </Typography>
                            <Select
                                displayEmpty
                                size="small"
                                sx={{ width: '80%' }}
                                {...register('state')}
                                value={watch('state') || ""}
                                onChange={(e) => setValue('state', e.target.value)}
                            >
                                <MenuItem value="" disabled>Select State</MenuItem>
                                <MenuItem value="NY">New York</MenuItem>
                                <MenuItem value="CA">California</MenuItem>
                            </Select>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1, alignItems: 'center' }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                Zip
                            </Typography>
                            <TextField
                                label=""
                                variant="outlined"
                                size="small"
                                sx={{ width: isMobile ? '100%' : '80%' }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <hr style={{ border: '1px solid rgb(238, 235, 235)', width: '100%', marginTop: '30px' }} />

                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1, alignItems: 'center' }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                Date of Birth <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <Select
                                displayEmpty
                                size="small"
                                sx={{ width: isMobile ? '100%' : '80%' }}
                            >
                                <MenuItem value="" disabled>Select Month</MenuItem>
                                <MenuItem value="1">1</MenuItem>
                            </Select>
                            <Select
                                displayEmpty
                                size="small"
                                sx={{ width: isMobile ? '100%' : '80%' }}
                            >
                                <MenuItem value="" disabled>Select Day</MenuItem>
                                <MenuItem value="1">1</MenuItem>
                            </Select>
                            <Select
                                displayEmpty
                                size="small"
                                sx={{ width: isMobile ? '100%' : '80%' }}
                            >
                                <MenuItem value="" disabled>Select Year</MenuItem>
                                <MenuItem value="1">1</MenuItem>
                            </Select>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1, alignItems: 'center' }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                Gender
                            </Typography>
                            <Select
                                displayEmpty
                                size="small"
                                sx={{ width: isMobile ? '100%' : '80%' }}
                            >
                                <MenuItem value="" disabled>Select Gender</MenuItem>
                                <MenuItem value="f">Female</MenuItem>
                                <MenuItem value="m">Male</MenuItem>
                            </Select>
                        </Box>
                    </Grid>
                </Grid>
                <hr style={{ border: '1px solid rgb(238, 235, 235)', width: '100%', marginTop: '30px' }} />

                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1, alignItems: 'center' }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                Preferred Call Time
                            </Typography>
                            <TextField
                                label="Street address, P.O.Box"
                                size="small"
                                variant="outlined"
                                sx={{ width: isMobile ? '100%' : '80%' }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1, alignItems: 'center' }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                Preferred Language
                            </Typography>
                            <Select
                                displayEmpty
                                size="small"
                                sx={{ width: isMobile ? '100%' : '80%' }}
                            >
                                <MenuItem value="" disabled>Select Language</MenuItem>
                                <MenuItem value="f">English</MenuItem>
                            </Select>
                        </Box>
                    </Grid>
                </Grid>
                <hr style={{ border: '1px solid goldenrod', width: '100%', marginTop: '30px' }} />
            </Paper>
        </>
    );
}

export default PatientInfo;