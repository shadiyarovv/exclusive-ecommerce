import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Benefits from "@/components/Sections/Benefits";
import BestSelling from "@/components/Sections/BestSelling";
import CategoriesSection from "@/components/Sections/CategoriesSection";
import ExploreProducts from "@/components/Sections/ExploreProducts";
import FlashSales from "@/components/Sections/FlashSales";
import NewArrival from "@/components/Sections/NewArrival";
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
        <div className="space-y-20 mb-20">
          <FlashSales />
          <div className="border-b border-black"></div>
          <CategoriesSection />
          <div className="border-b border-black"></div>
          <BestSelling />
          <div className="border-b border-black"></div>
          <ExploreProducts />
          <NewArrival />
          <Benefits />
        </div>
      </Container>
    </main>
  );
}
