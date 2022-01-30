import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Swiper from '../../src/styles'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  components: {
    Swiper
  }
}

const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`
function App() {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  )
}
