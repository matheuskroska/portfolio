import { createStitches } from '@stitches/react';

export const {
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});

export const setPrefix = (prefix: string) => {
  return createStitches({
    prefix: prefix,
  });
};
