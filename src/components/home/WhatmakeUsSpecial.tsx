import styles from "./WhatmakeUsSpecial.module.css";

const features = [
  {
    number: "01",
    icon: "🌸",
    title: "Commitment To Freshness",
    desc: "We source only the finest, freshest ingredients daily — because great food always starts with great produce.",
  },
  {
    number: "02",
    icon: "✓",
    title: "Commitment To Quality",
    desc: "Every dish passes our strict quality checks — crafted to perfection by our seasoned culinary team.",
    featured: true,
  },
  {
    number: "03",
    icon: "🎂",
    title: "Commitment To Passion",
    desc: "We pour genuine love and energy into every dish — it's not just food, it's an experience crafted with heart.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section section-dark">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>OUR PROMISE</span>
          <h2 className={styles.heading}>What Makes Us <span className={styles.accent}>Special</span></h2>
          {/* <div className={styles.divider}></div> */}
        </div>

        {/* Features Grid */}
        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={styles.card}
            >
              {/* Large Number Background */}
              <div className={styles.numberBg}>{feature.number}</div>

              {/* Icon */}
              {/* <div>{feature.icon}</div> */}

              {/* Content */}
              <h3 className={styles.cardTitle}>{feature.title} </h3>
              <p className={styles.cardDesc}>{feature.desc}</p>

              {/* Bottom Line (only on featured card) */}
              {/* {feature.featured && <div className={styles.bottomLine}></div>} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}