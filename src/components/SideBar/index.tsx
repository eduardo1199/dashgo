import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerHeader, useBreakpointValue, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { useSideBarDrawer } from "../../context/SideBarDrawerContext";

import { SidebarNav } from "./SideBarNav";

export function Sidebar() {
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  })

  const { isOpen, onClose } = useSideBarDrawer();

  if(isDrawerSideBar) {
    return(
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={() => onClose()}
      >
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
            <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return(
    <Box
      as="aside"
      w="64"
      mr="8"
    >
      <SidebarNav />
    </Box>
  )
}