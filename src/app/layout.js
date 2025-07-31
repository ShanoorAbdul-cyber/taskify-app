import { ToastContainer } from 'react-toastify';
import { UserProvider } from "./components/UserContext";

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Taskify App",
  description: "Task management made simple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ minHeight: "100vh", width: "100%" }}>
          <UserProvider>
          {children}
          </UserProvider>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
