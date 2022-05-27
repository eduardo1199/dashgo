import { ElementType } from "react";
import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  route: string;
  href: string;
}

export function NavLink({ icon, route, href , ...props }: NavLinkProps) {
  return(
    <ActiveLink href={href} passHref>
      <ChakraLink 
        display="flex" 
        color="pink.400" 
        _hover={{ textDecoration: 'none' }}
        {...props}
      >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{route}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}