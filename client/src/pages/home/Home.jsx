import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "4rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                User Profile
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                View and manage your profile information
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                View Profile
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Settings
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                Manage your account settings
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                Manage Settings
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
