import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
const links = [
  {
    "name": "Recruiting Timeline",
    "href": "/#timeline"
  }, {
    "name": "Why Join",
    "href": "/#why-us"
  }, {
    "name": "Our Team",
    "href": "/#team"
  }, {
    "name": "Join",
    "href": "/join"
  }, {
    "name": "Events",
    "href": "/events"
  }
]


function NavLink({ to, children }) {
  return (
    <Link href={to} className={`mx-4`}>
      {children}
    </Link>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute pt-28 bg-gradient-to-br from-grey-dark to-grey  top-0 left-0 h-screen w-screen transform ${open ? "-translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter`}
    >

      <div className="flex flex-col ml-4">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              className="text-xl font-medium my-4"
              href={link.href}
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              {link.name}
            </Link>
          )
        })}

      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between filter px-4 py-4 h-28 items-center fixed w-full backdrop-filter backdrop-blur z-50 ">
      <MobileNav open={open} setOpen={setOpen} />
      <div className=" flex items-center z-50">
        <Link className="text-2xl font-semibold" href="/">
          <Logo
          />
        </Link>
      </div>
      <div className="flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center sm:hidden cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""
              }`}
          />
          <span
            className={`h-1 bg-black dark:bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"
              }`}
          />
          <span
            className={`h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
          />
        </div>

        <div className="hidden sm:flex">
          {links.map((link) => {
            return (
              <NavLink key={link.name} to={link.href}>{link.name}</NavLink>
            )
          })}
        </div>
      </div>
    </nav>
  );
}