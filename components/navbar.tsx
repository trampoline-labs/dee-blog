import Link from "next/link";
import { Menu } from "./icons";

const MainNav = () => {
  return (
    <nav className="flex justify-between">
      <Link href="/" className="text-3xl">
        Deez-blog
      </Link>

      <button className="lg:hidden">
        <Menu className="scale-125" />
      </button>
    </nav>
  );
};

export default MainNav;
