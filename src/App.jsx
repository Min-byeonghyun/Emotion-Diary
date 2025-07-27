import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import { Routes, Route } from "react-router-dom";

// 1. '/' : 모든 일기를 조회하는 HOME
// 2. '/new : 새로운 일기를 작성하는 New페이지
// 3. '/diary : 일기 상세페이지

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/diary/:id" element={<Diary/>}/>
      <Route path="*" element={<Notfound/>}/>w
    </Routes>
  )
}

export default App;
