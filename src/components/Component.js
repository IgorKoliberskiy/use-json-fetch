import React from "react";
import useJsonFetch from "../useJsonFetch/useJsonFetch";

export default function Component({ name }) {
  const [data, error, loading] = useJsonFetch(
    `http://localhost:7070/${name}`
  );

  return (
    <div>
      <span>
        {(data && data.status) || (error && "Error!") || (loading && "Loading...")}
      </span>
    </div>
  );
}