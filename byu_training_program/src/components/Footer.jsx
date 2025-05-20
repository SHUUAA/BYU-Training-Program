import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

// Define our custom color to match navbar
const mainColor = "#133020"; // Dark forest green
const textColor = "#ffffff"; // White text for contrast

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: mainColor,
  color: textColor,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: textColor,
  textDecoration: "none",
  marginLeft: theme.spacing(2),
  fontSize: "0.875rem",
  "&:hover": {
    textDecoration: "underline",
    color: theme.palette.grey[300],
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: textColor,
  marginRight: theme.spacing(1),
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const Footer = ({ setActivePage }) => {
  const theme = useTheme();

  const handleNavigation = (page) => {
    if (setActivePage) {
      setActivePage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Logo and social media icons */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6" fontWeight="bold">
                BYU Training
              </Typography>
              <Box sx={{ display: "flex", ml: 2 }}>
                <SocialIcon size="small" aria-label="Facebook">
                  <FacebookIcon fontSize="small" />
                </SocialIcon>
                <SocialIcon size="small" aria-label="Twitter">
                  <TwitterIcon fontSize="small" />
                </SocialIcon>
                <SocialIcon size="small" aria-label="Instagram">
                  <InstagramIcon fontSize="small" />
                </SocialIcon>
                <SocialIcon size="small" aria-label="LinkedIn">
                  <LinkedInIcon fontSize="small" />
                </SocialIcon>
              </Box>
            </Box>
          </Grid>

          {/* Contact email */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              textAlign: { xs: "left", sm: "right" },
              mt: { xs: 2, sm: 0 },
            }}
          >
            <Box sx={{ display: "inline-flex", alignItems: "center" }}>
              <EmailIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">training@byu.edu</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Copyright and quick links */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} BYU Training Program. All rights
            reserved.
          </Typography>

          <Box sx={{ display: "flex", mt: { xs: 2, sm: 0 } }}>
            <FooterLink
              component="button"
              onClick={() => handleNavigation("about")}
            >
              About
            </FooterLink>
            <FooterLink
              component="button"
              onClick={() => handleNavigation("courses")}
            >
              Courses
            </FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
