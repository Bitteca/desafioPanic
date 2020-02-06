import React from "react";

import Moment from "react-moment";

const UserItem = ({ user, deleteUser }) => {
  async function handleDelete(e) {
    e.preventDefault();

    await deleteUser(user._id);
  }
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Moment format="DD/MM/YYYY">{user.birthDate}</Moment>
      </td>
      <td>{user.individualRegistry}</td>
      <td>{user.state}</td>
      <td>{user.city}</td>
      <td>{user.githubUrl}</td>
      <td>
        <button onClick={handleDelete} className="btn icon-button text-danger ">
          <i className="far fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default UserItem;
