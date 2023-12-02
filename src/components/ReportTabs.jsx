import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FormControl } from '@mui/base/FormControl';
import { Input } from '@mui/base/Input';

import Grid from '@mui/material/Grid';
import Inquiry from './Inquiry';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ReportTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                {/* <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"> */}
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab sx={{ fontWeight: 600, width: '25%' }} label="Description" {...a11yProps(0)} />
                    <Tab sx={{ fontWeight: 600, width: '25%' }} label="Table Of Content" {...a11yProps(1)} />
                    <Tab sx={{ fontWeight: 600, width: '25%' }} label="Methodology" {...a11yProps(2)} />
                    <Tab sx={{ fontWeight: 600, width: '25%' }} label="Request Sample" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                Description
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Table Of Content
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Methodology
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Inquiry />
            </CustomTabPanel>
        </Box>
    );
}