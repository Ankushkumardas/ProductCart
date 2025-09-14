// import React from 'react'

import { useEffect, useState } from "react";
import { useFilter } from "../FilterContext";
import axios from "axios";

const MainContext = () => {
  const {
    selectedcategory,
    searchQuery,
    maxprice,
    minprice,
    keyword,
  } = useFilter();

  type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    thumbnail: string;
    rating: number;
    availabilityStatus?: string;
  };

  const [products, setproducts] = useState<Product[]>([]);
  const [filter, setfilter] = useState("all");
  const [currentpage, setcurrentpage] = useState(1);
  const [dropdownopen, setdropdownopen] = useState(false);
  const itemsperpage = 20;

  
  const getfilteredProducts = () => {
    let filteredproducts = products;
    if (selectedcategory) {
      filteredproducts = filteredproducts.filter(
        (data) => data.category === selectedcategory
      );
    }
    if (minprice !== undefined) {
      filteredproducts = filteredproducts.filter(
        (data) => data.price >= minprice
      );
    }
    if (maxprice !== undefined) {
      filteredproducts = filteredproducts.filter(
        (data) => data.price <= maxprice
      );
    }
    if (searchQuery) {
      filteredproducts = filteredproducts.filter((data) =>
        data.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
    }
    if (filter === "cheap") {
      filteredproducts = filteredproducts
        .slice()
        .sort((a, b) => a.price - b.price);
    }
    if (filter === "expensive") {
      filteredproducts = filteredproducts
        .slice()
        .sort((a, b) => b.price - a.price);
    }
  if (filter === "popular") {
    filteredproducts = filteredproducts
      .slice()
      .sort((a, b) => b.rating - a.rating);
  }
    console.log(filteredproducts)
    return filteredproducts;

  };
  
  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${itemsperpage}&skip=${(currentpage - 1) * itemsperpage}`;
    if (keyword) {
      url = `https://dummyjson.com/products/search?q=${keyword}`;
    }
    axios
      .get(url)
      .then((res) => {
        setproducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [keyword, currentpage]);

  const filteredproducts = getfilteredProducts();

  return (
    <div className=" px-2 ml-60  ">
      <div>
        <div className=" flex flex-col justify-between items-center">
          <div className=" relative mb-3">
            <button
              onClick={() => setdropdownopen((prev) => !prev)}
              className=" cursor-pointer"
            >
              |||
              {filter === "all"
                ? "Filter"
                : filter.charAt(0).toLocaleUpperCase() + filter.slice(1)}
            </button>
            {dropdownopen && (
              <div className=" absolute rounded-md mt-2 ">
                <button
                  onClick={() => {
                    setfilter("cheap");
                    setdropdownopen(false);
                  }}
                >
                  Cheap
                </button>
                <button
                  onClick={() => {
                    setfilter("expensive");
                    setdropdownopen(false);
                  }}
                >
                  Expensive
                </button>
                <button
                  onClick={() => {
                    setfilter("popular");
                    setdropdownopen(false);
                  }}
                >
                  Popular
                </button>
              </div>
            )}
          </div>
        </div>

        <div className=" flex flex-wrap gap-4">
          {filteredproducts.map((data,i)=>(
            <div key={i} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-150 rounded p-2 mb-2 flex items-center gap-3 w-60 overflow-hidden">
              <img src={data.thumbnail} alt={data.title} className="w-26 h-auto object-cover rounded" />
              <div>
              <p className="">{data.title}</p>
              <p className="text-sm text-gray-600">${data.price}</p>
              <p className={`text-xs text-green-500 font-semibold text-center  px-2 py-1 rounded-xl bg-green-100 w-18`}>{data.availabilityStatus}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Pagination controls can be added here if needed */}
      <div className="fixed bottom-10 left-0 w-full flex justify-center items-center">
          <button
        disabled={currentpage === 1}
        onClick={() => setcurrentpage(currentpage - 1)}
        className="px-2 py-1 mx-1 bg-gray-200 rounded "
          >
        Previous
          </button>
          <span className="mx-2">Page {currentpage}</span>
          <button
        disabled={filteredproducts.length < itemsperpage}
        onClick={() => setcurrentpage(currentpage + 1)}
        className="px-2 py-1 mx-1 bg-gray-200 rounded "
          >
        Next
          </button>
      </div>
    </div>
  );
};

export default MainContext;
