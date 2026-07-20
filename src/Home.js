// Carwash\src\Home.js

import React from "react";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
// ต้องแน่ใจว่าได้ติดตั้งไอคอน Bootstrap
import { useNavigate } from "react-router-dom";
//ติดตั้งไอคอน Bootstrap
import "./Home.css";

// ฟังก์ชัน Home
function Home() {
  const navigate = useNavigate();

  // ฟังก์ชัน handleLearnMoreClick เพื่อไปยังหน้า /service
  const handleLearnMoreClick = () => {
    navigate("/service");
  };

  return (
    <div className="promote-inner">
      <div className="promote-caption">
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/331/268/non_2x/happy-halloween-from-the-spooky-castle-free-vector.jpg"
          alt="Halloween Promotion"
        />
        {/* ข้อมูลโปรโมชั่นเพิ่มเติม */}

        <h2>🎃 โปรโมชั่นล้างรถสุดหลอน ต้อนรับเทศกาล Halloween!</h2>
        <p>👻ให้รถของคุณ พร้อมออกทริปท้าผีด้วยโปรสุดพิเศษจากเรา!</p>
        <p>🚗 ล้างรถครบเซ็ต ลดทันที 20% เคลือบเงารถฟรี</p>
        <p>✨ เมื่อใช้บริการล้างรถภายในและภายนอก</p>
        <p>🎁 พิเศษ! **รับน้ำหอมปรับอากาศกลิ่น Halloween** ฟรี</p>
        <p>เมื่อใช้บริการครบ 500 บาท🕸️ ตั้งแต่วันนี้ - 31 ตุลาคมเท่านั้น!</p>
        <p>
          อย่าพลาดโปรฯ สุดหลอน ที่จะทำให้รถของคุณสะอาดและหอมสดชื่นไปอีกขั้น!
        </p>

        {/* ปุ่มดูรายละเอียดเพิ่มเติม */}
        <button className="learn-more-btn" onClick={handleLearnMoreClick}>
          ดูรายละเอียดเพิ่มเติม
        </button>
      </div>

      <div className="promote-caption">
        <img
          src="https://c8.alamy.com/comp/2EMA60J/happy-valentines-day-greeting-with-sparkling-stars-and-golden-heart-balloons-vector-valentine-love-kiss-lips-love-message-in-phone-and-wedding-rings-2EMA60J.jpg"
          alt="Valentine Promotion"
        />
        <h2>💖 โปรโมชั่นล้างรถสุดโรแมนติก ต้อนรับวัน Valentine! 🌹</h2>
        <p>
          มอบความรักให้กับรถของคุณด้วยโปรฯ
          สุดพิเศษที่เราจัดมาเพื่อคุณและคนพิเศษ!
        </p>
        <p>🚗 ล้างรถแพ็กเกจคู่รัก ลดทันที 30% ฟรี! เคลือบเงารถ**</p>
        <p>
          ✨ เมื่อใช้บริการล้างรถทั้งภายนอกและภายใน เมื่อใช้บริการครบ 1,000 บาท
        </p>
        <p>💝 พิเศษ! รับน้ำหอมปรับอากาศกลิ่นกุหลาบสุดโรแมนติก ฟรี</p>
        <p>
          💌 ล้างรถคู่กัน รับส่วนลดพิเศษเพิ่มอีก 300 บาท
          สำหรับการใช้บริการครั้งถัดไป
        </p>
        <p>
          📅 ตั้งแต่วันนี้ - 14 กุมภาพันธ์
          มาทำให้รถของคุณดูดีพร้อมไปออกเดตกับคนพิเศษกันเถอะ!
        </p>
        {/* ข้อมูลโปรโมชั่นเพิ่มเติม */}

        {/* ปุ่มเรียนรู้เพิ่มเติม */}
        <button className="learn-more-btn" onClick={handleLearnMoreClick}>
          ดูรายละเอียดเพิ่มเติม
        </button>
      </div>

      <div className="promote-caption">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/christmas-facts-650b513919cd9.jpg?crop=1xw:0.8453434844192634xh;center,top"
          alt="Christmas Promotion"
        />
        <h2>🎄โปรโมชั่นล้างรถสุดพิเศษ ต้อนรับเทศกาล Christmas! 🎅✨</h2>
        <p>
          เพิ่มความเงางามให้รถของคุณในช่วงเวลาสุดพิเศษนี้ กับโปรฯ
          สุดคุ้มที่คุณไม่ควรพลาด!
        </p>
        <p>🚗 ล้างรถครบเซ็ต ลดทันที 25% ✨ เคลือบเงารถฟรี เมื่อใช้บริการล้างรถทั้งภายนอกและภายใน</p>
        <p>
          🎁 รับของขวัญพิเศษ น้ำหอมปรับอากาศกลิ่น Christmas สุดหอมฟรี
          เมื่อใช้บริการครบ 800 บาท{" "}
        </p>
        <p>⛄ **สมัครสมาชิกวันนี้ ลดเพิ่มอีก 10%** สำหรับการล้างรถครั้งถัดไป 📅 ตั้งแต่วันนี้ - 25 ธันวาคมนี้เท่านั้น!</p>
        <p>ให้รถของคุณสะอาดพร้อมรับความสุขในเทศกาลคริสต์มาสนี้!</p>

        {/* ปุ่มเรียนรู้เพิ่มเติม */}
        <button className="learn-more-btn" onClick={handleLearnMoreClick}>
          ดูรายละเอียดเพิ่มเติม
        </button>
      </div>
    </div>
  );
}

const TeamSection = () => {
  return (
    <section className="team section-padding" id="team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* ส่วน Contact ด้านบน */}
            <div className="section-header text-center pb-5">
              <h2>ทีมผู้พัฒนา</h2>
              <p>
                ยินดีต้อนรับสู่เว็บไซต์จองคิวล้างรถของเรา!
                เราพร้อมให้บริการล้างและดูแลรถยนต์ของคุณอย่างมืออาชีพ
                เพื่อให้รถของคุณสะอาด เงางาม  และพร้อมใช้งานอยู่เสมอ จองคิวง่าย ๆ เพียงไม่กี่ขั้นตอน
                แล้วให้เราดูแลรถของคุณให้เหมือนใหม่วันนี้!
              </p>
            </div>
          </div>
        </div>

        {/* ข้อมูลทีม */}
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="card text-center">
                <div className="card-body">
                  <img
                    alt=""
                    className="img-fluid rounded-circle"
                    src={member.image}
                  />
                  <h3 className="card-title py-2">{member.name}</h3>
                  <p className="card-text">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ข้อมูลทีม
const teamMembers = [
  {
    name: "นายระพีวัฒน์ แต้มฤทธิ์",
    description: "หมู่เรียน 800 รหัส 6530202811",
  },
  {
    name: "นางสาวจิรนันท์ ศรีจันทร์",
    description: "หมู่เรียน 800 รหัส 6530202595 ",
  },
  {
    name: "นางสาวอนัญญา วารีย์",
    description: "หมู่เรียน 870 รหัส 6530202951",
  },
];
const Footer = () => {
  return (
    <footer className="bg-dark p-2 text-center">
      <div className="container">
        <p className="highlighted-text">Shine&Drive@gmail.com</p>
      </div>
    </footer>
  );
};

{
  /*  const Promotionbutton = () => {
    return (
        <div>
            <button className="learn-more-btn">
            <Link to="/service">ดูรายละเอียด</Link>
            </button>
        </div>
    );
} */
}

// คอมโพเนนต์หลักที่รวม Home และ TeamSection
function Homepage() {
  return (
    <div>
      <Home />

      <TeamSection />
      <Footer />
    </div>
  );
}

export default Homepage;
