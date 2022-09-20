// import { styled } from '@stitches/react';
import { VariantProps } from '@stitches/react';
import { prefixedStitches } from '../../../stitches.config';

const { styled } = prefixedStitches('button');

export const StyledButton = styled('button', {
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: 'blue',
      },
      secondary: {
        backgroundColor: 'red',
      },
    },
  },
});

export type StyledButtonVariants = VariantProps<typeof StyledButton>;
