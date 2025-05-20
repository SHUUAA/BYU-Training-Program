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

// Featured course data
const featuredCourses = [
  {
    id: 1,
    title: "Introduction to Data Science",
    category: "Data Science",
    image: "https://source.unsplash.com/random/400x220/?data",
    level: "Beginner",
    duration: "8 weeks",
    description: "Learn the foundations of data analysis and visualization.",
  },
  {
    id: 2,
    title: "Python Programming Essentials",
    category: "Programming",
    image: "https://source.unsplash.com/random/400x220/?programming",
    level: "Beginner",
    duration: "6 weeks",
    description:
      "Master the basics of Python programming for data analysis and beyond.",
  },
  {
    id: 3,
    title: "Database Management",
    category: "Database",
    image: "https://source.unsplash.com/random/400x220/?database",
    level: "Intermediate",
    duration: "8 weeks",
    description:
      "Design and implement efficient database systems for various applications.",
  },
];

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
                variant="h2"
                component="h1"
                fontWeight="bold"
                sx={{
                  color: colors.lifewoodGreen,
                  fontSize: { xs: "2.2rem", md: "3rem" },
                  mb: 2,
                }}
              >
                Transform Your Future with Technology Skills
              </Typography>
              <Typography variant="h5" color="textSecondary" sx={{ mb: 4 }}>
                A collaborative learning program by Lifewood Data Technology and
                BYU-Pathway Worldwide
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
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
                  size="large"
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
                  src="/images/lifewood-byu-pathway-logo.png"
                  alt="Lifewood & BYU Pathway Partnership"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "240px",
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

      {/* Featured Courses Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: colors.white }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              sx={{ mb: 1, color: colors.lifewoodGreen }}
            >
              Featured Courses
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              sx={{ mb: 2 }}
            >
              Start building in-demand skills with our top courses
            </Typography>
            <Divider
              sx={{
                width: "80px",
                mx: "auto",
                borderColor: colors.byuGold,
                borderWidth: 2,
              }}
            />
          </Box>

          <Grid container spacing={3}>
            {featuredCourses.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={course.image}
                    alt={course.title}
                  />
                  <Box sx={{ position: "relative" }}>
                    <Chip
                      label={course.level}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: -14,
                        right: 16,
                        bgcolor:
                          course.level === "Beginner" ? "#4caf50" : "#ff9800",
                        color: "white",
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      fontWeight="bold"
                      gutterBottom
                    >
                      {course.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ mb: 2 }}
                    >
                      {course.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Chip
                        label={course.category}
                        size="small"
                        sx={{
                          bgcolor: colors.lifewoodGreen,
                          color: colors.white,
                          fontSize: "0.75rem",
                        }}
                      />
                      <Typography variant="body2" color="textSecondary">
                        {course.duration}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                px: 4,
                borderColor: colors.lifewoodGreen,
                color: colors.lifewoodGreen,
                "&:hover": {
                  borderColor: colors.lifewoodGreen,
                  bgcolor: alpha(colors.lifewoodGreen, 0.05),
                },
              }}
            >
              Browse All Courses
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
