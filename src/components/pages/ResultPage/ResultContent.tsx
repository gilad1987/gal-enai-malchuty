import React from "react";
import {
  ResultContentStyled,
  HeroSectionStyled,
  PaneContentStyled
} from "./styled";
import { H1, H3 } from "../../shared/styled";
import Panes from "./Panes";
import Content from "./Content";
import ContentDetails from "./ContentDetails";

class ResultContent extends React.PureComponent<any, any> {
  render() {
    return (
      <ResultContentStyled>
        <HeroSectionStyled>
          <H1 style={{ marginBottom: 0 }}>מלכות ישראל א’</H1>
          <H3 style={{ paddingBottom: 50 }}>כותרת משנה כותרת משנה</H3>
          <Panes />
        </HeroSectionStyled>
        <PaneContentStyled>
          <Content html={this.props.html} />
          <ContentDetails />
        </PaneContentStyled>
      </ResultContentStyled>
    );
  }
}

export default ResultContent;
