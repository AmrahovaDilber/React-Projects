
export default function Item({ item, onDeleteItem, handleToggleItem }) {
    return (
      <div className="item">
        <input
          type="checkbox"
          value={item.packed}
          checked={item.packed}
          onChange={() => handleToggleItem(item.id)}
        ></input>
        <p className={item.packed ? "packed" : ""}>
          {item.description} - {item.quantity}
        </p>
        <button className="delete-button" onClick={() => onDeleteItem(item.id)}>
          &times;
        </button>
      </div>
    );
  }
  
  