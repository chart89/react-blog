import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Add from "./components/pages/Add";
import SinglePost from "./components/pages/SinglePost";
import Edit from "./components/pages/Edit";
import { Container } from 'react-bootstrap'
import Footer from "./components/views/Footer";
import Header from "./components/views/Header";
import Categories from "./components/views/Categories";
import CatSelected from "./components/pages/CatSelected";

function App() {
  return (
    <Container className="justify-content-center ">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/add" element={<Add />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/post/edit/:id" element={<Edit />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryName" element={<CatSelected />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
