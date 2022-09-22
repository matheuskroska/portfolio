import { StyledContainer, StyledFooter } from './Footer.styled';
import { ReactComponent as FooterWave } from '../../assets/images/icons/footerWave.svg';
import React, { ReactElement, ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
}

export const Footer = ({ children }: FooterProps) => {
  return (
    <StyledFooter>
      <FooterWave className="footerWave" />
      <StyledContainer css={{ paddingTop: '20px', paddingBottom: '0' }}>
        {children}
      </StyledContainer>
      <StyledContainer>2022 - Matheus Kroska</StyledContainer>
    </StyledFooter>
  );
};
