import React from "react";
import flexLogo from "./../img/flex.png";

function Header() {
  return (
    <React.Fragment>
      <h1>Coffee Supply<img class="scale-up-left" src={flexLogo} alt="flex logo" /></h1>
      <hr />
    </React.Fragment>
  );
}

export default Header;