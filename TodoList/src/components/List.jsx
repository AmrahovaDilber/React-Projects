import ListItem from "./ListItem";

const List = ({ items,handleDeleteItem,handleCheckItem ,handleEditItem}) => {
  return (
    <div className="flex flex-col space-y-2">
      {items.map((item,index) => (
          <ListItem key={index} item={item} handleDeleteItem={handleDeleteItem} handleCheckItem={handleCheckItem}
          handleEditItem={handleEditItem}
          ></ListItem>
      ))}
    </div>
  );
};

export default List;
