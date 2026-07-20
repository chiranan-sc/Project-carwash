import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, //เก็บข้อมูลที่มีอยู่แล้ว
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ดึงข้อมูลเก่าจาก localStorage
    const existingData = JSON.parse(localStorage.getItem('userData')) || [];

    // เพิ่มข้อมูลใหม่ลงใน array ของข้อมูลเก่า
    const updatedData = [...existingData, formData];

    // บันทึกข้อมูลอัปเดตลงใน localStorage
    localStorage.setItem('userData', JSON.stringify(updatedData));
    
    // Update user ใน App.js
    //setUser(formData);

    localStorage.setItem('loggedInUser', formData.username);
    alert('Sign up complete');
    // ไปหน้า Home.js
    navigate('/');
  };

  return (
    <div className='SignForm'>
      <h1>Sign Up</h1>
      <div className='Forminfo'>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}>
          Firstname:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </label >
        <br />
        <label style={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}>
          Lastname:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </label>
        <br />
        <label style={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label style={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label style={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label style={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}>
          Phone number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <br />
        
        <button className='buttonsign' type="submit" >Submit</button>
       
        
      </form>
      </div>
    </div>
  );
}

export default Signup; 