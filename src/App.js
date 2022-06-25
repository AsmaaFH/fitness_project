import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Box width="400px">
        <Navbar />
      </Box>
    </>
  );
}

export default App;
