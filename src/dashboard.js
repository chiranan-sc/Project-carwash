// src\dashboard.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

  //   const parseDateTime = (date, time) => {
  //     const fixedTime = (time || "").replace(/\./g, ":");
  //     return new Date(`${date}T${fixedTime}`);
  //   };

  //   const sortedBookings = [...storedBookings].sort((a, b) => {
  //     return parseDateTime(a.date, a.time) - parseDateTime(b.date, b.time);
  //   });

  //   setBookings(sortedBookings);
  // }, []);

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

  const calculateDeposit = (totalPrice, depositPaid) => {
    if (depositPaid) {
      return "จ่ายค่ามัดจำแล้ว";
    }
    return totalPrice ? (totalPrice * 0.5).toFixed(2) : "N/A";
  };

  const handleDelete = (index) => {
    const updatedBookings = bookings.map((booking, i) => {
      if (i === index) {
        return { ...booking, status: "Cancel" };
      }
      return booking;
    });

    const sortedBookings = sortBookings(updatedBookings);

    setBookings(sortedBookings);
    localStorage.setItem("bookings", JSON.stringify(sortedBookings));
  };

  const handleConfirm = (index) => {
    const updatedBookings = bookings.map((booking, i) => {
      if (i === index) {
        return {
          ...booking,
          status: "Complete",
          confirmed: true,
        };
      }
      return booking;
    });

    const sortedBookings = sortBookings(updatedBookings);

    setBookings(sortedBookings);
    localStorage.setItem("bookings", JSON.stringify(sortedBookings));
  };

  const handleEdit = (index) => {
    localStorage.setItem(
      "editBooking",
      JSON.stringify({
        ...bookings[index],
        id: bookings[index].id,
      }),
    );

    navigate("/booking", {
      state: {
        editBooking: {
          ...bookings[index],
          id: bookings[index].id,
          // editIndex: index,
        },
      },
    });
  };

  return (
    <div className="dashboard">
      <h1>ดูการจองบริการล้างรถของร้าน</h1>
      {bookings.length === 0 ? (
        <p>ไม่มีการจองบริการล้างรถ</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ชื่อ</th>
              <th>นามสกุล</th>
              <th>เบอร์โทร</th>
              <th>ประเภทบริการ</th>
              <th>ขนาดรถ</th>
              <th>วันที่ & เวลา</th>
              <th>เลขทะเบียนรถ</th>
              <th>ราคาทั้งหมด</th>
              <th>สถานะ</th>

              <th>แก้ไข</th>
              <th>ยืนยัน</th>
              <th>ยกเลิก</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking, index) => (
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
                <td>
                  {" "}
                  {/* แสดงสถานะ */}
                  <span className={`status ${booking.status?.toLowerCase()}`}>
                    {booking.status || "Ongoing"}
                  </span>
                </td>{" "}
                <td>
                  <button className="edit" onClick={() => handleEdit(index)}>
                    แก้ไข
                  </button>
                </td>
                <td>
                  <button
                    className="confirm"
                    onClick={() => handleConfirm(index)}
                    disabled={
                      booking.status === "Complete" ||
                      booking.status === "Cancel"
                    }
                  >
                    ยืนยัน
                  </button>
                </td>
                <td>
                  <button
                    className="delete"
                    onClick={() => handleDelete(index)}
                    disabled={booking.status === "Cancel"}
                  >
                    ยกเลิก
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
