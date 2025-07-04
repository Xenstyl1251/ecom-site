import { createFileRoute } from "@tanstack/react-router";
import product from "../assets/adidas-f50.jpg";
import { useState } from "react";

export const Route = createFileRoute("/product")({
  component: Product,
});

function Product() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="product-container">
      <img src={product} style={{ width: "100%" }}></img>

      <div className="product-name">Adidas F50 Elite Laceless FG</div>

      <div className="product-price">₱3500</div>

      <div>10 stocks available</div>

      <div className="quantity-container">
        <button onClick={decrement}>-</button>
        <input value={count} />
        <button onClick={increment}>+</button>
      </div>

      <div className="btn-container">
        <button className="add-cart">Add to Cart</button>
        <button className="buy-now">Buy Now</button>
      </div>

      <div className="product-description">
        F50 Speed and Lightweight Speed: The adidas F50 series in built for
        maximum speed and agility whilst offering a locked-in and comfortable
        feel. Everything about the new generation boot is built for explosive
        acceleration and controlling the ball while travelling at speed. The
        boots will be available in laced and laceless will be worn on pitch for
        the first-time by adidas speed players such as Lionel Messi, Rafael
        Leao, Son Heung-min, Lamine Yamal and Florian Wirtz. The iconic adidas
        F50 returns to The World's Largest Bootroom at YPSoccer for the first
        time in 9 years. Re-designed to support the needs of the modern-day
        player.
      </div>
    </div>
  );
}
