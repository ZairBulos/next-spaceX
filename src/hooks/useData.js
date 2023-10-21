import { useCallback, useState } from "react";
import spacexService from "../services/spacex";

export const useData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const onFetch = useCallback(async (endpoint) => {
    try {
      setLoading(true);

      const dataInLS = localStorage.getItem(endpoint);

      if (dataInLS) {
        const newData = JSON.parse(dataInLS);
        setData(newData);
      } else {
        const newData = await spacexService.getData(endpoint);
        localStorage.setItem(endpoint, JSON.stringify(newData));
        setData(newData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    onFetch,
  };
};
