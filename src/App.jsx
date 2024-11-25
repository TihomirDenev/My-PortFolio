import { Route, Routes } from "react-router-dom";
import Projects from "./views/Projects/Projects";
import Contact from "./views/Contact/Contact";
import Skills from "./views/Skills/Skills";
import Layout from "./hoc/Layout/Layout";
import About from "./views/About/About";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
