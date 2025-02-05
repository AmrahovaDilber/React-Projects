export default function StarRating({maxRating}) {
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
      };
    
      const textStyle = {
        lineHeight: '1',
        margin: '0',
        fontSize: '18px',
        fontWeight: 'bold',
      };
    return (
      <div style={containerStyle}>
        <div style={starContainerStyle}>
          {Array.from({ length: maxRating }, (_, i) => (
            <span key={i} style={starStyle}> ★</span>
          ))}
        </div>
            <p style={textStyle}>{maxRating}</p>
      </div>
    );
  }
  