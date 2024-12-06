/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect } from "react";
import { languageData } from "../data";

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          `https://reqres.in/api/users?lang=${languageData}`,
          data[langData]
        );
        setData(response.data);
      } catch (error) {
        console.error("Error during POST request:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [langData]);
  return (
    <DataContext.Provider value={{ languageData, data, langData }}>
      {props.children}
    </DataContext.Provider>
  );
};
