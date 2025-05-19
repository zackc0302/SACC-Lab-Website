import Layout from '@/components/Layout';

export default function Announcements() {
  const posts = [
    {
      title: 'Programming',
      date: '113-2',
      classTimeRoom: 'T567-MB210[GF]',
      description:
        'This course considers the basics of fundamental programming techniques using C++. Topics include the variables, expressions, control statements, functions, pointers, strings, arrays, and file operations.',
    },
    {
      title: 'Information Security',
      date: '114-1',
      classTimeRoom: 'W234-M102[GF]',
      description:
        'This course introduces the fundamental concepts of information security including cryptography, network security, risk assessment, and security policies.',
    },
  ];

  return (
    <Layout>
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Courses</h1>
        <ul className="space-y-4">
          {posts.map((post, idx) => (
            <li key={idx} className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-800">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-1">Semester：{post.date}</p>
              <p className="text-sm text-gray-500 mb-2">Time and classroom：{post.classTimeRoom}</p>
              <p className="text-base text-gray-700 dark:text-gray-300">{post.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
