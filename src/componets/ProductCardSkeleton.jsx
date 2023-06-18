import React from "react";

export default function ProductCardSkeleton({ title, image, category, price }) {
  return (
    <div className="product-card-skeleton-container">
      <div className="product-card-skeleton"></div>
      <div className="product-card-skeleton"></div>
      <div className="product-card-skeleton"></div>
      <div className="product-card-skeleton"></div>
    </div>
  );
}
