import styled from "styled-components";

const HeaderStyled = styled.div`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 11px 1px #d3d3d3;
  
`;

const MenuStyled = styled.nav`
color: ${props => props.theme.blueLight};
  ul {
    padding: 0;
    margin: 0;
    li {
      display: inline-block;
      padding: 0 30px;
      font-size: 18px;
      line-height: 23px;
    }
  }
`;

export { HeaderStyled, MenuStyled };
