import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/MUKILAN-14")
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🐙 GitHub Profile</h2>
      {user ? (
        <div className="bg-gray-100 p-4 rounded shadow">
          <img src={user.avatar_url} alt="avatar" className="w-24 rounded-full mb-2" />
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
          <p><strong>Repos:</strong> {user.public_repos}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
