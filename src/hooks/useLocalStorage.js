//localStorage.setItem("theme","dark"/"light");
//localStorage.setItem("lang","tr"/"en");

import { useState } from "react";

//

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue) {
      return JSON.parse(localValue);
    } else {
      localStorage.setItem(key,JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const changeValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };
  return [value, changeValue];
};
