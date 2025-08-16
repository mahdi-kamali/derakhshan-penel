import Icon from "@/components/UI/Icon/Icon";
import { IRouteContent, IRouteType } from "@/types/Routes.types";
import React, { useEffect, useState } from "react";

export default function useAppRouter() {
  const [routes, setRoutes] = useState<IRouteType[]>([
    {
      id: 1,
      title: "پیشخوان",
      icon: <Icon icon='material-symbols-light:home' />,
      path: "/dashboard/main",
      shownSideBar: true,
    },
    {
      id: 2,
      title: "کاربران",
      icon: <Icon icon='mage:users-fill' />,
      shownSideBar: true,
      children: [
        {
          id: 3,
          title: "لیست",
          path: "/dashboard/users/list",
          icon: <Icon icon='ic:round-view-list' />,
          shownSideBar: true,
        },
        {
          id: 4,
          title: "ایجاد کاربر",
          path: "/dashboard/users/create",
          icon: <Icon icon='material-symbols-light:new-label' />,
          shownSideBar: true,
        },
      ],
    },
  ]);

  const settingsRoute = routes.find((item) => item.id === 31);

  return {
    routes,
    settingsRoute,
  };
}
