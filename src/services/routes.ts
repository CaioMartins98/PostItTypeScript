import { RouteComponentProps } from "react-router";
import routesHelper from "../helpers/routes";
import Login from "../pages/Login/Login";
import PostIt from "../pages/PostIt";

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
];

export default routes;
