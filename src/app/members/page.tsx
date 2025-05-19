import Layout from '@/components/Layout';
import * as React from 'react';
export default function Members() {
  const members = [
    { name: 'Lin', role: '碩士生', img: '/images/member2.png' },
    { name: '王子儀', role: '大學生', img: '/images/member3.jpg' },
    { name: '邱宇涵', role: '大學生', img: '/images/member4.jpg' },
    { name: '徐瑩倢', role: '大學生', img: '/images/member5.jpg' },
    { name: '張肇政', role: '大學生', img: '/images/member6.jpg' },
  ];

  return (
    <Layout>
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Students</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((m, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center">
              <img src={m.img} alt={m.name} className="w-32 h-32 object-cover rounded-full mb-3" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-900">{m.name}</h2>
<p className="text-gray-500 dark:text-gray-800">{m.role}</p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
