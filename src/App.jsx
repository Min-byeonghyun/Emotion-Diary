import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header title={'Header'} leftChild={<Button text={'left'}/>} rightChild={<Button text={'right'}/>}/>
      <Button text={123} onClick={() => console.log("클릭")} type={"DEFAULT"} />
      <Button
        text={123}
        onClick={() => console.log("클릭")}
        type={"POSITIVE"}
      />
      <Button
        text={123}
        onClick={() => console.log("클릭")}
        type={"NEGATIVE"}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />w
      </Routes>
    </>
  );
}

export default App;
