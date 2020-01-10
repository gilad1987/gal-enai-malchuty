import styled from "styled-components";

const SearchSectionStyled = styled.div`
  background: ${props => props.theme.blue};
  padding:40px 0;
  h1 {
    color: white;
    text-align: center;
    font-size:50px;
    font-weight:bold;
    margin-bottom:50px;
    margin-top: 50px;
  }
`;

export { SearchSectionStyled };
