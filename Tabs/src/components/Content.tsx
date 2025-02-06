import { useState } from "react";
import { islamicReminders } from "../constant/data";

export const Content: React.FC<{ activeTab: number }> = ({ activeTab }) => {
  const [showDetails, setShowDetails] = useState<boolean>(true);
  return (
    <div className="content-container">
      <div>
        <h3>{islamicReminders[activeTab - 1].title}</h3>
        {showDetails && <p>{islamicReminders[activeTab - 1].details}</p>}
        <div className="content-buttons">
          <button
            className="hide-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
          {showDetails?"Hide Details":"Show Details"}
          </button>
          <div className="heart-section">
            <p>0 heart</p>
            <button className="heart-btn">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
