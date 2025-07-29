import { Toaster } from 'react-hot-toast';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Taskify App",
  description: "Task management made simple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         {/* <Toaster position="top-center" reverseOrder={false} /> */}
        {children}
         <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
