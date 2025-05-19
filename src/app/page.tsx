'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <main className="p-8 max-w-5xl mx-auto space-y-24">

        {/* About Section */}
        <section className="flex flex-col md:flex-row items-center md:space-x-12">
          <motion.div
            className="md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/about.jpg"
              alt="About our lab"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="mt-8 md:mt-0 md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">About</h2>
            <p className="text-lg leading-relaxed">
              Our lab aims to solve real-world problems using graph theory and computational geometry insights.
              Based on the properties of these two fields, we ensure that data or models encode pairwise relationships—
              whether between people, places, companies, or machine learning nodes. These are represented as nodes and edges
              in a graph. Just a taste of graph theory and computational geometry!
            </p>
          </motion.div>
        </section>

        {/* Research Fields Section */}
        <section className="flex flex-col md:flex-row-reverse items-center md:space-x-12">
          <motion.div
            className="md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/research.jpg"
              alt="Research Fields"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="mt-8 md:mt-0 md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Research Fields</h3>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
              <li>Artificial Intelligence</li>
              <li>Algorithm Design for Fairness and Massive Datasets</li>
              <li>Scheduling Problems in Robotics and Networking</li>
              <li>Solution/Trajectory Privacy</li>
              <li>Parallel Programming</li>
            </ul>
          </motion.div>
        </section>

        {/* Exploring Fields Section */}
        <section className="flex flex-col md:flex-row items-center md:space-x-12">
          <motion.div
            className="md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/exploring1.jpg"
              alt="Exploring Fields"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="mt-8 md:mt-0 md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-semibold mb-4">Exploring Fields</h4>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
              <li>How mental health is impacted in Generation Z.</li>
              <li>The influence of ChatGPT and other AI on mental well-being.</li>
              <li>Designing empathetic autonomous systems for the elderly.</li>
              <li>Ensuring real expert opinions are represented in AI systems.</li>
            </ul>
          </motion.div>
        </section>

      </main>
    </Layout>
  );
}
