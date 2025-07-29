"use client";

import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-toastify";

let logoutTimer;
export default function AuthGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          localStorage.removeItem("token");
          toast.error("Session expired. Please log in again.");
          router.push("/login");
        } else {
          const timeUntilExpiry = (decoded.exp - currentTime) * 1000;

          if (logoutTimer) clearTimeout(logoutTimer);

          logoutTimer = setTimeout(() => {
            localStorage.removeItem("token");
            toast.error("Session expired. Please log in again.");
            router.push("/login");
          }, timeUntilExpiry);
        }
      } catch (err) {
        localStorage.removeItem("token");
        router.push("/login");
      }
    } else {
      router.push("/login");
    }

    return () => {
      if (logoutTimer) clearTimeout(logoutTimer);
    };
  }, [pathname]);

  return <>{children}</>;
}
