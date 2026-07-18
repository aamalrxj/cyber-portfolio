import { Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Credentials from "./pages/Credentials/Credentials";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="credentials" element={<Credentials />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}