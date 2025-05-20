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
import { useTheme, styled, alpha } from "@mui/material/styles";

// Define our custom color to match navbar and footer
const mainColor = "#133020"; // Dark forest green
const textColor = "#ffffff"; // White text

// Styled components to maintain consistent design
const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  "&.MuiToggleButton-root": {
    borderColor: alpha(mainColor, 0.3),
    color: mainColor,
  },
  "&.Mui-selected": {
    backgroundColor: mainColor,
    color: textColor,
    "&:hover": {
      backgroundColor: alpha(mainColor, 0.9),
    },
  },
  "&:hover": {
    backgroundColor: alpha(mainColor, 0.1),
  },
}));

const StyledButton = styled(Button)(({ theme, variant }) => ({
  ...(variant === "contained" && {
    backgroundColor: mainColor,
    color: textColor,
    "&:hover": {
      backgroundColor: alpha(mainColor, 0.9),
    },
  }),
  ...(variant === "outlined" && {
    borderColor: mainColor,
    color: mainColor,
    "&:hover": {
      backgroundColor: alpha(mainColor, 0.1),
      borderColor: mainColor,
    },
  }),
}));

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
      enrollmentUrl: "https://classroom.google.com/c/python-course-id-123",
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
    // Custom level colors that complement the main color
    switch (level) {
      case "Beginner":
        return {
          bg: "#e8f5e9", // Light green
          text: "#2e7d32", // Dark green
        };
      case "Intermediate":
        return {
          bg: "#fff8e1", // Light amber
          text: "#ff8f00", // Dark amber
        };
      case "Advanced":
        return {
          bg: "#ffebee", // Light red
          text: "#c62828", // Dark red
        };
      default:
        return {
          bg: theme.palette.grey[200],
          text: theme.palette.grey[800],
        };
    }
  };

  return (
    <Box sx={{ py: 8, bgcolor: alpha(mainColor, 0.05) }}>
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
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            sx={{ color: mainColor }}
          >
            Featured Courses
          </Typography>

          {isMobile && (
            <StyledButton
              startIcon={<FilterIcon />}
              variant="outlined"
              onClick={() => {}} // Can be used to open a filter dialog on mobile
            >
              Filter
            </StyledButton>
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
              <StyledToggleButton
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
              </StyledToggleButton>
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
                  transition: "all 0.3s ease",
                  border: "1px solid",
                  borderColor: "transparent",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                    borderColor: alpha(mainColor, 0.2),
                  },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={course.image}
                    alt={course.title}
                  />
                  {/* Removed Popular Chip */}
                  <Chip
                    label={course.category}
                    size="small"
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      bgcolor: "rgba(255, 255, 255, 0.9)",
                      color: mainColor,
                      fontWeight: "medium",
                    }}
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    fontWeight="bold"
                    sx={{ color: mainColor }}
                  >
                    {course.title}
                  </Typography>
                  {/* Removed instructor line */}
                  {/* Removed rating and students */}
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

                <CardActions sx={{ bgcolor: alpha(mainColor, 0.05), p: 2 }}>
                  {course.enrollmentUrl ? (
                    // Course with enrollment URL - button with link
                    <StyledButton
                      variant="contained"
                      fullWidth
                      component="a"
                      href={course.enrollmentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enroll Now
                    </StyledButton>
                  ) : (
                    // Course without enrollment URL - regular button
                    <StyledButton
                      variant="contained"
                      fullWidth
                      onClick={() =>
                        alert(`Enrollment for ${course.title} coming soon!`)
                      }
                    >
                      Enroll Now
                    </StyledButton>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Show more button */}
        {filteredCourses.length > 0 && (
          <Box sx={{ mt: 6, textAlign: "center" }}>
            <StyledButton variant="outlined" size="large" sx={{ px: 4, py: 1 }}>
              View All Courses
            </StyledButton>
          </Box>
        )}

        {/* No courses found */}
        {filteredCourses.length === 0 && (
          <Box sx={{ textAlign: "center", py: 6 }}>
            <Typography variant="h6" sx={{ mb: 2, color: "text.secondary" }}>
              No courses found for this category.
            </Typography>
            <StyledButton
              variant="contained"
              onClick={() => setSelectedCategory("All")}
            >
              View All Courses
            </StyledButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Courses;
