'use client';

import * as React from 'react';
import Layout from '@/components/Layout';

export default function Publications() {
  const papers = [
    {
      title: "Tong-Nong Lin, Yu-Cheng Lin, Cheng-Chen Tsai, Meng-Tsung Tsai and Shih-Yu Tsai “Efficient Algorithms for Decomposing Integers as Sums of Few Tetrahedral Numbers” IWOCA 2024: 259-272",
      year: '2024'
    },
    {
      title: 'Shih-Yu Tsai, “Graph Algorithms for Diversity and Fairness.” State University of New York at Stony Brook',
      year: '2023'
    },
    {
      title: "Jie Gao, Mayank Goswami, Karthik C. S., Meng-Tsung Tsai, Shih-Yu Tsai, Hao-Tsung Yang, “Obtaining Approximately Optimal and Diverse Solutions via Dispersion.” LATIN",
      year: '2022'
    },
    {
      title: "Shih-Yu Tsai, Hao-Tsung Yang, Kin Sum Liu, Shan Lin, Rezaul Chowdhury, and Jie Gao, MultiChannel Assignment and Link Scheduling for Prioritized Latency-Sensitive Applications. ALGOSENSORS",
      year: '2019'
    },
    {
      title: "Hao-Tsung Yang, Shih-Yu Tsai, Kin Sum Liu, Shan Lin, Jie Gao, Patrol Scheduling Against Adversaries with Varying Attack Durations. AAMAS",
      year: '2019'
    },
    {
      title: "Rathish Das, Shih-Yu Tsai, Sharmila Duppala, Jayson Lynch, Esther M. Arkin, Rezaul Chowdhury, Joseph S. B. Mitchell, Steven Skiena, Data Races and the Discrete Resource-time Tradeoff Problem with Resource Reuse over Paths. SPAA",
      year: '2019'
    },
    {
      title: "Jie Gao, Mayank Goswami, Rebecca Schley, Shih-Yu Tsai, and Hao-Tsung Yang, Far-Away Spanning Trees. FWCG",
      year: '2018'
    },
    {
      title: "Hao-Tsung Yang, Shih-Yu Tsai, Jie Gao, and Shan Lin, Optimal Safety Patrol Scheduling Using Randomized Traveling Salesman Tour. FWCG",
      year: '2017'
    },
    {
      title: "Chang Chen, Gang-Yu Fan, Shih-Yu Tsai, Ting-Yu Lin, Tsan-sheng Hsu, Compressing Chinese Dark Chess Endgame Databases. CIG",
      year: '2015'
    },
    {
      title: "Well Y. Chiu, Chiuyuan Chen, Shih-Yu Tsai, A 4n-move Self-stabilizing Algorithm for the Minimal Dominating Set Problem Using an Unfair Distributed Daemon. Inf. Process. Lett.",
      year: '2014'
    },
    {
      title: "Shih-Yu Tsai, Chiuyuan Chen, Master Thesis: An Efficient Self-stabilizing Algorithm for the Minimal Dominating Set Problem under a Distributed Scheduler. CETD",
      year: '2011'
    }
  ];

  return (
    <Layout>
      <main className="p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Publications</h1>

        {/* <p className="text-base leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
          My works are on the cutting edge of technology and have been published in leading flagship conferences such as <strong>AAMAS</strong> (Tier 1 in Autonomous Systems), <strong>SPAA</strong> (Tier 1 in Parallelism in Algorithms and Architectures), <strong>LATIN</strong> (Tier 2 in Theoretical Informatics), and <strong>ALGOSENSORS</strong> (Wireless Networks and Algorithms).
        </p> */}

        <ul className="space-y-4">
          {papers.sort((a, b) => Number(b.year) - Number(a.year)).map((p, i) => (
            <li key={i} className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg shadow-sm">
              <h2 className="text-base font-medium text-gray-900 dark:text-gray-100">{p.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{p.year}</p>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
