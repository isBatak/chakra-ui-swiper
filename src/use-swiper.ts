import { useRef } from "react";
import {  useSafeLayoutEffect } from "@chakra-ui/react";
import SwiperCore from 'swiper';
import { createDescendantContext } from '@chakra-ui/descendant';
import {
  createContext,
} from "@chakra-ui/react-utils"

const [
  SwiperDescendantsProvider,
  useSwiperDescendantsContext,
  useDescendants,
  useSwiperDescendant,
] = createDescendantContext();

export {
  SwiperDescendantsProvider,
  useSwiperDescendantsContext,
  useSwiperDescendant
}

export interface UseSwiperProps {}

export const useSwiper = (props: UseSwiperProps) => {
  const { ...htmlProps } = props;

  const swiperRef = useRef<SwiperCore>();
  const swiperElementRef = useRef<any>(null);
  const descendants = useDescendants();

  useSafeLayoutEffect(() => {
    const element = swiperElementRef.current;

    if (!element) {
      return;
    }

    const swiper = new SwiperCore(swiperElementRef.current, {
      speed: 400,
      spaceBetween: 100,
    });

    swiperRef.current = swiper;
  }, []);

  return {
    descendants,
    htmlProps,
    swiperElementRef,
    swiperRef,
  }
}

export type UseSwiperReturn = ReturnType<typeof useSwiper>

/* -------------------------------------------------------------------------------------------------
 * Create context for the root swiper logic
 * -----------------------------------------------------------------------------------------------*/

interface SwiperContext
  extends Omit<UseSwiperReturn, "htmlProps" | "descendants" | "swiperElementRef"> {

}

export const [
  SwiperProvider,
  useSwiperContext,
] = createContext<SwiperContext>({
  name: "SwiperContext",
  errorMessage:
    "useSwiperContext: `context` is undefined. Seems you forgot to wrap the swiper components in `<Swiper />`",
})
