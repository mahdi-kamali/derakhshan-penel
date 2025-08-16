export const SERVER_BASE_URL = process.env
  .NEXT_PUBLIC_SERVER_BASE_URL as string;

export const SERVER_API_URL = process.env.NEXT_PUBLIC_SERVER_API_URL as string;

export const AUTH_URLS = {
  loginWithPassword: SERVER_API_URL + "/auth/login",
  loginWithOTP: SERVER_API_URL + `/auth/login`,
  loginGetOTP: SERVER_API_URL + `/auth/login`,
  logOut: SERVER_API_URL + "/logout",
};

export const ADMIN_URL = SERVER_API_URL + "/admin";

export const USERS_URLS = {
  list: ADMIN_URL + "/users",
  create: ADMIN_URL + "/users",
  assignRole: ADMIN_URL + "/users/role/assign",
  assignContractor: ADMIN_URL + "/users/contractor/assign",
  deleteUserById: ADMIN_URL + "/users/{id}",
  getByuId: ADMIN_URL + "/users/{id}?includes=Roles",
  updateById: ADMIN_URL + "/users/{id}",
  rolesById: ADMIN_URL + "/users/{id}/roles",
  contractorsById: ADMIN_URL + "/users/{id}/contractors",
  revokeRole: ADMIN_URL + "/users/{user}/role/{roleId}",
  revokeContract: ADMIN_URL + "/users/{user}/contractor/{contract}",
  exportExcel: ADMIN_URL + "/users/export",
};
