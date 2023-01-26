/** @format */

import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar">
			<div className="navbar-container">
          <ul className="navbar-list">
            <li className="navbar-item"> <Link exact to="/main">Главная</Link></li>
				<li className="navbar-item"> <Link exact to="/">Купить </Link></li>
            <li className="navbar-item">Услуги</li>
            <li className="navbar-item">О компании</li>
            <li className="navbar-item">контакты</li>
          </ul>
			 </div>
        </div>
      </>
    );
  }
}
export default Navbar;
