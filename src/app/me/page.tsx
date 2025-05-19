'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function MePage() {
  return (
    <Layout>
      <main className="p-8 max-w-6xl mx-auto space-y-24">

        {/* Biography Section */}
        <section className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* 左邊圖片 */}
          <motion.div
            className="md:w-1/3"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/member1.jpg" 
              alt="Shih-Yu Tsai"
              width={400}
              height={400}
              className="rounded-lg object-contain shadow-lg"
            />
          </motion.div>

          {/* 右邊文字 */}
          <motion.div
            className="mt-8 md:mt-0 md:w-2/3 space-y-4"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-2">Shih-Yu Tsai 蔡詩妤</h2>
            <p className="text-lg leading-relaxed">
              <strong>Address:</strong> <br />
              Department of Information Management and Finance<br />
              National Yang Ming Chiao Tung University, 1001 University Road, Hsinchu City 300093<br />
              Taiwan
              <br />
              <strong>Email:</strong> <br />
              shih-yu.tsai AT nycu.edu.tw
            </p>
            <p className="text-lg leading-relaxed">
              Shih-Yu Tsai is a tenure-track Assistant Professor at National Yang Ming Chiao Tung University. Her research interests focus on graph theory, algorithm design for fairness, scheduling in robotics, privacy in optimization, and parallel programming. She received her Ph.D. in Computer Science from Stony Brook University, advised by Prof. Jie Gao and Prof. Rezaul A. Chowdhury. She has contributed to top-tier conferences including AAMAS, SPAA, LATIN, and ALGOSENSORS.
            </p>
          </motion.div>
        </section>

        {/* Research Interests */}
        <section>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Research Interests</h3>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
              <li>Artificial Intelligence</li>
              <li>Algorithm Design for Fairness and Massive Datasets</li>
              <li>Scheduling Problems in Robotics and Networking</li>
              <li>Solution/Trajectory Privacy</li>
              <li>Parallel Programming</li>
            </ul>
          </motion.div>
        </section>

        {/* Honors */}
        <section>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </section>

      </main>
    </Layout>
  );
}
