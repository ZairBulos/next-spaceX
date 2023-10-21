import { useCallback, useState } from "react";
import spacexService from "../services/spacex";

export const useItem = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const onFetch = useCallback(async (endpoint, id) => {
    try {
      setLoading(true);
        
      const newData = await spacexService.getItem(endpoint, id);
      setData(newData);
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
