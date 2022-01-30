## Installation

```
  npm i chakra-ui-swiper
```

## Usage

```jsx
// Import Swiper React components
import {
  Swiper,
  SwiperWrapper,
  SwiperSlide,
  SwiperPagination,
  SwiperButtonPrev,
  SwiperButtonNext,
  SwiperScrollbar,
} from 'chakra-ui-swiper';

export default () => {
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
```

<div className="important-note">
  By default Swiper React uses core version of Swiper (without any additional
  modules). If you want to use Navigation, Pagination and{' '}
  <a href="/api/#custom-build">other modules</a>, you have to install them
  first. Here is the list of additional modules imports:
</div>

- <code>Virtual</code> - Virtual Slides module
- <code>Keyboard</code> - Keyboard Control module
- <code>Mousewheel</code> - Mousewheel Control module
- <code>Navigation</code> - Navigation module
- <code>Pagination</code> - Pagination module
- <code>Scrollbar</code> - Scrollbar module
- <code>Parallax</code> - Parallax module
- <code>FreeMode</code> - Free Mode module
- <code>Grid</code> - Grid module
- <code>Manipulation</code> - Slides manipulation module (only for Core version)
- <code>Zoom</code> - Zoom module
- <code>Lazy</code> - Lazy module
- <code>Controller</code> - Controller module
- <code>A11y</code> - Accessibility module
- <code>History</code> - History Navigation module
- <code>HashNavigation</code> - Hash Navigation module
- <code>Autoplay</code> - Autoplay module
- <code>EffectFade</code> - Fade Effect module
- <code>EffectCube</code> - Cube Effect module
- <code>EffectFlip</code> - Flip Effect module
- <code>EffectCoverflow</code> - Coverflow Effect module
- <code>EffectCards</code> - Cards Effect module
- <code>EffectCreative</code> - Creative Effect module
- <code>Thumbs</code> - Thumbs module

```jsx
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
```

<div className="important-note">
  Note, Swiper React component will create required elements for Navigation,
  Pagination and Scrollbar if you pass these params without specifying its
  elements (e.g. without <code>navigation.nextEl</code>,{' '}
  <code>pagination.el</code>, etc.)
</div>

## Swiper props

`Swiper` React component receive all <a href="/api/#parameters">Swiper parameters</a> as component props, plus some extra props:

| Prop         | Type               | Default | Description                            |
| ------------ | ------------------ | ------- | -------------------------------------- |
| `tag`        | `string`           | `'div'` | Main Swiper container HTML element tag |
| `wrapperTag` | `string`           | `'div'` | Swiper wrapper HTML element tag        |
| `onSwiper`   | `(swiper) => void` | `'div'` | Callback that receives Swiper instance |

Also it supports all <a href="/api/#events">Swiper events</a> in `on{Eventname}` format. For example `slideChange` event becomes `onSlideChange` prop:

```jsx
  <Swiper
    onSlideChange={() => {/*...*/}}
    onReachEnd={() => {/*...*/}}
    ...
  >
```

## SwiperSlide props

| Prop           | Type      | Default | Description                                                      |
| -------------- | --------- | ------- | ---------------------------------------------------------------- |
| `tag`          | `string`  | `'div'` | Swiper Slide HTML element tag                                    |
| `zoom`         | `boolean` | `false` | Enables additional wrapper required for zoom mode                |
| `virtualIndex` | `number`  |         | Actual swiper slide index. Required to be set for virtual slides |

## SwiperSlide render function

`SwiperSlide` component can accept render function that receives an object with the following properties:

- `isActive` - true when current slide is active
- `isPrev` - true when current slide is the previous from active
- `isNext` - true when current slide is the next from active
- `isVisible` - true when current slide is visible (`watchSlidesProgress` Swiper parameter must be enabled)
- `isDuplicate` - true when current slide is a duplicate slide (when `loop` mode enabled)
  For example:

```jsx
<Swiper>
  <SwiperSlide>
    {({ isActive }) => (
      <div>Current slide is {isActive ? 'active' : 'not active'}</div>
    )}
  </SwiperSlide>
</Swiper>
```

## Slots

Swiper React uses "slots" for content distribution. There are 4 slots available

- `container-start` - element will be added to the beginning of swiper-container
- `container-end` (default) - element will be added to the end of swiper-container
- `wrapper-start` - element will be added to the beginning of swiper-wrapper
- `wrapper-end` - element will be added to the end of swiper-wrapper

For example:

```jsx
<Swiper>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <span slot="container-start">Container Start</span>
  <span slot="container-end">Container End</span>
  <span slot="wrapper-start">Wrapper Start</span>
  <span slot="wrapper-end">Wrapper End</span>
</Swiper>
```

Will be rendered as:

```html
<div class="swiper">
  <span slot="container-start">Container Start</span>
  <div class="swiper-wrapper">
    <span slot="wrapper-start">Wrapper Start</span>
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <span slot="wrapper-end">Wrapper End</span>
  </div>
  <span slot="container-end">Container End</span>
</div>
```

## Virtual Slides

Virtual Slides rendering here is fully handled by React and not required anything except setting `virtual:true` property and setting `virtualIndex` on slides:

```jsx
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

export default () => {
  // Create array with 1000 slides
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          {slideContent}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
```

## Controller

Controller requires to pass one Swiper instance to another:

```jsx
  import React, { useState } from 'react';
  import { Controller } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/react';

  const App = () => {
    // store controlled swiper instance
    const [controlledSwiper, setControlledSwiper] = useState(null);

    return (
      <main>
        {/* Main Swiper -> pass controlled swiper instance */}
        <Swiper modules={[Controller]} controller={{ control: controlledSwiper }} ...>
          {/* ... */}
        </Swiper>

        {/* Controlled Swiper -> store swiper instance */}
        <Swiper modules={[Controller]} onSwiper={setControlledSwiper} ...>
          {/* ... */}
        </Swiper>
      </main>
    )
  }
```

For two-way control (when both Swipers control each other) it should be like this:

```jsx
import React, { useState } from 'react';
import { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const App = () => {
  // store swiper instances
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <main>
      <Swiper
        modules={[Controller]}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
      >
        {/* ... */}
      </Swiper>

      <Swiper
        modules={[Controller]}
        onSwiper={setSecondSwiper}
        controller={{ control: firstSwiper }}
      >
        {/* ... */}
      </Swiper>
    </main>
  );
};
```

## Thumbs

Same as with controller we need to store thumbs instance and pass it to main gallery:

```jsx
  import React, { useState } from 'react';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Thumbs } from 'swiper';

  const App = () => {
    // store thumbs swiper instance
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
      <main>
        {/* Main Swiper -> pass thumbs swiper instance */}
        <Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }} ...>
          {/* ... */}
        </Swiper>

        {/* Thumbs Swiper -> store swiper instance */}
        {/* It is also required to set watchSlidesProgress prop */ }
        <Swiper
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          ...
        >
          {/* ... */}
        </Swiper>
      </main>
    )
  }
```

## Effects

The following effects are available:

    - Fade
    - Cube
    - Coverflow
    - Flip
    - Cards
    - Creative

To use effects you have to import and install them first (as all other modules).

You can find running <a href="https://swiperjs.com/demos/#effect-fade">effect demos here</a>.

### Full Fade Effect Example

```jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default () => {
  return (
    <Swiper modules={[EffectFade]} effect="fade">
      {[1, 2, 3].map((i, el) => {
        return <SwiperSlide>Slide {el}</SwiperSlide>;
      })}
    </Swiper>
  );
};
```

## Usage with Create React App

Create React App doesn't support pure ESM packages yet. It is still possible to use Swiper (7.2.0+) with it.

In this case we need to use direct file imports:

```js
// Core modules imports are same as usual
import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
```

## What next?

As you see it is really easy to integrate Swiper into your website or app. So here are your next steps:

- Go to <a href="../api/">API Documentation</a> to learn more about all Swiper API and how to control it.
- Look at available <a href="../demos/" target="_blank">Demos</a>.
- If you have questions about Swiper ask them in <a href="http://stackoverflow.com" target="_blank">StackOverflow</a> or <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank">Swiper Discussions</a>.
- Create issue on <a href="https://github.com/nolimits4web/swiper/" target="_blank">GitHub</a> if you found a bug.
- If you are looking for support, we have a private Discord support chat room for <a href="https://www.patreon.com/swiperjs" target="_blank">Swiper Patrons</a>.
