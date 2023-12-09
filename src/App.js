import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, TestimonialPage, Dashboard } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
