import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import MultiRangeSlider from "multi-range-slider-react";
import "../styles/multirangeslider.css";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function SearchParams() {
  const [productsCollection, setProductsCollection] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  // const [price, setPrice] = useState("");
  const [posts, setPosts] = useState(8);
  const [sort, setSort] = useState("asc");
  const [error, setError] = useState(false);
  const [minValue, _] = useState(9.99);
  const [maxValue, setMaxValue] = useState(1000);
  const [priceFilter, setPriceFilter] = useState(false);

  useEffect(() => {
    requestProducts();
  }, [sort, posts, category]);

  const requestProducts = async () => {
    if (category != "") {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );

        const json = await res.json();

        setProductsCollection(json);
        setError(false);
      } catch (err) {
        setError(true);
      }
    } else {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products?limit=${posts}&sort=${sort}`
        );

        const json = await res.json();

        setProductsCollection(json);
        setCategory("");
        setError(false);
      } catch (err) {
        setError(true);
      }
    }
  };

  // const handleInput = (e) => {
  //   setMaxValue(e.maxValue);
  // };

  return (
    <div className="search-param-container">
      <div className="side-bar">
        <div className="filter-search">
          <svg
            width="15"
            height="15"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="search-icon"
          >
            <path
              d="M20.707 19.293L17.025 15.611C18.4651 13.8095 19.1607 11.5249 18.9688 9.22654C18.777 6.92817 17.7123 4.79051 15.9935 3.25267C14.2746 1.71483 12.0321 0.893565 9.72666 0.957581C7.42118 1.0216 5.22773 1.96603 3.59688 3.59688C1.96603 5.22773 1.0216 7.42118 0.957581 9.72666C0.893565 12.0321 1.71483 14.2746 3.25267 15.9935C4.79051 17.7123 6.92817 18.777 9.22654 18.9688C11.5249 19.1607 13.8095 18.4651 15.611 17.025L19.293 20.707L20.707 19.293ZM10 17C8.61557 17 7.26219 16.5895 6.11104 15.8203C4.9599 15.0512 4.06269 13.9579 3.53288 12.6788C3.00307 11.3997 2.86444 9.99227 3.13454 8.6344C3.40464 7.27654 4.07132 6.02926 5.05029 5.05029C6.02926 4.07132 7.27654 3.40464 8.6344 3.13454C9.99227 2.86444 11.3997 3.00307 12.6788 3.53288C13.9579 4.06269 15.0512 4.9599 15.8203 6.11104C16.5895 7.26219 17 8.61557 17 10C16.9979 11.8559 16.2597 13.6351 14.9474 14.9474C13.6351 16.2597 11.8559 16.9979 10 17Z"
              fill="#9A9AB0"
            />
          </svg>
          {/* Only works with max price currently */}
          <input
            onChange={(e) => {
              setTitle(e.target.value);
              setCategory("");
              setPriceFilter(false);
              setMaxValue(1000);
            }}
            id="products"
            value={title}
            placeholder="Search products"
          ></input>
        </div>
        <div>
          <div className="sort-section">
            <h5>Price</h5>
            <button
              className="sort-button"
              onClick={() => (sort == "asc" ? setSort("desc") : setSort("asc"))}
            >
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0V6.469L6 11.469V18.618L12 15.618V11.469L18 6.469V0H0ZM16 2V4H2V2H16ZM10 10.531V14.382L8 15.382V10.531L2.562 6H15.438L10 10.531Z"
                  fill="#11142D"
                />
              </svg>
            </button>
          </div>
          <MultiRangeSlider
            min={0}
            max={1000}
            step={20}
            maxValue={maxValue}
            onInput={(e) => setMaxValue(e.maxValue)}
            onChange={() => setPriceFilter(true)}
          />
        </div>
        <div className="price-range">
          <p>Range</p>
          <div>
            <p>
              ${minValue} - ${maxValue}
            </p>
          </div>
        </div>
        <div className="product-categories">
          <h5>Product Categories</h5>
          <ul>
            <li onClick={() => setCategory("")}>
              <p>All Products</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.86182 3.13798L9.72382 7.99998L4.86182 12.862L5.80448 13.8046L11.6091 7.99998L5.80448 2.19531L4.86182 3.13798Z"
                  fill="black"
                />
              </svg>
            </li>
            <li onClick={() => setCategory("men's clothing")}>
              <p>Men's Clothing</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.86182 3.13798L9.72382 7.99998L4.86182 12.862L5.80448 13.8046L11.6091 7.99998L5.80448 2.19531L4.86182 3.13798Z"
                  fill="black"
                />
              </svg>
            </li>

            <li onClick={() => setCategory("women's clothing")}>
              <p>Women's Clothing</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.86182 3.13798L9.72382 7.99998L4.86182 12.862L5.80448 13.8046L11.6091 7.99998L5.80448 2.19531L4.86182 3.13798Z"
                  fill="black"
                />
              </svg>
            </li>
            <li onClick={() => setCategory("jewelery")}>
              <p>Jewelery</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.86182 3.13798L9.72382 7.99998L4.86182 12.862L5.80448 13.8046L11.6091 7.99998L5.80448 2.19531L4.86182 3.13798Z"
                  fill="black"
                />
              </svg>
            </li>
            <li onClick={() => setCategory("electronics")}>
              <p>Electronics</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.86182 3.13798L9.72382 7.99998L4.86182 12.862L5.80448 13.8046L11.6091 7.99998L5.80448 2.19531L4.86182 3.13798Z"
                  fill="black"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div className="featured-products">
          <h5>Featured Product</h5>
          <ul>
            {productsCollection.slice(1, 7).map((product) => (
              <li>
                <div className="featured-products-img">
                  <img src={product.image}></img>
                </div>
                <div>
                  <h6>{product.title}</h6>
                  <p>${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="products-collection">
        {error && <h2>There's an error getting the product catalog</h2>}
        {priceFilter == true
          ? productsCollection
              .filter((product) => {
                return product.price <= maxValue;
              })
              .map((product) => (
                <ProductCard
                  key={product.id}
                  category={product.category}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              ))
          : productsCollection
              .filter((product) => {
                return title.toLowerCase() === ""
                  ? product
                  : product.title.toLowerCase().includes(title.toLowerCase());
              })
              .map((product) => (
                <ProductCard
                  key={product.id}
                  category={product.category}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              ))}
        {productsCollection.length != 0 ? (
          <div className="card-button">
            <button disabled={posts == 21} onClick={() => setPosts(posts + 13)}>
              See More
            </button>
          </div>
        ) : (
          <div>
            <ProductCardSkeleton />
          </div>
        )}
      </div>
    </div>
  );
}

// const filterByTitle = () => {
//   products.filter((product) => title.toLowerCase() === "" ? product : product.title.toLowerCase().includes(title)) .map((product) => (
//       <ProductCard
//         title={product.title}
//         image={product.image}
//         category={product.category}
//         price={product.price}
//         key={product.id}
//       />
//     ));
// };
