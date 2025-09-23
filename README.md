##Week3

workshop 3.1 กำหนดค่า score = 59 และใช้ if ในการตรวจสอบตามโจทย์กำหนด ว่า score >= 80 ให้ console.log("A") , score >= 70 ให้ console.log("B") score >= 60 ให้ console.log("C") , score >= 50 ให้ onsole.log("D") และ score < 50 ให้ console.log("F") และผลลัพที่ออกมา คือ D

workshop 3.2 กำหนด ราคา เปอร์เซ็นส่วนลด และ แล้วคํานวณราคาสินค้าที่ผู้ใผู้ช้ต้องจ่ายหลังจากหักส่วนลด เราใช้สูตร เปอร์เซ็นส่วนลด ÷ 100 แล้ว x ราคา แล้วใช้ if else ในการตรวจสอบว่า ถ้าราคาสินค้าหลังหักส่วนลดต่ํากว่าหรือเท่ากับ 0 ให้แสดงราคาว่าเป็น 0 ให้เข้าเงื่อนไขแรก แต่ถ้าราคาสินค้าหลังหักส่วนลดต่ํากว่าหรือเท่ากับ 500 ให้บวกค่าธรรมเนียมมการจัดส่ง 50 บาท ให้เข้าเงื่อนไขที่ 2 และสุดท้าย ถ้าราคาสินค้าหลังหักส่วนลดสูงกว่า 500 บาทให้รับส่วนลดพิเพิศษ 10% จากราคาหลังหักส่วนลด โดยใช้สูตร ราคา x 90 ÷ 100

workshop 3.3 สร้าง Array ชื่อ students เก็บในรูปแบบของ Object โดยมีชื่อ และ เกรด ให้ครบตามโจทย์ ใช้ forEach ในการวนลูปผ่าน Array students และใช้ console ในการแสดงชื่อ และ เกรด แล้วใช้ function showStudentCount ซึ่งไม่มีรามิเมิตอร์และไม่มีการคืนค่า และใช้ students.length แสดงจำนวนของนักศึกษาทั้งหมด

workshop 3.4 สร้าง Array ชื่อ products เก็บในรูปแบบของ Object โดยมีราคา และ ส่วนลด แล้วใช้ function calculateTotal ซึ่งไม่มีรามิเมิตอร์และไม่มีการคืนค่า ใช้ forEach ในการวนลูปผ่าน Array ร้างตัวแปรชื่อ sumprices เป็นราคาของสินค้าที่ลดราคาแล้ว คือเอา ราคา - (ราคา x (ส่วนลด ÷ 100)) แล้วเอา ราคาของสินค้าที่ลดราคาแล้ว + discountedprice แล้วใช้ console แสดงผลรวมของราคาสินค้าหลังหักส่วนลด

workshop 3.5 สร้าง Array ชื่อ products เก็บในรูปแบบของ Object โดยมีชื่อเล่น และ คะแนน และเขียน function filterPassedStudents ที่รับคะแนนต่ำสุดเป็นพารามิเมิตอร์ และใช้ forEach ในการวนลูปใน Array โดยใช้ if ตรวจสอบด้วย ว่า student.score >= minscore แล้วใช้ console แสดงชื่อที่ผ่านเกณฑ์





##Week4

UserProfileCard.tsx
รับ UserData เป็น props และแสดงข้อมูลโปรไฟล์ของผู้ใช้ 
รูปภาพ Avatar: แสดงรูปภาพโปรไฟล์ของผู้ใช้ , ชื่อและอีเมล: แสดงชื่อและอีเมลของผู้ใช้ , สถานะออนไลน์: ระบุว่าผู้ใช้ออนไลน์หรือไม่ โดยใช้สีที่แตกต่างกัน , ทักษะ: แสดงรายการทักษะของผู้ใช้ โดยใช้คอมโพเนนต์ SkillTag , ปุ่ม View Details : เมื่อคลิกปุ่มนี้ จะมีการเรียกใช้ฟังก์ชัน onViewDetails โดยส่ง userId ไปด้วย

 SkillTag.tsx
 ใช้เพื่อแสดง ทักษะ (Skill) แต่ละรายการ 
ชื่อทักษะ (Skill Name): แสดงชื่อทักษะ , ระดับ (Level): แสดงระดับความชำนาญในทักษะนั้นๆ (Beginner, Intermediate, Advanced) , สีพื้นหลัง: สีของแท็กจะเปลี่ยนไปตามระดับความชำนาญ (สีเขียวสำหรับ Beginner, สีส้มสำหรับ Intermediate, สีชมพูสำหรับ Advanced, และสีเทาสำหรับกรณีอื่นๆ)

App.tsx
React ที่ใช้คอมโพเนนต์ UserProfileCard ข้อมูลผู้ใช้ (Users Data): มีการกำหนด array ของ UserData ตัวอย่างมาให้ 4 รายการ การแสดงผล: ใช้ .map() เพื่อวนลูปผ่าน array ของผู้ใช้ และแสดง UserProfileCard สำหรับผู้ใช้แต่ละคน การจัดการ Event: มีฟังก์ชัน handleViewDetails ที่จะถูกเรียกเมื่อผู้ใช้คลิกปุ่ม "View Details" ใน UserProfileCard โดยจะทำการ console.log แสดง User ID Layout: ใช้ Flexbox เพื่อจัดเรียง User Profile Card ในรูปแบบ Grid ที่ปรับขนาดได





##Week5

Counter.tsx
ใช้ useState จำว่าตอนนี้ตัวเลขอยู่ที่เท่าไหร่ , ใช้ Increment ให้ตัวเลขที่จำไว้เพิ่มขึ้นทีละ 1 , ใช้ Decrement ให้ตัวเลขลดลงทีละ 1

Form.tsx
ใช้ useState จำข้อมูลชื่อและอีเมลที่เรากำลังกรอก , ใช้ฟังก์ชัน handleChange ให้อัปเดตข้อมูลทุกครั้งที่เราพิมพ์อะไรลงในช่องชื่อหรืออีเมล ฟังก์ชัน handleChange จะอัปเดตข้อมูลที่ useState กำลังเก็บอยู่ทันที ให้เห็นข้อมูลที่พิมพ์ไปปรากฏขึ้นที่หน้าจอแบบเรียลไทม์



##week6

workshop6.1

กำหนด props ที่จะรับเข้ามา , imageUrl = ลิงก์รูปสินค้า , title = ชื่อสินค้า , description = คำอธิบาย , price = ราคา , onAddToCart = ฟังก์ชันเรียกตอนกดปุ่ม , <img src={imageUrl} alt={title} /> แสดงรูปสินค้า , <p className="text-xl font-bold">฿{price.toLocaleString()}</p> แสดงราคา พร้อม format , <button onClick={onAddToCart}>Add to Cart</button> ปุ่มกดเพิ่มลงตะกร้า

workshop 6.2

const [isOpen, setIsOpen] = useState(false); สร้าง state เอาไว้เก็บว่าเมนูมือถือเปิดหรือปิด , <button onClick {() => setIsOpen(!isOpen)}> ปุ่ม hamburger toggle เปิด/ปิดเมนู , <div className="hidden md:flex space-x-8"> <a href="#">Home</a> เมนูปกติ แสดงเฉพาะตอนจอใหญ่ (md:flex) จอเล็กซ่อน (hidden) , <div className={`md:hidden ... ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}></div> เมนูมือถือ แสดงเฉพาะตอนจอเล็ก 











