import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(""); // สำหรับเก็บข้อความแสดงข้อผิดพลาด

  const handleSubmit = (e) => {
    e.preventDefault();

    // เก็บข้อมูลใน localStorage
    const userData = { username, password };
    localStorage.setItem("user", JSON.stringify(userData));

    // ตรวจสอบบทบาทของผู้ใช้
    if (username === "admin") {
      if (password === "admin123") {
        // ถ้าเป็น admin และรหัสผ่านถูกต้อง ให้ย้ายไปที่หน้า dashboard
        navigate("/dashboard");
      } else {
        // ถ้ารหัสผ่านไม่ถูกต้อง กลับไปที่หน้า Home พร้อมแจ้งเตือน
        setError("รหัสผ่านไม่ถูกต้อง");
        navigate("/");
      }
    } else {
      // ถ้า username ไม่ใช่ admin สามารถจองคิวได้ในฐานะลูกค้า
      navigate("/"); // หรือเปลี่ยนไปยังหน้าอื่นที่ต้องการ
    }
  };

  return (
    <div className="loginform">
      <form className="formlogininfo" onSubmit={handleSubmit}>
        <h1>เข้าสู่ระบบ</h1>

        <div className="usernameform">
          <label htmlFor="username">ชื่อผู้ใช้งาน:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="passwordform">
          <label htmlFor="password">รหัสผ่าน:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="error">{error}</div>}

        <button className="loginsubmit" type="submit">
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
};

export default Login;
