"use client";

import AuthGuard from "../components/AuthGuard";
import Header from "../components/Header";

export default function PagesLayout({ children }) {
  return (
    <AuthGuard>
      <Header />
      <main>{children}</main>
    </AuthGuard>
  );
}
