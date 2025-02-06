import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export default function StarRating({ maxRating }) {
  const [rating, setRating] = useState(1);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  };

  const starContainerStyle = {
    display: 'flex',
    gap: '4px',
  };

  const starStyle = {
    fontSize: '24px',
    color: '#FFD700', 
    cursor: 'pointer',
  };

  const textStyle = {
    lineHeight: '1',
    margin: '0',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: "pointer",
  };

  function handleRating(newRating) {
    setRating(newRating);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span
            onClick={() => handleRating(i + 1)}
            key={i}
            style={starStyle}
          >
            {i < rating ? <FaStar /> : <CiStar />}
          </span>
        ))}
      </div>
      <p style={textStyle}>{rating || ""}</p>
    </div>
  );
}
