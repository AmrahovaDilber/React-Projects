import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";

const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    setItems([]);
  }
  return (
    <div className="app-container">
      <Logo></Logo>
      <div className="contain">
        <Form onAddItems={handleAddItem}></Form>
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
          handleClearList={handleClearList}
        ></PackingList>
      </div>

      <Stats items={items}></Stats>
    </div>
  );
};

export default App;
