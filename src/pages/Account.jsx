import React from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import "../assets/styles/Account.css";

const Account = () => {
  return (
    <Container className="account-container">
      <Typography variant="h4" gutterBottom>
        Bienvenido
      </Typography>
      <Box className="button-group">
        <Button
          variant="contained"
          color="primary"
          href="https://pet-shop-validaciones-eight.vercel.app/"
          className="account-button"
        >
          Iniciar Sesión
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="https://pet-shop-validaciones-eight.vercel.app/"
          className="account-button"
        >
          Registrarse
        </Button>
      </Box>
    </Container>
  );
};

export default Account;
