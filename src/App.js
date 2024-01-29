import React, { useState } from "react";
import "./App.css";
import JSON_DATA from "./JSON_DATA.json";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {JSON_DATA.map((val, key) => {
        return (
          <div className="data" key={key}>
            <p>{val.id}</p>
            <p> {val.first_name}</p>
            <p>{val.last_name}</p>
            <p>{val.email}</p>
            <p>{val.gender}</p>
            <p>{val.ip_address}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
