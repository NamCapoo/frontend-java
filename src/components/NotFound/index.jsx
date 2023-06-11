import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/images/404-pages.jpg";

const NotFound = () => {
  return (
    <div className="grid place-items-center">
      <h1 className="text-xl mb-5"></h1>
      <form action="/contact" method="post">
        
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
      </form>
      <Link to={"/"}>
        <button className="text-white bg-purple-500 px-5 py-3 rounded-full">
          Trở về trang chủ
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
