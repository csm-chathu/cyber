import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

class Axios {
  private static instance: AxiosInstance;

  private defaultHeaders = {
    Accept: "application/json,text/html",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };

  private defaultTimeout = 3000;

  private constructor() {
    this.setupInstance();
  }

  private setupInstance() {
    Axios.instance = axios.create({
      baseURL: publicRuntimeConfig.base_api,
      timeout: this.defaultTimeout,
      headers: this.defaultHeaders,
    });

    Axios.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Modify request config here (e.g., add headers)
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    Axios.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // Modify response data or handle success cases
        return response;
      },
      (error: AxiosError) => {
        console.log(error);
      }
    );
  }

  public static getInstance(): AxiosInstance {
    if (!Axios.instance) {
      new Axios();
    }
    return Axios.instance;
  }
}

export default Axios;
