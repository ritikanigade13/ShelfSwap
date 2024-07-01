import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const BookCard = ({  buttonText, bgColor, imgSrc, altText, handleClick}) => (
  <Card sx={{ maxWidth: 300, mx: "auto" }}>
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: bgColor,
        padding: "1rem",
      }}
    >
      <img src={imgSrc} alt={altText} style={{ marginBottom: "0.5rem" }} />
    </CardContent>
    <CardActions sx={{ justifyContent: "center", padding: "0.5rem" }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ShoppingCartIcon />}
        onClick = {handleClick}
      >
        {buttonText}
      </Button>
    </CardActions>
  </Card>
);

export default BookCard;