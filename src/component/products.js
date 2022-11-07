import React, { useState } from "react";
import { instance } from "../data/api";
import axios from "axios";

function Products() {
  const [item, setItem] = useState([]);
  const products = async () => {
    const getitem = await axios
      .get(
        "https://openapi.naver.com/v1/search/shop.json", // 불러올 api 주소
        {
          params: { query: "애플워치" }, // query는 필수값
          headers: {
            "X-Naver-Client-Id": "mgWQmy5kaDVH_4c_Ku3r",
            "X-Naver-Client-Secret": "Y6CF9ir5B6",
          },
        }
      )
      .then((response) => {
        console.log("response", response.data.itmes); // 영화 리스트
      });
  };
  // const products = async () => {
  //   const getitem = await instance.get("/shop").then((response) => {
  //     console.log("response", response.data); // 영화 리스트
  //   });
  //   // setItem(getitem);
  // };
  // console.log(item);

  return <div>products</div>;
}

export default Products;
