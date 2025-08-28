export const SERVER_BASE_URL = process.env
  .NEXT_PUBLIC_SERVER_BASE_URL as string;

export const SERVER_API_URL = process.env.NEXT_PUBLIC_SERVER_API_URL as string;

export const AUTH_URLS = {
  loginWithPassword: SERVER_API_URL + "/auth/login",
  loginWithOTP: SERVER_API_URL + `/auth/login`,
  loginGetOTP: SERVER_API_URL + `/auth/login`,
  logOut: SERVER_API_URL + "/logout",
};

export const ADMIN_URL_BASE_URL = SERVER_API_URL + "/admin";

export const ADMIN_URLS = {
  USERS: {
    list: ADMIN_URL_BASE_URL + "/users",
    create: ADMIN_URL_BASE_URL + "/users",
  },
  GALLERY: {
    list: ADMIN_URL_BASE_URL + "/gallery",
    create: ADMIN_URL_BASE_URL + "/gallery",
    update: ADMIN_URL_BASE_URL + "/gallery/{_id}",
    delete: ADMIN_URL_BASE_URL + "/gallery/images",
    IMAGES: {
      add: ADMIN_URL_BASE_URL + "/gallery/images",
    },
  },
  PAGES: {
    list: ADMIN_URL_BASE_URL + "/pages",
    create: ADMIN_URL_BASE_URL + "/pages",
    deleteByID: ADMIN_URL_BASE_URL + "/pages/{id}",
    SECTIONS: {
      list: ADMIN_URL_BASE_URL + "/pages/{id}/sections",
    },
  },
};

export const IMAGE_URL = (path: string) => `${SERVER_BASE_URL}${path}`;
