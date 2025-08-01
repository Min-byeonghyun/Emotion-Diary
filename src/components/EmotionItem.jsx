import "./EmotionItem.css";
import { getEmotionImg } from "../util/get-emotion-image";

export default function EmotionItem({
  emotionId,
  emotionName,
  isSelected,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img className="emotion_img" src={getEmotionImg(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
}
