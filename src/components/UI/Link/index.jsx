export default function Link({ href, className, children, ...props }) {
  return (
    <a
      href={href}
      className={`hover:text-blue-500 hover:fill-blue-500 transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
