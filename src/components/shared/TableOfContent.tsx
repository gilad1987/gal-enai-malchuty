import React from "react";
import { TableOfContentStyled, TableOfContentTitleStyled } from "./styled";

class TableOfContent extends React.PureComponent {
  render() {
    return (
      <TableOfContentStyled>
        <TableOfContentTitleStyled>עיון</TableOfContentTitleStyled>
        <ul>
          <li>
            <span>
              <span>ספרים</span>
              <span>(108)</span>
            </span>
            <ul>
              <li>
                <span>
                  <span>תיקון המדינה</span>
                  <span>(14)</span>
                </span>
              </li>
              <li>
                <span>
                  <span>תורה</span>
                  <span>(94)</span>
                </span>
              </li>
              <li>
                <span>
                  <span>תיקון המדינה</span>
                  <span>(14)</span>
                </span>
              </li>
              <li>
                <span>
                  <span>תורה</span>
                  <span>(94)</span>
                </span>
              </li>
              <li>
                <span>
                  <span>תיקון המדינה</span>
                  <span>(14)</span>
                </span>
              </li>
              <li>
                <span>
                  <span>תורה</span>
                  <span>(94)</span>
                </span>
              </li>
            </ul>
          </li>
          <li>
            <span>
              <span>נושאים</span>
              <span>(34)</span>
            </span>
          </li>
          <li>
            <span>
              <span>שיעורים</span>
              <span>(54)</span>
            </span>
          </li>
          <li>
            <span>
              <span>אודיו</span>
              <span>(64)</span>
            </span>
          </li>
        </ul>
      </TableOfContentStyled>
    );
  }
}

export default TableOfContent;
