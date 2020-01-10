import styled from "styled-components";

const CategoriesSectionStyled = styled.div`
  padding: 85px 0 85px;
  h2{
    margin-bottom: 60px;
  }
`;
const CategoriesWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export { CategoriesSectionStyled, CategoriesWrapper };
