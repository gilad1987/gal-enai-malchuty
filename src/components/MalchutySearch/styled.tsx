import styled from "styled-components";

const MalchutySearchStyled = styled.div`
  max-width: 613px;
  margin: 0 auto;
  label {
    color: white;
    font-size: 18px;
  }

  .ant-radio-group {
    margin-top: 15px;
    display: flex;
    align-items: center;
    .ant-radio-wrapper {
      display: flex;
      align-items: center;
    }
  }
`;

const DisplayAdvancedSearchButtonStyled = styled.a`
  text-decoration: underline;
  color: ${props => props.theme.blueLight2};
  font-size: 18px;
  display: block;
  max-width: 300px;
  margin: 50px auto;
  text-align: center;
`;

export { MalchutySearchStyled, DisplayAdvancedSearchButtonStyled };
