import Link from "next/link";
import SearchBar from "./SearchBar";
import {Heart, ShoppingCart } from "lucide-react";
import Container from "@/components/Container"

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center py-5 border-b border-b-black">
          <p className="text-xl font-bold">Exclusive</p>
          <nav className="flex gap-10">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/signup">Sign Up</Link>
          </nav>
          <div className="flex items-center gap-5">
            <SearchBar />
            <Heart />
            <ShoppingCart />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
