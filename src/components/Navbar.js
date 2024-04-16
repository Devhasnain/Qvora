import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="item">
        <button className="burger-menu">
          <svg
            width="24"
            height="10"
            viewBox="0 0 24 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1L24 1" stroke="#121212" strokeWidth="1.99564" />
            <path d="M0 9L24 9" stroke="#121212" strokeWidth="1.99564" />
          </svg>
        </button>

        <div className="logo">
          <Image
            alt=""
            height={10}
            width={10}
            src="/assets/logos/primary-logo.png"
          />
        </div>
      </div>
      <div className="item">
        <div className="ad">
          Facial Assessment
          <div className="badge">FREE</div>
          <div className="icon">
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 1L18 7L12 13" stroke="#233137" strokeWidth="1.2" />
              <path
                d="M18 6.99805L0 6.99805"
                stroke="#233137"
                strokeWidth="1.2"
              />
            </svg>
          </div>
        </div>

        <div className="cart">
          <svg
            width="20"
            height="26"
            viewBox="0 0 20 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66602 9.00033C1.66602 8.26395 2.26297 7.66699 2.99936 7.66699H17.6661C18.4025 7.66699 18.9995 8.26395 18.9995 9.00033V23.6671C18.9995 24.4035 18.4025 25.0004 17.6661 25.0004H2.99936C2.26297 25.0004 1.66602 24.4035 1.66602 23.6671V9.00033Z"
              stroke="#233137"
              strokeWidth="2.00001"
            />
            <path
              d="M14.9994 7.66671V5.24245V5.24245C14.9994 2.89941 13.1 1 10.757 1H9.90847C7.56543 1 5.66602 2.89941 5.66602 5.24245V5.24245V7.66671"
              stroke="#233137"
              strokeWidth="2.00001"
            />
          </svg>

          <div className="counter">0</div>
        </div>
        <button className="burger-menu sm-only">
          <svg
            width="24"
            height="10"
            viewBox="0 0 24 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1L24 1" stroke="#121212" strokeWidth="1.99564" />
            <path d="M0 9L24 9" stroke="#121212" strokeWidth="1.99564" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
