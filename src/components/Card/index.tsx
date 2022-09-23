import { ReactNode } from 'react';
import {
  StyledCard,
  StyledImg,
  StyledStack,
  StyledSubtitle,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from './Card.styled';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { styled } from '../../../stitches.config';

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: '$violet5',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
});

interface CardProps {
  children?: ReactNode;
  image: ReactNode;
  title: string;
  subtitle: string;
  text: string;
}

export const Card = ({
  children,
  image,
  title,
  subtitle,
  text,
  ...rest
}: CardProps) => {
  return (
    <StyledCard {...rest}>
      <StyledWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
        <StyledSeparator css={{ margin: '15px 0' }} />
        <StyledText>{text}</StyledText>
        <StyledStack>{children}</StyledStack>
      </StyledWrapper>
      <StyledWrapper>
        <StyledImg>{image}</StyledImg>
      </StyledWrapper>
    </StyledCard>
  );
};
