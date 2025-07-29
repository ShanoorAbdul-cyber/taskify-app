"use client";

import AuthGuard from "../components/AuthGuard";

export default function PagesLayout({ children }) {
  console.log("children",children)
  return <AuthGuard>{children}</AuthGuard>;
}
