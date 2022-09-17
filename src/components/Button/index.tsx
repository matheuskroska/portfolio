import { createStitches } from '@stitches/react';
import { StyledButton, StyledButtonVariants } from './Button.styled';

interface ButtonProps extends StyledButtonVariants {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
