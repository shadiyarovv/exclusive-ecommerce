import React from "react";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import ProductCard from "../ProductCard";

const BestSelling = () => {
  return (
    <SectionContainer>
      <SectionTitle
        subtitle="This Month"
        title="Best Selling Products"
        link="/products"
        linkLabel="View All"
      />
      <div className="flex justify-between">
        <ProductCard price={260} />
        <ProductCard price={260} />
        <ProductCard price={260} />
        <ProductCard price={260} />
        <ProductCard price={260} />
      </div>
      
    </SectionContainer>
  );
};

export default BestSelling;
