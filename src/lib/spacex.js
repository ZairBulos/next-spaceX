import { API_URL } from "./constants";

export async function getData(endpoint) {
  const res = await fetch(`${API_URL}/${endpoint}`, { cache: 'force-cache' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
}

export async function getItem(endpoint, id) {
  const res = await fetch(`${API_URL}/${endpoint}/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
}
