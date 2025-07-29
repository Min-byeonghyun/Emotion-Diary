import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

export default function New() {
  return (
    <div className="">
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로가기"} />}
      />
      <Editor />
    </div>
  );
}
