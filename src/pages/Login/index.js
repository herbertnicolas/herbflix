import {
  Button,
  Grid2,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import "./login.css";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Visibility } from "@mui/icons-material";

export default function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <Grid container justifyContent={"center"} className="bg">
        <Grid item size={3} className="login">
          <Typography variant="h3" className="title">
            WHAT'S NEW?
          </Typography>
          <TextField
            label="Username"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch", marginTop: "20px" }}
            onChange={(e) => setUsername(e)}
          />
          <TextField
            label="Password"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px", fontSize: "15px" }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
