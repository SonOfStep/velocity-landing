export default function Section({ children, className, as = "section" }) {
  const TagName = as;
  return (
    <TagName className={`relative w-full ${className}`}>{children}</TagName>
  );
}
