import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  route: string;
}

export function NavLink({ icon, route, ...props }: NavLinkProps) {
  return(
    <Link 
      display="flex" 
      color="pink.400" 
      _hover={{ textDecoration: 'none' }}
      {...props}
    >
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{route}</Text>
    </Link>
  )
}