import { Outlet } from "react-router-dom"
import { Box, AppBar, Toolbar, Typography, Button, Container } from "@mui/material"
import { Link, NavLink } from 'react-router-dom'
import ImageURL from '../assets/logo-desktop.svg'

export default function Layout() {

    const activeStyles = {
        fontWeight: "bold",
    }

    return (
        <Box sx={{ bgcolor: '#004346', height: '100vh' }}  >
            <AppBar position="static" color="backgroundColor">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link className='site-logo' to='/'>
                        <img src={ImageURL} alt="" style={{maxWidth: '124px'}} />
                    </Link>
                    <nav>
                        <Button component={NavLink} variant="text"
                            to='/'
                            style={({ isActive }) => isActive ? activeStyles : null}>
                            home
                        </Button>
                        <Button component={NavLink} variant="text"
                            to='/projects'
                            style={({ isActive }) => isActive ? activeStyles : null}>
                            projects
                        </Button>
                    </nav>
            </Toolbar>
            </AppBar>
            <Container maxWidth='sm' sx={{ bgcolor: '#004346', color: '#fff', height: '100vh' }}>
                <Outlet />
            </Container>
        </Box>

    )
}
