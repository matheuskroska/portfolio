import { ReactNode } from 'react';
import {
  StyledCard,
  StyledImg,
  StyledSubtitle,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from './Card.styled';

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
        <StyledText>{text}</StyledText>
      </StyledWrapper>
      <StyledWrapper>
        <StyledImg>{image}</StyledImg>
      </StyledWrapper>
    </StyledCard>
  );
};
