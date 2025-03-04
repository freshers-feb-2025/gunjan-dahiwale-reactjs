import React from 'react';
import { Box, Typography, Select, MenuItem } from '@mui/material';
import { useFormContext } from 'react-hook-form';

function Specialties() {
    const { register, setValue, watch } = useFormContext(); 

    return (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 2, alignItems: 'center', overflowX: 'auto' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ minWidth: 120 }}>Cardiology</Typography>
                <Select
                    {...register("cardiology")}
                    value={watch("cardiology") || ""}
                    onChange={(e) => setValue("cardiology", e.target.value)}
                    displayEmpty size="small" sx={{ width: 200 }}
                >
                    <MenuItem value="" disabled>Select</MenuItem>
                    <MenuItem value="Dr. Smith">Dr. Smith</MenuItem>
                    <MenuItem value="Dr. Johnson">Dr. Johnson</MenuItem>
                </Select>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ minWidth: 120 }}>Nephrology</Typography>
                <Select
                    {...register("nephrology")}
                    value={watch("nephrology") || ""}
                    onChange={(e) => setValue("nephrology", e.target.value)}
                    displayEmpty size="small" sx={{ width: 200 }}
                >
                    <MenuItem value="" disabled>Select</MenuItem>
                    <MenuItem value="Dr. Brown">Dr. Brown</MenuItem>
                    <MenuItem value="Dr. Williams">Dr. Williams</MenuItem>
                </Select>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ minWidth: 120 }}>Behavioral Health</Typography>
                <Select
                    {...register("behavioralHealth")}
                    value={watch("behavioralHealth") || ""}
                    onChange={(e) => setValue("behavioralHealth", e.target.value)}
                    displayEmpty size="small" sx={{ width: 200 }}
                >
                    <MenuItem value="" disabled>Select</MenuItem>
                    <MenuItem value="Dr. Lee">Dr. Lee</MenuItem>
                    <MenuItem value="Dr. Adams">Dr. Adams</MenuItem>
                </Select>
            </Box>

             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ minWidth: 120 }}>Oncology</Typography>
                <Select
                     {...register("Oncology")}
                     value={watch("Oncology") || ""}
                     onChange={(e) => setValue("Oncology", e.target.value)}
                     displayEmpty size="small" sx={{ width: 200 }}
                >
                    <MenuItem value="" disabled>Select</MenuItem>
                    <MenuItem value="Dr. White">Dr. White</MenuItem>
                    <MenuItem value="Dr. Harris">Dr. Harris</MenuItem>
                </Select>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ minWidth: 120 }}>Endocrinology</Typography>
                <Select
                     {...register("Endocrinology")}
                     value={watch("Endocrinology") || ""}
                     onChange={(e) => setValue("Endocrinology", e.target.value)}
                     displayEmpty size="small" sx={{ width: 200 }}
                >
                    <MenuItem value="" disabled>Select Billing Approver</MenuItem>
                    <MenuItem value="Dr. Miller">Dr. Miller</MenuItem>
                    <MenuItem value="Dr. Wilson">Dr. Wilson</MenuItem>
                </Select>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ minWidth: 120 }}>Other</Typography>
                <Select
                   {...register("Other")}
                   value={watch("Other") || ""}
                   onChange={(e) => setValue("Other", e.target.value)}
                   displayEmpty size="small" sx={{ width: 200 }}
                >
                    <MenuItem value="" disabled>Select Billing Approver</MenuItem>
                    <MenuItem value="Dr. Taylor">Dr. Taylor</MenuItem>
                    <MenuItem value="Dr. Anderson">Dr. Anderson</MenuItem>
                </Select>
            </Box>
        </Box>
        
    );
}

export default Specialties;
