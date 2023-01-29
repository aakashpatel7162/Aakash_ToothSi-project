import React, { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=15"
      );
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="wholeproduct">
      <ul>
        {products.map((product) => (
          <div className="singleproduct">
            <img src={product.image} alt=" " />
            <li key={product.id}>{product.title}</li>

            <button className=" btn"> Buy Now</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Product;
