import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import Slider from "../components/Slider";

function Home() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://strapi-store-server.onrender.com/api/products?featured=true"
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-[80%] mx-auto py-10 text-[#394E6A] dark:text-white container">
        <div className="lg:grid grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-7xl font-bold  my-5">
              We’re changing the way people shop.
            </h1>
            <p className="text-xl my-7 ">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
              Qui irure qui lorem cupidatat commodo.
            </p>
            <button
              className="bg-blue-500 dark:bg-pink-400 dark:text-black hover:bg-blue-700 transition duration-500 text-white p-3 rounded-lg"
              onClick={() => navigate("/products")}
            >
              OUR PRODUCTS
            </button>
          </div>
          <div className="p-11 hidden lg:inline ">
            <Slider />
          </div>
        </div>
        <h1 className="text-2xl font-bold">Featured Products</h1>
        <hr className="my-5" />
        <div className="grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5 p-">
          {data.map((data) => {
            return (
              <div
                key={data.id}
                onClick={() => navigate("/single", { state: { data: data } })}
                className="text-center hover:shadow-2xl dark:shadow-[rgb(0_0_0_/_.25)] cursor-pointer transition duration-300 mx-auto w-full shadow-[#cfc5c5f8] shadow-lg p-5 rounded-lg "
              >
                <img
                  src={data.attributes.image}
                  className="rounded-lg h-[200px] md:h-[300px] w-full"
                  alt=""
                />
                <p>
                  {data.attributes.title[0].toUpperCase() +
                    data.attributes.title.slice(1)}
                </p>
                <span className="dark:text-[#9D8FF9]">
                  ${data.attributes.price / 100}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
