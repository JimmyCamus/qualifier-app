import { useGetAlertText } from "../hooks/alert.hooks";
import { Alert } from "../lib/types/alert.types";

const Alerts = ({ type, text }: { type: string; text: string }) => {
  const handleAlertText = useGetAlertText();
  switch (type) {
    case Alert.SUCCESS:
      return (
        <div className="alert alert-success shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{handleAlertText(text)}</span>
          </div>
        </div>
      );
    case Alert.DANGER:
      return (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{handleAlertText(text)}</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default Alerts;
