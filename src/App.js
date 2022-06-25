import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Footer from './components/Footer';

const App = (props) => {
  return (
    <>
      <Box width="400px">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise-details" element={<ExerciseDetails />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
};

export default App;
