import React from "react";
import { CategoryMenuItemStyled, IconImgStyled } from "./styled";

const CategoryMenuItem = ({ background, iconPath, label, counter }: any) => (
  <CategoryMenuItemStyled backgroundImage={background}>
    <IconImgStyled src={iconPath} alt="alt" />
    
    <label>{label}</label>
    <div>({counter})</div>
  </CategoryMenuItemStyled>
);

export default CategoryMenuItem;
