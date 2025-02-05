import React, { useState } from "react";
import './App.css'
const randomColors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF5", 
  "#F5FF33", "#FF8C33", "#8C33FF", "#33FF8C", "#FF3333", "#33A1FF",
  "#FFC300", "#FF5733", "#C70039", "#900C3F", "#581845", "#DAF7A6",
  "#28B463", "#D35400", "#E74C3C", "#8E44AD", "#2E86C1", "#1ABC9C",

];

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#ece6e6");

  function handleSwitchColor() {
    const randomNum = Math.floor(Math.random() * randomColors.length);
    setSelectedColor(randomColors[randomNum]);
  }

  return (
    <div className="container" style={{ backgroundColor: selectedColor }}>
      <button className="btn" onClick={handleSwitchColor} >
        Switch Color
      </button>
    </div>
  );
};

export default App;
