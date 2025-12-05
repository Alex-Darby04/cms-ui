import {
  TextField,
  Stack,
  Button,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  Box,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import '../css-stylesheet/LoginPage.css'

function LoginForm() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMGVlYmM5OS05YzBiLTRlZjgtYmI2ZC02YmI5YmQzODBhMTEiLCJuYW1lIjoiSm9obiBTbWl0aCIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoiQ09OU1VNRVIiLCJ0ZW5hbnRfaWQiOiJiNWYxYTMwMi02MTM2LTRjNGYtYTkzMS0xODQ1MTEyZjQ2NDAiLCJleHAiOjE3MTEzNjUwMDAsImlhdCI6MTcxMTM2MTQwMH0.c_vB69BEELsWwbL-5RzevXvlsqSFx60x4H6r16hLR6I
    //jwt for consumer
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjOTllZWJjMS0yYzBhLTRlZjgtYWE2ZC0xYmI5YmQzODBjMjIiLCJuYW1lIjoiQWdlbnQgU2FyYWgiLCJlbWFpbCI6InNhcmFoQGNtcy1zdXBwb3J0LmNvbSIsInJvbGUiOiJBR0VOVCIsInRlbmFudF9pZCI6bnVsbCwiZXhwIjoxNzExMzY1MDAwLCJpYXQiOjE3MTEzNjE0MDB9.nKBcEguo7L18XPQ_BuOPjBfTcAwLI0tMO0hZ1fRuQ-Q
    //jwt for support agent
    localStorage.setItem("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMGVlYmM5OS05YzBiLTRlZjgtYmI2ZC02YmI5YmQzODBhMTEiLCJuYW1lIjoiSm9obiBTbWl0aCIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoiQ09OU1VNRVIiLCJ0ZW5hbnRfaWQiOiJiNWYxYTMwMi02MTM2LTRjNGYtYTkzMS0xODQ1MTEyZjQ2NDAiLCJleHAiOjE3MTEzNjUwMDAsImlhdCI6MTcxMTM2MTQwMH0.c_vB69BEELsWwbL-5RzevXvlsqSFx60x4H6r16hLR6I")
    navigate('/ticket')
  };

  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing={3}>
        <h1>Log In</h1>
        <TextField
          value={username}
          id="username"
          label="Username"
          variant="outlined"
          onInput={(e) => setUsername(e.target.value)}
        ></TextField>
        <FormControl sx={{ m: 1}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </form>
    </Box>
      );
}

export default function LoginPage() {
  return <LoginForm />;
}
