import styled from "styled-components";

const CategoryPageStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

const CategoryListStyled = styled.div`
  flex: 1;
  min-height: 100vh;
`;

const BreadCrumbsStyled = styled.div``;

const CategoryListWrapperStyled = styled.div`
  max-width: 878px;
  margin:0 auto;
`;

const CategoryListCountNumberStyled = styled.div`
  font-size: 18px;
`;

const CategoryGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top:37px;
`;

const CategoryItemStyled = styled.span`
  width: 200px;
  height: 200px;
  border-radius:15px;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
  span:first-child{
    font-size:24px;
    font-weight:bold;
    margin-bottom:10px;
  }
  span:last-child{
    font-size:18px;
  }
`;

export {
  CategoryPageStyled,
  CategoryListStyled,
  BreadCrumbsStyled,
  CategoryListWrapperStyled,
  CategoryListCountNumberStyled,
  CategoryGridStyled,
  CategoryItemStyled
};
