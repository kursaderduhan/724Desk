import { extendTheme,theme as base, useColorModeValue, type ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints, mode } from '@chakra-ui/theme-tools'
import { StyleFunctionProps } from '@chakra-ui/styled-system'


const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  breakpoints: createBreakpoints({
    sm: '572px',
    md: '768px',
    lg: '980px',
    xl: '1270px',
    myCustomOne: '1920px'
  }),fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },fontSizes: {
    xs: "0.75rem",    //12px
    sm: "0.875rem",   //14px
    md: "1rem",       //16px
    lg: "1.125rem",   //18px
    xl: "1.25rem",    //20px
    "2xl": "1.5rem",  //24px
    "3xl": "1.875rem",//30px
    "4xl": "2.25rem", //36px
    "5xl": "3rem",    //48px
    "6xl": "3.75rem", //60px
    "7xl": "4.5rem",  //72px
    "8xl": "6rem",    //96px
    "9xl": "8rem",    //128px
  },
  colors: {
    dark: {
      100: "#333333", //headerTextColor
      200: "#F27C00" //headerButtonOrange
    },
    light: {
      100: "#FFFFFF"
        }
  },
  textStyles: {
    normal: {
      fontSize: { base: "xs", md: "sm", lg: "sm" },
    },
    headerText: {
      FontSize : { base: "xs", md: "sm" , lg: "sm", xl:"sm"}
    }
  },
    components: {
      Button: {
        baseStyle: {
        },
        variants: {
          headerButton: (props: any) => ({
            ...base.components.Button.variants.outline(props),
            rounded: 5,
            fontSize: "sm",
            _hover: {opacity:0.8}
          }) 
        }
      },
      Input: {
        variants: {
        }
      },
    },
  }
)
export default theme
