import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 120vw;
  background: ${(props) => props.theme.colors.bgHeader};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-around;
  font-family: "Pacifico", cursive;
  
  @media(max-width: 768px) {
    display: none;
  }
`;

export const ContainerPost = styled.div`
  margin-left: 100px;
  h1 {
    color: ${(props) => props.theme.colors.post};
    font-size: 80px;
  }
`;
export const ContainerIt = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.it};
    font-size: 80px;
    margin-left: 17px;
  }
`;
