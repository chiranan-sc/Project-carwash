// Carwash\src\view.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./view.css";

const View = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate(); // ใช้ navigate เพื่อเปลี่ยนหน้า

  // แสดงที่ละ 10 รายการ หน้าที่...
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(sortBookings(storedBookings));
  }, []);

  const parseDateTime = (date, time) => {
    const fixedTime = (time || "").replace(/\./g, ":");
    return new Date(`${date}T${fixedTime}`);
  };

  const sortBookings = (data) => {
    return [...data].sort((a, b) => {
      return parseDateTime(a.date, a.time) - parseDateTime(b.date, b.time);
    });
  };

  const calculateDeposit = (totalPrice) => {
    return totalPrice ? (totalPrice * 0.5).toFixed(2) : "N/A";
  };

  const handleDeposit = (booking) => {
    // เก็บข้อมูล booking ที่จะไปหน้า Deposit
    localStorage.setItem("currentBooking", JSON.stringify(booking));
    navigate("/deposit"); // นำผู้ใช้ไปที่หน้า Deposit
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentBookings = bookings.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(bookings.length / itemsPerPage);

  return (
    <div className="view">
      <h1>ดูการจองบริการล้างรถ</h1>
      {bookings.length === 0 ? (
        <p className="error-message">
          ขออภัย!! กรุณาจองเพื่อใช้บริการของเรา หรือกรอกข้อมูลให้ถูกต้อง
        </p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ชื่อ</th>
                <th>นามสกุล</th>
                <th>เบอร์โทรศัพท์</th>

                <th>ประเภทบริการ</th>
                <th>ขนาดรถ</th>

                <th>วันที่ & เวลา</th>
                <th>ทะเบียนรถ</th>
                <th>ราคาทั้งหมด</th>
                <th>ราคาหลังลด</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {/* {bookings.map((booking, index) => ( */}
              {currentBookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.firstname}</td>
                  <td>{booking.lastname}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.serviceType}</td>
                  <td>{booking.carSize}</td>
                  <td>
                    {booking.date} {booking.time}
                  </td>
                  <td>{booking.licensePlate}</td>
                  <td>{booking.totalPrice || "N/A"}</td>
                  {/*<td>{booking.status || 'Ongoing'}</td>*/}
                  <td>{calculateDeposit(booking.totalPrice)}</td>
                  <td>{booking.status}</td>
                  {/* <td>
                  <button onClick={() => handleDeposit(booking)}>ค่ามัดจำ 50%</button>
                </td>*/}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              กลับ
            </button>

            <span>
              หน้าที่ {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              ถัดไป
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default View;
