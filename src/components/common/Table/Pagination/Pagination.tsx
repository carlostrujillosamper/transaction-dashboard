import { Box, Button, HStack, Select } from "@chakra-ui/react";
import { Table } from "@tanstack/react-table";
import React from "react";
import { usePagination } from "./usePagination";

type PaginationProps<T> = {
  table: Table<T>;
  pageSizes: number[];
  totalNumberOfRows: number;
  setNumberOfPagesLeftWithData?: React.Dispatch<React.SetStateAction<number>>;
};
export function Pagination<T extends object>({
  table,
  pageSizes,
  totalNumberOfRows,
  setNumberOfPagesLeftWithData,
}: PaginationProps<T>) {
  const { pageIndex, setPageIndex } = usePagination();
  const totalNumberOfPages = Math.ceil(
    totalNumberOfRows / table.getState().pagination.pageSize
  );
  return (
    <Box padding={5} w="100%">
      <HStack w="100%" justifyContent={"space-between"}>
        <Box>
          <span>
            <strong>
              {pageIndex + 1} of {totalNumberOfPages}
            </strong>
          </span>
        </Box>
        <Box>
          <Box>
            <Select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
              name="page-size"
            >
              {pageSizes.map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </Select>
          </Box>
        </Box>
        <Box>
          <Button
            onClick={() => {
              table.setPageIndex(pageIndex - 1);
              setPageIndex(pageIndex - 1);
            }}
            isDisabled={pageIndex === 0}
            mr={2}
            w="100px"
          >
            {"Previous"}
          </Button>
          <Button
            onClick={() => {
              table.setPageIndex(pageIndex + 1);
              setPageIndex(pageIndex + 1);
              if (setNumberOfPagesLeftWithData) {
                setNumberOfPagesLeftWithData(
                  table.getPageCount() - table.getState().pagination.pageIndex
                );
              }
            }}
            isDisabled={pageIndex + 1 === totalNumberOfPages}
            mr={2}
            w="100px"
          >
            {"Next"}
          </Button>
        </Box>
      </HStack>
    </Box>
  );
}
