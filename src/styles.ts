import { SystemStyleFunction } from '@chakra-ui/theme-tools'

const parts = ['root', 'wrapper', 'slide', ' pagination', 'buttonPrev', 'buttonNext', 'scrollbar'];

const baseStyle: SystemStyleFunction = () => {
  return {
    wrapper: {
    },
    slide: {

    }
  }
}

const variantSolid: SystemStyleFunction = () => {
  return {
    wrapper: {

    },
    slide: {

    }
  }
}

export default {
  parts,
  baseStyle,
  variants: {
    solid: variantSolid,
  },
}
