import { ICareer } from "@/types/Career/Career.types";
import { ICategory } from "@/types/Category/Category.types";
import { IPage } from "@/types/Pages/pages.types";
import { IProudct } from "@/types/Product/Product.types";
import { useRouter } from "next/navigation";

export default function useRedirect() {
  const navigator = useRouter();

  const redirect = (target: string) => {
    return navigator.push(`${target}`);
  };

  return {
    admin: {
      GoUsers: () => redirect("/dashboard/users/list"),
      GoDashboard: () => redirect("/dashboard/"),
      GoHome: () => redirect("/dashboard/users/list"),
      pages: {
        list: () => redirect("/dashboard/pages/list"),
        update: (id: IPage["_id"]) => redirect(`/dashboard/pages/${id}/update`),
        sections: {
          edit: (_id: string) => redirect(`/dashboard/pages/${_id}/sections`),
        },
      },
      careers: {
        list: () => redirect("/dashboard/careers/list"),
        edit: (_id: ICareer["_id"]) => redirect(`/dashboard/careers/${_id}/`),
      },
      products: {
        list: () => redirect("/dashboard/products/list"),
        edit: (_id: IProudct["_id"]) => redirect(`/dashboard/products/${_id}/`),
        categories: {
          list: () => redirect("/dashboard/products/categories/list"),
          edit: (_id: ICategory["_id"]) =>
            redirect(`/dashboard/products/categories/${_id}/`),
        },
      },
    },
    GoLogin: () => redirect("/auth/login"),
    GoTo404: () => redirect(`/dashboard/errors/404`),
  };
}
