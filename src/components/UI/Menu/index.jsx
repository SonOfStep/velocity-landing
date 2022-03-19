import Link from "../Link";

export default function Menu({ items }) {
  return (
    <div className="menu">
      <ul className="flex gap-x-10">
        {items.map((item) => (
          <li key={item.title}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
