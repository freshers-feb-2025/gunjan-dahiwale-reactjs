import React from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Paper, Box, Typography, TextField, MenuItem, Select, Button, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ClinciInfo from './ClinciInfo';
import PatientInfo from './PatientInfo';
import Insurance from './Insurance';
import PatientTabs from './PatientTab';

const schema = yup.object().shape({
    lastName: yup.string().required('Last name is required'),
    firstName: yup.string().required('First name is required'),
    phone: yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
    username: yup.string().required('Username is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
})

function AddNewPatient() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            lastName: '',
            firstName: '',
            phone: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
    });

    const { handleSubmit, control, reset, formState: { errors },register } = methods;


    const onSubmit = (data) => {
        console.log('Form Submitted:', data);
        reset();
    };

    const clearHandle = () => {
        reset();
        
    }

    return (
        <FormProvider {...methods}>
            <Paper elevation={0} sx={{ margin: { xs: '10px', sm: '30px' }, padding: { xs: '15px', sm: '30px' } }}>
                <PatientTabs />

                <Typography variant='h5' sx={{ color: 'goldenrod', mt: 3, textAlign: isMobile ? 'center' : 'left' }}>
                    Add a new patient
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2} sx={{ mt: 3 }}>
                        <Grid item xs={12} sm={4}>
                            <Controller
                                name="lastName"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        size="small"
                                        label="Last Name"
                                        variant="outlined"
                                        error={!!errors.lastName}
                                        helperText={errors.lastName?.message}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        size="small"
                                        label="First Name"
                                        variant="outlined"
                                        error={!!errors.firstName}
                                        helperText={errors.firstName?.message}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>


                    <hr style={{ border: '1px solid rgb(238, 235, 235)', marginTop: '30px' }} />

                    <Grid container spacing={2} sx={{ mt: 3 }}>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1 }}>
                                <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                    Phone  <span style={{ color: 'red' }}>*</span>
                                </Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="( ) - "
                                    variant="outlined"
                                    error={!!errors.phone}
                                        helperText={errors.phone?.message}
                                    {...register('phone')}
                                    sx={{ width: isMobile ? '100%' : '80%' }} 
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    <hr style={{ border: '1px solid rgb(238, 235, 235)', marginTop: '30px' }} />

                    <Grid container spacing={2} sx={{ mt: 3 }}>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1 }}>
                                <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                    Username <span style={{ color: 'red' }}>*</span>
                                </Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="Username"
                                    variant="outlined"
                                    {...register('username')}
                                    error={!!errors.username}
                                        helperText={errors.username?.message}
                                    sx={{ width: isMobile ? '100%' : '80%' }} 
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    <hr style={{ border: '1px solid rgb(238, 235, 235)', marginTop: '30px' }} />

                    <Grid container spacing={2} sx={{ mt: 3 }}>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1 }}>
                                    <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                    Password <span style={{ color: 'red' }}>*</span>
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        variant="outlined"
                                        type="password"
                                        error={!!errors.password}
                                        helperText={errors.password?.message}
                                        {...register('password')}
                                        sx={{ width: isMobile ? '100%' : '80%' }} 
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1 }}>
                                <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                    Confirm Password <span style={{ color: 'red' }}>*</span>
                                </Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    type="password"
                                    error={!!errors.confirmPassword}
                                    helperText={errors.confirmPassword?.message}
                                    {...register('confirmPassword')}
                                    sx={{ width: isMobile ? '100%' : '80%' }} 
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    <hr style={{ border: '1px solid goldenrod', marginTop: '30px' }} />

                    <Grid container spacing={2} sx={{ mt: 3 }}>
                        {["Clinic", "Clinic Location"].map((label, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1 }}>
                                    <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                        {label} <span style={{ color: 'red' }}>*</span>
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        label={label}
                                        variant="outlined"
                                        error={!!errors.clinic}
                                        helperText={errors.clinic?.message}
                                        {...register(label ? 'Clinic name' : 'Clinic Location')}
                                        sx={{ width: isMobile ? '100%' : '80%' }} 
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <hr style={{ border: '1px solid rgb(238, 235, 235)', marginTop: '30px' }} />

                    {/* Provider and Care Coordinators */}
                    {/* <Grid container spacing={2} sx={{ mt: 3 }}>
                {[
                    { label: "Provider", options: ["LBH"], required: true },
                    { label: "Care Coordinators", options: ["Mount"], required: false }
                ].map((field, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : 1 }}>
                            <Typography sx={{ minWidth: isMobile ? '100%' : 120 }}>
                                {field.label} {field.required && <span style={{ color: 'red' }}>*</span>}
                            </Typography>
                            <Select 
                                fullWidth 
                                size="small" 
                                displayEmpty 
                                sx={{ width: isMobile ? '100%' : '80%' }} // Adjust width here
                            >
                                <MenuItem value="" disabled>Select {field.label}</MenuItem>
                                {field.options.map((option, idx) => (
                                    <MenuItem key={idx} value={option}>{option}</MenuItem>
                                ))}
                            </Select>
                        </Box>
                    </Grid>
                ))}
            </Grid> */}

                    <hr style={{ border: '1px solid goldenrod', marginTop: '30px' }} />
                    
                    <ClinciInfo/>
                    {/* <PatientInfo /> */}
                    {/* <Insurance /> */}

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
                        <Button type='submit' sx={{ backgroundColor: 'goldenrod', color: 'white' }}>Save</Button>
                        <Button sx={{ color: 'black' }} onClick={() => clearHandle()}>Clear</Button>
                    </Box>
                </form>
            </Paper>
        </FormProvider>
    );
}

export default AddNewPatient;