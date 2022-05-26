import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

type SideBarDrawerContextDate = UseDisclosureReturn;

interface SideBarDrawerProviderProps {
  children: ReactNode;
}

export function SideBarDrawerProvider(props: SideBarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  },[router.asPath]);

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {props.children}
    </SideBarDrawerContext.Provider>
  )
}

const SideBarDrawerContext = createContext<SideBarDrawerContextDate>({} as SideBarDrawerContextDate);

export const useSideBarDrawer = () => useContext(SideBarDrawerContext);
