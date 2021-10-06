import { RouteComponentProps } from "react-router";
import routesHelper from "../helpers/routes";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login/Login";
import PostIt from "../pages/PostIt";
import SignUp from "../pages/SignUp";

const routes: {
  path: string | string[];
  name: string;
  exact?: boolean;
  Component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
    | undefined;
}[] = [
  {
    exact: true,
    path: routesHelper.login.root,
    name: "login",
    Component: Login,
  },
  {
    exact: true,
    path: routesHelper.main.root,
    name: "postIt",
    Component: PostIt,
  },
  {
    exact: true,
    path: routesHelper.forgotPassword.root,
    name: "forgotPassword",
    Component: ForgotPassword,
  },
  {
    exact: true,
    path: routesHelper.signUp.root,
    name: "signUp",
    Component: SignUp,
  },
];

export default routes;
