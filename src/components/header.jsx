import React, { Component } from "react";
import Timer from "./timer";

export class Header extends Component {
  render() {
    return (
      <div className="bg">
        <Timer />
      </div>
    );
  }
}

export default Header;
