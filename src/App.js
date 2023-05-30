import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchImages from "./Components/SearchImages";
import HomePage from "./Components/HomePage";
import './styles/App.css'



function App() {

  let [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {

    axios.get("https://api.unsplash.com/photos", {
      params: {
        client_id: process.env.REACT_APP_ACCESS_KEY,
        per_page:20
      }
    }).then(response => setData(response.data))
      .catch(error => console.log(error))
  }, [])
  useEffect(() => {

  }, [data]);


  return (
    <div>
      <div className="nav-bar">
        <h1>Images App.</h1>
      </div>
      <SearchImages setData={setData} />
      <HomePage imageData={data} />

    </div>
  );
}

export default App;
