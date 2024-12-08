import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="sticky bottom-0 w-full bg-stone-800 p-4 
    text-sm uppercase text-stone-200 
    flex items-center justify-between 
    px-4 py-4
    sm:px-6 
    md:text-base">
      <p className="text-stone-300 font-semibold space-x-5
      sm:space-x-8">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
