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
    },
    GoLogin: () => redirect("/auth/login"),
    GoTo404: () => redirect(`/dashboard/errors/404`),
  };
}
