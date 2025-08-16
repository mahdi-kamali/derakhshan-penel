export interface IRouteType {
  id: number | string;
  path?: string;
  title: string;
  icon?: JSX.Element;
  children?: IRouteType[];
  onClick?: () => void;
  shownSideBar: boolean;
  contents?: IRouteContent[];
}

export interface IRouteContent {
  description: string;
  name: string;
  tab: string;
  type: string;
  value: number;
}
