import axios, { AxiosRequestConfig, HttpStatusCode } from "axios";
import moment from "moment-jalaali";
import { ShowError, ShowSuccess } from "../toast/toast";
import { RootStore } from "@/@redux/reduxt/stores/RootStore";
type IResponse<T, OTHERS = any> = {
  data: T;
  message: string;
  status: HttpStatusCode;
} & OTHERS;

axios.interceptors.response.use(
  (response) => {
    const message = response.data.message;
    if (message) ShowSuccess(message);
    return response.data;
  },
  (error) => {
    const response = error?.response;
    if (!response) return error;

    const { data } = response;
    const errors = data.data;

    if (Array.isArray(errors)) {
      Array.from(errors).forEach((err) => {
        ShowError(err as string);
      });
    } else {
      ShowError(errors);
    }
    return error;
  },
);

axios.interceptors.request.use((request) => {
  const { user } = RootStore.getState();

  request.headers.Authorization = `Barear ${user.token}`;
  return request;
});

async function postRequest<T, OTHERS = any>(
  url: string,
  data?: any,
  otherConfigs?: AxiosRequestConfig,
) {
  const res: IResponse<T, OTHERS> = await axios.post(url, data, otherConfigs);
  return res;
}

async function getRequest<T, OTHERS = any>(
  url: string,
  params?: any,
  otherConfigs?: AxiosRequestConfig,
) {
  const res: IResponse<T, OTHERS> = await axios.get(url, {
    params,
    ...otherConfigs,
  });
  return res;
}

async function putRequest<T, OTHERS = any>(
  url: string,
  rawData?: any,
  otherConfigs?: AxiosRequestConfig,
) {
  const res: IResponse<T, OTHERS> = await axios.put(url, rawData, otherConfigs);
  return res;
}

async function deleteRequest<T, OTHERS = any>(
  url: string,
  otherConfigs?: AxiosRequestConfig,
) {
  const res: IResponse<T, OTHERS> = await axios.delete(url, otherConfigs);
  return res;
}

const SaveFile = (res: Blob) => {
  const blob = URL.createObjectURL(res);
  const a = document.createElement("a");
  a.href = blob;
  a.setAttribute("download", moment().format("jYYYY-jMM-jDD") + ".xlsx");
  a.click();
};

const FilesSystem = {
  uploadFileRequest: async (
    url: string,
    data?: any,
    otherConfigs?: AxiosRequestConfig,
    saveResponse?: boolean,
  ) => {
    const res = await axios.post(url, data, {
      ...otherConfigs,
      responseType: saveResponse ? "blob" : undefined,
      headers: {
        ...otherConfigs?.headers,
        "Content-Type": "multipart/form-data",
      },
    });

    if (saveResponse) SaveFile(res.data);

    return res;
  },
  downloadRequest: async (
    url: string,
    params?: any,
    method?: "POST" | "GET",
  ) => {
    const res = await axios({
      url: url,
      method: method ?? "get",
      responseType: "blob",
      params: params,
      data: params,
    });

    SaveFile(res.data);
    return res;
  },
};

export { deleteRequest, getRequest, putRequest, postRequest, FilesSystem };
