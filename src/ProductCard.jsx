import Button from "./Button";

const ProductCard = ({ title, price, image }) => {
  const handleClick = () => {
    console.log(`${title} clicked`);
  };

  return (
    <div className="border rounded-lg bg-purple-100 p-4 w-52 shadow">
      <img src={image} alt={title} className="w-full rounded" />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-gray-600">{price} EGP</p>

      <Button onClick={handleClick}>Buy</Button>
    </div>
  );
};

export default ProductCard;