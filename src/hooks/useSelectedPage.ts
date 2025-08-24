import { useState } from "react";

function useSelectedPage(initialPage: number = 0) {
  const [page, setPage] = useState(initialPage);

  const setPageValue = (pageValue: number) => {
    setPage(pageValue);
  };

  return {
    page,
    setPageValue,
  };
}

export default useSelectedPage;
