import React, { useEffect, useState } from "react";
import "../page1.css";

const Page1 = () => {
  const [pro, setpro] = useState([]);

  useEffect(() => {
    apicall();
  }, []);

  const apicall = async () => {
    let products = await fetch(" https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => data);
    setpro(products);
  };

  return (
    <div className="pg1">
      <div className="container1" style={{ marginTop: "0px" }}>
        <span data-title="Categories" className="text">
          Categories
        </span>
      </div>
      <div className="cat">
        <a href="#mens" className="catcall">
          <div className="typeof">
            <img
              src="https://image.shutterstock.com/image-vector/mens-clothing-store-badge-isolated-260nw-368624393.jpg"
              className="catone"
            ></img>
            <h3 className="catheading">Men's Clothing</h3>
          </div>
        </a>
        <a href="#jewel" className="catcall">
          <div className="typeof">
            <img
              src="https://image.shutterstock.com/image-vector/ring-icon-vector-illustration-diamond-260nw-1256473012.jpg"
              className="catone"
            ></img>
            <h3 className="catheading">Jewelery</h3>
          </div>
        </a>
        <a href="#elec" className="catcall">
          <div className="typeof">
            <img
              src="https://www.seekpng.com/png/detail/82-823179_power-electronic-applications-electrical-and-electronic-icon.png"
              className="catone"
            ></img>
            <h3 className="catheading">Electronics</h3>
          </div>
        </a>
        <a href="#womens" className="catcall">
          <div className="typeof">
            <img
              src="https://www.logomaker.com/wpstatic/uploads/2019/01/iStock-942676528.jpg"
              className="catone"
            ></img>
            <h3 className="catheading">Women's Clothing</h3>
          </div>
        </a>
      </div>

      <div className="container1">
        <span data-title="Men's_Clothing" className="text" id="mens">
          Men's_Clothing
        </span>
      </div>
      <div className="card-container">
        {pro.map((val) => {
          if (val.category == "men's clothing") {
            return (
              <div className="card">
                <div className="image-container">
                  <div className="dummy"></div>
                  <a
                    href={"fakeshopfrontend/productdetails?proid=" + val.id}
                    className="view-details"
                    id={val.id}
                  >
                    {" "}
                    <img src={val.image} className="valids" />
                  </a>
                </div>
                <div className="overview-container">
                  <div className="left">
                    <label className="productname">Product</label>
                    <h3 className="title-name">{val.title}</h3>
                    <label className="pricelabel">Price</label>
                    <h2 className="price">$ {val.price}</h2>
                  </div>
                  <div className="right">
                    <a
                      href={"fakeshopfrontend/productdetails?proid=" + val.id}
                      className="view-details"
                      id={val.id}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="container1">
        <span data-title="Jewelery" className="text" id="jewel">
          Jewelery
        </span>
      </div>
      <div className="card-container">
        {pro.map((val) => {
          if (val.category == "jewelery") {
            return (
              <div className="card">
                <div className="image-container">
                  <div className="dummy"></div>
                  <a
                    href={"fakeshopfrontend/productdetails?proid=" + val.id}
                    className="view-details"
                    id={val.id}
                  >
                    <img src={val.image} />{" "}
                  </a>
                </div>
                <div className="overview-container">
                  <div className="left">
                    <label className="productname">Product</label>
                    <h3 className="title-name">{val.title}</h3>
                    <label className="pricelabel">Price</label>
                    <h2 className="price">$ {val.price}</h2>
                  </div>
                  <div className="right">
                    <a
                      href={"fakeshopfrontend/productdetails?proid=" + val.id}
                      className="view-details"
                      id={val.id}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="container1">
        <span data-title="Electronics" className="text" id="elec">
          Electronics
        </span>
      </div>
      <div className="card-container">
        {pro.map((val) => {
          if (val.category == "electronics") {
            return (
              <div className="card">
                <div className="image-container">
                  <div className="dummy"></div>
                  <a
                    href={"fakeshopfrontend/productdetails?proid=" + val.id}
                    className="view-details"
                    id={val.id}
                  >
                    <img src={val.image} />
                  </a>
                </div>
                <div className="overview-container">
                  <div className="left">
                    <label className="productname">Product</label>
                    <h3 className="title-name">{val.title}</h3>
                    <label className="pricelabel">Price</label>
                    <h2 className="price">$ {val.price}</h2>
                  </div>
                  <div className="right">
                    <a
                      href={"fakeshopfrontend/productdetails?proid=" + val.id}
                      className="view-details"
                      id={val.id}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="container1">
        <span data-title="Women's_clothing" className="text" id="womens">
          Women's_clothing
        </span>
      </div>
      <div className="card-container">
        {pro.map((val) => {
          if (val.category == "women's clothing") {
            return (
              <div className="card">
                <div className="image-container">
                  <div className="dummy"></div>
                  <a
                    href={"fakeshopfrontend/productdetails?proid=" + val.id}
                    className="view-details"
                    id={val.id}
                  >
                    <img src={val.image} />
                  </a>
                </div>
                <div className="overview-container">
                  <div className="left">
                    <label className="productname">Product</label>
                    <h3 className="title-name">{val.title}</h3>
                    <label className="pricelabel">Price</label>
                    <h2 className="price">$ {val.price}</h2>
                  </div>
                  <div className="right">
                    <a
                      href={"fakeshopfrontend/productdetails?proid=" + val.id}
                      className="view-details"
                      id={val.id}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="container1">
        <span data-title="Features" className="text">
          Features
        </span>
      </div>
      <div className="cat">
        <div className="typeof">
          <img
            src="https://st2.depositphotos.com/1007499/5419/v/950/depositphotos_54199633-stock-illustration-free-shipping-stamp.jpg"
            className="catone a"
          ></img>
          <h3 className="catheading">Free Shipping</h3>
        </div>

        <div className="typeof ">
          <img
            src="http://bsmedia.business-standard.com/_media/bs/img/article/2017-07/07/full/1499408259-1437.jpg"
            className="catone a"
          ></img>
          <h3 className="catheading">100 days Replacement</h3>
        </div>

        <div className="typeof">
          <img
            src="https://c8.alamy.com/comp/2ABNH9H/quick-and-easy-loan-fast-money-providence-icon-vector-illustration-easy-instant-credit-loan-payment-fast-money-icon-finance-color-symbol-for-web-a-2ABNH9H.jpg"
            className="catone a"
          ></img>
          <h3 className="catheading">Easy Payments</h3>
        </div>
      </div>
    </div>
  );
};

export default Page1;
