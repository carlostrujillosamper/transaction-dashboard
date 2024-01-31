import { Table } from "@tanstack/react-table";
import { Button, Box, Select, HStack } from "@chakra-ui/react";

type PaginationProps<T> = {
  table: Table<T>;
  pageSizes: number[];
};

export function Pagination<T extends object>({
  table,
  pageSizes,
}: PaginationProps<T>) {
  return (
    <Box padding={5} w="100%">
      <HStack w="100%" justifyContent={"space-between"}>
        <Box >
          <span>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
        </Box>
        <Box >
          <Box >
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
        <Box >
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            mr={2}
            w="100px"
          >
            {"Previous"}
          </Button>
          <Button
            onClick={() => {
              table.nextPage();
              console.log(table.getCanNextPage());
            }}
            disabled={table.getCanNextPage()}
            w="100px"
          >
            {"Next"}
          </Button>
        </Box>
      </HStack>
    </Box>
  );
}
