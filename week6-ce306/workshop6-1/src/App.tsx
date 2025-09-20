import React from "react";
import ProductCard from "./Component/ProductCard";

const App: React.FC = () => {
  const products = [
    {
      imageUrl: "https://www.celine.com/on/demandware.static/-/Sites-masterCatalog/default/dw6ef67a2e/images/large/188882BZ4.01BC_1_LIB_W_V3.jpg",
      title: "กระเป๋า TRIOMPHE ขนาด TEEN แคนวาสลายทรียงฟ์และหนังลูกวัว ",
      description: "สะพายคาดลำตัว และสะพายไหล่สายแบบปรับได้ ความยาวจากไหล่ถึงตัวกระเป๋าสั้นสุด 14 นิ้ว (35 ซม.) และยาวสุด 20 นิ้ว (50 ซม.)",
      price: 130000,
    },
    {
      imageUrl:
        "https://image.celine.com/4e77555e29ed9443/original/4S235CMLB-35SG_3_SUM22.jpg",
      title: "แว่นกันแดด TRIOMPHE METAL 01 โลหะ",
      description: "FIT ADJUSTEDแว่นกันแดดทรง ADJUSTED FIT เหมาะสำหรับรูปหน้ากว้าง มีโหนกแก้มสูงและจมูกสั้น: ทรงกรอบแว่นโดยรวมมีขนาดใหญ่กว่าปกติ เพิ่มความยาวแป้นรองจมูกอะซิเตทและลดความโค้งของกรอบกับความลาดเอียงลง ขนาด ADJUSTED FIT มาในกรอบที่ทำจากอะซิเตทเท่านั้น โดยบางรุ่นออกแบบพร้อมแป้นรองจมูกโลหะแบบปรับได้",
      price: 24500,
    },
    {
      imageUrl:
        "https://image.celine.com/47fe9e260f59f88f/original/10D783DPV-38NO_1_FALL22.jpg?im=Resize=(1800)",
      title: "กระเป๋าใส่บัตรพับสองทบ หนังลูกวัวผิวสัมผัสเงา",
      description: "หนังลูกวัวบุหนังลูกวัว ตกแต่งสีทอง ตัวล็อกกระดุมกดโลหะสัญลักษณ์ทรียงฟ์ ช่องใส่บัตรเครดิต 4 ช่อง ช่องกระเป๋าทรงแบน 2 ช่อง",
      price: 18000,
    },
  ];

  const handleAddToCart = (title: string) => {
    alert(`${title} Add to Cart`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        รายการสินค้าของเรา
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {products.map((p, index) => (
          <ProductCard
            key={index}
            imageUrl={p.imageUrl}
            title={p.title}
            description={p.description}
            price={p.price}
            onAddToCart={() => handleAddToCart(p.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
