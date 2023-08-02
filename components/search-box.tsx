import Link from "next/link";
import { Search } from "./icons";

const SearchBox = () => {
  return (
    <form className="overflow-hidden bg-light-grey absolute top-16 md:relative md:top-0 flex items-center focus-within:ring-2 ring-main-pink focus-within:ring-offset-2 rounded-md md:w-1/3 w-full">
      {/* // TODO: add constraint to input size */}
      <input
        type="text"
        className="border-none py-2 focus:ring-0 bg-transparent w-[87%]"
        placeholder="Search"
      />
      <Link
        href="/posts?search=love"
        className="bg-main-pink hover:bg-main-pink-lighter transition-all duration-200 w-[13%] py-4 flex justify-center"
      >
        <Search color="white" />
      </Link>
    </form>
  );
};

export default SearchBox;
