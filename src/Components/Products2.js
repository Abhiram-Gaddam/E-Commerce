import React, { useState } from "react";

const ProductCard = ({ product, onQuickView }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickView = () => {
    setIsModalOpen(true);
    onQuickView(product);  // Pass the product data to the modal
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={`product-card ${isModalOpen ? "active" : ""}`}>
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        <div className="product-overlay">
          <div className="overlay-content">
            <button onClick={handleQuickView}>Quick View</button>
          </div>
        </div>
      </div>

      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price}</p>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={closeModal}>X</button>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <div className="quantity-control">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
