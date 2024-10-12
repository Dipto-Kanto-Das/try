import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/sajek valley.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/Jaflong.jpg";
import Img5 from "../../assets/places/sonargaon.jpeg";
import Img6 from "../../assets/places/saint martin.jpeg";

const PlacesData = [
  {
    img: Img1,
    title: "Kuakata",
    location: "Bangladesh",
    description: 
    "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price:350,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Sajek valley",
    location: "Bangladesh",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 800,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Coxsbazar",
    location: "Bangladesh",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 1220,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Jaflong",
    location: "Bangladesh",
    description: 
    "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Sonargaon",
    location: "Bangladesh",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 610,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "saint martin",
    location: "Bangladesh",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 670,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-4 pl-4 text-3xl font-bold ">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
