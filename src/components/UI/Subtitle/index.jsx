import styles from "./style.module.css";
export default function Subtitle({ className, children }) {
  return (
    <p className={`uppercase mb-16 ${className} ${styles.subtitle}`}>
      {children}
    </p>
  );
}
