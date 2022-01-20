import { Button, Divider, Grid, GridList } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader = styled.div`
  height: 10vh;
  width: 100vw;
  background: ${(props) => props.theme.colors.bgHeader};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;

  font-family: "Pacifico", cursive;
`;

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  height: 100vh ;
  /* width: 100vw; */

  /* @media (max-width: 768px) {
   
    height: 100vh;
    width: 100vw;
  } */
`;

export const ContainerPost = styled.div`
  margin-left: 20px;
  
  h1 {
    color: ${(props) => props.theme.colors.post};
    font-size: 40px;
  }
`;
export const ContainerIt = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.it};
    font-size: 40px;
    margin-left: 10px;
  }
`;

export const LinkItem = styled(Link)`
  && {
    outline: none;
    text-decoration: none;
    cursor: pointer;
    color: #222;
  }
`;

export const Label = styled.label`
  && {
    font-family: "Poppins";
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const AreaContainer = styled(Grid)`
  && {
    /* margin-top: 2vh; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const TextAreaContainer = styled(Grid)`
  && {
    margin-top: 2vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const TextArea = styled.textarea`
  && {
    font-family: "Poppins";
    width: 500px;
    min-width: 450px;
    max-width: 450px;
    min-height: 100px;
    max-height: 100px;
    font-size: 20px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    outline: none;
    margin-bottom: 20px;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    caret-color: #3d4ddb;

    @media (max-width: 768px) {
      margin-bottom: 0px;
      border-radius: 4px 4px 0px 0px;

      width: 450px;
      min-width: 450px;
      max-width: 450px;
      min-height: 100px;
      max-height: 100px;
    }
  }
`;

export const ButtonField = styled(Button)`
  && {
    cursor: pointer;
    font-family: "Poppins";
    font-weight: 700;
    color: white;
    background: #3d4ddb;
    margin-bottom: 20px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    outline: none;

    height: 100px;

    :hover {
      background: #313dad;
    }

    @media (max-width: 768px) {
      width: 450px;
      height: 70px;

      border-radius: 0px 0px 4px 4px;
    }
  }
`;

export const CardContainer = styled.div`
  && {
    width: 100vw;
    background: ${(props) => props.theme.colors.background};
  }
`;

export const MainGridContainer = styled(Grid)`
  && {
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

export const GridContainer = styled(Grid)`
  && {
    background: ${(props) => props.theme.colors.background};
    border: 3px solid #3d4ddb;
    width: 200px;
    height: 405px;
    border-radius: 15px;
    background: white;
    margin-top: 30px;
    margin-bottom: 10px;
    box-shadow: 7px 7px 7px ${(props) => props.theme.colors.boxShadow};
    margin-left: 1%;
    margin: 5;
  }
`;

export const GridTextContainer = styled(Grid)`
  && {
    height: 399px;

    border-radius: 8px;
    margin-top: -15px;
    word-wrap: break-word;
    background: ${(props) => props.theme.colors.background};
  }
`;

export const GridText = styled(Grid)`
  && {
    width: 26.25rem;
    height: 180px;
  }
`;

export const GridTextArea = styled.div`
  && {
    width: 450px;
    max-width: 450px;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    margin-top: 15px;
    word-wrap: break-word;
  }
`;

export const DateContainer = styled.div`
  && {
    margin-left: 15px;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

export const DatePublished = styled.p`
  && {
    cursor: default;
    font-size: 1rem;

    margin-left: 6px;
    padding: 10;
    font-family: "Poppins";
  }
`;

export const UserPublished = styled.p`
  && {
    cursor: default;
    font-size: 1rem;

    padding: 10;
    font-weight: 700;
    font-family: "Poppins";
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DividerItem = styled(Divider)`
  && {
    background: ${(props) => props.theme.colors.text};
    margin-bottom: 20px;
    margin-left: 10%;
  }
`;

export const Content = styled.p`
  && {
    font-size: 1rem;

    border-radius: 4px;
    margin-top: 6px;
    margin-left: 50px;
    :hover {
      cursor: zoom-in;
      transition: 0.5s;
      font-size: 1.1rem;
    }
  }
`;

export const GridListItem = styled(GridList)`
  && {
    ::-webkit-scrollbar-track {
      background: none;
    }
    ::-webkit-scrollbar {
      width: 6px;
      background: #d5d5d5;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: #3d4ddb;
      border-radius: 8px;
    }
  }
`;

export const ReactionContainer = styled.div`
  && {
    width: 30px;
    display: flex;
    align-items: center;
    height: 10px;
    margin-left: 10px;
    margin-top: 52px;
  }
`;

export const LovedPress = styled.span`
  && {
    cursor: pointer;
    margin-right: 4px;
  }
`;
export const CountLove = styled.p`
  && {
    margin-right: 10px;
  }
`;

export const LikedPress = styled.span`
  && {
    cursor: pointer;
    margin-right: 4px;
  }
`;

export const CountLike = styled.p`
  && {
    margin-right: 10px;
  }
`;

export const ButtonUserIcon = styled(Button)`
  background: ${(props) => props.theme.colors.bgHeader};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  border: none;
`;
