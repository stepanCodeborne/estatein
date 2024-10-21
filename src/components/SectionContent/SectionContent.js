import styles from "./SectionContent.module.css";

export default function SectionComponent({ className, children }) {
  return <div className={`${styles.content} ${className}`}>{children}</div>;
}