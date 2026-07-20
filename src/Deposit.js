// Carwash\src\Deposit.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Deposit.css"; // อาจต้องมี CSS สำหรับสไตล์

const Deposit = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const storedBooking = JSON.parse(localStorage.getItem("currentBooking"));
    if (storedBooking) {
      setBooking(storedBooking);
    } else {
      alert("ไม่พบข้อมูลการจอง"); // แจ้งเตือนถ้าไม่มีข้อมูล
      navigate("/view"); // นำทางกลับไปที่หน้า View
    }
  }, [navigate]);

  if (!booking) {
    return null; // ถ้าไม่มีข้อมูลการจอง ให้ไม่แสดงอะไร
  }

  const handleCancel = () => {
    if (!booking) return;

    const existingData = JSON.parse(localStorage.getItem("bookings")) || [];

    // เพิ่มสถานะการจ่ายค่ามัดจำ
    const updatedBooking = {
      ...booking,
      depositPaid: true,
      status: "Ongoing",
      confirmed: false,
    };

    const currentIndex = existingData.findIndex(
       (item) => item.id === updatedBooking.id
        // item.phone === booking.phone &&
        // item.date === booking.date &&
        // item.time === booking.time,
    );

    if (currentIndex >= 0) {
      existingData[currentIndex] = updatedBooking;
    } else {
      existingData.push(updatedBooking);
    }

    localStorage.setItem("bookings", JSON.stringify(existingData));

    // localStorage.setItem("bookings", JSON.stringify(updatedData));
    localStorage.removeItem("currentBooking");
    navigate("/view");
  };

  return (
    <div className="deposit">
      <h1>ชำระค่ามัดจำ</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzbNSlKQ9SUHX8Qgm8sqacyosJGlqY2Ou2ZUWSD5du15r9GNcxzfJN7o&s=10" />
      <p>
        <strong>ชื่อ:</strong> {booking.firstname} {booking.lastname}
      </p>

      <p>
        <strong>ป้ายทะเบียน:</strong> {booking.licensePlate}
      </p>

      <p>
        <strong>วันที่จอง:</strong> {booking.date}
      </p>

      <p>
        <strong>เวลาจอง:</strong> {booking.time}
      </p>

      <p>
        <strong>ราคาทั้งหมดของบริการ:</strong> {booking.totalPrice} บาท
      </p>

      <p>
        <strong>ค่ามัดจำ 50%:</strong>{" "}
        {booking.totalPrice ? (booking.totalPrice * 0.5).toFixed(2) : "N/A"} บาท
      </p>

      {/* เปลี่ยนไปที่หน้า Booking สำหรับการชำระเงิน */}
      <div className="button-group">
        <button
          onClick={() => {
            localStorage.setItem("currentBooking", JSON.stringify(booking));
            navigate("/booking");
          }}
        >
          ยกเลิก
        </button>
        <button onClick={handleCancel}>ยืนยัน</button>
      </div>
    </div>
  );
};

export default Deposit;
