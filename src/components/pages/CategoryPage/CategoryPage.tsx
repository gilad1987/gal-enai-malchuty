import React from "react";
import { CategoryPageStyled } from "./styled";
import TableOfContent from "../../shared/TableOfContent";
import CategoryList from "./CategoryList";

class CategoryPage extends React.PureComponent {
  render() {
    return (
      <CategoryPageStyled>
        <TableOfContent />
        <CategoryList />
      </CategoryPageStyled>
    );
  }
}

export default CategoryPage;
