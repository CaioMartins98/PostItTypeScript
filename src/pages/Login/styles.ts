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

  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 50px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const DescriptionContainer = styled.div`
  justify-content: end;
  align-items: center;
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.colors.text};
  width: 350px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const Description = styled.h3`
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 20px;
  }
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
    font-family: 45px;
    height: 50px;
    width: 100%;

    @media (max-width: 768px) {
      width: 100%;
      font-family: 45px;
    }
  }
`;

export const InputLabelItem = styled(InputLabel)`
  && {
    color: ${(props) => props.theme.colors.text};
    padding: 15px 0px 15px 0px;
    font-family: "Poppins";
    margin-top: 20px;
    font-size: 23px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;
export const ErrorField = styled.span`
  && {
    color: red;
    font-size: 12px;
    font-weight: lighter;
    width: 50px;
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
    height: 50px;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 40px;
    @media (max-width: 768px) {
      height: 40px;
      font-size: 15px;
    }
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

    font-size: 28px;

    @media (max-width: 768px) {
      font-size: 25px;
    }
  }
`;
