import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/images/404-pages.jpg";

const NotFound = () => {
  return (
    // <div className="grid place-items-center">
    <div className="w-full pt-32 flex flex-col items-center">
      <div className="text-center grid place-items-center">
        <div className="text-lg">
          <h1 className="text-3xl font-semibold text-gray-800">
                  Email: cskh@watchshop.com
          </h1>
          <span className="w-50 h-1 bg-black block my-3"></span>
          <h1 className="text-3xl font-semibold text-gray-800">
                  SDT: 0123456789
          </h1>
        </div>
      </div> 
      

      {/* <form action="/contact" method="post">
        
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form> */}
      <span className="w-50 h-1 bg-black block my-3"></span>
      <Link to={"/"}>
        <button className="text-white bg-purple-500 px-5 py-3 rounded-full">
          Trở về trang chủ
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
