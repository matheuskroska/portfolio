import { VariantProps } from '@stitches/react';
import {createStyled, createPrefix} from '../../../stitches.config'

export const StyledButton = createStyled(createPrefix("button", "StyledButton")).styled('button', {
  marginX: "10px",
  paddingX: "3px",
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: '$blue7',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$blue10',
        
      },
      secondary: {
        backgroundColor: 'red',
      },
    },
  },
});

export type StyledButtonVariants = VariantProps<typeof StyledButton>;
