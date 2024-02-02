import React from "react";

export const usePagination = () => {
  const [pageIndex, setPageIndex] = React.useState(0);

  return {pageIndex, setPageIndex};
};
