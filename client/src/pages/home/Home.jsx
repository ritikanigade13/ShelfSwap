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
import handBooksSvg from "../../assets/icons/hand-books.svg";
import handMoneySvg from "../../assets/icons/hand-money.svg";
import BookCard from "./BookCard.jsx";
import BookCarousel from "../../components/carousel/BookCarousel.jsx";
import { Link, useNavigate } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "Book 1",
    price: "250",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Book 2",
    price: "250",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Book 3",
    price: "250",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Book 4",
    price: "250",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Book 5",
    price: "250",
    image: "https://via.placeholder.com/150",
  },
];

const sendBoxDetails = [
  {
    imageURL: handBooksSvg,
    Heading: "SELL IT",
    subText: "Get an instant price for your items.",
  },
  {
    imageURL: handBooksSvg,
    Heading: "SEND IT",
    subText: "Send your stuff for FREE.",
  },
  {
    imageURL: handBooksSvg,
    Heading: "SPEND IT",
    subText: "Get paid by Direct Deposit or PayPal!",
  },
];
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container
        sx={{
          backgroundImage: "linear-gradient(to right, #6dd5ed, #2193b0)",
          padding: "2rem",
          width: "200vw",
          minWidth: "95vw",
          borderRadius: "10px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
          mt: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
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
          justifyContent="center"
          alignItems="center"
          sx={{ width: "70%", mx: "auto" }}
        >
          <Grid item xs={12} sm={5} md={4}>
            <BookCard
              buttonText="Buy Books"
              bgColor="#0083ca"
              imgSrc={handBooksSvg}
              altText="Hand holding books"
              handleClick={() => navigate("/explore-books")}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={2}
            md={1}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                padding: "0.5rem 1rem",
                borderRadius: "50%",
                boxShadow: 3,
                height: "30px",
                width: "30px",
              }}
            >
              <Typography variant="h6" align="center">
                Or
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5} md={4}>
            <BookCard
              buttonText="Sell Books"
              bgColor="#FFF8DD"
              imgSrc={handMoneySvg}
              altText="Hand holding money"
              handleClick={() => navigate("/explore-books")}
            />
          </Grid>
        </Grid>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          color="black"
          mt="50px"
        >
          Recently Added Books
        </Typography>
        <BookCarousel books={books} />
        <Button
          component={Link}
          to="/exploreBooks"
          variant="contained"
          sx={{
            width: "fit-content",
            alignSelf: "center",
            color: "#ffffff",
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "#fff",
            },
          }}
        >
          Explore All Books
        </Button>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "30px",
        }}
      >
        {sendBoxDetails.map((sendBox, index) => (
          <Box key={index} sx={{ width: "250px" }}>
            <img src={sendBox.imageURL} alt="sell" />
            <Typography variant="h5">{sendBox.Heading}</Typography>
            <Typography variant="p">{sendBox.subText}</Typography>
          </Box>
        ))}
      </Container>
    </>
  );
};

export default Home;
