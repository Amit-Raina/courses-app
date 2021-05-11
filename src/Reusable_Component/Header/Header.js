import { Fragment } from "react";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <div className="main-header">
        <div className="header-text">
          <div className="text">
            <p className="text-home">Home</p>
            <p className="text-courses">Courses</p>
            <p className="text-about">About</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
