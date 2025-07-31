"use client";
import { useState } from "react";
import { useUser } from "./UserContext";
import { useRouter } from "next/navigation";

import styles from "./header.module.scss";

export default function Header() {
  const router = useRouter();
  const { user, logout } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.projectName}>TASKIFY</h1>
      <div className={styles.sidediv}>
        <div className={styles.username}>{user?.name}</div>
        <div className={styles.icon}  onClick={() => setIsOpen(!isOpen)} >U</div>
        {isOpen && (
            <div className={styles.dropdown}>
              <div
                className={styles.menuItem}
                onClick={() => {
                  setIsOpen(false);
                 /* router.push("/pages/profiles")*/
                }}
              >
                Edit Profile
              </div>
              <div
                className={styles.menuItem}
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
              >
                Logout
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
