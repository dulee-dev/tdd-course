'use client';
import { useEffect } from 'react';
import s from './styles.module.css';

export default function Home() {
  useEffect(() => {
    alert('welcome');
  }, []);
  return (
    <main className={s.main}>
      <h1 className={s.title}>Playground for WaitForAlertHandler</h1>
    </main>
  );
}
