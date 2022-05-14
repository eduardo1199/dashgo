import { Box, Stack } from "@chakra-ui/react";

import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri';
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return(
    <Box
      as="aside"
      w="64"
      mr="8"
    >
      <Stack
        spacing="12"
        align="flex-start"
      >
        <NavSection 
          title="GERAL"
        >
          <NavLink route="Dashboard" icon={RiDashboardLine} />
          <NavLink route="Usuários" icon={RiContactsLine} />  
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink route="Formulários" icon={RiInputMethodLine} />
          <NavLink route="Automação" icon={RiGitMergeLine} />  
        </NavSection>
      </Stack>
    </Box>
  )
}