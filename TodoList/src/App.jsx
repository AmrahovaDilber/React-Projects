import { useEffect, useState } from "react";
import Input from "./components/Input";
import List from "./components/List";

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editedIndex, setEditedIndex] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [percent, setPercent] = useState(0);

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

  function handleClear() {
    setItems([]);
  }

  useEffect(() => {
    if (searchInput) {
      const filteredArr = items.filter((item) =>
        item.name
          .trim()
          .toLowerCase()
          .includes(searchInput.trim().toLowerCase())
      );
      setItems(filteredArr);
    } else {
      setItems(items);
    }
  }, [searchInput, items]);

  useEffect(() => {
    const itemsCount = items.length;
    const checkedArr = items.filter((item) => item.isChecked == true);
    const checkedItemsCount = checkedArr.length;
    const percent = (checkedItemsCount / itemsCount) * 100;
    setPercent(percent);
  }, [percent, items]);

  return (
    <div className="bg-gray-100 w-full flex items-center justify-center min-h-screen p-4">
    <div className="flex flex-col max-w-lg w-full bg-white shadow-lg p-6 rounded-lg">
      <h1 className="text-center font-bold text-4xl mb-4 italic text-gray-900">
        My Todo
      </h1>
  
      {/* Completed Tasks Indicator */}
      <p className="mb-3 font-semibold text-lg text-gray-800">
        Completed Tasks:{" "}
        <span className="text-blue-600">
          {percent > 0 ? Number(percent.toFixed()):0}%
        </span>
      </p>
  
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search tasks..."
        className="border border-gray-300 pl-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 mb-3"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
  
      {/* Task Input Field */}
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddElement={handleAddElement}
      />
  
      {/* Task List */}
      <List
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleCheckItem={handleCheckItem}
        handleEditItem={handleEditItem}
      />
  
      {/* Clear Button */}
      <button
        className="max-w-[120px] w-full font-semibold text-white text-lg bg-violet-500 hover:bg-violet-600 transition duration-200 mx-auto rounded-lg py-2 mt-4 shadow-md cursor-pointer"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  </div>
  
  );
};

export default App;
