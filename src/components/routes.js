import Users from "./modules/user/users";
import UserGroup from "./modules/user/userGroup";
import Host from "./modules/host/host";
import IDCAsset from "./modules/IDCAsset/authority";
import Purchasing from "./modules/purchasing/purchasing";
import HistoryComponent from "./modules/history/operHistory";
import MenuComponent from "./modules/menu/menu";

const routes = [
  {path: "/", exact: true, main: Users},
  {path: "/user", main: Users},
  {path: "/usergroup", main: UserGroup},
  {path: "/host", main: Host},
  {path: "/asset", main: IDCAsset},
  {path: "/purchasing", main: Purchasing},
  {path: "/history", main: HistoryComponent},
  {path: "/menu", main: MenuComponent},
];
export default routes;