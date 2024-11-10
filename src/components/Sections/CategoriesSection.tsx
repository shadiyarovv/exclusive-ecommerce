import React from "react";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import {
  Camera,
  Gamepad2,
  Headphones,
  Monitor,
  Smartphone,
  Watch,
} from "lucide-react";
import Link from "next/link";

const CategoriesSection = () => {
  return (
    <SectionContainer>
      <SectionTitle subtitle="Categories" title="Browse By Category" buttons />
      <div className="flex justify-between">
        <Link
          href={"/categories"}
          className="rounded-md border border-black flex flex-col items-center justify-center gap-2 w-48 h-48 text-lg hover:bg-primary hover:text-white hover:border-primary"
        >
          <Smartphone size={40} />
          <p>Phones</p>
        </Link>
        <Link
          href={"/categories"}
          className="rounded-md border border-black flex flex-col items-center justify-center gap-2 w-48 h-48 text-lg hover:bg-primary hover:text-white hover:border-primary"
        >
          <Monitor size={40} />
          <p>Computers</p>
        </Link>
        <Link
          href={"/categories"}
          className="rounded-md border border-black flex flex-col items-center justify-center gap-2 w-48 h-48 text-lg hover:bg-primary hover:text-white hover:border-primary"
        >
          <Watch size={40} />
          <p>Smart Watch</p>
        </Link>
        <Link
          href={"/categories"}
          className="rounded-md border border-black flex flex-col items-center justify-center gap-2 w-48 h-48 text-lg hover:bg-primary hover:text-white hover:border-primary"
        >
          <Headphones size={40} />
          <p>Headphones</p>
        </Link>
        <Link
          href={"/categories"}
          className="rounded-md border border-black flex flex-col items-center justify-center gap-2 w-48 h-48 text-lg hover:bg-primary hover:text-white hover:border-primary"
        >
          <Gamepad2 size={40} />
          <p>Gaming</p>
        </Link>
        <Link
          href={"/categories"}
          className="rounded-md border border-black flex flex-col items-center justify-center gap-2 w-48 h-48 text-lg hover:bg-primary hover:text-white hover:border-primary"
        >
          <Smartphone size={40} />
          <p>Phones</p>
        </Link>
      </div>
    </SectionContainer>
  );
};

export default CategoriesSection;
