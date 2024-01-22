import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

const footer = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} width={'100%'}>
            <Box display={'flex'} flexDirection={'column'}>
                <Avatar
                    alt="Adarsh Tiwari"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                />
                <Typography margin={'auto auto'}>Adarsh Tiwari</Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
                <Avatar
                    alt="Adarsh Tiwari"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                />
                <Typography margin={'auto auto'}>Adarsh Tiwari</Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
                <Avatar
                    alt="Adarsh Tiwari"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                />
                <Typography margin={'auto auto'}>Adarsh Tiwari</Typography>
            </Box>
        </Box>
    )
}

export default footer
