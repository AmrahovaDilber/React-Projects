export default function Stats({ items }) {
    if (!items.length) {
      return <p className="stats">Start adding some items to your packing list</p>;
    }
  
    const packedItems = items.filter((item) => item.packed);
    const percent = (packedItems.length / items.length) * 100;
    return (
      <footer className="stats">
        {packedItems.length === items.length ? (
          "You got everything! Ready to go!"
        ) : (
          <p>
            You have {items.length} items on your list, and you already packed {" "}
            {percent.toFixed()}%
          </p>
        )}
      </footer>
    );
  }