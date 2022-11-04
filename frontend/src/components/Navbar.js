import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function Navbar() {
  return (
    <AppBar component="nav" sx={{height: "70px"}}>
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: "15px"}}>
        <Typography variant='h4' sx={{paddingLeft: "30px"}}>Form Tool</Typography>
        <Divider />
        <Box sx={{ display: "flex", paddingRight: "100px"}}>
            <Typography variant='h5' sx={{paddingRight: "40px"}}>
              <Link href="/#" underline="hover" sx={{color: "white"}}>Dashboard</Link>
            </Typography>
            <Typography  variant='h5'>
              <Link href="/#/form" underline="hover" sx={{color: "white"}}>Form</Link>
            </Typography>
        </Box>
      </Box>
    </AppBar>
  )
}

export default Navbar;