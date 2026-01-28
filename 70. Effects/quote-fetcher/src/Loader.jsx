import { useState, useEffect } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  });

  return <> {isLoading && <p> Loading ...</p>}</>;
}
