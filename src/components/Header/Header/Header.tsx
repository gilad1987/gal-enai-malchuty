import React from "react";
import { HeaderStyled, MenuStyled, LogoStyled } from "./styled";

const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled>
        <img src="/svgs/logo.svg" alt='logo' style={{maxWidth:168}}/>
      </LogoStyled>
      <MenuStyled>
        <ul>
          <li>ראשי</li>
          <li>חיפוש מתקדם</li>
          <li>עיון</li>
          <li>צור קשר</li>
        </ul>
      </MenuStyled>
    </HeaderStyled>
  );
};

export default Header;
