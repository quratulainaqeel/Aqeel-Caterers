 import Image from "next/image";
import styles from "./WhyChooseUs.module.css";
const reasons = [
  {
    icon: "✦",
    title: "12+ Years of Excellence",
    desc: "With over a decade of experience, we have perfected the art of catering for every type of occasion.",
  },
  {
    icon: "✦",
    title: "Fresh & Hygienic",
    desc: "Every dish is prepared fresh on-site or in our state-of-the-art kitchen with the strictest hygiene standards.",
  },
  {
    icon: "✦",
    title: "Customizable Menus",
    desc: "We design menus around your preferences, dietary needs, and cultural requirements — no compromise.",
  },
  {
    icon: "✦",
    title: "Professional Staff",
    desc: "Our trained waitstaff, chefs, and coordinators ensure seamless service from setup to cleanup.",
  },
  {
    icon: "✦",
    title: "Affordable Packages",
    desc: "Premium quality catering at competitive prices — packages starting from just Rs. 370 per head.",
  },
  {
    icon: "✦",
    title: "Complete Event Solutions",
    desc: "Beyond food — we handle decor, setup, serving, live counters, and everything in between.",
  },
];
  export default function WhyChooseUs() {
  return (
    <section className={`section section-dark ${styles.section}`}>
      <div className={styles.wrapper}>
         {/* Left: Image side */}
        <div className={styles.imageCol}>
          <div className={styles.imagePrimary}>
            <Image
              src="/dish_1.jpg"
              alt="Aqeel Caterers premium food"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.imageSecondary}>
            <Image
              src="/dish_2.jpg"
              alt="Beautifully plated catering dish"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Gold accent border */}
          <div className={styles.accentBorder}></div>
        </div>
        {/* Right: Content side */}
        <div className={styles.contentCol}>
          <span className={styles.label}>WHY CHOOSE US</span>
          <h2 className={styles.heading}>
            What Makes Us{" "}
            <span className={styles.headingAccent}>Special</span>
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.intro}>
            We are not just caterers — we are partners in creating unforgettable moments. Here&apos;s why families and businesses across Karachi trust us.
          </p>
          <div className={styles.reasonsGrid}>
            {reasons.map((item, i) => (
              <div key={i} className={styles.reasonCard}>
                <div className={styles.reasonIcon}>{item.icon}</div>
                <div>
                  <h4 className={styles.reasonTitle}>{item.title}</h4>
                  <p className={styles.reasonDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}