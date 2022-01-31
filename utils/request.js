import { createStandaloneToast, Text } from "@chakra-ui/react";
import axios from "axios";
// import { getToken } from "./auth";

const toast = createStandaloneToast();

export const requestNoToast = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 100000,
});

export const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 100000,
});

// requestNoToast.interceptors.request.use((config) => {
//   if (!config.headers) {
//     config.headers = {};
//   }

//   const token = getToken();
//   if (token) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//   }
//   return config;
// });

requestNoToast.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// request.interceptors.request.use((config) => {
//   if (!config.headers) {
//     config.headers = {};
//   }

//   const token = getToken();
//   if (token) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//   }
//   return config;
// });

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const errorResponse =
      err?.response?.data?.message || err?.response?.data?.message?.errors;

    const errorResponseStatus = err?.response?.data?.errors;
    const resStatus = errorResponseStatus?.map((el) =>
      el.message?.map((item) => item)
    );

    let newResponse = [];

    resStatus?.map((elem) => {
      if (elem.length > 0) {
        elem?.map((el) => newResponse.push(el));
      }
      newResponse.push(elem);
    });

    newResponse = newResponse.filter((el) => typeof el === "string");

    const responseToStr = newResponse.join("*");
    const responseList = responseToStr.replaceAll("*", "<br />");

    if (err?.response?.status === 422) {
      toast({
        status: "error",
        title: "error",
        duration: 10000,
        position: "top",
        isClosable: true,
        description: (
          <Text dangerouslySetInnerHTML={{ __html: responseList }} />
        ),
      });
    } else if (errorResponse) {
      toast({
        status: "error",
        title: errorResponse,
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } else {
      toast({
        status: "error",
        title: "Server sedang bermasalah coba lagi nanti.",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }

    return Promise.reject(err);
  }
);
