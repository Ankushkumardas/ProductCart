// import React from 'react'

import { useEffect, useState } from "react";
import { useFilter } from "../FilterContext";

function Sidebar() {
  const {
    selectedcategory,
    searchQuery,
    maxprice,
    minprice,
    setkeyword,
    keyword,
    setmaxprice,
    setminprice,
    setsearchQuery,
    setselectedcategory,
  } = useFilter();

  const [category, setcategory] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirts",
  ]);

  const fetchdata = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log("data fetched", data.products);

      const uniqueCategories: string[] = Array.from(
        new Set(data?.products?.map((data: any) => data.category))
      );
      setcategory(uniqueCategories);
    } catch (error) {
      console.log("erro inn fetchnf adata");
    }
  };

  const handlereset = () => {
    setkeyword(""),
      setmaxprice(0),
      setminprice(0),
      setsearchQuery(""),
      setselectedcategory("");
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className=" w-60 h-screen p-2 border border-r border-slate-200 shadow-sm fixed inset-0 ">
      <p>Sidebar</p>

      <div className=" mb-4">
        <input
          type="text"
          placeholder="Search product"
          className=" shadow-sm px-2 py-1 rounded-md border border-slate-200 focus:ring-blue-500 outline-0  "
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />
      </div>

      <div>Prices -</div>
      <div className=" flex gap-2 ">
        <input
          type="text"
          placeholder="min"
          className=" shadow-sm px-2 py-1 rounded-md border border-slate-200 focus:ring-blue-500 outline-0 w-20"
          value={minprice}
          onChange={(e) => setminprice(Number(e.target.value || undefined))}
        />
        <input
          type="text"
          placeholder="max"
          className=" shadow-sm px-2 py-1 rounded-md border border-slate-200 focus:ring-blue-500 outline-0 w-20 "
          value={maxprice}
          onChange={(e) => setmaxprice(Number(e.target.value || undefined))}
        />
      </div>

      <div className=" mt-4 ">
        <p>Categories -</p>
        {category.map((data, i) => (
          <div key={i} className=" ">
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                value={data}
                name="category"
                onChange={() =>
                  setselectedcategory(selectedcategory === data ? "" : data)
                }
                checked={selectedcategory === data}
              />
              {data}
            </label>
          </div>
        ))}
      </div>

      <div className=" mt-4 ">
        <p>Keywords -</p>
        {keywords.map((data, i) => (
          <div key={i} className=" flex gap-2">
            <label className="  w-20  px-2 flex-col py-1 shadow-sm rounded-md">
              <button
                value={data}
                name="category"
                onClick={() => setkeyword(data)}
              />
              {data}
            </label>
          </div>
        ))}
      </div>

      <button
        className=" mt-3 px-2 py-1 shadow-sm rounded-md border border-red-400"
        onClick={handlereset}
      >
        Reset filters
      </button>
    </div>
  );
}

export default Sidebar;
