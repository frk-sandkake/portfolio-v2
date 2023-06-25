
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import theme from './createPalette'
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Layout from './components/Layout';

export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
        </Route>
    </>
))

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
    </ThemeProvider>
  )
}