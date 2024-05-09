import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_ROUTE } from "../routes/AppRoute";

export const NavBar = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Button
                        style={{ color: "white", textTransform: "none" }}
                        startIcon={<BookIcon />}
                        onClick={() => navigate(APP_ROUTE.HOME_PAGE)}
                    >
                        <Typography variant="h6">Blogging App</Typography>
                    </Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button
                        style={{ color: "white", textTransform: "none" }}
                        onClick={() => navigate(APP_ROUTE.LOGIN)}
                    >
                        Login
                    </Button>
                    <Button
                        style={{ color: "white", textTransform: "none" }}
                        onClick={() => navigate(APP_ROUTE.REGISTER)}
                    >
                        Register
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
