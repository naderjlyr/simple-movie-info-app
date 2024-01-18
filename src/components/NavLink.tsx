import { NavLink as RRNavLink } from "react-router-dom";
import { FC } from "react";

interface NavLinkProps {
  href: string;
  title?: string;
}

const NavLink: FC<NavLinkProps> = ({ href, title }) => {
  return (
    <RRNavLink
      to={href}
      className={({ isActive }) =>
        `block text-lg py-3 px-4 transition-all duration-300 ${
          isActive
            ? "bg-pink-950 text-white"
            : "text-gray-300 hover:bg-pink-900"
        }`
      }
    >
      {title}
    </RRNavLink>
  );
};

export default NavLink;
