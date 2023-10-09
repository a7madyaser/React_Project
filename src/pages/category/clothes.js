import React, { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import Header from "../../components/home/Header/Header";
import Footer from "../../components/home/Footer/Footer";
import HeaderBottom from "../../components/home/Header/HeaderBottom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/orebiSlice";


const Clothes = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Use axios to fetch data from your API
    axios.get("http://localhost/React_Project/php-pages/categorie/selectclothes.php")
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
  <Breadcrumbs title="Clothes" />
  <div className="w-full h-full flex pb-20 gap-10">
    <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
      <ShopSideNav />
    </div>
    <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-wrap gap-10">
      {/* Added flex-wrap here */}
        {items.map((item, index) => (
          <div key={index} className="card" style={{ width: "18rem", height: "100px",marginBottom:"30%" }}>
            <img src={'/'+item.photo} className="card-img-top" alt="Card Image" style={{width:"100%",height:"200px"}}/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.details}</p>
              <p className="card-text">{item.price}</p>
              <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          _id: item.id,
                          name: item.name,
                          quantity: 1,
                          image: item.img,
                          price: item.price,
                        })
                      )
                    }
                    className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
                  >
                    Add to Cart
                  </button>
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

export default Clothes;
