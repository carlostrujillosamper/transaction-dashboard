import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  useOutsideClick,
} from "@chakra-ui/react";
import { Pagination } from "./Pagination";
import React from "react";

interface TableProps<T> {
  data: T[];
  // the only downside to an otherwise amazing library is that it's hard to avoid this any here when creating a generic table component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<T, any>[];
  hasPagination: boolean;
  pageSizes?: number[];
  onRowClick?: () => void;
  rowDataId?: string;
  dataIdSetter?: (id: string ) => void;
  selectedRowId?: string ;
}

export function Table<T extends object>({
  data,
  columns,
  hasPagination,
  pageSizes = [5, 10, 20],
  onRowClick,
  rowDataId,
  dataIdSetter,
  selectedRowId,
}: TableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  const ref = React.createRef<HTMLTableRowElement>();
  useOutsideClick({
    ref: ref,
    handler: () => dataIdSetter ? dataIdSetter("") : null,
  });
  return (
    <>
      <Box border={"1px solid #F4F8FA"} rounded={5} boxShadow={"md"}>
        <TableContainer>
          <ChakraTable>
            <Thead bgColor={"#F4F8FA"}>
              {table.getHeaderGroups().map((headerGroup) => (
                <Tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <Th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {table.getRowModel().rows.map((row) => (
                <Tr
                  ref={ref}
                  key={row.id}
                  _hover={{
                    background: "grey",
                    color: "white",
                    cursor: "pointer",
                  }}
                  bgColor={
                    selectedRowId === row.getValue(rowDataId ?? "")
                      ? "grey"
                      : "white"
                  }
                  onClick={() => {
                    if (!dataIdSetter) return;
                    if (!onRowClick) return;
                    if (!rowDataId) return;
                    dataIdSetter(row.getValue(rowDataId));
                    onRowClick();
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </ChakraTable>
          {hasPagination && <Pagination table={table} pageSizes={pageSizes} />}
        </TableContainer>
      </Box>
    </>
  );
}
