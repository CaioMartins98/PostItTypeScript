import React from "react";
import { Tooltip } from "@material-ui/core";
import Header from "../../components/Header";
import usePersistedState from "../../utils/usePeristedState";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import { DefaultTheme, ThemeProvider } from "styled-components";
import {
  ButtonSignUpItem,
  Container,
  InputItem,
  InputLabelItem,
  LinkContainer,
  LinkItem,
  SignUpContainer,
  TitleContainer,
} from "./styles";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import routes from "../../helpers/routes";
// import { useRecoilState, useRecoilValue } from "recoil";
import { signUp } from "../../atom/signUp";

interface State {
  userName: string;
  password: string;

  showPassword: boolean;
}

export default function ForgotPassword() {
  const [values, setValues] = React.useState<State>({
    userName: "",
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
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
              <h1>Recuperar senha</h1>
            </TitleContainer>
            <InputLabelItem>Nome</InputLabelItem>

            <InputItem
              data-testid="username-field"
              style={{ width: "100%" }}
              required
              value={values.userName}
              onChange={handleChange("userName")}
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
                Recuperar
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
