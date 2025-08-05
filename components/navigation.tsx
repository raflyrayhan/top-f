"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";

export default function Navbar() {
  return (
    <header
  className={`fixed top-0 w-full z-50 px-8 py-1.5 backdrop-blur-md bg-[#2c2c2cc5] text-white flex justify-between items-center shadow transition-all duration-500 ease-in-out`}
>
      <div className={styles.logo}>
        <Image src="/favicon.png" alt="Logo" width={99} height={99} />
      </div>

      <nav className={styles.navLinks}>
        <Link href="/" className={styles.link}>HOME</Link>
        <Link href="/products" className={styles.link}>PRODUCTS</Link>
        <Link href="/portofolio" className={styles.link}>PORTOFOLIO</Link>
        <Link href="/contact" className={styles.link}>CONTACT</Link>
      </nav>
    </header>
  );
}
