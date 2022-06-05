import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount: number = 2;

// to = 5, from = 2
//3

//[3, 4, 5]

function generatePageArray(from: number, to: number){
  return [...new Array(to - from)].map((_, index) => {
      return from + index + 1;
    }).filter(page => page > 0);
}

export function Pagination({ totalCountOfRegisters, registersPerPage = 10, currentPage = 1, onPageChange }: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPage = currentPage > 1 ? generatePageArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];
  
  const nextPage = currentPage < lastPage ? generatePageArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>{lastPage}</strong>
      </Box>
      <Stack direction="row" spacing="2">

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem pageNumber={1} onPageChange={onPageChange} />
            {currentPage > (2 + siblingsCount) && (
              <Text
                color="gray.300"
                w="6"
                align="center">
                  ...
              </Text>
            )}
          </>
        )}

        {previousPage.length > 0 && previousPage.map((page) => {
          return <PaginationItem key={page} pageNumber={page} onPageChange={onPageChange} />
        })}

        <PaginationItem pageNumber={currentPage} isCurrent onPageChange={onPageChange} />

        {nextPage.length > 0 && nextPage.map((page) => {
          return <PaginationItem key={page} pageNumber={page} onPageChange={onPageChange} />
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
           {(currentPage + siblingsCount + 1) < lastPage && (
              <Text
                color="gray.300"
                w="6"
                align="center">
                  ...
              </Text>
            )}
            <PaginationItem pageNumber={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </Stack>
    </Stack>
  )
}