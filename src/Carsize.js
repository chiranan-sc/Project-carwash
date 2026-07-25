import React from "react";
import { useNavigate } from "react-router-dom";
import "./Carsize.css";

function Carsize() {
  const navigate = useNavigate();

  const handleCarSizeSelection = (size) => {
    localStorage.setItem("selectedCarSize", size);
    localStorage.removeItem("editBooking");
    localStorage.removeItem("currentBooking");
    navigate("/booking");
  };

  const carSizes = [
    {
      size: "S",
      name: "Small",
      image:
        "https://img.pcauto.com/model/images/touPic/th/Nissan-March_1319.png",
      cars: [
        "Honda Fit",
        "Toyota Yaris",
        "Mazda 2",
        "Kia Rio",
        "Ford Fiesta",
        "Chevrolet Spark",
        "Nissan March",
      ],
    },
    {
      size: "M",
      name: "Medium",
      image:
        "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/Honda/CivicTypeR/11/5Hatchback%20TypeR_25/honda_25civichatchtyperhb11euk_lowaggressive.png",
      cars: [
        "Honda Civic",
        "Toyota Corolla",
        "Mazda 3",
        "Hyundai Elantra",
        "Volkswagen Golf",
        "Nissan Sentra",
        "Ford Focus",
      ],
    },
    {
      size: "L",
      name: "Large",
      image: "https://cf.autodeft2.pw/uploads/images/2019/Mazda/001_o.jpg",
      cars: [
        "Honda Accord",
        "Toyota Camry",
        "Mazda 6",
        "Hyundai Sonata",
        "Ford Fusion",
        "Nissan Altima",
        "Kia Optima",
      ],
    },
    {
      size: "XL",
      name: "Extra Large",
      image:
        "https://platform.cstatic-images.com/in/v2/stock_photos/e321f91f-c3df-48b2-9bb7-64c074164f6f/1976a626-38e3-44ca-9515-c61501b753c5.png",
      cars: [
        "Toyota Avalon",
        "Chrysler 300",
        "Ford Explorer",
        "Chevrolet Traverse",
        "Nissan Murano",
        "Hyundai Santa Fe",
        "Honda Passport",
      ],
    },
  ];

  return (
    <div className="carsize-page">
      <div className="Carsize">
        <h1>ขนาดรถ</h1>

        {carSizes.map((car) => (
          <div key={car.size} className="size-section">
            <img
              className="piccarsize"
              src={car.image}
              alt={`Size ${car.size}`}
            />

            <div className="size-content">
              <h2>
                Size: {car.size} ({car.name})
              </h2>

              <p>ตัวอย่างรถ:</p>

              <ul>
                {car.cars.map((carName, index) => (
                  <li key={index}>{carName}</li>
                ))}
              </ul>

              <button
                className="carbutton"
                onClick={() => handleCarSizeSelection(car.size)}
              >
                เลือกขนาดรถ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carsize;
