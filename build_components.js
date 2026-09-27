const fs = require('fs');
const path = require('path');

const components = {
  'layout/Header.tsx': `
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
    <header className={\`\${styles.header} \${isScrolled ? styles.scrolled : ""}\`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo2.png" alt={siteConfig.name} width={120} height={40} style={{ objectFit: 'contain' }} />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {siteConfig.links.map(link => (
            <Link key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
          <Link href="/book-now" className="btn-primary">Book Now</Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={\`\${styles.hamburger} \${isMobileMenuOpen ? styles.active : ""}\`}></span>
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
            href="/book-now" 
            className="btn-primary" 
            style={{ marginTop: '1rem' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
`,
  'layout/Header.module.css': `
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
  transition: all 0.3s ease;
  padding: 1.5rem 5%;
}

.scrolled {
  padding: 1rem 5%;
  background: rgba(10, 10, 10, 0.95);
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

.navContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

.desktopNav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navLink {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

.mobileToggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--primary);
  position: relative;
  transition: all 0.3s ease;
}
.hamburger::before, .hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--primary);
  left: 0;
  transition: all 0.3s ease;
}
.hamburger::before { top: -8px; }
.hamburger::after { top: 8px; }

.hamburger.active { background: transparent; }
.hamburger.active::before { transform: rotate(45deg); top: 0; }
.hamburger.active::after { transform: rotate(-45deg); top: 0; }

.mobileNav {
  display: none;
}

@media (max-width: 992px) {
  .desktopNav { display: none; }
  .mobileToggle { display: block; }
  
  .mobileNav {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #0a0a0a;
    padding: 2rem 5%;
    border-bottom: 1px solid var(--border-color);
  }
  
  .mobileNavLink {
    padding: 1rem 0;
    font-size: 1.2rem;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
}
`,
  'layout/Footer.tsx': `
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <Link href="/" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
            <Image src="/logo2.png" alt={siteConfig.name} width={120} height={40} style={{ objectFit: 'contain' }} />
          </Link>
          <p className={styles.footerDesc}>{siteConfig.description}</p>
        </div>
        
        <div className={styles.footerCol}>
          <h3>Quick Links</h3>
          <div className={styles.linksList}>
            {siteConfig.links.map(link => (
              <Link key={link.name} href={link.href}>{link.name}</Link>
            ))}
          </div>
        </div>

        <div className={styles.footerCol}>
          <h3>Contact</h3>
          <p>{siteConfig.contact.address}</p>
          <p style={{ marginTop: '1rem' }}>{siteConfig.contact.email}</p>
          <p>{siteConfig.contact.phone}</p>
        </div>

        <div className={styles.footerCol}>
          <h3>Follow Us</h3>
          <div className={styles.socialLinks}>
            <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={siteConfig.socials.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className={styles.legalLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
`,
  'layout/Footer.module.css': `
.footer {
  background: #050505;
  padding: 4rem 5% 2rem;
  border-top: 1px solid var(--border-color);
}
.footerGrid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  padding-bottom: 3rem;
}
.footerCol h3 {
  color: var(--primary);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}
.footerDesc { color: #888; line-height: 1.8; }
.footerCol p { color: #888; font-size: 0.95rem; }
.linksList, .socialLinks { display: flex; flex-direction: column; gap: 0.8rem; }
.linksList a, .socialLinks a { color: #888; transition: color 0.3s ease; }
.linksList a:hover, .socialLinks a:hover { color: var(--primary); }
.footerBottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 2rem auto 0;
  color: #666;
  font-size: 0.85rem;
}
.legalLinks { display: flex; gap: 1.5rem; }
.legalLinks a:hover { color: var(--primary); }

@media (max-width: 992px) {
  .footerGrid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 576px) {
  .footerGrid { grid-template-columns: 1fr; }
  .footerBottom { flex-direction: column; gap: 1rem; text-align: center; }
}
`,
  'ui/SectionHeading.tsx': `
export default function SectionHeading({ title, subtitle, dark = false }: { title: string, subtitle?: string, dark?: boolean }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
`,
  'home/ServicesPreview.tsx': `
import Link from "next/link";
import { servicesData } from "@/data/services";
import SectionHeading from "../ui/SectionHeading";
import styles from "./ServicesPreview.module.css";
import Image from "next/image";

export default function ServicesPreview() {
  return (
    <section className="section section-dark">
      <SectionHeading title="Our Services" subtitle="Exceptional catering for weddings, corporate events, private celebrations, and unforgettable occasions." />
      <div className="grid-2">
        {servicesData.slice(0, 4).map(service => (
          <div key={service.id} className={styles.serviceCard}>
            <div className={styles.serviceImage}>
              <Image src={service.image} alt={service.title} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.shortDesc}</p>
              <Link href={\`/services#\${service.id}\`} className="btn-outline">Learn More</Link>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link href="/services" className="btn-primary">View All Services</Link>
      </div>
    </section>
  );
}
`,
  'home/ServicesPreview.module.css': `
.serviceCard {
  background: var(--card-bg);
  border: 1px solid var(--border-color-light);
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}
.serviceCard:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.serviceImage {
  position: relative;
  width: 100%;
  height: 250px;
}
.serviceContent {
  padding: 2.5rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.serviceTitle { font-size: 1.5rem; color: var(--primary); margin-bottom: 1rem; }
.serviceDesc { color: #d0d0d0; margin-bottom: 2rem; }
`,
  'menus/MenuCard.tsx': `
import Image from "next/image";
import styles from "./MenuCard.module.css";

export default function MenuCard({ item }: { item: any }) {
  return (
    <div className={styles.menuCard}>
      <div className={styles.imageWrap}>
        <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{item.name}</h3>
          {item.dietary && item.dietary.length > 0 && (
            <span className={styles.dietary}>{item.dietary.join(", ")}</span>
          )}
        </div>
        <p className={styles.desc}>{item.desc}</p>
      </div>
    </div>
  );
}
`,
  'menus/MenuCard.module.css': `
.menuCard {
  background: var(--card-bg);
  border: 1px solid var(--border-color-light);
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.menuCard:hover { border-color: var(--primary); }
.imageWrap { position: relative; width: 100%; height: 220px; }
.content { padding: 1.5rem; }
.header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.8rem; }
.title { font-size: 1.2rem; color: var(--foreground); }
.dietary { font-size: 0.7rem; color: var(--primary); border: 1px solid var(--primary); padding: 2px 6px; border-radius: 2px; }
.desc { color: #a0a0a0; font-size: 0.9rem; line-height: 1.5; }
`
};

const createDir = (dir) => {
  const fullPath = path.join(__dirname, 'src', 'components', dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
};

for (const [file, content] of Object.entries(components)) {
  const dir = path.dirname(file);
  createDir(dir);
  fs.writeFileSync(path.join(__dirname, 'src', 'components', file), content.trim());
}
console.log('Components built.');
