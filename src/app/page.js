'use client';
import { useRouter } from 'next/navigation';
import styles from './home.module.scss';
import { toast } from 'react-toastify';

export default function HomePage() {
  const router = useRouter();

  const bgStyle = {
    height: '100vh',
    backgroundImage: "url('/background.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: '2rem'
  };

  return (
    <div style={bgStyle}>
      <h1 className={styles.title}>Welcome to Taskify</h1>
      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={() => router.push('/login')}>Login</button>
        <button className={styles.button} onClick={() => router.push('/register')}>Register</button>
      </div>
    </div>
  );
}
