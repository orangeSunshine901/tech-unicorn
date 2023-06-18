import React from "react";
import SearchParams from "./componets/SearchParams";
import Header from "./componets/Header";
import SeachBar from "./componets/SearchBar";
import Hero from "./componets/Hero";
import Newsletter from "./componets/Newsletter";
import Footer from "./componets/Footer";

export default function Shop() {
  return (
    <>
      <Header />
      <SeachBar />
      <Hero text={"Home Shopping, Your Choice!"} />
      <div className="about-page">
        <SearchParams />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
