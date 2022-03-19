export default function Button({
  as = "button",
  children,
  className,
  variant = "base",
  ...props
}) {
  const TagName = as;

  const variants = {
    base: ["rounded-lg", "text-white", "bg-blue-500", "uppercase"],
    outline: [
      "border-2",
      "border-white",
      "rounded-lg",
      "text-white",
      "uppercase",
    ],
  };

  return (
    <TagName
      className={` hover:scale-105 transition-transform cursor-pointer px-8 py-3 text-xl
      ${variants[variant].join(" ")} ${className}`}
      {...props}
    >
      {children}
    </TagName>
  );
}
