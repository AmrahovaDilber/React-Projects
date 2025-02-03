import { useState } from "react";
type cardType = {
    question: string;
    answer: string;
  };
  

interface CardsProps{
    flashcards:cardType[]
}

export const Cards: React.FC<CardsProps> = ({flashcards}) => {
    const [clickedCard, setClickedCard] = useState<null | number>(null);
  
    function handleClick(index: number) {
      if (clickedCard === index) {
        setClickedCard(null);
      } else {
        setClickedCard(index);
      }
    }
  
    return (
      <div className="flex flex-col">
        <h1 className="text-center mb-10 font-semibold text-[40px] italic">Flashcards</h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-[1200px]">
      
      {flashcards.map((card, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`p-6  shadow-md rounded-lg cursor-pointer text-center transition-all duration-300   ${clickedCard===index?"bg-red-500 text-white":"bg-white"}`}
        >
          {clickedCard === index ? card.answer : card.question}
        </div>
      ))}
    </div>
      </div>
    
    );
  };