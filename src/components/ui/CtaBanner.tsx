import Link from "next/link";
import styles from "./CtaBanner.module.css";
interface CtaBannerProps {
  label?: string;
  title?: string;
  titleAccent?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}
export default function CtaBanner({
  label = "GET IN TOUCH",
  title = "Your Perfect Event",
  titleAccent = "Starts With One Call",
  subtitle = "Tell us your vision and we'll handle everything else — from menus to decor, logistics to service. Let's create something extraordinary together.",
  primaryBtnText = "Book Your Event",
  primaryBtnHref = "/book-now",
  secondaryBtnText = "View Services",
  secondaryBtnHref = "/services",
}: CtaBannerProps) {
  return (
    <section className={styles.banner}>
      <div className={styles.bgOverlay}></div>
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <h2 className={styles.title}>
          {title}
          <br />
          <span className={styles.titleAccent}>{titleAccent}</span>
        </h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.buttons}>
          <Link href={primaryBtnHref} className={styles.primaryBtn}>
            {primaryBtnText} <span className={styles.arrow}>›</span>
          </Link>
          <Link href={secondaryBtnHref} className={styles.secondaryBtn}>
            {secondaryBtnText}
          </Link>
        </div>
      </div>
    </section>
  );
}
