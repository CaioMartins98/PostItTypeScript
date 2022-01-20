import React from "react";

import { Container, ContainerIt, ContainerPost } from "./styles";


interface Props {
  toggleTheme(): void;
}
const Header: React.FC<Props> = () => {
  return (
    <Container>
      <div
        style={{
          justifyContent: "space-between",
          textAlign: "center",
          display: "flex",
        }}
      >
        <ContainerPost>
          <h1>Post</h1>
        </ContainerPost>
        <ContainerIt>
          <h1> It!</h1>
        </ContainerIt>
      </div>

   
    </Container>
  );
};

export default Header;
