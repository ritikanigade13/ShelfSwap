import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Paper, Typography, Button, Grid, SvgIcon } from "@mui/material";
import ArrowRight from "@mui/icons-material/ArrowRight";

const BookCarousel = ({ books }) => {
  // Group books into arrays of 5 items each
  const groupedBooks = [];
  for (let i = 0; i < books.length; i += 5) {
    groupedBooks.push(books.slice(i, i + 5));
  }

  const rupeeTypography = {
    fontSize:"20px",
    color:"black",
  }

  return (
    <Carousel
      indicators={true}
      autoPlay={false}
      animation="slide"
      navButtonsAlwaysVisible={true}
    >
      {groupedBooks.map((group, groupIndex) => (
        <Paper
          key={groupIndex}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            background: "transparent",
          }}
        >
          <Grid container spacing={2}>
            {group.map((book) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={book.id}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundImage: `url(${book.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "200px",
                      width: "150px",
                      mb: 2,
                      border: "2px solid gray",
                      borderRadius: "8px",
                    }}
                  />
                  <Typography variant="h6">{book.title}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      width: "100%", // Ensures the Box takes full width of its parent
                      mt: 2,
                    }}
                  >
                    <Typography variant="subtitle1" sx={rupeeTypography}>₹ {book.price}</Typography>
                    <Button
                      variant="contained"
                      // startIcon={<SvgIcon component={ArrowRight} />}
                    >
                      Buy
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      ))}
    </Carousel>
  );
};

export default BookCarousel;
