"use client"; // Client component directive

import Link from "next/link";
import { useState } from "react";
import styles from '../styles/Navbar.module.css'; // Import the CSS module

const Navbar = () => {
  return (
    <div>
      {/* Main Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarContent}>
          <div className={styles.brand}>
            <span className={styles.highlight}>WEALTH</span>KIN
          </div>
          <div className="space-x-4">
            <Link href="#about" className={styles.link}>
              About
            </Link>
            <Link href="#projects" className={styles.link}>
              Projects
            </Link>
            <Link href="#contact" className={styles.link}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
