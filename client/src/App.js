import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api");
      if (response.data) {
        setData(response.data.message);
      } else {
        console.log(response.data);
      }
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="tx-3xl text-center font-bold">
      {data || <Skeleton count={1} className="px-2 py-2 mt-0" />}
    </div>
  );
}

export default App;
