import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import VideoPage from "./VideoPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomId" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
