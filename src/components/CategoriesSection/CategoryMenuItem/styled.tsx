import styled from "styled-components";

const CategoryMenuItemStyled: any = styled.div`
  width: 200px;
  height: 200px;
  background-image: ${({ backgroundImage }: any) => backgroundImage};
  border-radius: 5px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  color: white;
  label {
    font-size: 30px;
    font-weight: bold;
    flex: 1;
    align-content: end;
    display: flex;
    align-items: flex-end;
    line-height: .77;
  }
  div {
    font-size: 18px;
    line-height: 1.28;
  }
`;
const IconImgStyled = styled.img`
  width: 24px;
  height: 18px;
`;
export { CategoryMenuItemStyled, IconImgStyled };
