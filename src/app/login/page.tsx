'use client'; // Ensure this component is client-side only

import React, { useState, useEffect } from 'react';
 import { useRouter } from 'next/navigation'
 import { useAuth } from '../contexts/AuthContext';
import styles from './Login.module.css';
import Head from 'next/head';

// Mock login API function
const mockLoginApi = (email: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'password') {
        resolve('fffc11bad42e01fa3032fb760b319219');
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAuth();
//   useEffect(() => {
//     // Ensure the router is available
//     if (!router.isReady) return;
//   }, [router.isReady]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const token = await mockLoginApi(email, password);
      console.log('Login successful, token:', token);
      login(token);
      router.push('/');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <>
    <Head>
      <title>Your Page Title</title>
      <meta name="description" content="A short description of your page's content"/>
      <meta property="og:title" content="Your Page Title" />
      <meta property="og:description" content="A detailed description of your page's content" />
      <meta property="og:image" content="https://example.com/thumbnail.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Login</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ color: 'grey' }} // Change input text color to grey
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ color: 'grey' }} // Change input text color to grey
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className={styles.submitButton}>Login</button>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default Login;
