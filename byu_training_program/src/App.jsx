import { useState } from "react";
import { Box } from "@mui/material";
import TopNavbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import Footer from "./components/Footer";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <Box>
      <TopNavbar setActivePage={setActivePage} />
      {activePage === "home" && <HomePage />}
      {activePage === "courses" && <Courses />}
      <Footer setActivePage={setActivePage} />
    </Box>
  );
}

export default App;
