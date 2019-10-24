import React, { Component } from "react";

class Users extends Component {
  handleUpdate = () => {
    this.props.updateUser(
      this.indexNum,
      this.name.value,
      this.companyName.value,
      this.emailId.value,
      this.contactNo.value,
      this.designation.value
    );
  };

  render() {
    const { allUsers, pressViewBtn, pressEditBtn, pressDelete } = this.props;

    const usersList = allUsers.map((user, index) => {
      return user.isEditing === true ? (
        <tr key={index}>
          <td>
            <img src={user.avatarImg} />
          </td>
          <td>
            <input
              type="text"
              ref={val => {
                this.name = val;
              }}
              required
              defaultValue={user.name}
            />
          </td>
          <td>
            <input
              type="text"
              ref={val => {
                this.companyName = val;
              }}
              required
              defaultValue={user.companyName}
            />
          </td>
          <td>
            <input
              type="text"
              ref={val => {
                this.emailId = val;
              }}
              required
              defaultValue={user.emailId}
            />
          </td>
          <td>
            <input
              type="text"
              ref={val => {
                this.contactNo = val;
              }}
              required
              defaultValue={user.contactNo}
            />
          </td>
          <td>
            <input
              type="text"
              ref={val => {
                this.designation = val;
              }}
              required
              defaultValue={user.designation}
            />
          </td>
          <td className="actions-width">
            <button
              type="button"
              onClick={this.handleUpdate}
              ref={() => {
                this.indexNum = index;
              }}
              className="btn btnUpdate"
            >
              Update{" "}
            </button>
          </td>
        </tr>
      ) : (
        <tr key={index}>
          <td><img src={user.avatarImg} /></td>
          <td>{user.name}</td>
          <td>{user.companyName}</td>
          <td>{user.emailId}</td>
          <td>{user.contactNo}</td>
          <td>{user.designation}</td>
          <td className="actions-width">
            {" "}
            <button className="btn btnEdit" onClick={() => pressEditBtn(index)}>
              Edit
            </button>{" "}
            <button
              className="btn btnDelete"
              onClick={() => pressDelete(index)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <table className="striped employee-table">
        <thead>
          <tr>
            <th>profile</th>
            <th>Name</th>
            <th>Company Name</th>
            <th>Email Id</th>
            <th>Contact No</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{usersList}</tbody>
      </table>
    );
  }
}

export default Users;
