import Icon from "@/components/UI/Icon/Icon";
import { IRouteType } from "@/types/Routes.types";
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
    {
      id: 2,
      title: "آکهی ها",
      icon: <Icon icon='academicons:ads' />,
      shownSideBar: true,
      children: [
        {
          id: 3,
          title: "لیست",
          path: "/dashboard/careers/list",
          icon: <Icon icon='ic:round-view-list' />,
          shownSideBar: true,
        },
        {
          id: 4,
          title: "ایجاد آگهی",
          path: "/dashboard/careers/create",
          icon: <Icon icon='material-symbols-light:new-label' />,
          shownSideBar: true,
        },
      ],
    },
    {
      id: 1,
      title: "گالری",
      icon: <Icon icon='solar:gallery-wide-bold-duotone' />,
      path: "/dashboard/gallery/list",
      shownSideBar: true,
    },
    {
      id: 1,
      title: "صفحات",
      icon: <Icon icon='icon-park-solid:web-page' />,
      path: "/dashboard/pages/list",
      shownSideBar: true,
      children: [
        {
          title: "لیست",
          id: 3,
          shownSideBar: true,
          path: "/dashboard/pages/list",
        },
        {
          title: "ایجاد",
          id: 3,
          shownSideBar: true,
          path: "/dashboard/pages/create",
        },
      ],
    },
    {
      id: 1,
      title: "تماس با ما",
      icon: <Icon icon='material-symbols-light:contact-phone-rounded' />,
      path: "/dashboard/contact-us/list",
      shownSideBar: true,
    },
    {
      id: 1,
      title: "سفارشات",
      icon: <Icon icon='lets-icons:order-fill' />,
      path: "/dashboard/orders/list",
      shownSideBar: true,
      children: [
        {
          title: "لیست",
          id: 3,
          shownSideBar: true,
          path: "/dashboard/orders/list",
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
