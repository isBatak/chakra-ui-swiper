import React, { useMemo } from 'react';
import {
  ThemeTypings,
  HTMLChakraProps,
  ThemingProps,
  forwardRef,
  useMultiStyleConfig,
  omitThemingProps,
  StylesProvider,
  chakra,
  useStyles,
} from '@chakra-ui/system';
import { cx, Omit, __DEV__ } from '@chakra-ui/utils';
import { useMergeRefs } from '@chakra-ui/react';
import {
  useSwiper,
  SwiperDescendantsProvider,
  useSwiperDescendant,
  SwiperProvider,
} from './use-swiper';

type Variants = 'solid';

interface SwiperOptions {
  variant?: 'Swiper' extends keyof ThemeTypings['components'] /* @ts-ignore */
    ? ThemeTypings['components']['Card']['variants']
    : Variants;
}

export interface SwiperProps
  extends SwiperOptions,
    Omit<HTMLChakraProps<'div'>, 'title'>,
    Omit<ThemingProps<'Swiper'>, 'variant'> {}

export const Swiper = forwardRef<SwiperProps, 'div'>(
  ({ children, ...props }, ref) => {
    const styles = useMultiStyleConfig('Swiper', props);
    const ownProps = omitThemingProps(props);

    const { htmlProps, swiperElementRef, descendants, ...context } =
      useSwiper(ownProps);

    const mergedRefs = useMergeRefs(ref, swiperElementRef);

    return (
      <SwiperDescendantsProvider value={descendants}>
        <SwiperProvider value={context}>
          <StylesProvider value={styles}>
            <chakra.div
              __css={styles.root}
              ref={mergedRefs}
              {...htmlProps}
              className={cx('swiper', props.className)}
            >
              {children}
            </chakra.div>
          </StylesProvider>
        </SwiperProvider>
      </SwiperDescendantsProvider>
    );
  }
);

if (__DEV__) {
  Swiper.displayName = 'Swiper';
}

export interface SwiperWrapperProps
  extends HTMLChakraProps<'div'>,
    Omit<ThemingProps<'Swiper'>, 'variant'> {}

export const SwiperWrapper = forwardRef<SwiperWrapperProps, 'div'>(
  (props, ref) => {
    const styles = useMultiStyleConfig('Swiper', props);

    const { children, ...rest } = omitThemingProps(props);

    return (
      <StylesProvider value={styles}>
        <chakra.div
          __css={styles.wrapper}
          ref={ref}
          {...rest}
          className={cx('swiper-wrapper', props.className)}
        >
          {children}
        </chakra.div>
      </StylesProvider>
    );
  }
);

if (__DEV__) {
  SwiperWrapper.displayName = 'SwiperWrapper';
}

export interface SwiperSlideProps extends HTMLChakraProps<'div'> {}

export const SwiperSlide = forwardRef<SwiperSlideProps, 'div'>(
  ({ children, ...props }, ref) => {
    const styles = useStyles();
    const { register } = useSwiperDescendant();
    const mergedRefs = useMergeRefs(ref, register);

    return (
      <chakra.div
        __css={styles.slide}
        ref={mergedRefs}
        {...props}
        className={cx('swiper-slide"', props.className)}
      >
        {children}
      </chakra.div>
    );
  }
);

if (__DEV__) {
  SwiperSlide.displayName = 'SwiperSlide';
}

export interface SwiperPaginationProps extends HTMLChakraProps<'div'> {}

export const SwiperPagination = forwardRef<SwiperPaginationProps, 'div'>(
  ({ children, ...props }, ref) => {
    const styles = useStyles();

    return (
      <chakra.div
        __css={styles.pagination}
        ref={ref}
        {...props}
        className={cx('swiper-pagination', props.className)}
      >
        {children}
      </chakra.div>
    );
  }
);

if (__DEV__) {
  SwiperPagination.displayName = 'SwiperPagination';
}

export interface SwiperButtonPrevProps extends HTMLChakraProps<'div'> {}

export const SwiperButtonPrev = forwardRef<SwiperButtonPrevProps, 'div'>(
  ({ children, ...props }, ref) => {
    const styles = useStyles();

    return (
      <chakra.div
        __css={styles.buttonPrev}
        ref={ref}
        {...props}
        className={cx('swiper-button-prev', props.className)}
      >
        {children}
      </chakra.div>
    );
  }
);

if (__DEV__) {
  SwiperButtonPrev.displayName = 'SwiperButtonPrev';
}

export interface SwiperButtonNextProps extends HTMLChakraProps<'div'> {}

export const SwiperButtonNext = forwardRef<SwiperButtonNextProps, 'div'>(
  ({ children, ...props }, ref) => {
    const styles = useStyles();

    return (
      <chakra.div
        __css={styles.buttonNext}
        ref={ref}
        {...props}
        className={cx('swiper-button-next', props.className)}
      >
        {children}
      </chakra.div>
    );
  }
);

if (__DEV__) {
  SwiperButtonNext.displayName = 'SwiperButtonNext';
}

export interface SwiperScrollbarProps extends HTMLChakraProps<'div'> {}

export const SwiperScrollbar = forwardRef<SwiperScrollbarProps, 'div'>(
  ({ children, ...props }, ref) => {
    const styles = useStyles();

    return (
      <chakra.div
        __css={styles.scrollbar}
        ref={ref}
        {...props}
        className={cx('swiper-scrollbar', props.className)}
      >
        {children}
      </chakra.div>
    );
  }
);

if (__DEV__) {
  SwiperScrollbar.displayName = 'SwiperScrollbar';
}
