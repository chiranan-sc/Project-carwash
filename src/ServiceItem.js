import React from 'react'
import './ServiceItem.css';

/*จะรับข้อมูล services ผ่าน props */
 function ServiceItem({ services }) {
  return (

    /*map ใช้วนลูป services*/
    <div>
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <img src={service.image} alt={service.name} className="service-image" />
          <h2>{service.name}</h2>
          <p>{service.description}</p>
          <p>ราคา:</p>
          <ul>
            {Object.entries(service.prices).map(([size, price]) => (
              <li key={size}>{size}: {price} บาท</li>
            ))}
          </ul>
        </div>
      ))}
    </div>


  )
}

export default ServiceItem
