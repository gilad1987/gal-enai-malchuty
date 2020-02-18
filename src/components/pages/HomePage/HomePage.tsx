import React from "react";
import { HomePageStyled } from "./styled";
//import Header from "../../Header/Header/Header";
import SearchSection from "../../SearchSection/SearchSection";
import CategoriesSection from "../../CategoriesSection/CategoriesSection";

class HomePage extends React.PureComponent {
  render() {
    return (
      <HomePageStyled>
        <SearchSection />
        <CategoriesSection />
      </HomePageStyled>
    );
  }
}

export default HomePage;
