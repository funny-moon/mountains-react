import React from "react";
import { headerNav } from "../datas/data";

const Header = () => {
  return (
    <header id="header">
      <div class="header_inner">
        <div class="header_logo">
          <h1>
            <a href="#">
              Mountains <em>react</em>
            </a>
          </h1>
        </div>
        <div class="header_nav">
          <ul>
            {headerNav.map((nav) => (
              <li>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div id="headerToggle" class="header_nav_mobile">
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
