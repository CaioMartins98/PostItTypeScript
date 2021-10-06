import React from "react";

import { InputAdornment, Tooltip } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Header from "../../components/Header";
import usePersistedState from "../../utils/usePeristedState";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import { DefaultTheme, ThemeProvider } from "styled-components";
// import routes from "../../helpers/routes";

import {
  ButtonSignUpItem,
  Container,
  IconButtonItem,
  InputItem,
  InputLabelItem,
  LinkContainer,
  LinkItem,
  SignUpContainer,
  TitleContainer,
} from "./styles";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import routes from "../../helpers/routes";
import { useRecoilState, useRecoilValue } from "recoil";
import { signUp } from "../../atom/signUp";

interface State {
  userName: string;
  password: string;

  showPassword: boolean;
}

export default function SignUp() {
  const [values, setValues] = React.useState<State>({
    userName: "",
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Header toggleTheme={toggleTheme} />
        <Container>
          <SignUpContainer>
            <TitleContainer>
              <h1>Cadastro</h1>
            </TitleContainer>
            <InputLabelItem>Nome</InputLabelItem>

            <InputItem
              data-testid="username-field"
              style={{ width: "100%" }}
              required
              value={values.userName}
              onChange={handleChange("userName")}
            />
            <InputLabelItem htmlFor="standard-adornment-password">
              Senha
            </InputLabelItem>
            <InputItem
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButtonItem
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButtonItem>
                </InputAdornment>
              }
            />
            <div>
              <ButtonSignUpItem
                onClick={() =>
                  signUp({
                    userName: values.userName,
                    password: values.password,
                  })
                }
                variant="contained"
                color="primary"
              >
                Enviar
              </ButtonSignUpItem>
            </div>
            <LinkContainer>
              <LinkItem to={routes.login.root}>
                <Tooltip title="Voltar">
                  <KeyboardBackspaceIcon />
                </Tooltip>
              </LinkItem>
            </LinkContainer>
          </SignUpContainer>
        </Container>
      </div>
    </ThemeProvider>
  );
}
