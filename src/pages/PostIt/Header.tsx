import React, { useContext, useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import {
  ButtonUserIcon,
  ContainerHeader,
  ContainerIt,
  ContainerPost,
  LinkItem,
} from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { Button, Popover, Tooltip } from "@material-ui/core";
import routes from "../../helpers/routes";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";

interface Props {
  toggleTheme(): void;
}
const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);
  const id = isOpen ? "simple-popover" : undefined;

  return (
    <ContainerHeader>
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
      <div style={{ display: "flex", marginRight: "20px" }}>
        <Tooltip
          title={
            title === "dark"
              ? "Mudar para o tema light"
              : " Mudar para o tema dark"
          }
        >
          <div style={{ marginTop: "15px", marginRight: "12px" }}>
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
        <Tooltip title="Sair">
          <ButtonUserIcon onClick={handleOpen} color="inherit">
            <PersonIcon fontSize="large" style={{ color: "white" }} />
          </ButtonUserIcon>
        </Tooltip>

        <Popover
          id={id}
          open={isOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              padding: 17,
              fontFamily: "Poppins",
              fontSize: "20px",
              // fontWeight: "700",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            <LinkItem to={routes.login.root}>
              Sair <DirectionsRunIcon fontSize="medium" />
            </LinkItem>
          </h2>
        </Popover>
      </div>
    </ContainerHeader>
  );
};

export default Header;
