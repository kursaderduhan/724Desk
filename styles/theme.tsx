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
    xxl: '1920px'
  }),
  fonts: {
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
      fontSize: { base: "xs", md: "sm", lg: "sm", xl: "sm" },
      fontWeight: "400",
      color:'dark.100'
    },
    cryptoPageText: {
      fontSize: "15px",
      fontWeight: 400,
      color: "#333333",
    },
    elementHeadText: {
      fontSize: "23px",
      color: "#333333",
      fontWeight: 500,
      alignSelf:"flex-start"
    },
    elementDescText: {
      fontSize: "14px",
      color: '#333333',
      fontWeight: 400,
      alignSelf: 'flex-start'
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
          }),
          globalButton: (props: any) => ({
            ...base.components.Button.variants.outline(props),
            bg:'#F27C00',
            color:'white',
            _hover:{opacity: 0.8}
          }),
          walletButton: (props: any) => ({
            ...base.components.Button.variants.outline(props),
            w: {base:"140px",md:"189px"},
            h: {base:"70px",md:"84px"},
            bg: "#F8F9FD",
            fontWeight: 400,
            color: "#333333",
            fontSize: "14px",
            rounded: 5,
            gap:5
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
