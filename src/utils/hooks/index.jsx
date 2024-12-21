import { useEffect, useState } from "react";

export function useFetch() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://192.168.1.168:3000/datas.json");
        if (!response) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  return { data, error };
}

export function useAboutItems() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://192.168.1.168:3000/aboutItems.json"
        );
        if (!response) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  return { data, error };
}
