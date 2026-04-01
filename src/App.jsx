import ProductCard from "./ProductCard";
import laptopImg from "./assets/laptop.png";
import phoneImg from "./assets/mobile.jpeg";
import headphonesImg from "./assets/headphones.jpeg";
import mouseImg from "./assets/mouse.jpeg";
import airpodsImg from "./assets/airpods.jpeg";
import keyboardImg from "./assets/keyboard.jpeg";


function App() {const products = [
    {
      id: 1,
      title: "Laptop",
      price: 15000,
      image: laptopImg
    },
    {
      id: 2,
      title: "Keyboard",
      price: 1000,
      image: keyboardImg
    },
    {
      id: 3,
      title: "Mouse",
      price: 500,
      image: mouseImg
    },
    {
      id: 4,
      title: "Phone",
      price: 10000,
      image: phoneImg
    },
    {
      id: 5,
      title: "Headphones",
      price: 2000,
      image: headphonesImg
    },
    {
      id: 6,
      title: "Airpods",
      price: 4000,
      image: airpodsImg
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Electronic Products</h1>

      <div className="flex gap-6 flex-wrap">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App
