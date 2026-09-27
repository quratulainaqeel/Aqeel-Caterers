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