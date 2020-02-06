import React, { useState, useEffect } from "react";

import api from "../../services/api";

import UserItem from "../../components/UserItem";

export default function List() {
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    const response = await api.get("/users");

    setUsers(response.data);
  }

  async function deleteUser(key) {
    await api.delete(`/users/${key}`);

    loadUsers();
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email address</th>
          <th>Birthdate</th>
          <th>Individual Registry (CPF)</th>
          <th>State</th>
          <th>City</th>
          <th>Github URL</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UserItem key={user._id} user={user} deleteUser={deleteUser} />
        ))}
      </tbody>
    </table>
  );
}
