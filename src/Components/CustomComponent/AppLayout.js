import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../Hero/Navbar/Navbar';
import Footer from '../Hero/Footer/Footer';
import { Outlet } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h3: {
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    h6: {
      fontSize: '1.2rem',
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
  },
});

const AppLayout = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <video
        src="/space.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <Navbar />
      <div style={{ padding: '0 10px' }}>
        <Outlet />
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default AppLayout;