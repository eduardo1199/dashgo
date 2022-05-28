import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  label?: string;
  name: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({label, error=null , name, ...props}: InputProps, ref) => {
  return(
    <FormControl isInvalid={!!error}>
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
        ref={ref}
        {...props}
      />

      {!!error && (
        <FormErrorMessage>{error.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase);
