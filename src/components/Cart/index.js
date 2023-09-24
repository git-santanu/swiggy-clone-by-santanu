import { useDispatch, useSelector } from "react-redux";
import RestroItems from "../RestroCategoryAcordian.js/RestroItems";
import { clearCart } from "../../utils/store/slice/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispacthItem = useDispatch();
  const handleClearCart = () => {
    dispacthItem(clearCart());
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>Cart details</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            padding: "8px",
            backgroundColor: "white",
            margin: "15px",
            borderRadius: "15px",
            cursor: "pointer",
          }}
          onClick={() => handleClearCart()}
        >
         {cartItems.length > 0 ? 'Clear Cart': 'Cart is empty! please add some item'} 
        </button>
      </div>
      <div
        style={{
          margin: '15px auto',
          width: '50%'
        }}
      >
        <RestroItems itemCards={cartItems} />
      </div>
    </>
  );
};
export default Cart;
