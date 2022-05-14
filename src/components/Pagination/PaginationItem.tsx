import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  pageNumber: number;
}

export function PaginationItem ({ isCurrent = false, pageNumber }: PaginationItemProps) {
  if(isCurrent) {
    return(
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        disabled
        colorScheme="pink"
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}
      >
        {pageNumber}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      disabled
      bg="gray.700"
      _disabled={{
        bgColor: 'gray.500',
      }}
    >
      {pageNumber}
    </Button>
  )
}