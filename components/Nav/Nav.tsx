import { Box, Toolbar, AppBar, Typography, Button } from '@mui/material';

import Link from 'next/link';

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Password Manager
          </Typography>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign up</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
