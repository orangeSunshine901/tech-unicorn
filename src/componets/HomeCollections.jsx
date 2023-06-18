import React from "react";
import Card from "./Card";
import Button from "./Button";

export default function HomeCollection() {
  return (
    <div>
      <h2>Our Premium Collection</h2>
      <div className="collection-links">
        <a>All Products</a>
        <a>Coats & Jackets</a>
        <a>Dressed</a>
        <a>Playsuit</a>
        <a>Short</a>
        <a>Skirt</a>
        <a>T-Shirt</a>
      </div>
      <div className="collection-cards">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <Button text="Find out More"></Button>
    </div>
  );
}
