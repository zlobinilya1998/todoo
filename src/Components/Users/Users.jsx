import { useState, useEffect } from "react";
import { User } from "../Redux/ComponentsStore";

import "./Users.css";
export default function Users() {
  const [users, setUsers] = useState(0);
  const getUsers = async () => {
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await responce.json();
    setUsers(json);
  };
  useEffect(() => {
    getUsers();
  }, []);

  if (users === 0) {
    return <div className="water"></div>;
  } else
    return (
      <div className="users-blog">
        {users.map((user, index) => (
          <User
            key={index}
            id={user.id}
            realName={user.name}
            name={user.username}
            email={user.email}
            address={user.address.city}
            company={user.company.name}
          />
        ))}
      </div>
    );
}
