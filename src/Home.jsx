import React from "react";
import Header from "./componets/Header.jsx";
import SearchBar from "./componets/SearchBar.jsx";
import Hero from "./componets/Hero.jsx";
import HomeCollection from "./componets/HomeCollections.jsx";
import TopItems from "./componets/TopItems.jsx";
import BrandSection from "./componets/BrandSection.jsx";
import Footer from "./componets/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Hero />
      <HomeCollection />
      <TopItems />
      <BrandSection />
      <Footer />
    </div>
  );
}
