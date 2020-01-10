import React from "react";
import { HeaderStyled,MenuStyled } from "./styled";


const Header = () => {
  return <HeaderStyled>
    <MenuStyled>
      <ul>
        <li>
        ראשי
        </li>
        <li>
        חיפוש מתקדם
        </li>
        <li>
        עיון
        </li>
        <li>
        צור קשר
        </li>
      </ul>
    </MenuStyled>
  </HeaderStyled>;
};

export default Header;
