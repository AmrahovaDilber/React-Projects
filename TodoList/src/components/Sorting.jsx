const Sorting = ({handleAll,handleCompleted,handlePending}) => {
  return (
    <div className="grid grid-cols-3 gap-3  mb-3">
      <button onClick={handleCompleted} className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition">
        Completed
      </button>
      <button onClick={handlePending} className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition">
        Pending
      </button>
      <button onClick={handleAll} className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
        All
      </button>
    </div>
  );
};

export default Sorting;
