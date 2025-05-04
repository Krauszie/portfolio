"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    // name: "home",
    name: "ホーム",
    path: "/",
  },
  // {
  //     name: "services",
  //     path: "/services",
  // },
  {
    // name: "resume",
    name: "履歴",
    path: "/resume",
  },
  {
    // name: "work",
    name: "お仕事",
    path: "/work",
  },
  {
    // name: "contact",
    name: "連絡",
    path: "/contact",
  },
];

function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
