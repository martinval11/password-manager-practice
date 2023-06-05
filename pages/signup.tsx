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

const SignUp = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const createUser = (event: any) => {
    event.preventDefault();
    alert('Create User');
  };

  return (
    <form onSubmit={createUser}>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Login to see your credentials" />
        <title>Password Manager - Sign Up</title>
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
          <Typography variant="h4">Create an account</Typography>

          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            type="text"
            required
            fullWidth
            sx={{ marginTop: 3, marginBottom: 2 }}
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            required
            fullWidth
            sx={{ marginBottom: 2 }}
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
            Sign Up
          </Button>

          <small>
            Do you have an account? <Link href="/login">Login here</Link>
          </small>
        </Container>
      </ThemeProvider>
    </form>
  );
};

export default SignUp;
