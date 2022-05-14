import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Eduardo Soares</Text>
        <Text color="gray.300" fontSize="small">
          Eduardosooares456@hotmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Eduardo Soares" src="https://github.com/eduardo1199.png" />
    </Flex>
  )
}