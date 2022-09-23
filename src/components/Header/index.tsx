import { StyledHeader, StyledNav, StyledText } from './Header.styled';

interface HeaderProps {
  children?: React.ReactNode;
}

export const Header = ({ children, ...rest }: HeaderProps) => {
  return (
    <StyledHeader {...rest}>
      <StyledText
        as={'p'}
        css={{
          textAlign: 'center',
          fontSize: '10px',
          margin: '0 auto',
          padding: '0',
          marginBottom: '0px',
          color: '$mauve11',
        }}
      >
        Hi, my name is
      </StyledText>
      <StyledText
        css={{ marginTop: '0', fontSize: '44px', marginBottom: '5px' }}
      >
        {children}
      </StyledText>
      <StyledText
        as={'p'}
        css={{
          textAlign: 'center',
          fontSize: '10px',
          margin: '0 auto',
          padding: '0',
          marginBottom: '10px',
          marginTop: '0',
          color: '$mauve11',
        }}
      >
        I build things for the web.
      </StyledText>
    </StyledHeader>
  );
};
