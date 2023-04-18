import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.productData);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(null);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo && userInfo.name) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="bg-[#fafafa] py-6 px-4 w-1/3">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-500 pb-6">
            <h2 className="text-2xl font-medium">Cart Total</h2>
            <p className="flex items-center gap-4 text-base">
              Total
              <span className="font-titleFont font-bold text-lg">
                ₹ {totalAmt}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">₹ {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            proceed to checkout
          </button>
        </div>
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};

export default Cart;
