import React from "react";
import { Link } from "react-router-dom";

export function NavBar(props) {
  return (
    <div className="container-nav">
      <section className="nav-bar">
        <Link className="logo" to={"/"}>
          Mr.BitCoin
        </Link>
        <div>
          <Link className="nav-logo" to={"/contacts"}>
            <img
              className="statistic-logo"
              src="https://res.cloudinary.com/artyompogosov/image/upload/v1576857239/vruhrpzwbyn3wceprvqq.png"
              alt="contacts"
            />
          </Link>
          <Link className="nav-logo" to={"/Statistic"}>
            {" "}
            <img
              className="statistic-logo"
              src="https://res.cloudinary.com/artyompogosov/image/upload/v1576857047/kjij1gmlwp7bva6foimc.png"
              alt="Chart"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
