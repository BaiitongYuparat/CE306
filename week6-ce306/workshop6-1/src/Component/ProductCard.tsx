import React from "react";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({imageUrl,title,description,price,onAddToCart, }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:w-80 w-full hover:scale-105 transition-transform">
      
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
        <p className="text-xl font-bold text-black mt-2">
          ฿{price.toLocaleString()}
        </p>

        <button
          onClick={onAddToCart}
          className="mt-4 bg-blue-400 hover:bg-blue-600 text-white font-medium py-2 px-4 focus:outline-none rounded-xl transition "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
