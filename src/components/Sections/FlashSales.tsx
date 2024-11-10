import LinkButton from "../LinkButton";
import ProductCard from "../ProductCard";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const FlashSales = () => {
  return (
    <SectionContainer>
      <SectionTitle buttons subtitle="Categories" title="Browse by category" />
      <div className="flex gap-6">
        <ProductCard price={160} discount={40} discountPrice={120} />
        <ProductCard price={300} />
        <ProductCard price={400} discount={30} discountPrice={370} />
        <ProductCard price={300} />
        <ProductCard price={300} />
        <ProductCard price={300} />
      </div>
      <LinkButton link="products" linkLabel="View All Products" className="mx-auto"/>
    </SectionContainer>
  );
};

export default FlashSales;
