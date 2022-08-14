import React, { useState, useEffect} from 'react';
import { fetchData } from '../services/api';


export function ExampleComponent() {

  const [mounted, setMounted] = useState(new Object);
  const [data, setData] = useState("Melbourne");

  useEffect(() => {
    setMounted(true);
    fetchDataFn();
  });

  const fetchDataFn = async () => {
    try {
      const response = await fetchData();
      setData(response.data.payload);
    } catch (error) {
      if (error.response.status === 404) {
        console.log("data Not Found");
      }
    }
  };
}