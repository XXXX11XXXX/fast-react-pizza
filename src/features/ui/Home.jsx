import CreateOrder from "../order/CreateOrder";
import CreateUser from "../user/CreateUser";
function Home() {
  return (
    <div className="px-4 py-8 text-center bg-stone-100">
      <h1 className="text-xl text-stone-700 font-semibold text-center mb-8
      md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
