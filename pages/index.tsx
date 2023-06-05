import Head from 'next/head';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Typography, Container, createTheme, Button } from '@mui/material';

import Nav from '@/components/Nav/Nav';

export default function Home() {
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

        <Container maxWidth="md">
          <Typography variant="h3" sx={{ margin: "3rem 0 1rem 0" }}>Welcome to my Password Manager</Typography>
          <Button>Create your first account</Button>
        </Container>
      </ThemeProvider>
    </>
  );
}
