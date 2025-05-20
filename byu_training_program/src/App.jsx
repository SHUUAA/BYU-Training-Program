import { useState } from "react";
import { Box } from "@mui/material";
import TopNavbar from "./components/Navbar";
import Courses from "./components/Courses";
import HomePage from "./components/Homepage";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <Box>
      <TopNavbar setActivePage={setActivePage} />
      {activePage === "home" && <HomePage />}
      {activePage === "courses" && <Courses />}
    </Box>
  );
}

export default App;