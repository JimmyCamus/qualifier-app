import { AlertText, AlertTextOption } from "../lib/types/alert.types";

export const useGetAlertText = () => useHandleGetAlertText;

const useHandleGetAlertText = (type: string) => {
  switch (type) {
    case AlertTextOption.REGISTER_SUCCESS:
      return AlertText.REGISTER_SUCCESS_TEXT;

    case AlertTextOption.REGISTER_FAILED:
      return AlertText.REGISTER_FAILED_TEXT;

    default:
      break;
  }
};
