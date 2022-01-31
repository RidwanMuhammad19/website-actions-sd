import format from "date-fns/format";
import idLocale from "date-fns/locale/id";
import { CONVERT_DATE_TYPE } from "./constants";

export const showImage = (data) => {
  return `${process.env.REACT_APP_API_URL}/storage/${data}`;
};

export const convertDate = (date, type) => {
  let pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
const defaultDate = date?.replace(pattern, "$2/$3/$1");

  let formatDate;

  switch (type) {
    case CONVERT_DATE_TYPE.NORMAL:
      if (!date || !date.match(pattern)) {
        return null;
      }

      formatDate = format(new Date(defaultDate), "cccc, d LLLL yyyy", {
        locale: idLocale,
        addSuffix: true,
      });

      return formatDate;
    case CONVERT_DATE_TYPE.DD_MM_YYYY:
      if (!date || !date.match(pattern)) {
        return null;
      }

      formatDate = format(new Date(defaultDate), "dd/MM/yyyy", {
        locale: idLocale,
        addSuffix: true,
      });

      return formatDate;
    case CONVERT_DATE_TYPE.DD_MM_YYYY_HH_MM:
      if (!date || !date.match(pattern)) {
        return null;
      }

      formatDate = format(new Date(defaultDate), "dd/MM/yyyy HH:mm", {
        locale: idLocale,
        addSuffix: true,
      });

      return formatDate;
  }
};
