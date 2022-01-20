import React, { useContext, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import usePersistedState from "../../utils/usePeristedState";
import Header from "./Header";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import {
  AreaContainer,
  ButtonField,
  CardContainer,
  Container,
  Content,
  DateContainer,
  DatePublished,
  DividerItem,
  GridContainer,
  GridListItem,
  GridText,
  GridTextArea,
  GridTextContainer,
  Label,
  MainGridContainer,
  TextArea,
  TextAreaContainer,
  UserPublished,
} from "./styles";
import { AuthContext } from "../../providers/auth";

interface IPost {
  postContent?: string;
  date?: string;
  id: number;
}

const PostIt = () => {
  const now: Date = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0"); 
  const yyyy = String(now.getFullYear());

  const today = dd + "/" + mm + "/" + yyyy;

  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);
  const [textValue, setTextValue] = useState<string>("");
  const [textPost, setTextPost] = usePersistedState<IPost[]>("posts", []);

  const { user }: any = useContext(AuthContext);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const handleChange = (event: string) => {

    setTextValue(event);
  };

  const handleSubmit = () => {
    if (!textValue) return;

    const newPost: IPost = {
      postContent: textValue,
      date: today,
      id: textPost.length ? textPost.length + 1 : 1,
    };

    setTextPost((prevState) => [...prevState, newPost]);

    setTextValue("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Container>
        <div>
          <Label>Escreva seu texto abaixo</Label>
        </div>
        <AreaContainer container>
          <TextAreaContainer item>
            <TextArea
              data-testid="text-area-field"
              aria-label="minimum height"
              placeholder="Digite seu texto aqui..."
              value={textValue}
              onChange={(e): void => handleChange(e.target.value)}
            />
            <ButtonField
              data-testid="button-field"
              name="button"
              onClick={handleSubmit}
            >
              ENVIAR
            </ButtonField>
          </TextAreaContainer>
        </AreaContainer>

        <CardContainer data-testid="container-text">
          <MainGridContainer container>
            {textPost
              .sort((a, b) => b.id - a.id)
              .map((item, index) => (
                <GridContainer
                  key={index}
                  item
                  xs={11}
                  sm={10}
                  md={5}
                  lg={4}
                  xl={3}
                >
                  <GridTextContainer data-testid="container-text">
                    <GridText item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <GridTextArea>
                        <DateContainer>
                          <CalendarTodayIcon />

                          <DatePublished>{item.date}</DatePublished>
                        </DateContainer>
                        <UserPublished>
                          {user.name}
                          <AccountCircleIcon
                            fontSize="medium"
                            style={{ marginLeft: "5px" }}
                          />
                        </UserPublished>
                      </GridTextArea>
                      <DividerItem />

                      <GridListItem cellHeight={250}>
                        <Content>{item.postContent}</Content>
                      </GridListItem>
                    </GridText>
                  </GridTextContainer>
                </GridContainer>
              ))}
          </MainGridContainer>
        </CardContainer>
      </Container>
    </ThemeProvider>
  );
};

export default PostIt;
