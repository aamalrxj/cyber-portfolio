import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import ProjectsPage from './Projects';
import AboutPage from './About';
import ContactPage from './Contact';
import CredentialsPage from './Credentials';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="credentials" element={<CredentialsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
