import { Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homescreen from "./screens/Homescreen";
import Footer from "./components/Footer";
import AboutScreen from "./screens/AboutScreen";
import ResumeScreen from "./screens/ResumeScreen";
import AllProjectScreen from "./screens/AllProjectScreen";
import ProjectScreen from "./screens/ProjectScreen";
import ScrollToTop from "./components/ScrollToTop";
import ContactScreen from "./screens/ContactScreen";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Flex direction="column" as="main" px="10">
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/resume" element={<ResumeScreen />} />
          <Route path="/projects" element={<AllProjectScreen />} />
          <Route path="/projects/:url" element={<ProjectScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>
      </Flex>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
