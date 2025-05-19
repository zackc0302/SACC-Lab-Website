'use client';

import * as React from 'react';
import Layout from '@/components/Layout';

export default function LabPage() {
  return (
    <Layout>
      <main className="p-8 max-w-5xl mx-auto space-y-4">
        <p className="text-lg leading-relaxed">
          As a graduate student, you will need to briefly introduce yourself and highlight your strengths.
          Please prepare a project or event that you are most proud of or that left the strongest impression on you.
          Share what capabilities or experiences you expect to gain during these two years of graduate life,
          and tell us what you plan to do after graduation.
        </p>
        <p className="text-lg leading-relaxed">
          I will then briefly introduce my research and discuss possible research directions we can explore together.
          Finally, please let me know if you have any questions for me.
        </p>
        <p className="text-lg leading-relaxed">
          Our lab recruits people who can code, think deeply, write in English, and conduct academic research.
          Even if you don’t have all these skills right now, I expect that you will develop them before graduating from our lab. :)
        </p>
      </main>
    </Layout>
  );
}
