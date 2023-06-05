import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCardGrid from "./components/UserCardGrid";
import Loader from "./components/Loader";
import "./App.css";

const App = () => {
  const brandName = "Koach";

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar brandName={brandName}>
        <button onClick={getUsers}>Get Users</button>
      </Navbar>
      {loading ? <Loader /> : <UserCardGrid users={users} />}
    </div>
  );
};

export default App;
