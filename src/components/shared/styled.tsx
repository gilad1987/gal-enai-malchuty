import styled from "styled-components";

const H1 = styled.h1`
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

const H2 = styled.h2`
  font-size: 24px;
  color: ${props => props.theme.blue};
  text-align: center;
  font-weight: bold;
`;

const H3 = styled.h1`
  font-size: 18px;
  color: white;
  font-weight: normal;
`;

const TableOfContentStyled = styled.div`
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
  box-shadow: 0px 10px 13px 1px #e6e6e6;
  background-image: url(/images/sidebar-menu/side_menu_img.png),
    linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  background-repeat: no-repeat;
  padding: 134px 80px 0 80px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 18px;
    li {
      margin: 0;
      font-weight: bold;
      span {
        border-bottom: 1px solid #c6c6c6;
        height: 53px;
        line-height: 53px;
        display: flex;
        &:first-child {
          flex: 1;
        }
      }
      ul {
        li {
          font-weight: normal;
          display: flex;
          span {
            span:first-child {
              padding-right: 20px;
            }
          }
        }
      }
    }
  }
`;

const TableOfContentTitleStyled = styled.div`
  padding-bottom: 27px;
  color: #c6c6c6;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid ${props => props.theme.blue};
`;
export { H1, H2,H3, TableOfContentStyled, TableOfContentTitleStyled };
