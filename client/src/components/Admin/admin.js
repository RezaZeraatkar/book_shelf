import React from "react";

export default function User({ user }) {
  return (
    <div className="user_container">
      <div className="avatar">
        <img alt="avatar" src="/images/avatar.png" />
      </div>
      <div className="nfo">
        <div>
          <span>Name:</span>
          {user.login.name}
        </div>
        <div>
          <span>Lastname:</span>
          {user.login.lastname}
        </div>
        <div>
          <span>Email:</span>
          {user.login.email}
        </div>
      </div>
    </div>
  );
}
