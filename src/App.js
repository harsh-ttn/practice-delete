import logo from "./logo.svg";
import "./App.css";
import Title from "./componenets/Title";

import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
 /*  const [data1, setData1] = useState([]); */

  useEffect(() => {
    const FetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(res.data);
      console.log(res.data);
    };
    FetchData();

    return ()=>{

    }
  }, [data1]);


  return (
    <>
      {data.map((user) => (
        <Title name={user.name} key={user.id} />
      ))}
    </>
  );
}

export default App;
