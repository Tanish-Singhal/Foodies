import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>{err.status}</h1>
      <p>{err.statusText}</p>
    </div>
  )
}

export default Error;