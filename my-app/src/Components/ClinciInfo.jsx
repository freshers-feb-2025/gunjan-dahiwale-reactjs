import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Paper, Box, Typography, MenuItem, Select, Button, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Specialties from './Specialities';

function ClinciInfo() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const { register, setValue, watch } = useFormContext();


    return (
        <>
            <Paper elevation={0}>
                <Typography variant='h5' sx={{ color: 'goldenrod', marginTop: '20px', textAlign: isMobile ? 'center' : 'left' }}>
                    Clinic information
                </Typography>

                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={12}>
                        <Typography>
                            Diagnosis <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <TextareaAutosize
                            minRows={8}
                            aria-label="Diagnosis"
                            style={{
                                width: isMobile ? '100%' : '80%',
                                padding: '10px',
                                fontSize: '16px',
                                border: '1px solid lightgray',
                                borderRadius: '4px',
                            }}
                            {...register('Diagnosis')}
                        />
                    </Grid>
                </Grid>

                <hr style={{ border: '1px solid rgb(238, 235, 235)', width: '100%', marginTop: '50px' }} />

                <Specialties isMobile={isMobile} />


                <hr style={{ border: '1px solid rgb(238, 235, 235)', width: '100%', marginTop: '50px' }} />

                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1, alignItems: 'center' }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                Care Plan Template <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <Select
                                displayEmpty
                                size="small"
                                onChange={(e) => setValue("Care Plan template", e.target.value)}
                                value={watch("Care Plan") || ""}
                                sx={{ width: isMobile ? '100%' : '80%' }}
                            >
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="mount">mount</MenuItem>
                            </Select>
                        </Box>
                    </Grid>
                </Grid>

                <hr style={{ border: '1px solid goldenrod', width: '100%', marginTop: '50px' }} />
            </Paper>
        </>
    );
}

export default ClinciInfo;