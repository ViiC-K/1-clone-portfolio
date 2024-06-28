import Link from "next/link";
import { Button } from "./button";
import Nav from "./Nav";
import MobileNav from "../ui/MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center ">
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            IVIC<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="">Hire me</Button>
          </Link>
        </div>
        {/* mobile nav  */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
