import { useState } from "react";

interface itemProps {
  num: number;
  title: string;
  text: string;
}

const AccordionItem: React.FC<itemProps> = ({ num, title, text }) => {
  const [clickedCard, setClickedCard] = useState<null | number>(null);
  function handleShow(id: number) {
    if (id === clickedCard) {
      setClickedCard(null);
    } else {
      setClickedCard(id);
    }
  }
  return (
    <div className="item">
      <p className="number">{num}</p>
          <p className={`text ${clickedCard===num&&"active"}`}>{title}</p>
      <p className="icon" onClick={() => handleShow(num)}>
        {clickedCard===num?"-":"+"}
      </p>
      {clickedCard === num && <div className="content-box">{text}</div>}
    </div>
  );
};
export default AccordionItem;
