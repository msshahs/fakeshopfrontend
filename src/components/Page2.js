import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { MdGrade } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

import "../page2.css";
const Page2 = () => {
  const [productdesc, setproductdesc] = useState({});
  const [rates, setrate] = useState({});
  const [searchparams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    apicallforproduct();
  }, []);

  const apicallforproduct = async () => {
    let p = searchparams.get("proid");
    let url = "https://fakestoreapi.com/products/" + p;
    let productinfo = await fetch(url)
      .then((res) => res.json())
      .then((data) => data);
    console.log(productinfo);
    setrate(productinfo.rating);
    setproductdesc(productinfo);
  };
  const btochat = () => {
    navigate("/fakeshopfrontend/");
  };
  return (
    <div className="fcont">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="tc">
        <IoMdArrowRoundBack
          className="bc1"
          onClick={btochat}
          size="2em"
          color="white"
          style={{ "z-Index": 100 }}
        />

        <div className="topheading">Product Description</div>
        <div className="tcleft">
          <div className="proimage">
            <img src={productdesc.image} className="pi"></img>
          </div>
        </div>
        <div className="tcright">
          <div className="contentofproduct">
            <div className="cp">
              <label className="titleofproduct">Title :</label>
              <h3 className="headingoftitle">{productdesc.title}</h3>
            </div>

            <div className="cp">
              <label className="titleofproduct">Category :</label>
              <h3 className="headingoftitle">{productdesc.category}</h3>
            </div>

            <div className="cp">
              <label className="titleofproduct">Description :</label>
              <h3 className="headingoftitle">{productdesc.description}</h3>
            </div>
            <div className="cp1">
              <label className="titleofproduct">Rating :</label>
              <div className="rate1">
                {rates.rate}
                <MdGrade />
              </div>
            </div>
            <h1 className="priofp">${productdesc.price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
