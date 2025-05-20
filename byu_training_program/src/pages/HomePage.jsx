import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Chip,
  useMediaQuery,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";

// Colors based on the image
const colors = {
  lifewoodGreen: "#133020",
  byuGold: "#F0CA4D",
  byuNavy: "#1F306E",
  lightGray: "#f5f5f5",
  white: "#ffffff",
  darkText: "#333333",
};

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: colors.white,
          pt: { xs: 4, md: 8 },
          pb: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h1"
                fontWeight="bold"
                sx={{
                  color: colors.lifewoodGreen,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  mb: 2,
                }}
              >
                Transform Your Future with Technology Skills
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                sx={{ mb: 4, fontSize: { xs: "1rem", md: "1.15rem" } }}
              >
                A collaborative learning program by Lifewood Data Technology and
                BYU-Pathway Worldwide
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="medium"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: colors.byuGold,
                    color: colors.darkText,
                    fontWeight: "bold",
                    "&:hover": {
                      bgcolor: "#ddb946",
                    },
                  }}
                >
                  Start Learning
                </Button>
                <Button
                  variant="outlined"
                  size="medium"
                  sx={{
                    borderColor: colors.lifewoodGreen,
                    color: colors.lifewoodGreen,
                    "&:hover": {
                      borderColor: colors.lifewoodGreen,
                      bgcolor: alpha(colors.lifewoodGreen, 0.05),
                    },
                  }}
                >
                  Explore Courses
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 4,
                }}
              >
                <img
                  src="LOGO1.png"
                  alt="Lifewood & BYU Pathway Partnership"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "180px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Program Overview Section */}
      <Box sx={{ bgcolor: colors.lightGray, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h2"
                fontWeight="bold"
                sx={{ mb: 3, color: colors.byuNavy }}
              >
                About Our Training Program
              </Typography>
              <Typography paragraph sx={{ mb: 3 }}>
                The Lifewood Data Technology and BYU-Pathway Worldwide training
                program combines industry expertise with academic excellence to
                provide students with comprehensive technology education that
                prepares them for real-world challenges.
              </Typography>
              <Typography paragraph sx={{ mb: 4 }}>
                Our curriculum focuses on in-demand skills in data science,
                programming, security, and database management—all taught by
                industry professionals and experienced educators in an
                accessible online format.
              </Typography>
              <Box sx={{ mb: 2 }}>
                {["Data Science", "Programming", "Security", "Database"].map(
                  (skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        mr: 1,
                        mb: 1,
                        bgcolor: colors.byuGold,
                        color: colors.darkText,
                        fontWeight: "medium",
                      }}
                    />
                  )
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://source.unsplash.com/random/600x400/?students,technology"
                alt="Students learning technology"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
