import { StyledHeader, StyledNav } from './Header.styled';

interface HeaderProps {
  children?: React.ReactNode;
}

export const Header = ({ children, ...rest }: HeaderProps) => {
  return (
    <StyledHeader {...rest}>
      <StyledNav as={'h1'}>{children}</StyledNav>
    </StyledHeader>
  );
};
