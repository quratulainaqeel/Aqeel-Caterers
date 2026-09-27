import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import styles from "./Footer.module.css";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaExternalLinkAlt, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid} >
        <div className={styles.footerCol} >
          <Link href="/" style={{ display: 'inline-block', height: '60px' }}>
            <Image src="/logo2.png" alt={siteConfig.name} width={160} height={90} style={{ objectFit: 'cover' }} />
          </Link>
          <p className={styles.footerDesc}>{siteConfig.description}</p>
          <p><Link href="https://www.google.com/maps?cid=15656699218882512787" target="_blank" rel="noreferrer" style={{ color: "var(--primary)" }}> Visit us on Google My Business  <FaExternalLinkAlt /></Link></p>
        </div>

        {/* <div className={styles.footerCol}>
          <h3>Quick Links</h3>
          <div className={styles.linksList}>
            {siteConfig.links.map(link => (
              <Link key={link.name} href={link.href}>{link.name}</Link>
            ))}
          </div>
        </div> */}

        <div className={styles.footerCol}>
          <h3>Contact</h3>

          <p className={styles.contactItem}>
            <FaMapMarkerAlt />
            <span><Link href="https://www.google.com/maps?cid=15656699218882512787" target="_blank" rel="noreferrer">{siteConfig.contact.address}</Link></span>
          </p>

          <p className={styles.contactItem}>
            <FaEnvelope />
            <span><Link href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</Link></span>
          </p>

          <p className={styles.contactItem}>
            <FaPhone />
            <span><Link href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</Link></span>
          </p>
        </div>

        <div className={styles.footerCol}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/profile.php?id=61567163693041#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://wa.me/923155941307" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved Developed by <Link href="https://www.linkedin.com/in/quratulain-aqeel/" target="_blank" rel="noreferrer" style={{ color: "var(--primary)" }}> Quratulain Aqeel</Link></p>

        {/* <div className={styles.legalLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div> */}
      </div>
    </footer>
  );
}