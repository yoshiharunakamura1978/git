"use client"; // ログイン状態を扱うからこれが必要！

import { useState, useEffect } from "react";
import Link from 'next/link';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 1. ログイン状態のチェック
  useEffect(() => {
    const status = localStorage.getItem("user_status");
    setIsLoggedIn(status === "logged_in");
  }, []);

  // 2. ログイン処理
  const handleLogin = () => {
    localStorage.setItem("user_status", "logged_in");
    setIsLoggedIn(true);
    window.location.reload(); // メニューの価格を更新するためにリロード
  };

  // 3. ログアウト処理
  const handleLogout = () => {
    localStorage.removeItem("user_status");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <header style={{
      padding: '20px 0',
      borderBottom: '1px solid #EFEBE9',
      backgroundColor: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
      }}>
        {/* ロゴ・店名 */}
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#5D4037',
          textDecoration: 'none'
        }}>
          テラスの陽だまり
        </Link>

        {/* ナビゲーションメニュー */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <ul style={{
            display: 'flex',
            gap: '20px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            alignItems: 'center'
          }}>
            <li>
              <Link href="/menu" style={{ color: '#8D6E63', textDecoration: 'none', fontSize: '0.95rem' }}>
                メニュー
              </Link>
            </li>

            {/* ログイン・ログアウトボタンをここに追加！ */}
            <li>
              <button
                onClick={isLoggedIn ? handleLogout : handleLogin}
                style={{
                  backgroundColor: isLoggedIn ? '#F44336' : '#5D4037',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  transition: '0.3s'
                }}
              >
                {isLoggedIn ? 'ログアウト' : '会員ログイン'}
              </button>
            </li>

            <li>
              <Link href="/contact" style={{
                color: '#fff',
                backgroundColor: '#8D6E63',
                padding: '8px 16px',
                borderRadius: '20px',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}>
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
