import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import BestSelling from "@/components/Sections/BestSelling";
import ExploreProducts from "@/components/Sections/ExploreProducts";
import FlashSales from "@/components/Sections/FlashSales";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Container>
        <div className="flex justify-between items-center py-12 mb-16">
          <Categories />
          <div className="border-r border-black self-stretch"></div>
          <Banner />
        </div>
        <div className="space-y-16">
          <FlashSales />
          <div className="border-b border-black"></div>
          <BestSelling />
          <div className="border-b border-black"></div>
          <ExploreProducts />
        </div>
      </Container>
    </main>
  );
}
