import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  label?: string;
  name: string;
}

export function Input({label, name, ...props}: InputProps) {
  return(
    <FormControl>
      {!!props && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput 
        id={name}
        name={name} 
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...props}
      />
    </FormControl>
  )
}