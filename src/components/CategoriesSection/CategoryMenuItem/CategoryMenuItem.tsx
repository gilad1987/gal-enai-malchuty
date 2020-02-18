import React from "react";
import { CategoryMenuItemStyled, IconImgStyled } from "./styled";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const CategoryMenuItem = ({
  background,
  iconPath,
  label,
  counter,
  treeId
}: any) => (
  <Link
    to={`/books`}
  >
    <CategoryMenuItemStyled backgroundImage={background}>
      <IconImgStyled src={iconPath} alt="alt" />
      <label>{label}</label>
      <span>({counter})</span>
    </CategoryMenuItemStyled>
  </Link>
);

export default withRouter(CategoryMenuItem);
