import React from "react";
//dependencies should be @mui- etc  not @material
import AppsIcon from "@mui/Apps";
import AvatarIcon from "@mui/base/Avatar";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="header-left">
          <p>About</p>
          <p>Store</p>
        </div>
        <div className="header-right">
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon />
          <AvatarIcon />
        </div>
      </div>
      <div className="body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png"
          alt="google-logo"
        />
      </div>
    </div>
  );
};
export default Home;
