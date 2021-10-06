import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      input?: string;
      boxShadow?: string;
      bgScrollBar?: String;
      bgHeader?: string;
      post?: string;
      it?: string;
    };
  }
}
