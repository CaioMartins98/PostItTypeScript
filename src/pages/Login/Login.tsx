import React, { useContext, useState } from "react";

import { DefaultTheme, ThemeProvider } from "styled-components";

import usePersistedState from "../../utils/usePeristedState";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import {
  ButtonItem,
  Container,
  InputItem,
  InputLabelItem,
  LoginContainer,
  TitleContainer,
  Title,
  DescriptionContainer,
  Description,
  ErrorField,
} from "./styles";

import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../providers/auth";


export default function Login() {
  const history = useHistory();
  const [inputValue, setInputValue] = useState({ name: "" });
  const { setUser }: any = useContext(AuthContext);
  const [messageUser, setMessageUser] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ name: event.target.value });
  };

  const handleSubmit = () => {
    const user: any = inputValue;
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    validate();
  };

  const validate = () => {
    const { name } = inputValue;

    if (name === "") {
      setMessageUser("Campo de usuário obrigatório*");
      return;
    } else {
      history.push("/postIt");
    }
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
              <Title>Bem-vindo!</Title>
            </TitleContainer>
            <DescriptionContainer>
              <Description>
                Insira seu nome para entrar na sua plataforma de postagem
                online!
              </Description>
            </DescriptionContainer>
            <InputLabelItem>Nome</InputLabelItem>

            <InputItem
              data-testid="username-field"
              style={{ width: "100%" }}
              required
              // value={values.userName}
              onChange={handleChange}
            />
            <div>
              <ErrorField data-testid="erro-user" style={{ color: "red" }}>
                {messageUser}
              </ErrorField>
            </div>
            <div>
              <ButtonItem
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                Entrar
              </ButtonItem>
            </div>
          </LoginContainer>
        </Container>
      </div>
    </ThemeProvider>
  );
}
