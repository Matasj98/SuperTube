import React from "react";
import "./Logo.style.scss";
import { useDispatch } from "react-redux";
import { resetApp } from "../../Actions/resetApp";

const Logo = () => {
  const dispatch = useDispatch();
  return (
    <div className="Logo">
      <h1 onClick={() => dispatch(resetApp())}>
        <span>Super</span>Tube
      </h1>
    </div>
  );
};

export default Logo;
