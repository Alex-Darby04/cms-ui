import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, top: 0 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CMS
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
