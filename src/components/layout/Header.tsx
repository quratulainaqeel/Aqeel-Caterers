"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`} >
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} style={{ height: '60px' }}>
          <Image src="/logo2.png" alt={siteConfig.name} width={140} height={80} style={{ objectFit: "cover" }} className="mobilelogo" />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {siteConfig.links.map(link => (
          <Link key={link.name} href={link.href} className={styles.navLink} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              {link.name}
            </Link>
          ))}
        </nav>      
          <Link href="/contact" className={`btn-primary ${styles.ctaButton} ${styles.desktopCta}`}>

         {/* <Link href="/contact" className="btn-primary" style={{ borderRadius: "10px" }}>  */}
        Get a Quote</Link> 

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ""}`}></span>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className={styles.mobileNav}>
          {siteConfig.links.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
              className={`btn-primary ${styles.ctaButton} ${styles.mobileCta}`}
            // className="btn-primary"
            style={{ marginTop: '1rem' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}