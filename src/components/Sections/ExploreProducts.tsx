import React from "react";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import ProductCard from "../ProductCard";
import LinkButton from "../LinkButton";

const ExploreProducts = () => {
  return (
    <SectionContainer>
      <SectionTitle
        subtitle="Our Products"
        title="Explore Our Products"
        buttons
      />
      <div className="flex justify-between flex-wrap gap-8">
        <ProductCard price={300} />
        <ProductCard price={300} />
        <ProductCard price={300} />
        <ProductCard price={300} />
        <ProductCard price={300} />
        <ProductCard price={300} />
        <ProductCard price={300} />
        <ProductCard price={300} />
        <ProductCard price={300} />
        <ProductCard price={300} />
      </div>
      <LinkButton link="products" linkLabel="View All Products" className="mx-auto"/>
    </SectionContainer>
  );
};

export default ExploreProducts;
