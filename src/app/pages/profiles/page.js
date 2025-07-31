"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  const bgStyle = {
    height: "100vh",
    backgroundImage: "url('/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    padding: "2rem",
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:3000/api/profiles", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        console.log("Users:", data.users);
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={bgStyle}>
      <h1>Profile Page</h1>

      {users.length > 0 ? (
        <table style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "1rem", borderRadius: "8px" }}>
          <thead>
            <tr>
              <th style={{ padding: "0.5rem" }}>Name</th>
              <th style={{ padding: "0.5rem" }}>Email</th>
              <th style={{ padding: "0.5rem" }}>ID</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td style={{ padding: "0.5rem" }}>{user.name}</td>
                <td style={{ padding: "0.5rem" }}>{user.email}</td>
                <td style={{ padding: "0.5rem" }}>{user._id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
}
