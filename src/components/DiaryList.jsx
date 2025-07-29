import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
export default function DiaryList({ data }) {
  const nav = useNavigate();
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          onClick={() => nav("/new")}
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper">
        {data.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
