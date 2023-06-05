import { Typography, Box } from '@mui/material';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: 2
        }}
      >
        <Typography variant="h5">Password Manager</Typography>
        <p>© 2023 - {year}</p>
      </Box>
    </footer>
  );
};

export default Footer;
