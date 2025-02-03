import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

const App = () => {
  return (
    <div>
      <Logo></Logo>
      <Form></Form>
      <PackingList></PackingList>
      <Stats></Stats>
    </div>
  );
};

export default App;

function Logo() {
  return (
    <div>
      <h1>Far Away</h1>
    </div>
  );
}

function Form() {
  const [description, setDescription] = useState("");
const[quantity,setQuantity]=useState(1)

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() }
    if (description.length !== 0) {
      console.log(newItem)
    } else {
      alert("Fill input")
    }
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>What do you need for your trip :) ?</h3>
      <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div>
      {initialItems.map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  );
}

function Item({ item }) {
  <div key={item.id}>
    <input type="checkbox"></input>
    <p style={item.packed ? { textDecoration: "line-through" } : {}}>
      {item.description}-{item.quantity}
    </p>
    <button>&times;</button>
  </div>;
}

function Stats() {
  return (
    <footer>You have X ites on yur list, and you already packed X(X%)</footer>
  );
}
