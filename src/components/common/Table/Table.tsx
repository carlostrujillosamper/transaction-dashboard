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
} from "@chakra-ui/react";
import { Pagination } from "./Pagination";

interface TableProps<T> {
  data: T[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<T, any>[];
  hasPagination: boolean;
  pageSizes?: number[];
  onRowClick?:()=> void;
  rowDataId?: string;
  dataIdSetter?: (id : string) => void;
}

export function Table<T extends object>({
  data,
  columns,
  hasPagination,
  pageSizes = [5, 10, 20],
  onRowClick,
  rowDataId,
  dataIdSetter
}: TableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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
                  key={row.id}
                  _hover={{
                    background: "grey",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={()=>{
                    if(!onRowClick) return;
                    if(!rowDataId) return;
                    if(!dataIdSetter) return;
                    dataIdSetter(row.getValue(rowDataId))
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
