export interface IRouteType {
  id: number | string;
  path?: string;
  title: string;
  icon?: JSX.Element;
  children?: IRouteType[];
  onClick?: () => void;
  shownSideBar: boolean;
}
