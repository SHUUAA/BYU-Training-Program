import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Rating,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
} from "@mui/material";
import {
  AccessTime as ClockIcon,
  FilterList as FilterIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Course data
  const courses = [
    {
      id: 1,
      title: "Introduction to Python Programming",
      category: "Programming",
      instructor: "Dr. Alex Johnson",
      rating: 4.8,
      students: 12453,
      duration: "8 weeks",
      level: "Beginner",
      image: "https://source.unsplash.com/random/400x220/?python",
      popular: true,
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      category: "Data Science",
      instructor: "Prof. Sarah Chen",
      rating: 4.7,
      students: 8932,
      duration: "10 weeks",
      level: "Intermediate",
      image: "https://source.unsplash.com/random/400x220/?data",
      popular: true,
    },
    {
      id: 3,
      title: "Machine Learning with TensorFlow",
      category: "Machine Learning",
      instructor: "Dr. Michael Wei",
      rating: 4.9,
      students: 7621,
      duration: "12 weeks",
      level: "Advanced",
      image: "https://source.unsplash.com/random/400x220/?machine",
      popular: true,
    },
    {
      id: 4,
      title: "Cybersecurity Essentials",
      category: "Security",
      instructor: "Lisa Rodriguez",
      rating: 4.6,
      students: 5934,
      duration: "6 weeks",
      level: "Intermediate",
      image: "https://source.unsplash.com/random/400x220/?security",
      popular: false,
    },
    {
      id: 5,
      title: "Database Design and SQL",
      category: "Database",
      instructor: "Prof. James Parker",
      rating: 4.5,
      students: 6820,
      duration: "8 weeks",
      level: "Beginner",
      image: "https://source.unsplash.com/random/400x220/?database",
      popular: false,
    },
    {
      id: 6,
      title: "Advanced AI Algorithms",
      category: "Artificial Intelligence",
      instructor: "Dr. Emily Zhang",
      rating: 4.9,
      students: 3245,
      duration: "10 weeks",
      level: "Advanced",
      image: "https://source.unsplash.com/random/400x220/?ai",
      popular: false,
    },
  ];

  // All unique categories
  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  // Filter courses based on selected category
  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  const handleCategoryChange = (event, newCategory) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return {
          bg: theme.palette.success.light,
          text: theme.palette.success.dark,
        };
      case "Intermediate":
        return {
          bg: theme.palette.warning.light,
          text: theme.palette.warning.dark,
        };
      case "Advanced":
        return {
          bg: theme.palette.error.light,
          text: theme.palette.error.dark,
        };
      default:
        return {
          bg: theme.palette.grey[200],
          text: theme.palette.grey[800],
        };
    }
  };

  return (
    <Box sx={{ py: 8, bgcolor: "grey.50" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>
        {/* Courses Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h4" component="h2" fontWeight="bold">
            Featured Courses
          </Typography>

          {isMobile && (
            <Button
              startIcon={<FilterIcon />}
              variant="outlined"
              onClick={() => {}} // Can be used to open a filter dialog on mobile
            >
              Filter
            </Button>
          )}
        </Box>

        {/* Category filter */}
        <Box sx={{ mb: 4, overflowX: "auto" }}>
          <ToggleButtonGroup
            value={selectedCategory}
            exclusive
            onChange={handleCategoryChange}
            aria-label="course categories"
            sx={{
              minWidth: isMobile ? "100%" : "auto",
              flexWrap: isMobile ? "wrap" : "nowrap",
            }}
          >
            {categories.map((category) => (
              <ToggleButton
                key={category}
                value={category}
                sx={{
                  flexShrink: 0,
                  px: 2,
                  py: 1,
                  whiteSpace: "nowrap",
                  mb: isMobile ? 1 : 0,
                }}
              >
                {category}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        {/* Courses Grid */}
        <Grid container spacing={3}>
          {filteredCourses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={course.image}
                    alt={course.title}
                  />
                  {course.popular && (
                    <Chip
                      label="Popular"
                      color="primary"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        fontWeight: "bold",
                      }}
                    />
                  )}
                  <Chip
                    label={course.category}
                    size="small"
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      bgcolor: "rgba(255, 255, 255, 0.9)",
                      color: theme.palette.primary.main,
                    }}
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    fontWeight="bold"
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    by {course.instructor}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Rating
                      value={course.rating}
                      precision={0.1}
                      readOnly
                      size="small"
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ ml: 1 }}
                    >
                      ({course.students.toLocaleString()})
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <ClockIcon
                        fontSize="small"
                        sx={{ mr: 0.5, color: "text.secondary" }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {course.duration}
                      </Typography>
                    </Box>

                    <Chip
                      label={course.level}
                      size="small"
                      sx={{
                        bgcolor: getLevelColor(course.level).bg,
                        color: getLevelColor(course.level).text,
                      }}
                    />
                  </Box>
                </CardContent>

                <CardActions sx={{ bgcolor: "grey.50", p: 2 }}>
                  <Button variant="contained" fullWidth>
                    Enroll Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Show more button */}
        {filteredCourses.length > 0 && (
          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Button variant="outlined" size="large" sx={{ px: 4, py: 1 }}>
              View All Courses
            </Button>
          </Box>
        )}

        {/* No courses found */}
        {filteredCourses.length === 0 && (
          <Box sx={{ textAlign: "center", py: 6 }}>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
              No courses found for this category.
            </Typography>
            <Button
              variant="contained"
              onClick={() => setSelectedCategory("All")}
            >
              View All Courses
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Courses;
