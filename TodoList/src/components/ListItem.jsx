import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const ListItem = ({ item, handleDeleteItem, handleCheckItem,handleEditItem }) => {
  return (
    <div className="flex items-center justify-between  border py-[7px] rounded-md px-3 border-gray-200">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={item.isChecked}
          onChange={() => handleCheckItem(item.id)}
        ></input>
        <p className={item.isChecked ? "line-through" : ""}>{item.name}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={()=>handleEditItem(item.id)} className="text-green-500 font-semibold text-[18px] cursor-pointer">
          <FaEdit />
        </button>

        <button
          onClick={() => handleDeleteItem(item.id)}
          className="text-red-500 font-semibold text-[18px] cursor-pointer"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
