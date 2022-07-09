import { AppBar, Toolbar } from "@mui/material";
import { Container, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Movies from "./Movies";

const pages = ["Movies", "Customers", "Rentals"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = (prop) => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink to="movies">{page}</NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
