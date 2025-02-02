import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editedIndex, setEditedIndex] = useState("");

  function handleAddElement() {
    const newItem = { id: Date.now(), name: inputValue, isChecked: false };

    if (editedIndex) {
      setItems((items) =>
        items.map((item) =>
          item.id === editedIndex ? { ...item, name: inputValue } : item
        )
      );
      setEditedIndex(null);
      setInputValue("");
    } else {
      if (inputValue.trim() !== "") {
        setItems((items) => [...items, newItem]);
        setInputValue("");
      } else {
        alert("Please add something");
      }
    }
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  function handleEditItem(id) {
    if (id) {
      setEditedIndex(id);
    }
    const findEl = items.find((item) => item.id == id);
    setInputValue(findEl.name);
  }

  return (
    <div className="bg-gray-100  w-[100%] flex items-center justify-center min-h-screen ">
      <div className="flex flex-col max-w-[400px] w-full">
        <h1 className="text-center font-semibold text-[40px] mb-3 italic">
          My Todo
        </h1>
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleAddElement={handleAddElement}
        ></Input>
        <List
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleCheckItem={handleCheckItem}
          handleEditItem={handleEditItem}
        ></List>
      </div>
    </div>
  );
};

export default App;
