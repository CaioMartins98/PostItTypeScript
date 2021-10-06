import styled from "styled-components";
import { Input, InputLabel, IconButton, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};

  justify-content: center;
  align-items: center;
  display: flexbox;
`;

export const TitleContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.primary};

  margin-bottom: 100px;
`;

export const LoginContainer = styled.div`
  margin-bottom: 100px;
`;

export const InputItem = styled(Input)`
  && {
    background: ${(props) => props.theme.colors.input};
    color: ${(props) => props.theme.colors.text};
    font-family: "Poppins";
    caret-color: #3d4ddb;
  }
`;

export const InputLabelItem = styled(InputLabel)`
  && {
    color: ${(props) => props.theme.colors.text};
    padding: 15px 0px 15px 0px;
    font-family: "Poppins";
  }
`;

export const IconButtonItem = styled(IconButton)`
  && {
    color: ${(props) => props.theme.colors.text};
    font-family: "Poppins";
  }
`;

export const ButtonItem = styled(Button)`
  && {
    width: 100%;
    margin-top: 30px;
    color: white;
  }
`;

export const LinkContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 18px;

  outline: none;
  text-decoration: none;
`;

export const LinkItem = styled(Link)`
  && {
    outline: none;
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.text};
  }
`;
