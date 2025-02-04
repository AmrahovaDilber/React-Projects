import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, handleToggleItem,handleClearList }) {
    const [sortBy, setSortBy] = useState("input")
    
    let sortedItems;
  
    if (sortBy === 'input') sortedItems = items;
    if (sortBy === 'description') sortedItems = items.slice().sort((a,b)=>a.description.localeCompare(b.description))
    if(sortBy==='packed') sortedItems=items.filter((item)=>item.packed==true)
  
    return (
      <div className="packing-list">
        <h2>Packing List</h2>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            handleToggleItem={handleToggleItem}
          ></Item>
        ))}
  
  <div className="sort-container">
  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
    <option value="input">Sort by input order</option>
    <option value="description">Sort by description</option>
    <option value="packed">Sort by packed status</option>
  </select>
  <button className="clear-button" onClick={handleClearList}>Clear</button>
</div>

      </div>
    );
  }