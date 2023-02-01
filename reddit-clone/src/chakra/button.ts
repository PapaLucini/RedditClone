import { color } from '@chakra-ui/react';
import {ComponentStyleConfig} from '@chakra-ui/theme';
import { redirect } from 'next/dist/server/api-utils';

export const Button: ComponentStyleConfig = {
  baseStyle:{
      borderRadius: '60px',
      color: 'brand.100',
  },
  sizes: {
      sm: {
        fontSize: "8pt",
      },
      md: {
        fontSize: "10pt",
        // height: "28px",
      },
    },
  variants: {   
    solid: {
      color: "white",
      bg: "blue.500",
      _hover: {
        bg: "blue.400",
      },
    },
    outline: {
      color: "blue.500",
      border: "1px solid",
      borderColor: "blue.500",
    },
    oauth: {
      color: "black",
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};