import Navbar from "../components/Navbar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Filter, { Pagination } from "../components/Filter";
import { useNavigate } from "react-router-dom";

function Products() {
  const naviagate = useNavigate();

  const info = useSelector((state) => state.products);

  return (
    <>
      <Navbar />
      <div
        className={`container w-[80%] mx-auto py-5 ${
          !info?.data.length && "h-[100vh]"
        }`}
      >
        <Filter />

        <p className="text-[#394E6A] dark:text-white my-5">
          {info.data.length} product
        </p>
        <div className="grid mx-auto text-[#394E6A] dark:text-white md:grid-cols-2 lg:grid-cols-3 gap-5 p-">
          {info?.data.map((data) => {
            return (
              <div
                key={data.id}
                onClick={() => naviagate("/single", { state: { data: data } })}
                className="text-center hover:shadow-2xl dark:shadow-[rgb(0_0_0_/_.25)] cursor-pointer transition duration-300  mx-auto w-full shadow-[#cfc5c5f8] shadow-lg p-5 rounded-lg "
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
          {!info?.data.length && (
            <p className="text-2xl">
              Sorry, no products matched your search...
            </p>
          )}
        </div>

        <Pagination />
      </div>
    </>
  );
}

export default Products;
