"use client";
import { useState, useEffect } from "react";

export default function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 1. ページ読み込み時に、今の状態をチェック
  useEffect(() => {
    const status = localStorage.getItem("user_status");
    setIsLoggedIn(status === "logged_in");
  }, []);

  // 2. ログイン処理
  const handleLogin = () => {
    localStorage.setItem("user_status", "logged_in");
    setIsLoggedIn(true);
    // ページをリロードして、メニューの価格表示を更新させる
    window.location.reload();
  };

  // 3. ログアウト処理
  const handleLogout = () => {
    localStorage.removeItem("user_status");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-4">
      {isLoggedIn ? (
        <>
          <span className="text-sm text-green-600 font-bold">● 会員ログイン中</span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition"
          >
            ログアウト
          </button>
        </>
      ) : (
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          会員ログイン
        </button>
      )}
    </div>
  );
}
