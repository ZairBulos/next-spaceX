import { useEffect, useState } from "react";
import spacexService from "../services/spacex";

export const useData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [component, setComponent] = useState(null);

  const onFetch = async (endpoint) => {
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
  };

  useEffect(() => {
    if (!component) return;

    const fetchData = async () => {
      await onFetch(component);
    };

    fetchData();
  }, [component]);

  const onChangeComponent = (newComponent) => {
    setComponent(newComponent);
  };

  return {
    data,
    loading,
    onChangeComponent,
  };
};
