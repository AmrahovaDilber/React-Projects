

const Input = ({handleAddElement,inputValue,setInputValue}) => {
 

  function handleSubmit(e) {
      e.preventDefault();
      handleAddElement()
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center border border-gray-200 mb-4">
      <input
        type="text"
        placeholder="Add..."
              value={inputValue}
              className="flex-1 px-4 outline-none py-1"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button className="w-[100px] text-center bg-blue-400 rounded-md cursor-pointer text-[#fafafa] py-1">Add</button>
    </form>
  );
};

export default Input;
