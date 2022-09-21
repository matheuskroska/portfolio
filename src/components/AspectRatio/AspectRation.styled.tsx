import React from 'react';
import { styled } from '@stitches/react';

import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

// Exports
export const AspectRatio = AspectRatioPrimitive;

// Your app...
export const Box = styled('div', {});
export const Img = styled('img', {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});
