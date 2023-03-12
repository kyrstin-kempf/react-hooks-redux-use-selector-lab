import React from "react";
import { useSelector } from "react-redux";

function Users() {

  const users = useSelector((state) => state.users);
  const numOfUsers = useSelector((state) => state.users.length);

  return (
    <div>
      <ul>
        Users
        {users.map((u) => (
          <li key={u.username}>{u.username}</li>
        ))}
      </ul>
      <em>Total Users: {numOfUsers}</em>
    </div>
  );
}

export default Users;
