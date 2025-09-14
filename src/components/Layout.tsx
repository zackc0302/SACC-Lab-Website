'use client';
import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItemClass = `
    relative inline-block
    after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%]
    after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500
    after:transition-all after:duration-500 hover:after:w-full
  `;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-zinc-900 shadow px-6 py-4 z-50">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">SCAA Lab</Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-4 text-sm text-gray-700 dark:text-gray-200 items-center">
          <Link href="/" className={navItemClass}>Home</Link>
          <Link href="/lab" className={navItemClass}>Lab's intro</Link>
          <Link href="/me" className={navItemClass}>About me</Link>
          <Link href="/members" className={navItemClass}>Students</Link>
          <Link href="/publications" className={navItemClass}>Publications</Link>
          <Link href="/announcements" className={navItemClass}>Courses</Link>
          <Link href="/labservice" className={navItemClass} onClick={() => setIsOpen(false)}>Lab Service</Link>
          <ThemeToggle />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 w-full px-6 py-4 flex flex-col space-y-2 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-900">
          <Link href="/" className={navItemClass} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/lab" className={navItemClass} onClick={() => setIsOpen(false)}>Lab's intro</Link>
          <Link href="/me" className={navItemClass} onClick={() => setIsOpen(false)}>About me</Link>
          <Link href="/members" className={navItemClass} onClick={() => setIsOpen(false)}>Students</Link>
          <Link href="/publications" className={navItemClass} onClick={() => setIsOpen(false)}>Publications</Link>
          <Link href="/announcements" className={navItemClass} onClick={() => setIsOpen(false)}>Courses</Link>
          <Link href="/labservice" className={navItemClass} onClick={() => setIsOpen(false)}>Lab Service</Link>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-800 text-center text-sm text-gray-500 dark:text-gray-400 py-4 mt-8">
      © 2025 SCAA Lab · Contact：shih-yu.tsai@nycu.edu.tw
    </footer>
  );
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16">{children}</div>
      <Footer />
    </div>
  );
}
