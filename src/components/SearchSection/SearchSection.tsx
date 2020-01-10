import React from "react";
import { SearchSectionStyled } from "./styled";
import MalchutySearch from "../MalchutySearch/MalchutySearch";

const SearchSection = () => {
  return (
    <SearchSectionStyled>
      <h1>מאגר מידע וחיפוש ספרים</h1>
      <MalchutySearch/>
    </SearchSectionStyled>
  );
};

export default SearchSection;
