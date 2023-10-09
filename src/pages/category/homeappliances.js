import React, { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import Header from "../../components/home/Header/Header";
import Footer from "../../components/home/Footer/Footer";
import HeaderBottom from "../../components/home/Header/HeaderBottom";


const Homeappliances = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Use axios to fetch data from your API
    axios.get("http://localhost/React_Project/php-pages/categorie/selecthomeappliances.php")
      .then((response) => {
        // Use setItems to update the state with the fetched data
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // Empty dependency array means this effect runs only once on component mount
console.log(items);
  return (

    <div>

      <Header/>
      <HeaderBottom />
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Homeappliances" />
      <div className="w-full h-full flex pb-20 gap-10">
          <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
          </div>
          <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
        {items.map((item, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img src={'/'+item.photo} className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.details}</p>
              <p className="card-text">{item.price}</p>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </div>
     
    </div>
    <Pagination />
    </div>
    <Footer/>

    </div>
  );
};

export default Homeappliances;
