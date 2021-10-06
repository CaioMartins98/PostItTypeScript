import React from "react";

import { InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import routes from "../../helpers/routes";

import { DefaultTheme, ThemeProvider } from "styled-components";

import usePersistedState from "../../utils/usePeristedState";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import {
  ButtonItem,
  Container,
  IconButtonItem,
  InputItem,
  InputLabelItem,
  LinkContainer,
  LinkItem,
  LoginContainer,
  TitleContainer,
} from "./styles";

import Header from "../../components/Header";
import { Link } from "react-router-dom";

interface State {
  userName: string;
  password: string;

  showPassword: boolean;
}

export default function Login() {
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
          <LoginContainer>
            <TitleContainer>
              <h1>Bem-vindo!</h1>
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
              <ButtonItem variant="contained" color="primary">
                <Link
                  style={{
                    outline: "none",
                    textDecoration: "none",
                    color: "white",
                  }}
                  to={routes.main.root}
                >
                  Entrar
                </Link>
              </ButtonItem>
            </div>
            <LinkContainer>
              <LinkItem to={routes.signUp.root}>Cadastre-se</LinkItem>
            </LinkContainer>
            <LinkContainer>
              <LinkItem
                style={{ fontSize: "16px" }}
                to={routes.forgotPassword.root}
              >
                Esqueceu sua senha ?
              </LinkItem>
            </LinkContainer>
          </LoginContainer>
        </Container>
      </div>
    </ThemeProvider>
  );
}
