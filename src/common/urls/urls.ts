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
    updateById: ADMIN_URL_BASE_URL + "/pages/{id}",
    getById: ADMIN_URL_BASE_URL + "/pages/{id}",
    addSection:
      ADMIN_URL_BASE_URL + "/pages/{page_id}/add-section/{section_id}",
  },
  SECTIONS: {
    list: ADMIN_URL_BASE_URL + "/sections",
    create: ADMIN_URL_BASE_URL + "/sections",
    deleteById: ADMIN_URL_BASE_URL + "/sections/{_id}",
    getBySingle: ADMIN_URL_BASE_URL + "/sections/{_id}",
    updateById: ADMIN_URL_BASE_URL + "/sections/{_id}",
  },
  CAREERS: {
    create: ADMIN_URL_BASE_URL + "/careers/",
    list: ADMIN_URL_BASE_URL + "/careers/",
    getByID: ADMIN_URL_BASE_URL + "/careers/{_id}",
    deleteById: ADMIN_URL_BASE_URL + "/careers/{_id}",
    updateById: ADMIN_URL_BASE_URL + "/careers/{_id}",
  },
  CONTACT_US: {
    create: ADMIN_URL_BASE_URL + "/contact-us/",
    list: ADMIN_URL_BASE_URL + "/contact-us/",
    getByID: ADMIN_URL_BASE_URL + "/contact-us/{_id}",
    deleteById: ADMIN_URL_BASE_URL + "/contact-us/{_id}",
    updateById: ADMIN_URL_BASE_URL + "/contact-us/{_id}",
  },
  ORDERS: {
    create: ADMIN_URL_BASE_URL + "/orders/",
    list: ADMIN_URL_BASE_URL + "/orders/",
    getByID: ADMIN_URL_BASE_URL + "/orders/{_id}",
    deleteById: ADMIN_URL_BASE_URL + "/orders/{_id}",
    updateById: ADMIN_URL_BASE_URL + "/orders/{_id}",
  },
  PRODUCTS: {
    create: ADMIN_URL_BASE_URL + "/products/",
    list: ADMIN_URL_BASE_URL + "/products/",
    getByID: ADMIN_URL_BASE_URL + "/products/{_id}",
    deleteById: ADMIN_URL_BASE_URL + "/products/{_id}",
    updateById: ADMIN_URL_BASE_URL + "/products/{_id}",
  },
  CATEGORY: {
    create: ADMIN_URL_BASE_URL + "/products/categories/",
    list: ADMIN_URL_BASE_URL + "/products/categories/",
    getByID: ADMIN_URL_BASE_URL + "/products/categories/{_id}",
    deleteById: ADMIN_URL_BASE_URL + "/products/categories/{_id}",
    updateById: ADMIN_URL_BASE_URL + "/products/categories/{_id}",
  },
  ICONS: {
    findBySLug: ADMIN_URL_BASE_URL + "/icons/{slug}",
  },
  SITE_SETTINGS: {
    list: ADMIN_URL_BASE_URL + "/site-settings",
    update: ADMIN_URL_BASE_URL + "/site-settings",
  },
};

export const IMAGE_URL = (path: string) => {
  return `${SERVER_BASE_URL}${path}`;
};
