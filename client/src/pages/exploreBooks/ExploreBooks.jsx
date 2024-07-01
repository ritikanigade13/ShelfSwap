import { Box, Container, Typography } from "@mui/material";
import React from "react";

const booksCategory = [
  {
    id: 1,
    title: "Fictional Books",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Non-Fictional Books",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Mythological Books",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Educational Books",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Entrance Books",
    image: "https://via.placeholder.com/150",
  },
];
const ExploreBooks = () => {
  return (
    <Container>
      <Box>
        <Typography
          variant="h4"
          sx={{ color: "black", fontWeight: "700", marginTop: "20px" }}
        >
          Featured Categories
        </Typography>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "20px 0",
          }}
        >
          {booksCategory.map((Category, index) => (
            <Box key={index} sx={{ width: "200px" }}>
              <img src={Category.image} alt="CategoryImg" />
              <Typography variant="h6">{Category.title} </Typography>
            </Box>
          ))}
        </Container>
      </Box>
      <Container>
        <Box>filterBar</Box>
        <Box>ALL ITEMS</Box>
      </Container>
    </Container>
  );
};

export default ExploreBooks;
