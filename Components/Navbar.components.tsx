import Link from "next/link";
import navStyles from "../styles/nav.module.scss";

const Navbar = () => {
  return (
    <>
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
