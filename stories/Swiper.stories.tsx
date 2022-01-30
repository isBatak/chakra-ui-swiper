import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Swiper, SwiperButtonNext, SwiperButtonPrev, SwiperPagination, SwiperScrollbar, SwiperSlide, SwiperWrapper } from '../src';

const meta: Meta = {
  title: 'Swiper',
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = () => (
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

export const Default = Template.bind({});

Default.args = {};
