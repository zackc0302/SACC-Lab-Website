//src/labservice/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LabServiceLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    setError('');

    // 👉 你可以替換這段為真實的 API 驗證邏輯
    if (username === 'admin' && password === '123456') {
      router.push('/labservice/dashboard'); // 登入成功後導向頁面
    } else {
      setError('帳號或密碼錯誤');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
    <div className="w-[500px] bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-xl animate-drop-in">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">SCAA Lab Service</h2>
        <h3 className="text-center text-gray-600 dark:text-gray-300 mb-8 text-sm">
        If you don't have an account, please contact the administrator.
        </h3>

        <div className="mb-5">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Account</label>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="請輸入帳號(email)"
        />
        </div>

        <div className="mb-6">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="請輸入密碼"
        />
        </div>

        {error && (
        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <button
        onClick={handleLogin}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition"
        >
        登入
        </button>
    </div>
    </div>

  );
}
