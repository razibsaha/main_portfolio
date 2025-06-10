import Link from "next/link";
import { FunctionComponent } from "react";
import { NavItemName } from "../types";

interface NavItemProps {
  active: NavItemName;
  setActive: (name: NavItemName) => void;
  name: NavItemName;
  route: string;
}

const NavItem: FunctionComponent<NavItemProps> = ({
  active,
  setActive,
  name,
  route,
}) => {
  return active !== name ? (
    <Link href={route}>
      <a>
        <span
          className='mx-2 cursor-pointer hover:border-b-4 dark:hover:text-[var(--color-brand-accent)]'
          onClick={() => setActive(name)}
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

export default NavItem;