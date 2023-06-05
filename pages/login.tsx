import { ThemeProvider } from '@emotion/react';
import {
  Container,
  createTheme,
  CssBaseline,
  Typography,
  TextField,
  Button,
} from '@mui/material';

import Head from 'next/head';
import Link from 'next/link';

import Footer from '@/components/Footer/Footer';

const Login = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const login = (event: any) => {
    event.preventDefault()
    alert('Login');
  };

  return (
    <form onSubmit={login}>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Login to see your credentials" />
        <title>Password Manager - Login</title>
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container
          maxWidth="sm"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
          }}
        >
          <Typography variant="h4">
            Login to your account
          </Typography>

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            required
            fullWidth
            sx={{ marginTop: 3, marginBottom: 2 }}
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            inputProps={{ minLength: 8, maxLength: 20 }}
            required
            fullWidth
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ marginTop: 2, marginBottom: 2 }}
          >
            Sign In
          </Button>

          <small>
            Don't have and account? <Link href="/signup" id="link">Sign up</Link>
          </small>
        </Container>

        <Footer />
      </ThemeProvider>
    </form>
  );
};

export default Login;
