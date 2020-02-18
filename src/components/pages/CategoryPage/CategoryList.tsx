import React from "react";
import {
  CategoryListStyled,
  CategoryListWrapperStyled,
  CategoryListCountNumberStyled,
  CategoryGridStyled,
  CategoryItemStyled
} from "./styled";
import { H2 } from "../../shared/styled";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { BooksStore } from "../../../stores/BooksStore";

interface Props extends RouteComponentProps<any> {
  booksStore?: BooksStore;
}

@inject("booksStore")
@observer
class CategoryList extends React.PureComponent<Props, any> {
  categoryType: "books" | "subjects" | "lessons" | "audio" = "audio";

  colors = {
    subjects: ["#C0B5D5", "#6F6483", "#927FB5", "#635482", "#9087A1"],
    lessons: ["#89C7E4", "#5C91AB", "#53A5CD", "#78C3E9", "#68ABCC"],
    books: ["#942E2F", "#EE9293", "#D55759", "#D03538", "#A95355"],
    audio: ["#659ABB", "#246F9E", "#14679B", "#1C577C", "#308CC6"]
  };

  getBackgroundColor = () =>
    this.colors[this.categoryType][Math.floor(Math.random() * 5)];

  componentDidMount = () => {
    const { match } = this.props;
    if (match.url === "/books") {
      this.props.booksStore?.getAll();
    }
  };

  render() {
    const items = this.props.booksStore?.books.map((book: any, index: any) => (
      <Link key={book.bookLinkId} to={`/books/${book.bookLinkId}`}>
        <CategoryItemStyled
          key={index}
          style={{ backgroundColor: this.getBackgroundColor() }}
        >
          <span>{book.text}</span>
          {/* <span>({book.children.length})</span> */}
        </CategoryItemStyled>
      </Link>
    ));
    return (
      <CategoryListStyled>
        <CategoryListWrapperStyled>
          <div>
            <div>
              <H2 style={{ textAlign: "right", marginBottom: 0 }}>ספרים</H2>
            </div>
            <CategoryListCountNumberStyled>(45)</CategoryListCountNumberStyled>
          </div>
          <CategoryGridStyled>
            {items}
            {/* {Array.from(Array(50).keys()).map(item => (
              <CategoryItemStyled
                key={item}
                style={{ backgroundColor: this.getBackgroundColor() }}
              >
                <div>תיקון המדינה</div>
                <div>(23)</div>
              </CategoryItemStyled>
            ))} */}
          </CategoryGridStyled>
        </CategoryListWrapperStyled>
      </CategoryListStyled>
    );
  }
}

export default withRouter(CategoryList);
