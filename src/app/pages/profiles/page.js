"use client";

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const bgStyle = {
    height: "100vh",
    backgroundImage: "url('/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    padding: "2rem",
  };

  return (
    <div style={bgStyle}>
      Profile Page
      <button onClick={() => router.push('/pages/tasks')}>Tasks Page</button>
    </div>
  );
}
