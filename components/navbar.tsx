import Link from "next/link";
import SearchBox from "./search-box";
import { Menu } from "./icons";

const MainNav = () => {
  return (
    <nav className="flex relative justify-between">
      <Link href="/" className="text-3xl">
        Deez-blog
      </Link>

      <SearchBox />

      <button className="lg:hidden">
        <Menu className="scale-125" />
      </button>
    </nav>
  );
};

export default MainNav;
