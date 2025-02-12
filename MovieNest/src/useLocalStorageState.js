import { useEffect, useState } from "react";

export default function useLocalStorageState(initialState,key){
   const [value, setValue] = useState(function () {
       const storedValue = localStorage.getItem(key);
      
     return storedValue? JSON.parse(storedValue):initialState
   });
    
    
    
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
 return [value,setValue]
    
}