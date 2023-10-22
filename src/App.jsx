import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import BookDetail from './Components/BookDetail'
import './App.css'
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route  path="/"element={<Home />} />
          <Route  path="/bookDetail" element={<BookDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
