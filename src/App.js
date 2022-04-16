import logo from './logo.svg';
import './App.css';
import { Box, Typography } from '@mui/material';

function App() {
  return (
    <Box sx={{
      background: "#090a07",
      height: "100vh"
    }}>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        color: "#d8692d",
        py: 4
      }}>
        <Typography sx={{
        }}>
          RHYZOM.
        </Typography>
        <Typography sx={{
        }}>
          ABOUT US
        </Typography>
        <Typography sx={{
        }}>
          BENEFITS
        </Typography>
        <Typography sx={{
        }}>
          SHOP
        </Typography>
        <Typography sx={{
        }}>
          SHOP NOW
        </Typography>
      </Box>
      
    </Box>
  );
}

export default App;
