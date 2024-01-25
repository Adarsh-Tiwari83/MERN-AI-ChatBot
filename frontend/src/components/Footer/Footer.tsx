import { Avatar, Box, Typography } from "@mui/material"

function Footer() {
    return (
        <footer>
            {/* <div style={{ width: "100%", padding: 20, minHeight: '20vh', maxHeight: "30vh", marginTop: 50 }}>
                <p style={{ fontSize: "30px", textAlign: "center", padding:'20px'}}>Bulid By MNNIT Students</p>
            </div> */}
            <Box display={'flex'} flexDirection={'column'} width={'100%'}>
                <Box display={'flex'} flexDirection={'column'}>
                    <Avatar
                        alt="Adarsh Tiwari"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                    />
                    <Typography margin={'auto auto'} width={'30%'}>Adarsh Tiwari</Typography>
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
        </footer>
    )
}

export default Footer
