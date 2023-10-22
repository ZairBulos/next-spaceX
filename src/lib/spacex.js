import { API_URL } from "./constants";

async function getData(endpoint) {
  const res = await fetch(`${API_URL}/${endpoint}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

async function getItem(endpoint, id) {
  const res = await fetch(`${API_URL}/${endpoint}/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

const spacexService = {
  getData,
  getItem
};

export default spacexService;
