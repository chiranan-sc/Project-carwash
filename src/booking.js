// Carwash\src\booking.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./booking.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import Select from "react-select";
import { useLocation } from "react-router-dom";

function Booking() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    serviceType: "",
    carSize: "",
    date: "",
    time: "",
    licensePlate: "",
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const timeOptions = [
    { value: "08:00", label: "08:00" },
    { value: "09:00", label: "09:00" },
    { value: "10:00", label: "10:00" },
    { value: "11:00", label: "11:00" },
    { value: "12:00", label: "12:00" },
    { value: "13:00", label: "13:00" },
    { value: "14:00", label: "14:00" },
    { value: "15:00", label: "15:00" },
    { value: "16:00", label: "16:00" },
    { value: "17:00", label: "17:00" },
    { value: "18:00", label: "18:00" },
  ];

  const location = useLocation();
  const editBooking = location.state?.editBooking;

  useEffect(() => {
    const selectedService = localStorage.getItem("selectedService");
    const selectedCarSize = localStorage.getItem("selectedCarSize");

    const editBooking = JSON.parse(localStorage.getItem("editBooking"));
    const currentBooking = JSON.parse(localStorage.getItem("currentBooking"));

    if (editBooking) {
      // แก้ไขจาก Dashboard
      setFormData(editBooking);

      calculateTotalPrice(
        editBooking.serviceType || "",
        editBooking.carSize || "",
      );
      return;
    } else if (currentBooking) {
      // กลับมาจากหน้า Deposit
      setFormData(currentBooking);
      calculateTotalPrice(
        currentBooking.serviceType || "",
        currentBooking.carSize || "",
      );
    } else {
      // จองใหม่
      setFormData((prevData) => ({
        ...prevData,
        serviceType: selectedService || "",
        carSize: selectedCarSize || "",
      }));

      calculateTotalPrice(selectedService || "", selectedCarSize || "");
    }
  }, []);

  const servicePrices = {
    "ล้างภายใน (Interior Wash)": { S: 150, M: 150, L: 150, XL: 150 },
    "ล้างภายนอก (Exterior Wash)": { S: 100, M: 100, L: 100, XL: 100 },
    "เคลือบเงา (Polishing)": { S: 150, M: 150, L: 150, XL: 150 },
    "ขัดสี (Color Correction)": { S: 220, M: 250, L: 280, XL: 300 },
    "ลบลอย (Scratch Removal)": { S: 2500, M: 3000, L: 3500, XL: 4000 },
    "ซักเบาะพรม (Seat and Carpet Cleaning)": {
      S: 100,
      M: 100,
      L: 100,
      XL: 100,
    },
    "เคลือบแก้ว (Glass Coating)": { S: 8500, M: 9500, L: 12500, XL: 14500 },
    "เคลือบเซรามิก (Ceramic Coating)": {
      S: 8500,
      M: 9500,
      L: 12500,
      XL: 14500,
    },
    "ล้างห้องเครื่อง (Engine Bay Cleaning)": {
      S: 500,
      M: 500,
      L: 500,
      XL: 500,
    },
    "ติดฟิล์มกรองแสง (Tinting Film)": { S: 1500, M: 2500, L: 3500, XL: 4500 },
  };

  const calculateTotalPrice = (serviceType, carSize) => {
    if (servicePrices[serviceType] && servicePrices[serviceType][carSize]) {
      setTotalPrice(servicePrices[serviceType][carSize]);
    } else {
      setTotalPrice(0);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "serviceType" || name === "carSize") {
      calculateTotalPrice(
        name === "serviceType" ? value : formData.serviceType,
        name === "carSize" ? value : formData.carSize,
      );
    }
  };

  const fieldNames = {
    firstname: "ชื่อ",
    lastname: "นามสกุล",
    phone: "เบอร์โทรศัพท์",
    date: "วันที่",
    time: "เวลา",
    licensePlate: "ทะเบียนรถ",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "firstname",
      "lastname",
      "phone",
      "date",
      "time",
      "licensePlate",
    ];
    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      const thaiFields = emptyFields.map((field) => fieldNames[field]);

      Swal.fire({
        icon: "warning",
        title: "ข้อมูลไม่ครบ",
        html: `กรุณากรอกข้อมูลต่อไปนี้<br><br><b>${thaiFields.join(", ")}</b>`,
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#ff9800",
      });

      return;
    }

    // ตรวจสอบเบอร์โทรศัพท์ แบบไทย
    if (!/^0\d{9}$/.test(formData.phone)) {
      Swal.fire({
        icon: "warning",
        title: "เบอร์โทรศัพท์ไม่ถูกต้อง",
        text: "กรุณากรอกเบอร์โทรศัพท์ 10 หลัก",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#ff9800",
      });
      return;
    }

    const editBooking = JSON.parse(localStorage.getItem("editBooking"));

    const newBooking = {
      ...formData,
      totalPrice,
      status: "Ongoing",
      id: editBooking?.id || Date.now(),
    };

    const currentBooking = JSON.parse(localStorage.getItem("currentBooking"));
    const returnBooking = JSON.parse(localStorage.getItem("returnBooking"));

    if (editBooking) {
      const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

      const bookingIndex = bookings.findIndex(
        (booking) => booking.id === editBooking.id,
      );

      if (bookingIndex !== -1) {
        bookings[bookingIndex] = {
          ...newBooking,
          id: editBooking.id,
          confirmed: editBooking.confirmed,
          depositPaid: editBooking.depositPaid,
          status: editBooking.status,
        };
      }

      localStorage.setItem("bookings", JSON.stringify(bookings));
      localStorage.removeItem("editBooking");
    } else {
      newBooking.id = Date.now();
      localStorage.setItem("currentBooking", JSON.stringify(newBooking));
    }

    Swal.fire({
      icon: "success",
      title: "จองคิวสำเร็จ",
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#ff9800",
    }).then(() => {
      if (editBooking) {
        navigate("/dashboard");
      } else {
        navigate("/deposit");
      }
    });
  };

  return (
    <div className="booking-page">
      <div className="booking-form">
        <h1>จองบริการ</h1>
        <form onSubmit={handleSubmit}>
          <label>ชื่อ:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />

          <label>นามสกุล:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />

          <label>เบอร์โทรศัพท์:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            maxLength={10}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ""); // รับเฉพาะตัวเลข
              setFormData((prev) => ({
                ...prev,
                phone: value,
              }));
            }}
          />

          <label>ประเภทบริการ:</label>
          <input
            type="text"
            name="serviceType"
            value={formData.serviceType}
            readOnly
          />

          <label>ขนาดรถ:</label>
          <input type="text" name="carSize" value={formData.carSize} readOnly />

          <label>วันที่ & เวลา:</label>

          <div className="datetime-group">
            <div className="datepicker-wrapper">
              <DatePicker
                selected={formData.date ? new Date(formData.date) : null}
                onChange={(date) =>
                  setFormData((prev) => ({
                    ...prev,
                    date: date ? date.toISOString().split("T")[0] : "",
                  }))
                }
                minDate={new Date()}
                dateFormat="yyyy/MM/dd"
                placeholderText="ปี/เดือน/วัน"
                className="react-datepicker-input"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                onKeyDown={(e) => e.preventDefault()}
              />
              <FaCalendarAlt className="calendar-icon" />
            </div>

            <Select
              className="time-select"
              classNamePrefix="react-select"
              name="time"
              options={timeOptions}
              isSearchable={false}
              value={
                formData.time
                  ? { value: formData.time, label: formData.time }
                  : null
              }
              onChange={(selectedOption) =>
                setFormData((prev) => ({
                  ...prev,
                  time: selectedOption ? selectedOption.value : "",
                }))
              }
              placeholder="เลือกเวลา"
            />
          </div>

          <label>ทะเบียนรถ:</label>
          <input
            type="text"
            name="licensePlate"
            value={formData.licensePlate}
            onChange={handleChange}
          />

          <div className="total-price">
            <strong>ราคาทั้งหมด:</strong> {totalPrice} บาท
          </div>

          <button type="submit">ชำระค่ามัดจำ</button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
