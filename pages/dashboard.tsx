import Head from 'next/head';
import { createTheme, ThemeProvider, CssBaseline, Typography } from '@mui/material';
import Nav from '@/components/Nav/Nav';

const Dashboard = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
      <Head>
        <title>Password Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Typography variant="h4">Dashboard</Typography>
      </ThemeProvider>
    </>
  );
};

export default Dashboard;
