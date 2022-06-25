import { Box, Typography, Stack } from '@mui/material';
import BannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '50px', xs: '70px' },
        ml: { lg: '50px', sm: '50px' },
        borderColor: 'primary.main',
        p: '20px',
      }}
    >
      <Typography color="#FF2625" fontSize="26px" fontWeight="600">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={2}>
        Checkout the most effective exercises
      </Typography>

      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: '45px',
            textDecoration: 'none',
            width: '200px',
            textAlign: 'center',
            background: '#FF2625',
            padding: '14px',
            fontSize: '22px',
            textTransform: 'none',
            color: 'white',
            borderRadius: '4px',
          }}
        >
          Explore Exercises
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}
      >
        Exercise
      </Typography>
      <img src={BannerImage} alt="Banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
