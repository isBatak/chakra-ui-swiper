import { NextPage } from 'next';

import {
  Swiper,
  SwiperWrapper,
  SwiperSlide,
  SwiperPagination,
  SwiperButtonPrev,
  SwiperButtonNext,
  SwiperScrollbar,
} from '../../src';

const IndexPage: NextPage = () => {
  return (
    <Swiper>
      <SwiperWrapper>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </SwiperWrapper>
      <SwiperPagination />
      <SwiperButtonPrev />
      <SwiperButtonNext />
      <SwiperScrollbar />
    </Swiper>
  );
};

export default IndexPage;
