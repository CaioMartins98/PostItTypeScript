import React, { useContext } from "react";

import { Container, ContainerIt, ContainerPost } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { Tooltip } from "@material-ui/core";

interface Props {
  toggleTheme(): void;
}
const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

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

      <Tooltip
        title={
          title === "dark"
            ? "Mudar para o tema light"
            : " Mudar para o tema dark"
        }
      >
        <div>
          <Switch
            onChange={toggleTheme}
            checked={title === "light"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={15}
            onColor={colors.secondary}
            offColor={shade(0.15, colors.secondary)}
          />
        </div>
      </Tooltip>
    </Container>
  );
};

export default Header;
