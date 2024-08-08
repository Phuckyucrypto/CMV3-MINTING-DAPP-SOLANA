import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      },
      '*::placeholder': {
        color: 'gray.500',
      },
      '*, *::before, &::after': {
        borderColor: 'gray.700',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
        colorScheme: 'green', // Set default color scheme for buttons
      },
      variants: {
        solid: {
          bg: 'green.400',
          _hover: {
            bg: 'green.500',
          },
        },
      },
    },
    
    Accordion: {
      baseStyle: {
        container: {
          borderTopWidth: '0px',
          _last: {
            borderBottomWidth: '0px',
          },
        },
        button: {
          bg: 'gray.800',
          _hover: {
            bg: 'gray.700',
          },
          _expanded: {
            bg: 'gray.700',
          },
        },
        panel: {
          bg: 'gray.900',
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'white',
      },
    },
    Box: {
      baseStyle: {
        bg: 'gray.800',
        borderRadius: 'md',
        p: 4,
      },
    },
    Modal: {
      baseStyle: {
        dialog: {
          bg: 'black',
        },
        header: {
          bg: 'black',
          color: 'white',
        },
        body: {
          bg: 'black',
          color: 'white',
        },
        footer: {
          bg: 'black',
          color: 'white',
        },
      },
    },
  },
});

export default customTheme;
