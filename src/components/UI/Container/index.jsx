export default function Container({ children, className }) {
  return (
    <div className={`lg:mx-[250px] sm:mx-10 mx-2 ${className}`}>{children}</div>
  );
}
