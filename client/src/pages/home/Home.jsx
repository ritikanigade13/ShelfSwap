import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import handBooksSvg from "../../assets/icons/hand-books.svg";
import handMoneySvg from "../../assets/icons/hand-money.svg"; 

const BookCard = ({ title, buttonText, bgColor }) => (
  <Card sx={{ maxWidth: 300, mx: "auto" }}>
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: bgColor,
      }}
    >
      <img
        src={title === "Buy Books" ? handBooksSvg : handMoneySvg}
        alt={
          title === "Buy Books" ? "Hand holding books" : "Hand holding money"
        }
        style={{ width: "80%", height: "auto", marginBottom: "1rem" }}
      />
    </CardContent>
    <CardActions sx={{ justifyContent: "center" }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ShoppingCartIcon />}
      >
        {buttonText}
      </Button>
    </CardActions>
  </Card>
);

const Home = () => {
  return (
    <Box
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: "linear-gradient(to right, #6dd5ed, #2193b0)",
        height: "100vh",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom color="white">
          Welcome to ShelfSwap
        </Typography>
        <Typography variant="h5" align="center" gutterBottom color="white">
          Buy and Sell Used Books Online with Ease!
        </Typography>
        <Typography variant="body1" align="center" gutterBottom color="white">
          At ShelfSwap, we make it simple to buy and sell second-hand books at
          great prices. Turn your old books into cash and discover your next
          read today!
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="flex-end" 
          alignItems="center"
          width="70%"
        >
          <Grid
            item
            xs={12}
            sm={5}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <BookCard
              title="Buy Books"
              buttonText="Buy Books"
              bgColor="#0083ca"
            />
          </Grid>
          <Grid item xs={12} sm={2} md={1} sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "80%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                padding: "0.5rem 1rem",
                borderRadius: "50%",
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" align="center">
                Or
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <BookCard
              title="Sell Books"
              buttonText="Sell Books"
              bgColor="#FFF8DD"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
