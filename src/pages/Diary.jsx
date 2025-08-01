import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/getStringedDate";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Diary() {
  const params = useParams();
  const nav = useNavigate();
  usePageTitle(`${params.id}번 일기`);
  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>데이터 로딩중...!</div>;
  }
  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));
  return (
    <div>
      <Header
        title={`${title} 일기`}
        leftChild={<Button onClick={() => nav(-1)} text={"<뒤로 가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
}
