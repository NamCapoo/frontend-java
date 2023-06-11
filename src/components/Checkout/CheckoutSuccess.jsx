import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="w-full pt-32 flex flex-col items-center gap-3">
      <div className="svg-container">
        <svg
          className="ft-green-tick"
          xmlns="http://www.w3.org/2000/svg"
          height="100"
          width="100"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22" />
          <path
            className="tick"
            fill="none"
            stroke="#FFF"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M14 27l5.917 4.917L34 17"
          />
        </svg>
      </div>
      <h1 className="text-gray-900 text-3xl">Cảm ơn bạn đã đặt hàng</h1>
      <p className="text-gray-900 text-lg">
        Đơn hàng của bạn đã thanh toán thành công
      </p>
      <Link to={"/"}>
        <button className="bg-purple-500 py-3 px-4 rounded-full text-white">
          Quay về trang chủ
        </button>
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
