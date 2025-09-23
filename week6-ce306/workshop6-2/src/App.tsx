import React from "react";
import Navbar from "./Component/Navbar";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <Navbar />
      <main className="p-6 mt-20 w-full">
        <h1 className="text-3xl font-bold text-black mb-4">
          Fourth Nattawat
        </h1>
        <p className="text-gray-600 leading-relaxed">
          ณัฐวรรธน์ จิโรชน์ธิกุล (ชื่อในภาษาอังกฤษ: Nattawat Jirochtikul)
           เกิดเมื่อวันจันทร์ที่ 18 ตุลาคม พ.ศ. 2547 เป็นนักแสดงชาวไทย 
        </p>
      </main>
    </div>
  );
};

export default App;
