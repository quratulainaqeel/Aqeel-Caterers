import Image from "next/image";
import styles from "./WhatWeOffer.module.css";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const offerings = [
  {
    title: "Complete Event Management",
    desc: "From concept to close, we manage every detail — venue, decor, logistics, and more.",
  },
  {
    title: "Wedding & Events Catering",
    desc: "Premium flavors for your most precious milestones — intimate or grand, we deliver.",
  },
  {
    title: "Corporate Gatherings",
    desc: "Professional, timely, and seamless catering for meetings, conferences, and team events.",
  },
  {
    title: "Custom Menu Designing",
    desc: "Bespoke menus tailored to your taste, occasion, and dietary preferences.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* Left Column - Content */}
        <div className={styles.contentCol}>
          <span className={styles.label}>OUR OFFERINGS</span>

          <h2 className={styles.heading}>
            What We <span className={styles.headingAccent}>Offer</span>
          </h2>

          <div className={styles.divider}></div>

          <p className={styles.intro}>
            From intimate gatherings to large-scale celebrations, we provide a comprehensive suite of catering and event services — all under one roof.
          </p>

          {/* Numbered Offerings List */}
          <div className={styles.offerList}>
            {offerings.map((item, idx) => (
              <div key={idx} className={styles.offerItem}>
                <div className={styles.numBadge}>{String(idx + 1).padStart(2, "0")}</div>
                <div className={styles.offerText}>
                  <h3 className={styles.offerTitle}>{item.title}</h3>
                  <p className={styles.offerDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link href="/services">
            <button className={styles.ctaBtn}>
              View All Services
              <span className={styles.arrow}>→</span>
            </button>
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <Image
              src="/whatweOffer.jpg"
              alt="Premium Event Table Setting"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}