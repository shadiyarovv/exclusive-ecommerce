"use client";

import { Eye, Heart, Star } from "lucide-react";
import Link from "next/link";
import { MouseEvent } from "react";

interface ProductCardProps {
  price: number;
  discount?: number;
  discountPrice?: number;
}

const ProductCard = ({ price, discount, discountPrice }: ProductCardProps) => {
  const onAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link href="/products/2334" className="block w-fit">
      <div className="flex flex-col gap-2 w-fit">
        <div className="group w-56 h-56 rounded-md bg-gray-100 relative overflow-hidden">
          {discount ? (
            <span className="p-1 px-3 text-white bg-primary rounded-md absolute top-3 left-3 text-xs">
              -{discount}%
            </span>
          ) : null}
          <div className="flex flex-col gap-2 absolute top-3 right-3">
            {/* TODO: stopPropogation */}
            <button className="p-2 bg-white rounded-full">
              <Heart size={18} />
            </button>
            <button className="p-2 bg-white rounded-full">
              <Eye size={18} />
            </button>
          </div>
          <button
            className="opacity-0 bottom-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 w-full bg-black text-white py-2 absolute  transition-all"
            onClick={onAddToCart}
          >
            Add To Cart
          </button>
        </div>
        <p className="font-semibold">ASUS FHD Gaming Laptop</p>
        <div className={`flex gap-2 ${discount ? "flex-col" : "items-center"}`}>
          <div className="flex gap-2">
            {discount ? (
              <p className="text-primary font-semibold">${discountPrice}</p>
            ) : null}
            <p
              className={`font-semibold ${
                discount ? "text-gray-md line-through" : "text-primary"
              }`}
            >
              ${price}
            </p>
          </div>
          <div className="flex gap-2">
            <div className="flex">
              <Star size={18} className="fill-yellow-400 text-yellow-400" />
              <Star size={18} className="fill-gray-300 text-gray-300" />
              <Star size={18} className="fill-gray-300 text-gray-300" />
              <Star size={18} className="fill-gray-300 text-gray-300" />
              <Star size={18} className="fill-gray-300 text-gray-300" />
            </div>
            <p className="text-sm text-gray-md font-semibold">(95)</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
