import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
const Navbar = (props) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
      sx={{
        gap: { sm: '123px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
      }}
      px="20px"
    >
      <Link to={'/'}>
        <img src={Logo} alt="Logo" />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        justifyContent="flex-end"
      >
        <Link
          to='"/'
          style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}
        >
          Home
        </Link>
        <Link
          to='"/exercise-details'
          style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}
        >
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
