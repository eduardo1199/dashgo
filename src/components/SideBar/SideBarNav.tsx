import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav () {
  return (
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
  )
}