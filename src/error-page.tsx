import { useRouteError } from "react-router-dom";

interface ErrorInfo {
  statusText?: string;
  message: string;
}

export default function ErrorPage() {
  const error: ErrorInfo = useRouteError();

  // 提供一个更具描述性的错误消息
  const errorMessage = `Error ${error.statusText || error.message}`;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
