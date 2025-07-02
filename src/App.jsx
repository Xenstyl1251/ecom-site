import product from "./assets/adidas-f50.jpg";

function App() {
  
  return (
    <div className="product-container">
      <img src={product} style={{ width: "100%" }}></img>
      <div>₱3500</div>
      <div>10 stocks</div>
      <div>
        <div>quantity</div>
        <input type="number" value={1}></input>
      </div>
      <div className="btn-container">
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>

      <div>
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

export default App;
