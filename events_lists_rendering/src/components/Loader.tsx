import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, []);

  let loaderHtml = <></>;
  if (show) {
    loaderHtml = <h4>Laddar...</h4>;
  }

  return <div>{loaderHtml}</div>;
}
