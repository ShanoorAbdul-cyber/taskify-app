"use client";

import AuthGuard from "../components/AuthGuard";

export default function PagesLayout({ children }) {
  return <AuthGuard>{children}</AuthGuard>;
}
