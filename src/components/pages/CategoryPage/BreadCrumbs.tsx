import React from "react";
import { BreadCrumbsStyled } from "./styled";

class BreadCrumbs extends React.PureComponent {
  render() {
    return <BreadCrumbsStyled>
    <ul>
        <li>ראשי</li>
        <li>עיון</li>
        <li>נושאים</li>
    </ul>
    </BreadCrumbsStyled>;
  }
}

export default BreadCrumbs;
