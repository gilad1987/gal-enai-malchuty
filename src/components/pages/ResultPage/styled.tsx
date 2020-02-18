import styled from "styled-components";

const ResultPageStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

const ResultContentStyled = styled.div`
  flex: 1;
`;
const HeroSectionStyled = styled.div`
  background: #1d455f;
  padding-top: 65px;
  padding-right: 226px;
`;

const PanesStyled = styled.div`
  background: #1d455f;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
  }
`;

const Li: any = styled.li`
  display: flex;
  align-items: center;
  width: 190px;
  padding: 10px 30px;
  color: ${({ active, theme }: any) => (active ? theme.blueLight2 : "white")};
  background: ${({ active }: any) => (active ? "white" : "transparent")};
  border-radius: 10px 10px 0 0;
  justify-content: center;
  cursor: pointer;
  :hover {
    background: white;
    color: ${({ theme }: any) => theme.blueLight2};
    background: white;
  }
  img {
    max-width: 25px;
    height: 25px;
    display: inline-block;
    margin-left: 10px;
  }
  span {
    font-size: 18px;
  }
`;
const PaneContentStyled = styled.div`
  display: flex;
  padding-right: 226px;
  padding-top:50px;
`;
const ContentStyled = styled.div`
  max-width: 500px;
  margin-left: 100px;
  color: ${({ theme }: any) => theme.blue};
  font-size:18px;
`;

const ContentDetailsStyled = styled.div`
  border-right: 1px solid ${({ theme }: any) => theme.pinkishGrey};
  min-height: 300px;
`;
export {
  ResultPageStyled,
  ResultContentStyled,
  HeroSectionStyled,
  PanesStyled,
  Li,
  PaneContentStyled,
  ContentStyled,
  ContentDetailsStyled
};
