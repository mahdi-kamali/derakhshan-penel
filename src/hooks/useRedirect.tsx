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
      GoHome: () => redirect("/dashboard/home"),
      pages: {
        list: () => redirect("/dashboard/pages/list"),
        sections: {
          edit: (_id: string) => redirect(`/dashboard/pages/${_id}/sections`),
        },
      },
    },
    GoLogin: () => redirect("/auth/login"),
    GoTo404: () => redirect(`/dashboard/errors/404`),
  };
}
