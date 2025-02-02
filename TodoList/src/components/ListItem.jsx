import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const ListItem = ({ item, handleDeleteItem, handleCheckItem,handleEditItem }) => {
  return (
    <div className="flex items-center justify-between border py-2 px-3 rounded-md border-gray-200 shadow-sm">
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={item.isChecked}
        onChange={() => handleCheckItem(item.id)}
        className="w-4 h-4 cursor-pointer accent-blue-500"
      />
      <p className={`text-[16px] ${item.isChecked ? "line-through text-gray-500" : "text-gray-800"}`}>
        {item.name}
      </p>
    </div>
    <div className="flex items-center gap-3">
      <button
        onClick={() => handleEditItem(item.id)}
        className="text-green-500 hover:text-green-600 transition duration-200 text-[18px] cursor-pointer"
      >
        <FaEdit />
      </button>
      <button
        onClick={() => handleDeleteItem(item.id)}
        className="text-red-500 hover:text-red-600 transition duration-200 text-[18px] cursor-pointer"
      >
        <MdDelete />
      </button>
    </div>
  </div>
  
  );
};

export default ListItem;
