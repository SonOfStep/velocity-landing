import styles from "./style.module.css";
export default function Title({ as = "span", className, children }) {
  const TagName = as;
  return (
    <TagName className={`uppercase mb-4 ${className} ${styles.title}`}>
      {children}
    </TagName>
  );
}
