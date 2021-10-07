import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import usePersistedState from "../../utils/usePeristedState";
import Header from "./Header";
// import PersonIcon from "@material-ui/icons/Person";
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

const PostIt = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Container>
        <div>
          <Label>Escreva seu texto abaixo</Label>
        </div>
        <AreaContainer container>
          <TextAreaContainer item xs={12} sm={9} md={6} lg={3} xl={3}>
            <TextArea
              data-testid="text-area-field"
              aria-label="minimum height"
              placeholder="Digite seu texto aqui..."
              // value={textValue}
              // onChange={(event) => setTextValue(event.target.value)}
            />
            <ButtonField
              data-testid="button-field"
              name="button"
              // onClick={() => handleClick()}
            >
              ENVIAR
            </ButtonField>
          </TextAreaContainer>
        </AreaContainer>

        <CardContainer data-testid="container-text">
          <MainGridContainer container>
            <GridContainer item xs={11} sm={10} md={6} lg={4} xl={3}>
              <GridTextContainer data-testid="container-text">
                <GridText item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <GridTextArea>
                    <DateContainer>
                      <CalendarTodayIcon />

                      <DatePublished>05/10/2021</DatePublished>
                    </DateContainer>
                    <UserPublished>
                      Caio Martins
                      <AccountCircleIcon
                        fontSize="medium"
                        style={{ marginLeft: "5px" }}
                      />
                    </UserPublished>
                  </GridTextArea>
                  <DividerItem />

                  <GridListItem cellHeight={250}>
                    <Content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam lorem diam, sodales ut viverra nec, bibendum at
                      neque. Praesent consequat vel ex dapibus luctus. Nulla
                      efficitur quis quam nec tincidunt. Sed metus tortor,
                      posuere nec ornare sit amet, mattis eget libero.
                    </Content>
                  </GridListItem>
                </GridText>

                {/* <ReactionContainer>
                      <LovedPress
                        style={{ cursor: "pointer", marginRight: "4px" }}
                        onClick={() =>
                          handleReaction(
                            item.id,
                            item.activeUserLikedIt,
                            !item.activeUserLovedIt
                          )
                        }
                      >
                        {item.activeUserLovedIt > 0 ? (
                          <img
                            style={{ width: "30px", height: "30px" }}
                            src={loveOn}
                            alt=""
                          />
                        ) : (
                          <img
                            style={{ width: "30px", height: "30px" }}
                            src={loveOff}
                            alt=""
                          />
                        )}
                      </LovedPress>
                      <CountLove>{item.loves}</CountLove>
                      <LikedPress
                        onClick={() =>
                          handleReaction(
                            item.id,
                            !item.activeUserLikedIt,
                            item.activeUserLovedIt
                          )
                        }
                      >
                        {item.activeUserLikedIt > 0 ? (
                          <img
                            style={{ width: "30px", height: "30px" }}
                            src={likeOn}
                            alt=""
                          />
                        ) : (
                          <img
                            style={{ width: "30px", height: "30px" }}
                            src={likeOff}
                            alt=""
                          />
                        )}
                      </LikedPress>
                      <CountLike style={{ fontFamily: "Poppins" }}>
                        {item.likes}
                      </CountLike>
                    </ReactionContainer> */}
              </GridTextContainer>
            </GridContainer>
          </MainGridContainer>
        </CardContainer>
      </Container>
    </ThemeProvider>
  );
};

export default PostIt;
