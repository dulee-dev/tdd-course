'use client';
import { useEffect } from 'react';
import s from './styles.module.css';

export default function Home() {
  useEffect(() => {
    alert('hi');
  }, []);
  return (
    <main className={s.main}>
      <h1 className={s.title}>
        Next.js와 playwright, vitest로 실무 TDD 완벽 가이드 홈
      </h1>
    </main>
  );
}
