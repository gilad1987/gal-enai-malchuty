import React from "react";
import { ResultPageStyled } from "./styled";
import TableOfContent from "../../shared/TableOfContent";
import ResultContent from "./ResultContent";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { BooksStore } from "../../../stores/BooksStore";
import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";

interface Props extends RouteComponentProps<any> {
  booksStore?: BooksStore;
}

@inject("booksStore")
@observer
class ResultPage extends React.PureComponent<Props, any> {
  @observable html: any = "";

  @action setHtml = (html: string) => {
    this.html = html;
  };

  componentDidMount = async () => {
    const { match } = this.props;
    const html: any = await this.props.booksStore?.getHtml(match.params.id);
    this.setHtml(html);
  };

  render() {
    return (
      <ResultPageStyled>
        <TableOfContent />
        <ResultContent html={this.html}/>
      </ResultPageStyled>
    );
  }
}

export default withRouter(ResultPage);
