import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <div className="main-header">
        <div className="header-text">
          <div className="text">
            <p className="text-home">Home</p>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              {" "}
              <p className="text-courses">Courses</p>{" "}
            </NavLink>
            <p className="text-about">About</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
