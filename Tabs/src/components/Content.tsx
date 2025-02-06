import { islamicReminders } from "../constant/data";

export const Content: React.FC<{ activeTab: number }> = ({ activeTab }) => {
    return (
      <div className="content-container">
        <div>
          <h3>{islamicReminders[activeTab - 1].title}</h3>
          <p>{islamicReminders[activeTab - 1].details}</p>
          <div className="content-buttons">
            <button className="hide-btn">Hide Details</button>
            <div className="heart-section">
              <p>0 heart</p>
              <button className="heart-btn">+</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  