import Link from "next/link"
import { FunctionComponent } from "react"

const NavItem: FunctionComponent<{
  active: string
  setActive: Function
  name: string
  route: string
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
     <Link href={route}>
        <a>
           <span
              className='mx-2 cursor-pointer hover:border-b-4 dark:hover:text-[#64ffda]'
              onClick={() => setActive(name)}>
              {name}
           </span>
        </a>
     </Link>
  ) : null
}

export default NavItem;