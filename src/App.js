import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Add from "./components/pages/Add";
import SinglePost from "./components/pages/SinglePost";
import Edit from "./components/pages/Edit";

function App() {
  return (
  
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/add" element={<Add />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/post/edit/:id" element={<Edit />} />
    </Routes>
  
  );
}

export default App;
